/*	Schema and constraint checking for native SpecIF data in JSON format. 
	Requires: jQuery 2.2 or higher, ajv 4.8 or higher.
	License: Apache 2.0 (http://www.apache.org/licenses/)
	Author: se@enso-managers.com, enso managers gmbh, Berlin (http://www.enso-managers.com)
	We appreciate any correction, comment or contribution here on GitHub or via e-mail to support@reqif.de            
*/
	function checkSchema(data) {
		// Check data using the specified revision of the SpecIF schema.
		// The return code uses properties similar to xhr, namely {status:900,statusText:"abc",responseText:"xyz"}
		// Requires: https://github.com/epoberezkin/ajv/releases/tag/4.8.0 or later 
		// ToDo: localize, see https://github.com/epoberezkin/ajv-i18n 
		var ajv = Ajv({allErrors: true}),
			validate = null,
			dO = $.Deferred();
		
		// Get the specified schema file from the server:
		GET( "./schema/specif-schema-"+data.specifVersion+".json" )
			.done( function(schema) {
				validate = ajv.compile(schema);
				// check data against schema using the compiled validation routine:
				var valid = validate(data);
				if( valid ) {
					dO.resolve({ status: 0, statusText: 'SpecIF schema has been checked successfully!' })
				} else {
					var rt = ajv.errorsText(validate.errors);
//					console.log( rt );
					dO.reject({ status: 901, statusText: 'SpecIF schema is violated', responseText: rt })
				}
			})
			.fail( function(xhr) { 
					xhr.statusText = 'File "specif-schema-'+data.specifVersion+'.json" not found';
					dO.reject(xhr)
			});
		return dO;
		
		function GET(reqURL) {
			return $.ajax({
				url: reqURL,
				type: 'GET',
				accept: "application/json",
				headers: {"Ajax-Request": "true"},    // get rid of the login dialog
				cache: false
			})
		}
	}
	function checkConstraints(data) {
		// Check the constraints of the concrete values in 'data'.
		// The return code uses properties similar to xhr, namely {status:900,statusText:"abc",responseText:"xyz"}
		// ToDo: localize text and take it from language files.
		var rc={},errL=[],
			dO = $.Deferred();

		// ids must be unique unless when used as a reference:
		rc = checkUniqueIds( data );
		if( rc.status>0 ) errL.push(rc);

		// in case of objects, the value of "objectType" must be the id of a member of "objectTypes":
		rc = checkTypes( data.objectTypes, data.objects, 'objectType' );
		if( rc.status>0 ) errL.push(rc);
		// in case of relations, the value of "relationType" must be the id of a member of "objectTypes":
		rc = checkTypes( data.relationTypes, data.relations, 'relationType' );
		if( rc.status>0 ) errL.push(rc);
		// in case of hierarchies, the value of "hierarchyType" must be the id of a member of "objectTypes":
		rc = checkTypes( data.hierarchyTypes, data.hierarchies, 'hierarchyType' );
		if( rc.status>0 ) errL.push(rc);

/*	        // An attributeType's "dataType" must be the id of a member of "dataTypes":
		// .. these are now checked in checkAttrValues.
		rc = checkAttrTypes( data.dataTypes, data.objectTypes );
		if( rc.status>0 ) errL.push(rc);
		rc = checkAttrTypes( data.dataTypes, data.relationTypes );
		if( rc.status>0 ) errL.push(rc);
		rc = checkAttrTypes( data.dataTypes, data.hierarchyTypes );
		if( rc.status>0 ) errL.push(rc);
*/
		// sourceTypes and targetTypes must be objectType ids:
		rc = checkRelationTypeIds( data.objectTypes, data.relationTypes );
		if( rc.status>0 ) errL.push(rc);

		// attribute values ("content") must fit to the respective type's range
		rc = checkAttrValues( data.objectTypes, data.objects );
		if( rc.status>0 ) errL.push(rc);
		rc = checkAttrValues( data.relationTypes, data.relations );
		if( rc.status>0 ) errL.push(rc);
		rc = checkAttrValues( data.hierarchyTypes, data.hierarchies );
		if( rc.status>0 ) errL.push(rc);

		// source and target must be object ids:
		rc = checkRelationIds( data.objects, data.relations );
		if( rc.status>0 ) errL.push(rc);

		// A hierarchy node's "object" must be the id of a member of "objects":
		for( var h=0, H=data.hierarchies.length; h<H; h++) {
			rc = checkNodes( data.objects, data.hierarchies[h].nodes );
			if( rc.status>0 ) { errL.push(rc); break }
		};

		if( errL.length<1 )
			dO.resolve({ status: 0, statusText: 'SpecIF constraints have been checked successfully!' })
		else
			dO.reject({ status: 902, statusText: 'SpecIF constraints are violated', responseText: errorsText(errL) });
		return dO;

		// The checking routines:
		function checkUniqueIds(iE) {
			// All identifiers 'id' must be unique (unless when used as a reference).
			var allIds=[];
			var dId = duplicateId(iE.dataTypes);
			if( dId ) return {status:910, statusText: "dataType identifier '"+dId+"' is not unique"};
			dId = duplicateId(iE.objectTypes);
			if( dId ) return {status:911, statusText: "objectType or attributeType identifier '"+dId+"' is not unique"};
			dId = duplicateId(iE.relationTypes);
			if( dId ) return {status:912, statusText: "relationType or attributeType identifier '"+dId+"' is not unique"};
			dId = duplicateId(iE.hierarchyTypes);
			if( dId ) return {status:913, statusText: "hierarchyType or attributeType identifier '"+dId+"' is not unique"};
			dId = duplicateId(iE.objects);
			if( dId ) return {status:914, statusText: "object identifier '"+dId+"' is not unique"};
			dId = duplicateId(iE.relations);
			if( dId ) return {status:915, statusText: "relation identifier '"+dId+"' is not unique"};
			dId = duplicateId(iE.hierarchies);
			if( dId ) return {status:916, statusText: "hierarchy identifier '"+dId+"' is not unique"};
			return {status:0, statusText: 'identifiers are unique'}
			
			function duplicateId(L) {
				// add every checked Id to allIds,
				// return 'null', only if all elements of L are not contained in allIds,
				// return the first id, which is contained in allIds:
				if(!L || !L.length) return null;
				for( var i in L ) {
					// check the element's id:
					if( allIds.indexOf(L[i].id)>-1 ) return L[i].id;
					// check the attributeType's identifiers, as well:
					// (the instance's attributes do not have an id ...)
					if( L[i].attributeTypes ) {
						var rc = duplicateId(L[i].attributeTypes);
						if( rc ) return rc
						// ToDo: check value identifiers of enumerated attribute types
					}; 
					allIds.push(L[i].id)
				};
				return null
			}
		}
		function checkNodes(L,nds) {
			// Any node's "object" must be the id of a member of "objects". 
			var rc = null;
			for( var i in nds ){
				if(indexById(L,nds[i].object)<0) return {status:909, statusText: "hierarchy node with identifier '"+nds[i].id+"' must reference a valid object"};	// check the node itself
				rc = checkNodes(L,nds[i].nodes);	// check references of next hierarchy levels recursively
				if(rc.status!=0) return rc	
			};
			return {status:0, statusText: "hierarchy nodes reference valid objects"}		// all's fine!
		}
		function checkTypes(L,els,type) {
			// In case of objects, the value of "objectType" must be the id of a member of "objectTypes". 
			// Similarly for relations and hierarchies.
			var sTi=null;
			for( var i in els ){
				sTi = indexById(L, els[i][type]);
				if(sTi<0) return {status:903, statusText: "instance with identifier '"+els[i].id+"' must reference a valid type"}
//				if( !checkAttrTypeIds(L[sTi].attributeTypes,els[i].attributes) ) return {status:920, statusText: "attributes of instance with identifier '"+els[i].id+"' must reference valid attributeTypes"}
			};
			return {status:0, statusText: "instance's "+type+" and attributeTypes reference valid types"}	
				
/*	  function checkAttrTypeIds(L,atts) {
				// all attribute's "attributeType" must be the id of a member of "attributeTypes":
				// .. these are now checked in checkAttrValues.
				for( var j in atts ) {
					if(indexById(L, atts[j].attributeType)<0) return false
				};
				return true
			}
*/	}
/*	function checkAttrTypes(L,sTs) {
			// An attributeType's "dataType" must be the id of a member of "dataTypes".
			// .. these are now checked in checkAttrValues.
			for( var i in sTs ){
				for( var j in sTs[i].attributeTypes ) {
					if(indexById(L, sTs[i].attributeTypes[j].dataType)<0) return {status:904, statusText: "attributeType with identifier '"+sTs[i].attributeTypes[j].id+"' must reference a valid dataType"}
				}
			};
			return {status:0, statusText: "attributeTypes reference valid dataTypes"}
		}
*/
		function checkRelationTypeIds(oTL,rTL) {	// objectTypes, relationTypes
			// All relationType's "sourceTypes" must be the id of a member of "objectTypes". 
			// Similarly for "targetTypes".
			for( var i in rTL ){
				if( !checkEls(oTL, rTL[i].sourceTypes) ) return {status:905, statusText: "sourceTypes of relationType with identifier '"+rTL[i].id+"' must reference valid objectTypes"};
				if( !checkEls(oTL, rTL[i].targetTypes) ) return {status:906, statusText: "targetTypes of relationType with identifier '"+rTL[i].id+"' must reference valid objectTypes"}
			};
			return {status:0, statusText: "relationType's sourceTypes and targetTypes reference valid objectTypes"};
			
			function checkEls(L,els) {
				// each value in els must be the id of a member of L:
				for( var j in els ) {
					if(indexById(L, els[j])<0) return false
				};
				return true
			}
		}
		function checkRelationIds(oL,rL) {	// objects, relations
			// A relation's "source" must be the id of a member of "objects". 
			// Similarly for "target".
			// (It has been checked before that any "object" is indeed of type "objectType").
			for( var i in rL ){
				if(indexById(oL, rL[i].source.id)<0) return {status:907, statusText: "source of relation with identifier '"+rL[i].id+"' must reference a valid object"};
				if(indexById(oL, rL[i].target.id)<0) return {status:908, statusText: "target of relation with identifier '"+rL[i].id+"' must reference a valid object"};
//					if( rL[i].source == rL[i].target ) return {status:90X, statusText: ""}
			};
			return {status:0, statusText: "relation's sources and targets reference valid objects"}
		}
		function checkAttrValues(tL,iL) {   // type list, instance list (objects, relations or hierarchies)
			// Attribute values ("content") must fit to the respective type's range
			var aT=null, dT=null;
			for( var i=0,I=iL.length;i<I;i++ ){
				if( iL[i].attributes )
					for( var a=0,A=iL[i].attributes.length;a<A;a++ ){
						if( iL[i].attributes[a].value ) {
							aT = attrTypeById(tL,iL[i].attributes[a].attributeType);
							if( !aT ) return {status:920, statusText: "attributes of instance with identifier '"+iL[i].id+"' must reference valid attributeTypes"}; 
							dT = itemById(data.dataTypes,aT.dataType);
							if( !dT ) return {status:904, statusText: "attributeType with identifier '"+aT.id+"' must reference a valid dataType"}; 
							switch(dT.type) {
								case 'xs:string': 
									if( iL[i].attributes[a].value.length>dT.maxLength ) return {status:921, statusText: "strings must not exceed maxLength"}; 
									break;
								case 'xs:double':
//								if( (iL[i].attributes[a].value*Math.pow(10,dT.accuracy)%1)==0 ) return {status:922;
								case 'xs:integer':
									if( iL[i].attributes[a].value<dT.min ) return {status:923, statusText: "numbers must be larger than min"};
									if( iL[i].attributes[a].value>dT.max ) return {status:924, statusText: "numbers must be smaller than max"}; 
									break;
/*							case 'xs:boolean':
									if( iL[i].attributes[a].value!=true && iL[i].attributes[a].value!=false ) return {status:925,statusText:""}; 
									break;
*/							case 'xs:enumeration':
									// enumerated values in attributes must be defined in the dataType of the corresponding attributeType  (ToDo)
									var vL=iL[i].attributes[a].value.split(',');
									if( vL.length>1 && !aT.multiple ) return {status:926, statusText: ""};
									for( var v=0,V=vL.length;v<V;v++ ) {
										vL[v] = vL[v].trim();
										if( vL[v] && indexById( dT.values, vL[v] )<0 ) return {status:927, statusText: "enumerated valus must be defined by the respective attribute type"}
									}
							}						
						}
						// else: empty values are allowed, so no return with error code
					}
			};
			return {status:0, statusText: "attributeValues lie within their type's value ranges"}
		}
		function attrTypeById(sT,id) {
			// given an attributeType's Id, return the attributeType:
//				id = id.trim();
			for( var t=sT.length-1; t>-1; t-- ) { // fastest loop with single variable
				for( var a=sT[t].attributeTypes.length-1; a>-1; a-- ) {
					if( sT[t].attributeTypes[a].id==id ) return sT[t].attributeTypes[a]
				}
			};
			return null  // should never arrive here ...
		}
		function errorsText(eL) {
			var eT = '';
			eL.forEach( function(e) { eT += (eT.length?', ':'')+e.statusText} );
			return eT
		}
	}
