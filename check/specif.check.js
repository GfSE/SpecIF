/*	Schema and constraint checking for native SpecIF data in JSON format. 
	Requires: ajv 4.8 or higher.
	License: Apache 2.0 (http://www.apache.org/licenses/)
	Author: se@enso-managers.de, enso managers gmbh, Berlin (http://www.enso-managers.de)
	We appreciate any correction, comment or contribution here on GitHub or via e-mail to support@reqif.de            
*/
function checkSchema( schema, data ) {
	"use strict";
	// Check data using the supplied schema.
	// The return code uses properties similar to jqXHR, namely {status:900,statusText:"abc",responseText:"xyz"}
	// Requires: https://github.com/epoberezkin/ajv/releases/tag/4.8.0 or later 
	// ToDo: localize messages, see https://github.com/epoberezkin/ajv-i18n 

	let ajv = Ajv({allErrors: true});
	let validate = ajv.compile(schema);
		
	// check data against schema using the compiled validation routine:
	let valid = validate(data);
	
	return valid?{ status: 0, statusText: 'SpecIF schema has been checked successfully!' }
			:{ status: 901, statusText: 'SpecIF schema is violated', responseType: 'text', responseText: ajv.errorsText(validate.errors) }
}
function checkConstraints( data ) {
	"use strict";
	// Check the constraints of the concrete values in 'data'.
	// Applies to SpecIF schema 0.11.1 and later, where a key consisting of id plus revision is used to reference an item.
	// Data according SpecIF schema 0.10.x passes, as well.
	// The return code uses properties similar to jqXHR, namely {status:900,statusText:"abc",responseText:"xyz"}
	// ToDo: localize messages and provide them by call parameter.

	if( data.specifVersion.indexOf( '0.9.' )>-1 ) 
		return { status: 903, statusText: 'SpecIF version 0.9.x is not any more supported!' };
	
	// Set property names according to SpecIF version:
	switch( data.specifVersion ) {
		case '0.10.0':
		case '0.10.1':
			return { status: 903, statusText: 'SpecIF version '+data.specifVersion+' is not any more supported!' };
		case '0.10.2':
		case '0.10.3':
		case '0.11.1':
			var rClasses = 'resourceTypes',
				sClasses = 'statementTypes',
				hClasses = 'hierarchyTypes',
				pClasses = 'propertyTypes',
				rClass = 'resourceType',
				sClass = 'statementType',
				hClass = 'hierarchyType',
				pClass = 'propertyType',
				subClasses = 'subjectTypes',
				objClasses = 'objectTypes',
				sub = 'subject',
				obj = 'object';
			break;
		default:
			var rClasses = 'resourceClasses',
				sClasses = 'statementClasses',
				hClasses = 'hierarchyClasses',
				pClasses = 'propertyClasses',
				rClass = 'class',
				sClass = 'class',
				hClass = 'class',
				pClass = 'class',
				subClasses = 'subjectClasses',
				objClasses = 'objectClasses',
				sub = 'subject',
				obj = 'object'
	};

	var rc={},errL=[];

	// ids must be unique unless when used as a reference:
	rc = checkUniqueKeys( data );
	if( rc.status>0 ) errL.push(rc);

	// dataTypes must respect certain constraints depending on their base type:
	rc = checkDataTypes( data.dataTypes );
	if( rc.status>0 ) errL.push(rc);
	// in case of resources, the value of "class" must be the id of a member of "resourceClasses":
	rc = checkClasses( data[rClasses], data.resources, rClass );
	if( rc.status>0 ) errL.push(rc);
	// in case of statements, the value of "class" must be the id of a member of "statementClasses":
	rc = checkClasses( data[sClasses], data.statements, sClass );
	if( rc.status>0 ) errL.push(rc);
	// in case of hierarchies, the value of "class" must be the id of a member of "hierarchyClasses":
	rc = checkClasses( data[hClasses], data.hierarchies, hClass );
	if( rc.status>0 ) errL.push(rc);

	// A propertyType's "dataType" must be the id of a member of "dataTypes":
	rc = checkPropertyClasses( data.dataTypes, data[rClasses] );
	if( rc.status>0 ) errL.push(rc);
	rc = checkPropertyClasses( data.dataTypes, data[sClasses] );
	if( rc.status>0 ) errL.push(rc);
	rc = checkPropertyClasses( data.dataTypes, data[hClasses] );
	if( rc.status>0 ) errL.push(rc);

	// statementClass' subjectClasses and objectClasses must be resourceClass ids:
	rc = checkStatementClasses( data[rClasses], data[sClasses] );
	if( rc.status>0 ) errL.push(rc);

	// property values ("content") must fit the respective class' range:
	rc = checkProperties( data[rClasses], data.resources, rClass );
	if( rc.status>0 ) errL.push(rc);
	rc = checkProperties( data[sClasses], data.statements, sClass );
	if( rc.status>0 ) errL.push(rc);
	rc = checkProperties( data[hClasses], data.hierarchies, hClass );
	if( rc.status>0 ) errL.push(rc);

	// statement's subject and object must be resource keys:
	rc = checkStatements( data.resources, data.statements );
	if( rc.status>0 ) errL.push(rc);

	// A hierarchy node's "resource" must be the key of a member of "resources":
	for( var h=data.hierarchies.length-1; h>-1; h--) {
		rc = checkNodes( data.resources, data.hierarchies[h].nodes );
		if( rc.status>0 ) { errL.push(rc); break }
	};

	return errL.length<1?{ status: 0, statusText: 'SpecIF constraints have been checked successfully!' }
			:{ status: 902, statusText: 'SpecIF constraints are violated', responseType: 'text', responseText: errorsText(errL) };

	// The checking routines:
	function checkUniqueKeys(iE) {
		// All keys consisting of 'id' and 'revision' must be unique (unless when used as a reference).
		// Further conditions: 
		//  - all occurrences of items with the same id have a specified revision>0.
		//  - or there is just one occurrence of an id without revision
		let allKeys=[],
			dK = duplicateKey(iE.dataTypes);
		if( dK ) return {status:911, statusText: "dataType "+dK.id+" with revision "+dK.revision+" is not unique"};
		dK = duplicateKey(iE[rClasses]);
		if( dK ) return {status:912, statusText: rClass+" or propertyClass "+dK.id+" with revision "+dK.revision+" is not unique"};
		dK = duplicateKey(iE[sClasses);
		if( dK ) return {status:913, statusText: sClass+" or propertyClass "+dK.id+" with revision "+dK.revision+" is not unique"};
		dK = duplicateKey(iE[hClasses]);
		if( dK ) return {status:914, statusText: hClass+" or propertyClass "+dK.id+" with revision "+dK.revision+" is not unique"};
		dK = duplicateKey(iE.resources);
		if( dK ) return {status:915, statusText: "resource "+dK.id+" with revision "+dK.revision+" is not unique"};
		dK = duplicateKey(iE.statements);
		if( dK ) return {status:916, statusText: "statement "+dK.id+" with revision "+dK.revision+" is not unique"};
		dK = duplicateKey(iE.hierarchies);
		if( dK ) return {status:917, statusText: "hierarchy "+dK.id+" with revision "+dK.revision+" is not unique"};
		dK = duplicateKey(iE.files);
		if( dK ) return {status:918, statusText: "file identifier '"+dK.id+"' with revision "+dK.revision+" is not unique"};
		return {status:0, statusText: 'all keys are unique'};

		function duplicateKey(L) {
			if( !L || L.length<1 ) return null;
			
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
				// But if it is defined, it must be unique:
				e1 = L[i]; 
				e1.revision = L[i].revision || 0;
				// check the element's id:
				if( containsByKey(allKeys,e1) ) return e1;
				// check the identifiers of enumerated values in dataTypes:
				if( e1.values ) {
					e2 = duplicateKey(e1.values);
					if( e2 ) return e2
				};
				// check the identifiers of propertyClasses, as well:
				if( e1[pClasses] ) {
					e2 = duplicateKey(e1[pClasses]);
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
	function checkDataTypes(L) {
		for( var i=L.length-1;i>-1;i-- ){
			switch(L[i].type) {
				case 'xhtml':
					if( data.specifVersion=='0.10.2' ) break;
				case 'xs:string': 
					// more restrictive than the schema, where maxLength is optional:
					if( !L[i].maxLength ) return {status:928, statusText: "string and xhtml types must have maxLength>0"};
					break;
				case 'xs:double':
					// more restrictive than the schema, where accuracy is optional:
					if( !L[i].accuracy ) return {status:929, statusText: "double types must have accuracy>0"};
					// no break;
				case 'xs:integer':
					// more restrictive than the schema, where min and may are optional:
					if( L[i].min==undefined || L[i].max==undefined || L[i].min+1>L[i].max ) return {status:929, statusText: "number types must have min and max"}
			}						
		};
		return {status:0, statusText: "dataTypes are correct"}
	}
	function checkClasses(cL,iL,type) {  // class list, instance list
		// In case of resources, the value of "class" must be the key of a member of "resourceClasses". 
		// Similarly for statements and hierarchies.
		for( var i=iL.length-1;i>-1;i-- ){
			if( !existsByKey(cL, iL[i][type]) ) 
				return {status:903, statusText: "instance with identifier '"+iL[i].id+"' must reference a valid "+type }
		};
		return {status:0, statusText: "instance's "+type+"s reference valid types"}	
	}
	function checkPropertyClasses(dL,cL) {  // dataType list, class list
		let pT=null;
		for( var i=cL.length-1;i>-1;i-- ){
			if( cL[i][pClasses] ) {
				for( var j=cL[i][pClasses].length-1;j>-1;j-- ) {
					pT = cL[i][pClasses][j];
					// A propertyClass's "dataType" must be the key of a member of "dataTypes".
					// .. this is also checked in checkProperties:
					if( !existsByKey(dL,pT.dataType) ) 
						return {status:904, statusText: "propertyClass with identifier '"+pT.id+"' must reference a valid dataType"};
					// If a propertyType of base type "xs:enumeration" doesn't have a property 'multiple', multiple=false is assumed
				}
			}
		};
		return {status:0, statusText: "propertyClasses reference valid dataTypes"}
	}

	function checkStatementClasses(rCL,sCL) {	// resourceClasses, statementClasses
		// All statementClass' "subjectClasses" must have the key of a member of "resourceClasses". 
		// Similarly for "objectClasses".
		for( var i=sCL.length-1;i>-1;i-- ){
			if( !checkEls(rCL, sCL[i][subClasses]) ) return {status:906, statusText: subClasses+" of "+sClass+" with identifier '"+sCL[i].id+"' must reference a valid "+rClass };
			if( !checkEls(rCL, sCL[i][objClasses]) ) return {status:907, statusText: objClasses+" of "+sClass+" with identifier '"+sCL[i].id+"' must reference a valid "+rClass }
		};
		return {status:0, statusText: "statementClass' "+subClasses+" and "+objClasses+" reference valid "+rClasses };

		function checkEls(rCL,cL) {
			// no subjectClasses resp. objectClasses means all defined resourceClasses are eligible:
			if( cL ) { 
				// each value in cL must be the key of a member of rCL:
				for( var i=cL.length-1;i>-1;i-- ) {
					if( !existsByKey(rCL, cL[i]) ) return false
				}
			};
			return true
		}
	}
	function checkStatements(rL,sL) {	// resources, statements
		// A statement's "subject" must be the key of a member of "resources". 
		// Similarly for "object".
		// (It has been checked before that any "resource" is indeed of type "resourceClass").
		for( var i=sL.length-1;i>-1;i-- ) {
			if(indexByKey(rL, sL[i][sub])<0) 

				return {status:908, statusText: "subject of statement with identifier '"+sL[i].id+"' must reference a valid resource"};
			if(indexByKey(rL, sL[i][obj])<0) 

				return {status:909, statusText: "object of statement with identifier '"+sL[i].id+"' must reference a valid resource"};
//			if( sL[i][sub] == sL[i][obj] ) return {status:90X, statusText: ""}
		};
		return {status:0, statusText: "statement's subjects and objects reference valid resources"}
	}
	function checkProperties(cL,iL,typ) {   // class list, instance list (resources, statements or hierarchies)
		let pT=null, dT=null, pV=null, iT=null;
		if( iL ) {
			for( var i=iL.length-1;i>-1;i-- ){
				if( iL[i].properties ) {
					iT = itemById(cL,iL[i][typ]); // the instance's type.
					// ToDo: error 919 is equal to 903, but there has been a case in which 919 has been raised. 
					if( !iT ) return {status:919, statusText: "instance with identifier '"+iL[i].id+"' must reference a valid "+typ }; 
					for( var a=iL[i].properties.length-1;a>-1;a-- ){
						// Property's propertyType must point to a propertyType of the respective type 
						pT = itemById(iT[pClasses],iL[i].properties[a][pClass]);
						if( !pT ) return {status:920, statusText: "properties of instance with identifier '"+iL[i].id+"' must reference a valid propertyType"}; 
						
						// Property's value ("content") must fit to the respective type's range
						pV = iL[i].properties[a].value;
						if( pV ) {
							// according to the schema, all property values are of type 'string', including boolean and numbers:
							dT = itemById(data.dataTypes,pT.dataType);
							if( !dT ) return {status:904, statusText: "propertyClass with identifier '"+pT.id+"' must reference a valid dataType"}; 
							switch(dT.type) {
								case 'xhtml':
								case 'xs:string': 
									if( dT.maxLength==undefined ) break;
									let txt = "property of instance with identifier '"+iL[i].id+"': string must not exceed maxLength";
									switch( typeof pV ) {
										case 'object':
											// pV is a list with some text in different languages, so check every one of them:
											for( var p=pV.length-1;p>-1;p-- ) {
												if( pV[p]['text'].length>dT.maxLength ) return {status:921, statusText: txt}; 
											};
											break;
										case 'string':
											// single language according to schema 0.10.x:
											if( pV.length>dT.maxLength ) return {status:921, statusText: txt}; 
									};
									break;
								case 'xs:double':
	//								if( (pV*Math.pow(10,dT.accuracy)%1)==0 ) return {status:922,statusText:""};
									pV = parseFloat( pV );
									if( pV=='NaN' ) return {status:925, statusText:"property of instance with identifier '"+iL[i].id+"': invalid number"}; 
									if( pV<dT.min ) return {status:923, statusText:"property of instance with identifier '"+iL[i].id+"': number must be larger than min"};
									if( pV>dT.max ) return {status:924, statusText:"property of instance with identifier '"+iL[i].id+"': number must be smaller than max"}; 
									break;
								case 'xs:integer':
									// according to the schema, all property values are of type 'string', including the numbers:
									pV = parseInt( pV );
									if( pV=='NaN' ) return {status:925, statusText:"property of instance with identifier '"+iL[i].id+"': invalid number"}; 
									if( pV<dT.min ) return {status:923, statusText:"property of instance with identifier '"+iL[i].id+"': number must be larger than min"};
									if( pV>dT.max ) return {status:924, statusText:"property of instance with identifier '"+iL[i].id+"': number must be smaller than max"}; 
									break;
								case 'xs:boolean':
									// according to the schema, all property values are of type 'string', including boolean:
									if( pV!='true' && pV!='false' ) return {status:925, statusText:"property of instance with identifier '"+iL[i].id+"': invalid boolean value"}; 
									break;
								case 'xs:enumeration':
									var vL=pV.split(',');
									// 'multiple' property at propertyClass supersedes 'multiple' at the dataType:
									if( vL.length>1 && !(pT.multiple || (pT.multiple==undefined && dT.multiple)) ) // logic expression is equivalent to 'multipleChoice(propertyClass)' ... the function is not used to avoid a dependency.
											return {status:926, statusText: "property of instance with identifier '"+iL[i].id+"': may not have more than one value"};
									// enumerated values in properties must be defined in the dataType of the corresponding propertyType
									for( var v=vL.length-1;v>-1;v-- ) {
										vL[v] = vL[v].trim();
										if( vL[v] && indexById( dT.values, vL[v] )<0 ) 
											return {status:927, statusText: "property of instance with identifier '"+iL[i].id+"': enumerated values must be defined by the respective property type"}
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
	function checkNodes(rL,ndL) {	// resourceList, nodeList
		// Any node's "resource" must be the key of a member of "resources". 
		// A resource can just be an id string (where the revision=0 is assumed) or a key consisting of id and revision.
		if( ndL ) {
			var rc = null;
			for( var i=ndL.length-1;i>-1;i-- ){
				if( !existsByKey(rL,ndL[i].resource) ) return {status:909, statusText: "hierarchy node with identifier '"+ndL[i].id+"' must reference a valid resource"};	// check the node itself
				rc = checkNodes(rL,ndL[i].nodes);	// check references of next hierarchy levels recursively
				if(rc.status!=0) return rc	
			}
		};
		return {status:0, statusText: "hierarchy nodes reference valid resources"}		// all's fine!
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
		// given the id of an element in a list, return the element itself:
		id = id.trim();
		for( var i=L.length-1;i>-1;i-- )
			if( L[i].id === id ) return L[i];  // return list item
		return null
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
