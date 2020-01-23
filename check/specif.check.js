/*	Schema and constraint checking for native SpecIF data in JSON format. 
	Requires: ajv 4.8 or higher.
	License: Apache 2.0 (http://www.apache.org/licenses/)
	Author: se@enso-managers.de, enso managers gmbh, Berlin (http://www.enso-managers.de)
	We appreciate any correction, comment or contribution here on GitHub or via e-mail to support@reqif.de            
*/
function checkSchema( schema, data ) {
	"use strict";
	// Check data using the supplied schema.
	// The return code uses properties similar to jqXHR, namely {status:900,statusText:"abc",responseType:"text",responseText:"xyz"}
	// Requires: https://github.com/epoberezkin/ajv/releases/tag/4.8.0 or later 
	// ToDo: localize messages, see https://github.com/epoberezkin/ajv-i18n 

	let ajv = Ajv({allErrors: true});
	let validate = ajv.compile(schema);
		
	// check data against schema using the compiled validation routine:
	let valid = validate(data);
	
	return valid?{ status: 0, statusText: 'SpecIF schema has been checked successfully!' }
			:{ status: 901, statusText: 'SpecIF schema is violated', responseType: 'text', responseText: ajv.errorsText(validate.errors) }
}
function checkConstraints( data, options ) {
	"use strict";
	// Check the constraints of the concrete values in 'data'.
	// SpecIF schema 0.11.1 up until 0.11.8 is supported.
	// With SpecIF schema v0.11.x, a key consisting of id plus revision is used to reference an item.
	// Data according SpecIF schema 0.10.2 and later passes, as well.
	// The return code uses properties similar to jqXHR, namely {status:900,statusText:"abc",responseType:"text",responseText:"xyz"}
	// ToDo: localize messages and provide them by call parameter.

	if( data.specifVersion.indexOf( '0.9.' )>-1 ) 
		return { status: 903, statusText: 'SpecIF version 0.9.x is not any more supported!' };

	// set default:
	if( typeof(options)!='object' ) options = {};
	if( !Array.isArray(options.dontCheck) ) options.dontCheck = [];
	
	// Set property names according to SpecIF version:
	switch( data.specifVersion ) {
		case '0.10.0':
		case '0.10.1':
		case '0.10.7':
		case '0.11.0':
		case '0.11.7':
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
				objClasses = 'objectTypes';
			break;
		case '0.10.4':
		case '0.10.5':
		case '0.10.6':
		case '0.11.2':
		case '0.11.6':
			var hClasses = 'hierarchyClasses',
				hClass = 'class';
				// no break
		default:
			var rClasses = 'resourceClasses',
				sClasses = 'statementClasses',
				pClasses = 'propertyClasses',
				rClass = 'class',
				sClass = 'class',
				pClass = 'class',
				subClasses = 'subjectClasses',
				objClasses = 'objectClasses'
	};

	var rc={},errL=[];

	// ids must be unique unless when used as a reference:
	rc = checkUniqueKeys( data );
	if( rc.status>0 ) errL.push(rc);

	// dataTypes must respect certain constraints depending on their base type:
	rc = checkDataTypes( data.dataTypes );
	if( rc.status>0 ) errL.push(rc);

	// starting  v0.10.6 resp. v0.11.6
	// resourceClass', statementClass' and hierarchyClass' propertyClasses must be keys of a member in 
	// propertyClasses at the top level; this is checked as a case in 'checkPropertyClasses'.
	
	// A propertyClass's "dataType" must be the key of a member of "dataTypes":
	rc = checkPropertyClasses( [data] );		// propertyClasses at top level starting with v0.10.6 and v0.11.6
	if( rc.status>0 ) errL.push(rc);
	rc = checkPropertyClasses( data[rClasses] );
	if( rc.status>0 ) errL.push(rc);
	rc = checkPropertyClasses( data[sClasses] );
	if( rc.status>0 ) errL.push(rc);
	rc = checkPropertyClasses( data[hClasses] );
	if( rc.status>0 ) errL.push(rc);

	// statementClass' subjectClasses and objectClasses must be resourceClass or statementClass ids:
	rc = checkStatementClasses();
	if( rc.status>0 ) errL.push(rc);

	// extends must specify a valid resource resp statement class: 
	rc = checkClasses( data[rClasses], data[rClasses], 'extends' );
	if( rc.status>0 ) errL.push(rc);
	rc = checkClasses( data[sClasses], data[sClasses], 'extends' );
	if( rc.status>0 ) errL.push(rc);

	// in case of resources, the value of "class" must be the id of a member of "resourceClasses":
	rc = checkClasses( data[rClasses], data.resources, rClass );
	if( rc.status>0 ) errL.push(rc);
	// in case of statements, the value of "class" must be the id of a member of "statementClasses":
	rc = checkClasses( data[sClasses], data.statements, sClass );
	if( rc.status>0 ) errL.push(rc);
	// in case of hierarchies, the value of "class" must be the id of a member of "hierarchyClasses",
	// up until v0.10.6 resp. v0.11.6:
	if( hClasses ) {
		rc = checkClasses( data[hClasses], data.hierarchies, hClass );
		if( rc.status>0 ) errL.push(rc)
	};

	// property values ("content") must fit the respective class' range:
	rc = checkProperties( data[rClasses], data.resources, rClass );
	if( rc.status>0 ) errL.push(rc);
	rc = checkProperties( data[sClasses], data.statements, sClass );
	if( rc.status>0 ) errL.push(rc);
	// up until v0.10.6 resp. v0.11.6:
	if( hClasses ) {
		rc = checkProperties( data[hClasses], data.hierarchies, hClass );
		if( rc.status>0 ) errL.push(rc)
	};

	// statement's subject and object must be resource keys:
	rc = checkStatements( data.resources, data.statements );
	if( rc.status>0 ) errL.push(rc);

	// A hierarchy node's "resource" must be the key of a member of "resources":
	rc = checkNodes( data.resources, data.hierarchies, 0 );
	if( rc.status>0 ) errL.push(rc);

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
		dId = duplicateKey(iE.propertyClasses);		// starting with v0.10.6
		if( dK ) return {status:910, statusText: "propertyClass "+dK.id+" with revision "+dK.revision+" is not unique"};
		dK = duplicateKey(iE[rClasses]);
		if( dK ) return {status:912, statusText: rClass+" or propertyClass "+dK.id+" with revision "+dK.revision+" is not unique"};
		dK = duplicateKey(iE[sClasses]);
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
			// return 'undefined', only if all elements of L are not contained in allKeys,
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
			var rc=null, e1=null;
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
					rc = duplicateKey(e1.values);
					if( rc ) return rc
				};
				// check the identifiers of propertyClasses, as well:
				if( e1[pClasses] ) {
					rc = duplicateKey(e1[pClasses]);
					if( rc ) return rc
				};
				// the instance's properties may not have an id ...
				if( e1.properties ) {
					rc = duplicateKey(e1.properties);
					if( rc ) return rc
				};
				// check the hierarchy's nodes recursively:
				if( e1.nodes ) {
					rc = duplicateKey(e1.nodes);
					if( rc ) return rc
				}; 
				// all is fine, but add the latest key to the list:
				allKeys.push(e1)
			};
			return
		}
	}
	function checkDataTypes(L) {
		// starting v0.10.8 resp. v0.11.8 the dataTypes are optional and thus may be omitted in simple cases:
		if( L )
			for( var i=L.length-1;i>-1;i-- ){
				switch(L[i].type) {
					case 'xhtml':
						if( data.specifVersion.indexOf('0.10.2')>-1
							|| data.specifVersion.indexOf('0.11.1')>-1 ) 
							break;
					case 'xs:string': 
						// more restrictive than the schema, where maxLength is optional:
						if( !L[i].maxLength ) 
							return {status:928, statusText: "string and xhtml types must have maxLength>0"};
						break;
					case 'xs:double':
						// more restrictive than the schema, where accuracy is optional:
						if( !L[i].accuracy ) 
							return {status:929, statusText: "double types must have accuracy>0"};
						// no break;
					case 'xs:integer':
						// more restrictive than the schema, where min and may are optional:
						if( L[i].min==undefined || L[i].max==undefined || L[i].min+1>L[i].max ) 
							return {status:929, statusText: "number types must have min and max"}
				}						
			};
		return {status:0, statusText: "dataTypes are correct"}
	}
	function checkClasses(cL,iL,type) {  // class list, instance list
		// This routine is used in 2 situations:
		// - In case of resourceClasses, the value of "extends" (if it exists) must be the key of a member of "resourceClasses". 
		//   Similarly for statements.
		// - In case of resources, the value of "class" must be the key of a member of "resourceClasses". 
		//   Similarly for statements and hierarchies.
		for( var i=iL.length-1;i>-1;i-- ){
			if( typeof(iL[i][type])=='string' && itemByKey(cL, iL[i][type])==undefined ) 
				return {status:903, statusText: "instance with identifier '"+iL[i].id+"' must reference a valid "+type }
		};
		return {status:0, statusText: "all instances' attribute named '"+type+"' references valid types"}	
	}
	function checkPropertyClasses(cL) {  // class list
		if( cL ) {
			let propertyC, i, j, rc;
			for( i=cL.length-1;i>-1;i-- ){
				if( cL[i][pClasses] ) {
					for( j=cL[i][pClasses].length-1;j>-1;j-- ) {
						propertyC = cL[i][pClasses][j];
						// depending on the version, 
						// - propertyC is a string: It is the identifier of an element of data.propertyClasses (starting v0.10.6 resp v0.11.6)
						// - propertyC is an object: Then, it can be 
						// -- either a key pointing to an element of data.propertyClasses (starting v0.10.6 resp v0.11.6)
						// -- or a property class defined here (up until v0.10.5 resp v0.11.2)
						// Note that itemByKey() handles keys in both forms 'identifier' or {id:'identifier',revision:n},
						// so we have just to decide whether propertyC is a key or a propertyClass definition:
						if( data.propertyClasses ) {
							// starting v0.10.6 resp v0.11.6: 
							// The propertyClass must be a valid key of an item in data.propertyClasses:
							if( itemByKey( data.propertyClasses, propertyC )==undefined )
								return {status:930, statusText: "property class of item with identifier '"+cL[i].id+"' must reference an item in 'propertyClasses'" }
						} else {
							// up until v0.10.5 resp v0.11.2:
							// A propertyClass's "dataType" must be the key of a member of "dataTypes".
							// .. this is also checked in checkProperties:
							if( itemByKey(data.dataTypes,propertyC.dataType)==undefined ) 
								return {status:904, statusText: "property class with identifier '"+propertyC.id+"' must reference a valid dataType"};
							// If a propertyClass of base type "xs:enumeration" doesn't have a property 'multiple', multiple=false is assumed
						//		break;
						//	default:
								// invalid javascript type:
						};
						// check the value (to be used by default of property values):
						rc = checkValue(propertyC,propertyC,"property class '"+propertyC.id+"'");
						if( rc.status>0 ) return rc;
					}
				}
			}
		};
		// all is fine: 
		return {status:0, statusText: "propertyClasses reference valid dataTypes"}
	}

	function checkStatementClasses() {	
		// All statementClass' "subjectClasses" must be the key of a member of "resourceClasses" or "statementClasses". 
		// Similarly for "objectClasses".
		let aCL = data[rClasses].concat(data[sClasses]), 
			sCL = data[sClasses];	// statementClasses
		for( var i=sCL.length-1;i>-1;i-- ){
			if( !checkEls(aCL, sCL[i][subClasses]) ) 
				return {status:906, statusText: subClasses+" of "+sClass+" with identifier '"+sCL[i].id+"' must reference a valid "+rClass };
			if( !checkEls(aCL, sCL[i][objClasses]) ) 
				return {status:907, statusText: objClasses+" of "+sClass+" with identifier '"+sCL[i].id+"' must reference a valid "+rClass }
		};
		return {status:0, statusText: "statementClass' "+subClasses+" and "+objClasses+" reference valid "+rClasses };

		function checkEls(aCL,cL) {
			// No subjectClasses resp. objectClasses means all defined resourceClasses are eligible.
			// In case of propertyClasses the existence is being checked by the schema.
			if( cL ) { 
				// each value in cL must be the key of a member of aCL:
				for( var i=cL.length-1;i>-1;i-- ) {
					if( itemByKey(aCL, cL[i])==undefined ) return false
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
			if( itemByKey(rL, sL[i].subject)==undefined && options.dontCheck.indexOf('statement.subject')<0 ) 

				return {status:908, statusText: "subject of statement with identifier '"+sL[i].id+"' must reference a valid resource"};
			if( itemByKey(rL, sL[i].object)==undefined && options.dontCheck.indexOf('statement.object')<0 ) 

				return {status:909, statusText: "object of statement with identifier '"+sL[i].id+"' must reference a valid resource"};
//			if( sL[i].subject == sL[i].object ) return {status:90X, statusText: ""}
		};
		return {status:0, statusText: "no anomaly with statement's subjects and objects"}
	}
	function checkValue(pC,pr,etxt) { 
		let val = pr.value;
		if( val ) {
			// according to the schema, all property values are of type 'string', including boolean and numbers:
			let dT = itemByKey(data.dataTypes,pC.dataType);
			if( !dT ) return {status:904, statusText: "propertyClass with identifier '"+pC.id+"' must reference a valid dataType"}; 
			switch(dT.type) {
				case 'xhtml':
					// early SpecIF versions did not specify maxLength in case of xhtml:
					if( dT.maxLength==undefined ) break;
				case 'xs:string': 
					let txt = etxt+": string value must not exceed maxLength";
					switch( typeof(val) ) {
						case 'object':
							// val is a list with some text in different languages, so check every one of them:
							for( var p=val.length-1;p>-1;p-- ) {
								if( val[p]['text'].length>dT.maxLength ) 
									return {status:921, statusText: txt}; 
							};
							break;
						case 'string':
							// single language according to schema 0.10.x:
							if( val.length>dT.maxLength ) 
								return {status:921, statusText: txt}; 
					};
					break;
				case 'xs:double':
			//		if( (val*Math.pow(10,dT.accuracy)%1)==0 ) return {status:922,statusText:""};
					val = parseFloat( val );
					if( val=='NaN' ) 
						return {status:925, statusText:etxt+": value is an invalid number"}; 
					if( val<dT.min ) 
						return {status:923, statusText:etxt+": double value must be larger than min"};
					if( val>dT.max ) 
						return {status:924, statusText:etxt+": double value must be smaller than max"}; 
					break;
				case 'xs:integer':
					// according to the schema, all property values are of type 'string', including the numbers:
					val = parseInt( val );
					if( val=='NaN' ) 
						return {status:925, statusText:etxt+": value is an invalid number"}; 
					if( val<dT.min ) 
						return {status:923, statusText:etxt+": integer value must be larger than min"};
					if( val>dT.max ) 
						return {status:924, statusText:etxt+": integer value must be smaller than max"}; 
					break;
				case 'xs:boolean':
					// according to the schema, all property values are of type 'string', including boolean:
					if( val!='true' && val!='false' ) 
						return {status:925, statusText:etxt+": boolean value is an invalid"}; 
					break;
				case 'xs:enumeration':
					var vL=val.split(',');
					// 'multiple' property at propertyClass supersedes 'multiple' at the dataType:
					if( vL.length>1 && !(pC.multiple || (pC.multiple==undefined && dT.multiple)) ) 
							return {status:926, statusText: etxt+": may not have more than one value"};
					// enumerated values in properties must be defined in the dataType of the corresponding propertyClass
					for( var v=vL.length-1;v>-1;v-- ) {
						vL[v] = vL[v].trim();
						if( vL[v] && indexById( dT.values, vL[v] )<0 ) 
							return {status:927, statusText: etxt+": enumerated values must be defined by the respective property type"}
					}
			}
			// all is fine
		};
		// else: empty values are allowed, so no return with error code
		return {status:0, statusText: etxt+": value lies within it's type value range"}
	}
	function checkProperties(cL,iL,typ) { 
		// check all properties of the instances listed in iL,
		// cL: class list, 
		// iL: instance list (resources, statements or up until v0.10.6 resp v0.11.6 hierarchies) to be checked:
		if( iL ) {
			let pr, propertyC, instanceC, extendedC, a, rc, et;
			for( var i=iL.length-1;i>-1;i-- ){
				if( iL[i].properties ) {
					instanceC = itemByKey(cL,iL[i][typ]); // the instance's class.
					// ToDo: error 919 is equal to 903, but there has been a case in which 919 has been raised. 
					if( !instanceC ) 
						return {status:919, statusText: "instance with identifier '"+iL[i].id+"' must reference a valid "+typ }; 
					for( a=iL[i].properties.length-1;a>-1;a-- ){
						pr = iL[i].properties[a];
						et = "property with class '"+pr[pClass]+"' of instance with identifier '"+iL[i].id+"'";
						// Property's propertyClass must point to a propertyClass of the respective resourceClass or statementClass:
						if( data.propertyClasses ) {
							// starting v0.10.6
							// a) property class id must be listed by the instance class or the extended instance class:
							extendedC = itemByKey( cL, instanceC['extends'] );
							if( instanceC.propertyClasses.indexOf(pr['class'])<0
								&& extendedC && extendedC.propertyClasses.indexOf(pr['class'])<0 )
								return {status:920, statusText: et+": class must be listed with the instance class or the extended instance class"}
							// b) the referenced property class must be defined:
							propertyC = itemByKey( data.propertyClasses, pr['class'] )
						} else {
							// up until v0.10.5
							// there is no class inheritance/extension, yet
							propertyC = itemById( instanceC[pClasses], pr[pClass] )
						};
						if( !propertyC ) 
							return {status:920, statusText: et+" must reference a valid propertyClass"}; 
						
						// Property's value ("content") must fit to the respective type's range
						rc = checkValue(propertyC,pr,et);
						if( rc.status>0 ) 
							return rc;
					}
				}
			}
		};
		return {status:0, statusText: "properties of all instances are well formed"}
	}
	function checkNodes(rL,ndL,lvl) {	// resourceList, nodeList, hierarchy level
		// Any node's "resource" must be the key of a member of "resources". 
		// A resource can just be an id string (where the revision=0 is assumed) or a key consisting of id and revision.
		if( ndL ) {
			var rc = null;
			for( var i=ndL.length-1;i>-1;i-- ){
				// Starting v0.10.8, hierarchy root nodes (lvl==0) reference a resource, but not before.
				// To recognize <v0.10.8, check for hClasses.
				if( (lvl>0 || !hClasses) && itemByKey(rL,ndL[i].resource)==undefined ) 
					return {status:909, statusText: "hierarchy node with identifier '"+ndL[i].id+"' must reference a valid resource"};	// check the node itself
				rc = checkNodes(rL,ndL[i].nodes,lvl+1);	// check references of next hierarchy levels recursively
				if(rc.status!=0) 
					return rc	
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
/*	function existsByKey( L, k ) {
		// Return the item in L with key k 
		//  - If the item in item list (L) has no specified revision, the reference may not specify a revision>0.
		//  - If k has no revision or revision==0, any item in L having the same id is acceptable
		//  - If k has a revision, there must be an item in L with the same key consisting of id and revision.
		//  - The uniqueness of keys has been checked, before.

		// normalize k:
		switch( typeof(k) ) {
			case 'object': break;
			case 'string': k = {id: k, revision: 0}; break;
			default: return null
		};
		let lR=null, eR = k.revision || 0;
		for( var i=L.length-1;i>-1;i-- ) {
			lR = L[i].revision || 0;
			// check existence of k:
			if ( L[i].id==k.id && ( lR==eR || eR==0 ) ) return true
		};
		return false
	}  */
	function itemByKey( L, k ) {
		// Return the item in L with key k 
		//  - If the item in item list (L) has no specified revision, the reference may not specify a revision>0.
		//  - If k has no revision or revision==0, the item in L having the latest revision applies.
		//  - If k has a revision, the item in L having an an equal or the next lower revision applies.
		//  - The uniqueness of keys has been checked, before.

		// normalize the key k:
		switch( typeof(k) ) {
			case 'object': break;
			case 'string': k = {id: k, revision: 0}; break;
			default: return null
		};
		// find all elements with the same id:
		let sId = L.filter( function(el) { return el.id==k.id });
		if( sId.length<1 ) return undefined;
		// we assume that all found elements have a revision or there is a single item without:
		if( sId[0].revision==undefined ) {
			// a single item without revision:
			if( k.revision>0 ) return null
			else return sId[0] // both the found element and the key have no revision
		};
		// The elements in L have a revision and there may be more than 1 of them:
		// sort revisions with descending order:
		sId.sort(function(laurel, hardy) { return hardy.revision - laurel.revision });
		if( k.revision == 0 ) return sId[0]; // the latest revision
		// find all elements with equal or smaller revision:
		sId = sId.filter( function(el) { return el.revision<=k.revision });
		if( sId.length>0 ) return sId[0];
		// else, there is no element with the requested revision:
		return undefined
	}  
	function errorsText(eL) {
		var eT = '';
		eL.forEach( function(e) { eT += (eT.length?',\n':'')+e.statusText+' ('+status+')'} );
		return eT
	}
}
