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
function checkConstraints( data ) {
	"use strict";
	// Check the constraints of the concrete values in 'data'.
	// Applies to SpecIF schema 0.11.1 and later, where a key consisting of id plus revision is used to reference an item.
	// Data according SpecIF schema 0.10.0 passes, as well.
	// The return code uses properties similar to xhr, namely {status:900,statusText:"abc",responseText:"xyz"}
	// ToDo: localize text and take it from language files.

	var rc={},errL=[];

	// ids must be unique unless when used as a reference:
	rc = checkKeys( data );
	if( rc.status>0 ) errL.push(rc);

	// dataTypes must respect certain constraints depending on their base type:
	rc = checkDataTypes( data.dataTypes );
	if( rc.status>0 ) errL.push(rc);
	// in case of resources, the key of "resourceType" must be the key of a member of "resourceTypes":
	rc = checkTypes( data.resourceTypes, data.resources, 'resourceType' );
	if( rc.status>0 ) errL.push(rc);
	// in case of statements, the key of "statementType" must be the key of a member of "statementTypes":
	rc = checkTypes( data.statementTypes, data.statements, 'statementType' );
	if( rc.status>0 ) errL.push(rc);
	// in case of hierarchies, the key of "hierarchyType" must be the key of a member of "hierarchyTypes":
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

	// statementType's subjectTypes and objectTypes must be resourceType keys:
	rc = checkStatementTypeRefs( data.resourceTypes, data.statementTypes );
	if( rc.status>0 ) errL.push(rc);

	// property values ("content") must fit to the respective type's range
	rc = checkPropValues( data.resourceTypes, data.resources );
	if( rc.status>0 ) errL.push(rc);
	rc = checkPropValues( data.statementTypes, data.statements );
	if( rc.status>0 ) errL.push(rc);
	rc = checkPropValues( data.hierarchyTypes, data.hierarchies );
	if( rc.status>0 ) errL.push(rc);

	// statement's subject and object must be resource keys:
	rc = checkStatementRefs( data.resources, data.statements );
	if( rc.status>0 ) errL.push(rc);

	// A hierarchy node's "resource" must be the key of a member of "resources":
	for( var h=data.hierarchies.length-1; h>-1; h--) {
		rc = checkNodes( data.resources, data.hierarchies[h].nodes );
		if( rc.status>0 ) { errL.push(rc); break }
	};

	return errL.length<1?{ status: 0, statusText: 'SpecIF constraints have been checked successfully!' }
			:{ status: 902, statusText: 'SpecIF constraints are violated', responseText: errorsText(errL) };

	// The checking routines:
	function checkKeys(iE) {
		// All keys consisting of 'id' and 'revision' must be unique (unless when used as a reference).
		// Further conditions: 
		//  - all occurrences of an id have a specified revision>0.
		//  - or there is just one occurrence of an id without revision
		let allKeys=[],
			dK = duplicateKey(iE.dataTypes);
		if( dK ) return {status:911, statusText: "dataType "+dK.id+" (revision "+dK.revision+") is not unique"};
		dK = duplicateKey(iE.resourceTypes);
		if( dK ) return {status:912, statusText: "resourceType or propertyType "+dK.id+" (revision "+dK.revision+") is not unique"};
		dK = duplicateKey(iE.statementTypes);
		if( dK ) return {status:913, statusText: "statementType or propertyType "+dK.id+" (revision "+dK.revision+")is not unique"};
		dK = duplicateKey(iE.hierarchyTypes);
		if( dK ) return {status:914, statusText: "hierarchyType or propertyType "+dK.id+" (revision "+dK.revision+") is not unique"};
		dK = duplicateKey(iE.resources);
		if( dK ) return {status:915, statusText: "resource "+dK.id+" (revision "+dK.revision+") is not unique"};
		dK = duplicateKey(iE.statements);
		if( dK ) return {status:916, statusText: "statement "+dK.id+" (revision "+dK.revision+") is not unique"};
		dK = duplicateKey(iE.hierarchies);
		if( dK ) return {status:917, statusText: "hierarchy "+dK.id+" (revision "+dK.revision+") is not unique"};
		return {status:0, statusText: 'all keys are unique'};

		function duplicateKey(L) {
			// A key consists of id and revision; the combination must be unique.
			// Add every checked key to allKeys,
			// return null, only if all elements of L are not contained in allKeys,
			// return the first element, which has a duplicate key.
			// Data arriving here has passed the schema checking, so there is a valid id where it is expected.

				function containsByKey( L, el ) {
					// L[i] and el must be an item/key consisting of id and revision
					// return true, if el is contained in L;
					let lR=null, eR=el.revision;
					for( var i=L.length-1;i>-1;i-- ) {
						lR = L[i].revision || 0;
						if ( L[i].id==el.id && ( lR==eR || lR==0 || eR==0 ) ) return true
					};
					return false
				}
			var e1=null, e2=null;
			for( var i=L.length-1;i>-1;i-- ) {
				// it has been checked by schema that valid identifiers are present where mandatory;
				// so we can skip the checking for duplicates, if there is no id, e.g. in case of properties:
				if( L[i].id==undefined ) continue;
				// But if it is defined, it must meet the constraints:
				e1 = L[i]; 
				e1.revision = L[i].revision || 0;
				// check the element's id:
				if( containsByKey(allKeys,e1) ) return e1;
				// check the identifiers of enumerated values in dataTypes:
				if( e1.values ) {
					e2 = duplicateKey(e1.values);
					if( e2 ) return e2
				};
				// check the propertyType's identifiers:
				if( e1.propertyTypes ) {
					e2 = duplicateKey(e1.propertyTypes);
					if( e2 ) return e2
				};
				// the instance's properties may not have an id ...
				if( e1.properties ) {
					e2 = duplicateKey(e1.properties);
					if( e2 ) return e2
				};
				// check the hierarchy's nodes recursively:
				if( e1.nodes ) {
					e2 = duplicateKey(e1.nodes);
					if( e2 ) return e2
				}; 
				// all is fine, but add the latest key to the list:
				allKeys.push(e1)
			};
			return null
		}
	}
	function checkNodes(L,nds) {
		// Any node's "resource" must be a member of "resources". 
		// A resource can just be an id string, where the revision=0 is assumed or a key consisting of id and revision.
		if( nds ) {
			var rc = null;
			for( var i=nds.length-1;i>-1;i-- ){
				if( !existsByKey(L,nds[i].resource) ) return {status:909, statusText: "hierarchy node with identifier '"+nds[i].id+"' must reference a valid resource"};	// check the node itself
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
		return {status:0, statusText: "dataTypes are correct"}
	}
	function checkTypes(L,els,type) {
		// In case of resources, the value of "resourceType" must be the key of a member of "resourceTypes". 
		// Similarly for statements and hierarchies.
		for( var i=els.length-1;i>-1;i-- ){
			if( !existsByKey(L, els[i][type]) ) 
				return {status:903, statusText: "instance with identifier '"+els[i].id+"' must reference a valid type"}
		};
		return {status:0, statusText: "instance's "+type+" and propertyTypes reference valid types"}	
	}
	function checkPropTypes(L,sTs) {
		let aT=null;
		for( var i=sTs.length-1;i>-1;i-- ){
			if( sTs[i].propertyTypes ) {
				for( var j=sTs[i].propertyTypes.length-1;j>-1;j-- ) {
					aT = sTs[i].propertyTypes[j];
					// A propertyType's "dataType" must be the key of a member of "dataTypes".
					// .. this is also checked in checkPropValues:
					if( !existsByKey(L,aT.dataType) ) 
						return {status:904, statusText: "propertyType with identifier '"+aT.id+"' must reference a valid dataType"};
					// If a propertyType of base type "xs:enumeration" doesn't have a property 'multiple', multiple=false is assumed
				}
			}
		};
		return {status:0, statusText: "propertyTypes reference valid dataTypes"}
	}

	function checkStatementTypeRefs(oTL,rTL) {	// resourceTypes, statementTypes
		// All statementType's "subjectTypes" and "objectTypes" must be the id of a member of "resourceTypes". 
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
					if( !existsByKey(oTL, oTs[i]) ) return false
				}
			};
			return true
		}
	}
	function checkStatementRefs(oL,rL) {	// resources, statements
		// A statement's "subject" and "object" must both be the id of a member of "resources". 
		// (It has been checked before that any "resource" is indeed of type "resourceType").
		for( var i=rL.length-1;i>-1;i-- ){
			if(!existsByKey(oL, rL[i].subject)) 
				return {status:908, statusText: "subject of statement with identifier '"+rL[i].id+"' must reference a valid resource"};
			if(!existsByKey(oL, rL[i].object)) 
				return {status:909, statusText: "object of statement with identifier '"+rL[i].id+"' must reference a valid resource"};
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
								case 'xhtml':
								case 'xs:string': 
									if( dT.maxLength==undefined ) break;
									switch( typeof aV ) {
										case 'object':
											// the value is a list with some text in different languages, so check every one of them:
											for( var p=aV.length-1;p>-1;p-- ) {
												if( aV[p]['text'].length>dT.maxLength ) return {status:921, statusText: "strings must not exceed maxLength"}; 
											}
										case 'string':
											if( aV.length>dT.maxLength ) return {status:921, statusText: "strings must not exceed maxLength"}; 
									};
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
										if( vL[v] && !itemById( dT.values, vL[v] ) ) 
											return {status:927, statusText: "enumerated values must be defined by the respective property type"}
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
	function itemById(L,id) {
		if(!L||!id) return null;
		// given the ID of an element in a list, return the element itself:
		id = id.trim();
		for( var i=L.length-1;i>-1;i-- )
			if( L[i].id === id ) return L[i];   // return list item
		return null
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
	function existsByKey( L, el ) {
		// Return true, if an item with the key el does exist in L
		//  - If the item in item list (L) has no specified revision, the reference may not specify a revision>0.
		//  - If el has no revision or revision==0, any item in L having the same id is acceptable
		//  - If el has a revision, there must be an item in L with the same key consisting of id and revision.
		//  - The uniqueness of keys has been checked, before.

		// normalize el:
		switch( typeof el ) {
			case 'object': break;
			case 'string': el = {id: el, revision: 0}; break;
			default: return null
		};
		let lR=null, eR = el.revision || 0;
		for( var i=L.length-1;i>-1;i-- ) {
			lR = L[i].revision || 0;
			// check existence of el:
			if ( L[i].id==el.id && ( lR==eR || eR==0 ) ) return true
		};
		return false
	}
	function errorsText(eL) {
		var eT = '';
		eL.forEach( function(e) { eT += (eT.length?',\n':'')+e.statusText+' ('+status+')'} );
		return eT
	}
}
