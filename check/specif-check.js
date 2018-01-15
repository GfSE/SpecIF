/*	Schema and constraint checking for native SpecIF data in JSON format. 
	Requires: ajv 4.8 or higher.
	License: Apache 2.0 (http://www.apache.org/licenses/)
	Author: se@enso-managers.com, enso managers gmbh, Berlin (http://www.enso-managers.com)
	We appreciate any correction, comment or contribution here on GitHub or via e-mail to support@reqif.de            
*/
function checkSchema( schema, data ) {
	"use strict";
	// Check data using the supplied schema.
	// The return code uses properties similar to xhr, namely {status:900,statusText:"abc",responseText:"xyz"}
	// Requires: https://github.com/epoberezkin/ajv/releases/tag/4.8.0 or later 
	// ToDo: localize, see https://github.com/epoberezkin/ajv-i18n 

	let ajv = Ajv({allErrors: true});
	let validate = ajv.compile(schema);
		
	// check data against schema using the compiled validation routine:
	let valid = validate(data);
	
	return valid?{ status: 0, statusText: 'SpecIF schema has been checked successfully!' }
			:{ status: 901, statusText: 'SpecIF schema is violated', responseText: ajv.errorsText(validate.errors) }
}
function checkConstraints(data) {
	"use strict";
	// Check the constraints of the concrete values in 'data'.
	// The return code uses properties similar to xhr, namely {status:900,statusText:"abc",responseText:"xyz"}
	// ToDo: localize text and take it from language files.

	var rc={},errL=[];

	// ids must be unique unless when used as a reference:
	rc = checkUniqueIds( data );
	if( rc.status>0 ) errL.push(rc);

	// dataTypes must respect certain constraints depending on their base type:
	rc = checkDataTypes( data.dataTypes );
	if( rc.status>0 ) errL.push(rc);
	// in case of resources, the value of "resourceType" must be the id of a member of "resourceTypes":
	rc = checkTypes( data.resourceTypes, data.resources, 'resourceType' );
	if( rc.status>0 ) errL.push(rc);
	// in case of statements, the value of "statementType" must be the id of a member of "statementTypes":
	rc = checkTypes( data.statementTypes, data.statements, 'statementType' );
	if( rc.status>0 ) errL.push(rc);
	// in case of hierarchies, the value of "hierarchyType" must be the id of a member of "hierarchyTypes":
	rc = checkTypes( data.hierarchyTypes, data.hierarchies, 'hierarchyType' );
	if( rc.status>0 ) errL.push(rc);

	// A propertyType's "dataType" must be the id of a member of "dataTypes":
	// .. these are now checked in checkPropValues.
	rc = checkPropTypes( data.dataTypes, data.resourceTypes );
	if( rc.status>0 ) errL.push(rc);
	rc = checkPropTypes( data.dataTypes, data.statementTypes );
	if( rc.status>0 ) errL.push(rc);
	rc = checkPropTypes( data.dataTypes, data.hierarchyTypes );
	if( rc.status>0 ) errL.push(rc);

	// subjectTypes and objectTypes must be resourceType ids:
	rc = checkStatementTypeIds( data.resourceTypes, data.statementTypes );
	if( rc.status>0 ) errL.push(rc);

	// property values ("content") must fit to the respective type's range
	rc = checkPropValues( data.resourceTypes, data.resources );
	if( rc.status>0 ) errL.push(rc);
	rc = checkPropValues( data.statementTypes, data.statements );
	if( rc.status>0 ) errL.push(rc);
	rc = checkPropValues( data.hierarchyTypes, data.hierarchies );
	if( rc.status>0 ) errL.push(rc);

	// subject and object must be resource ids:
	rc = checkStatementIds( data.resources, data.statements );
	if( rc.status>0 ) errL.push(rc);

	// A hierarchy node's "resource" must be the id of a member of "resources":
	for( var h=data.hierarchies.length-1; h>-1; h--) {
		rc = checkNodes( data.resources, data.hierarchies[h].nodes );
		if( rc.status>0 ) { errL.push(rc); break }
	};

	return errL.length<1?{ status: 0, statusText: 'SpecIF constraints have been checked successfully!' }
			:{ status: 902, statusText: 'SpecIF constraints are violated', responseText: errorsText(errL) };

	// The checking routines:
	function checkUniqueIds(iE) {
		// All identifiers 'id' must be unique (unless when used as a reference).
		let allIds=[],
			dId = duplicateId(iE.dataTypes);
		if( dId ) return {status:911, statusText: "dataType identifier '"+dId+"' is not unique"};
		dId = duplicateId(iE.resourceTypes);
		if( dId ) return {status:912, statusText: "resourceType or propertyType identifier '"+dId+"' is not unique"};
		dId = duplicateId(iE.statementTypes);
		if( dId ) return {status:913, statusText: "statementType or propertyType identifier '"+dId+"' is not unique"};
		dId = duplicateId(iE.hierarchyTypes);
		if( dId ) return {status:914, statusText: "hierarchyType or propertyType identifier '"+dId+"' is not unique"};
		dId = duplicateId(iE.resources);
		if( dId ) return {status:915, statusText: "resource identifier '"+dId+"' is not unique"};
		dId = duplicateId(iE.statements);
		if( dId ) return {status:916, statusText: "statement identifier '"+dId+"' is not unique"};
		dId = duplicateId(iE.hierarchies);
		if( dId ) return {status:917, statusText: "hierarchy identifier '"+dId+"' is not unique"};
		return {status:0, statusText: 'identifiers are unique'};

		function duplicateId(L) {
			// add every checked Id to allIds,
			// return 'null', only if all elements of L are not contained in allIds,
			// return the first id, which is contained in allIds (hence a duplicate):
			if(!L || !L.length) return null;
			var rc=null;
			for( var i=L.length-1;i>-1;i-- ) {
				// check the element's id:
				if( allIds.indexOf(L[i].id)>-1 ) return L[i].id;
				// check the propertyType's identifiers, as well:
				// (the instance's properties do not have an id ...)
				if( L[i].propertyTypes ) {
					rc = duplicateId(L[i].propertyTypes);
					if( rc ) return rc
					// ToDo: check value identifiers of enumerated property types
				};
				// check the hierarchy's nodes recursively:
				if( L[i].nodes ) {
					rc = duplicateId(L[i].nodes);
					if( rc ) return rc
				}; 
				// all is fine, but add the latest id to the list for the next checking loops:
				allIds.push(L[i].id)
			};
			return null
		}
	}
	function checkNodes(L,nds) {
		// Any node's "resource" must be the id of a member of "resources". 
		if( nds ) {
			var rc = null;
			for( var i=nds.length-1;i>-1;i-- ){
				if(indexById(L,nds[i].resource)<0) return {status:909, statusText: "hierarchy node with identifier '"+nds[i].id+"' must reference a valid resource"};	// check the node itself
				rc = checkNodes(L,nds[i].nodes);	// check references of next hierarchy levels recursively
				if(rc.status!=0) return rc	
			}
		};
		return {status:0, statusText: "hierarchy nodes reference valid resources"}		// all's fine!
	}
	function checkDataTypes(L) {
		for( var i=L.length-1;i>-1;i-- ){
			switch(L[i].type) {
				case 'xs:string': 
					if( !L[i].maxLength ) return {status:928, statusText: "string types must have maxLength>0"};
					break;
				case 'xs:double':
					if( !L[i].accuracy ) return {status:929, statusText: "double types must have accuracy>0"};
					// no break;
				case 'xs:integer':
					if( L[i].min==undefined || L[i].max==undefined || L[i].min+1>L[i].max ) return {status:929, statusText: "number types must have min and max"};
					break
			}						
		};
		return {status:0, statusText: "dataTypes are correct"}		// all's fine!
	}
	function checkTypes(L,els,type) {
		// In case of resources, the value of "resourceType" must be the id of a member of "resourceTypes". 
		// Similarly for statements and hierarchies.
		let sTi=null;
		for( var i=els.length-1;i>-1;i-- ){
			sTi = indexById(L, els[i][type]);
			if(sTi<0) return {status:903, statusText: "instance with identifier '"+els[i].id+"' must reference a valid type"}
//			if( !checkPropTypeIds(L[sTi].propertyTypes,els[i].properties) ) return {status:920, statusText: "properties of instance with identifier '"+els[i].id+"' must reference valid propertyTypes"}
		};
		return {status:0, statusText: "instance's "+type+" and propertyTypes reference valid types"}	
				
/*	  		function checkPropTypeIds(L,atts) {
				// all property's "propertyType" must be the id of a member of "propertyTypes":
				// .. these are now checked in checkPropValues.
				for( var i=atts.length-1;i>-1;i-- ) {
					if(indexById(L, atts[j].propertyType)<0) return false
				};
				return true
			}
*/	}
	function checkPropTypes(L,sTs) {
		let aT=null, dT=null;
		for( var i=sTs.length-1;i>-1;i-- ){
			if( sTs[i].propertyTypes ) {
				for( var j=sTs[i].propertyTypes.length-1;j>-1;j-- ) {
					aT = sTs[i].propertyTypes[j];
					dT = itemById(L,aT.dataType);
					// A propertyType's "dataType" must be the id of a member of "dataTypes".
					// .. this is also checked in checkPropValues:
					if( !dT ) return {status:904, statusText: "propertyType with identifier '"+aT.id+"' must reference a valid dataType"};
					// If a propertyType of base type "xs:enumeration" doesn't have a property 'multiple', multiple=false is assumed
				}
			}
		};
		return {status:0, statusText: "propertyTypes reference valid dataTypes"}
	}

	function checkStatementTypeIds(oTL,rTL) {	// resourceTypes, statementTypes
		// All statementType's "subjectTypes" must be the id of a member of "resourceTypes". 
		// Similarly for "objectTypes".
		for( var i=rTL.length-1;i>-1;i-- ){
			if( !checkEls(oTL, rTL[i].subjectTypes) ) return {status:906, statusText: "subjectTypes of statementType with identifier '"+rTL[i].id+"' must reference valid resourceTypes"};
			if( !checkEls(oTL, rTL[i].objectTypes) ) return {status:907, statusText: "objectTypes of statementType with identifier '"+rTL[i].id+"' must reference valid resourceTypes"}
		};
		return {status:0, statusText: "statementType's subjectTypes and objectTypes reference valid resourceTypes"};

		function checkEls(oTL,oTs) {
			// no subjectTypes resp. objectTypes means all defined resourceTypes are eligible:
			if( oTs ) { 
				// each value in oTs must be the id of a member of oTL:
				for( var i=oTs.length-1;i>-1;i-- ) {
					if(indexById(oTL, oTs[i])<0) return false
				}
			};
			return true
		}
	}
	function checkStatementIds(oL,rL) {	// resources, statements
		// A statement's "subject" must be the id of a member of "resources". 
		// Similarly for "object".
		// (It has been checked before that any "resource" is indeed of type "resourceType").
		for( var i=rL.length-1;i>-1;i-- ){
			if(indexById(oL, rL[i].subject.id)<0) return {status:908, statusText: "subject of statement with identifier '"+rL[i].id+"' must reference a valid resource"};
			if(indexById(oL, rL[i].object.id)<0) return {status:909, statusText: "object of statement with identifier '"+rL[i].id+"' must reference a valid resource"};
//			if( rL[i].subject == rL[i].object ) return {status:90X, statusText: ""}
		};
		return {status:0, statusText: "statement's subjects and objects reference valid resources"}
	}
	function checkPropValues(tL,iL) {   // type list, instance list (resources, statements or hierarchies)
		// Property values ("content") must fit to the respective type's range
		let aT=null, dT=null, aV=null;
		if( iL ) {
			for( var i=iL.length-1;i>-1;i-- ){
				if( iL[i].properties ) {
					for( var a=iL[i].properties.length-1;a>-1;a-- ){
						aV = iL[i].properties[a].value;
						if( aV ) {
							aT = propTypeById(tL,iL[i].properties[a].propertyType);
							if( !aT ) return {status:920, statusText: "properties of instance with identifier '"+iL[i].id+"' must reference valid propertyTypes"}; 
							dT = itemById(data.dataTypes,aT.dataType);
							if( !dT ) return {status:904, statusText: "propertyType with identifier '"+aT.id+"' must reference a valid dataType"}; 
							switch(dT.type) {
								case 'xs:string': 
									if( aV.length>dT.maxLength ) return {status:921, statusText: "strings must not exceed maxLength"}; 
									break;
								case 'xs:double':
	//								if( (aV*Math.pow(10,dT.accuracy)%1)==0 ) return {status:922,statusText:""};
									// no break;
								case 'xs:integer':
									if( aV<dT.min ) return {status:923, statusText: "numbers must be larger than min"};
									if( aV>dT.max ) return {status:924, statusText: "numbers must be smaller than max"}; 
									break;
	/*							case 'xs:boolean':
									if( aV!=true && aV!=false ) return {status:925,statusText:""}; 
									break;
	*/							case 'xs:enumeration':
									// enumerated values in properties must be defined in the dataType of the corresponding propertyType  (ToDo)
									var vL=aV.split(',');
									// 'multiple' property at propertyType supersedes 'multiple' at the dataType:
									if( vL.length>1 && !(aT.multiple || (aT.multiple==undefined && dT.multiple)) ) // logic expression is equivalent to 'multipleChoice(attrType)' ... the function is not used to avoid a dependency.
											return {status:926, statusText: "property may not have more than one value"};
									for( var v=vL.length-1;v>-1;v-- ) {
										vL[v] = vL[v].trim();
										if( vL[v] && indexById( dT.values, vL[v] )<0 ) 
											return {status:927, statusText: "enumerated valus must be defined by the respective property type"}
									}
							}						
						}
						// else: empty values are allowed, so no return with error code
					}
				}
			}
		};
		return {status:0, statusText: "propertyValues lie within their type's value ranges"}
	}
	function propTypeById(sT,id) {
		// given a propertyType's id, return the propertyType:
//		id = id.trim();
		let a=null;
		for( var t=sT.length-1; t>-1; t-- ) { // fastest loop with single variable
			a = itemById( sT[t].propertyTypes, id );
			if( a ) return a
		};
		return null  // should never arrive here ...
	}
	function indexById(L,id) {
		if(!L||!id) return -1;
		// given the id of an element in a list, return it's index:
		id = id.trim();
		for( var i=L.length-1;i>-1;i-- )
			if( L[i].id === id ) return i;   // return list index 
		return -1
	}
	function itemById(L,id) {
		if(!L||!id) return null;
		// given the ID of an element in a list, return the element itself:
		id = id.trim();
		for( var i=L.length-1;i>-1;i-- )
			if( L[i].id === id ) return L[i];   // return list item
		return null
	}
	function errorsText(eL) {
		var eT = '';
		eL.forEach( function(e) { eT += (eT.length?',\n':'')+e.statusText+' ('+status+')'} );
		return eT
	}
}
