/*  Schema and constraint checking for native SpecIF data in JSON format. 
    Requires: ajv 4.8 or higher.
    License: Apache 2.0 (http://www.apache.org/licenses/)
    Author: se@enso-managers.de, enso managers gmbh, Berlin (http://www.enso-managers.de)
    We appreciate any correction, comment or contribution here on GitHub or via e-mail to support@reqif.de            
*/
function checkSchema( data, options ) {
    "use strict";
    // Check data using the supplied schema.
    // The return code uses properties similar to jqXHR, namely {status:900,statusText:"abc",responseType:"text",responseText:"xyz"}
    // Requires: https://github.com/epoberezkin/ajv/releases/tag/4.8.0 or later 
    // ToDo: localize messages, see https://github.com/epoberezkin/ajv-i18n 
    if( !options || !options.schema ) return null;
    if( typeof(options.allErrors)!='boolean' ) options.allErrors = true;

    const ajv = new Ajv({allErrors: options.allErrors});
    let validate = ajv.compile(options.schema);
        
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

    if( data.specifVersion && data.specifVersion.indexOf( '0.9.' )>-1 ) 
        return { status: 900, statusText: 'SpecIF version 0.9.x is not any more supported!' };

    // Set property names according to SpecIF version:
    switch( data['$schema'] || data.specifVersion ) {
        case '0.10.0':
        case '0.10.1':
        case '0.10.7':
        case '0.11.0':
        case '0.11.7':
            return { status: 900, statusText: 'SpecIF version '+data.specifVersion+' is not any more supported!' };
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
    if( data.specifVersion ) 
        // for all versions <1.0:
        var fractionDigits = 'accuracy',
            minInclusive = 'min',
            maxInclusive = 'max'
    else
        // starting SpecIF v1.0:
        var fractionDigits = 'fractionDigits',
            minInclusive = 'minInclusive',
            maxInclusive = 'maxInclusive';

    // Set default:
    if( typeof(options)!='object' ) options = {};
    if( !Array.isArray(options.dontCheck) ) options.dontCheck = [];

    // Handling return code and error list:
    var errorL=[];

    // ids must be unique unless when used as a reference:
    checkUniqueKeys( data );

    // dataTypes must respect certain constraints depending on their base type:
    checkDataTypes( data.dataTypes );

    // A propertyClass's "dataType" must be the key of a member of "dataTypes":
    checkPropertyClasses( data.propertyClasses );  // propertyClasses at top level starting with v0.10.6 and v0.11.6

    checkElementPropertyClasses( data[rClasses] );
    checkElementPropertyClasses( data[sClasses] );
    // up until v0.10.6 resp. v0.11.6:
    if( hClasses )
        checkElementPropertyClasses( data[hClasses] );

    // statementClass' subjectClasses and objectClasses must be resourceClass or statementClass ids:
    checkStatementClasses();

    // extends must specify a valid resource resp statement class: 
    checkClasses( data[rClasses], data[rClasses], 'extends' );
    checkClasses( data[sClasses], data[sClasses], 'extends' );

    // in case of resources, the value of "class" must be the id of a member of "resourceClasses":
    checkClasses( data[rClasses], data.resources, rClass );
    // in case of statements, the value of "class" must be the id of a member of "statementClasses":
    checkClasses( data[sClasses], data.statements, sClass );
    // in case of hierarchies, the value of "class" must be the id of a member of "hierarchyClasses",
    // up until v0.10.6 resp. v0.11.6:
    if( hClasses )
        checkClasses( data[hClasses], data.hierarchies, hClass );

    // property values ("content") must fit the respective class' range:
    checkProperties( data[rClasses], data.resources, rClass );
    checkProperties( data[sClasses], data.statements, sClass );
    // up until v0.10.6 resp. v0.11.6:
    if( hClasses )
        checkProperties( data[hClasses], data.hierarchies, hClass );

    // statement's subject and object must be resource keys:
    checkStatements( data, data.statements );

    // A hierarchy node's "resource" must be the key of a member of "resources":
    checkNodes( data.resources, data.hierarchies, 0 );

    return errorL.length<1?{ status: 0, statusText: 'SpecIF constraints have been checked successfully!' }
            :{ status: 902, statusText: 'SpecIF constraints are violated', responseType: 'text', responseText: errorsText(errorL) };

    // The checking routines:
    function checkUniqueKeys(iE) {
        // All keys consisting of 'id' and 'revision' must be unique (unless when used as a reference).
        // Further conditions: 
        //  - all occurrences of items with the same id have a specified revision>0.
        //  - or there is just one occurrence of an id without revision

        function duplicateKey(L) {
            if( !L || L.length<1 ) return;
            
            // A key consists of id and revision; the combination must be unique.
            // Add every checked key to allKeys,
            // return 'undefined', only if all elements of L are not contained in allKeys,
            // return the first element, which has a duplicate key.
            // Data arriving here has passed the schema checking, so there is a valid id where it is expected.

                function containsByKey( L, el ) {
                    // L[i] and el must be an item/key consisting of id and revision
                    // return true, if el is contained in L;
                    let lR, eR=el.revision || 0;
                    for( var i=L.length-1;i>-1;i-- ) {
                        lR = L[i].revision || 0;
                        if ( L[i].id==el.id && ( lR==eR || lR==0 || eR==0 ) ) return true
                    };
                    return false
                }
            var dk, e1;
            for( var i=L.length-1;i>-1;i-- ) {
                // it has been checked by schema that valid identifiers are present where mandatory;
                // so we can skip the checking for duplicates, if there is no id, e.g. in case of properties:
                if( L[i].id==undefined ) continue;
                // But if it is defined, it must be unique:
                e1 = L[i]; 
                // check the element's id:
                if( containsByKey(allKeys,e1) ) return e1;
                // check the identifiers of enumerated values in dataTypes:
                dk = duplicateKey(e1.values);
                if( dk ) return dk;
                // check the identifiers of propertyClasses (before v0.10.6 resp v0.11.6):
                dk = duplicateKey(e1[pClasses]);
                if( dk ) return dk;
                // the instance's properties may not have an id ...
                dk = duplicateKey(e1.properties);
                if( dk ) return dk;
                // check the hierarchy's nodes recursively:
                dk = duplicateKey(e1.nodes);
                if( dk ) return dk;
                // all is fine, but add the latest key to the list:
                allKeys.push(e1);
            };
        }

        let allKeys=[],
            dK = duplicateKey(iE.dataTypes);
        if( dK ) errorL.push({status:911, statusText: "dataType "+dK.id+" with revision "+dK.revision+" is not unique"});
        dK = duplicateKey(iE.propertyClasses);        // starting with v0.10.6 resp v0.11.6
        if( dK ) errorL.push({status:911, statusText: "propertyClass "+dK.id+" with revision "+dK.revision+" is not unique"});
        dK = duplicateKey(iE[rClasses]);
        if( dK ) errorL.push({status:911, statusText: rClass+" or propertyClass "+dK.id+" with revision "+dK.revision+" is not unique"});
        dK = duplicateKey(iE[sClasses]);
        if( dK ) errorL.push({status:911, statusText: sClass+" or propertyClass "+dK.id+" with revision "+dK.revision+" is not unique"});
        dK = duplicateKey(iE[hClasses]);
        if( dK ) errorL.push({status:911, statusText: hClass+" or propertyClass "+dK.id+" with revision "+dK.revision+" is not unique"});
        dK = duplicateKey(iE.resources);
        if( dK ) errorL.push({status:911, statusText: "resource "+dK.id+" with revision "+dK.revision+" is not unique"});
        dK = duplicateKey(iE.statements);
        if( dK ) errorL.push({status:911, statusText: "statement "+dK.id+" with revision "+dK.revision+" is not unique"});
        dK = duplicateKey(iE.hierarchies);
        if( dK ) errorL.push({status:911, statusText: "hierarchy "+dK.id+" with revision "+dK.revision+" is not unique"});
        dK = duplicateKey(iE.files);
        if( dK ) errorL.push({status:911, statusText: "file identifier '"+dK.id+"' with revision "+dK.revision+" is not unique"});
    }
    function checkDataTypes(L) {
        // starting v0.10.8 resp. v0.11.8 the dataTypes are optional and thus may be omitted in simple cases:
        if( Array.isArray(L) ) {
            L.forEach( function( dT ) {
                switch(dT.type) {
                    case 'xs:double':
                    case 'xs:integer':
                        if( dT[minInclusive]+1>dT[maxInclusive] ) 
                            errorL.push({status:929, statusText: "if number types have "+minInclusive+" and "+maxInclusive+", the former must be smaller or equal than the latter"});
                }                        
            });
		}
        // all is fine
    }
    function checkClasses(cL,iL,type) {  // class list, instance list
        // This routine is used in 2 situations:
        // - In case of resources, the value of "class" must be the key of a member of "resourceClasses". 
        //   Similarly for statements and hierarchies.
        // - In case of resourceClasses, the value of "extends" (if it exists) must be the key of a member of "resourceClasses". 
        //   Similarly for statements.
        if( Array.isArray(cL) ) {
			iL.forEach( function( el ){
				if( el[type] && !itemByKey(cL, el[type]) ) 
					errorL.push({status:903, statusText: "item with identifier '"+el.id+"' must reference a valid "+type });
			});
        };
        // all is fine
    }
    function checkPropertyClasses(cL) {  // class list
        if( Array.isArray(cL) ) {
            // starting v0.10.6 resp v0.11.6,
            // cL is the top-level list of propertyClasses for use by all resourceClasses and statementClasses:
            cL.forEach( function( propertyC ){
                // A propertyClass's "dataType" must be the key of a member of "dataTypes":
                if( itemByKey( data.dataTypes, propertyC.dataType)==undefined ) 
                    errorL.push({status:904, statusText: "property class with identifier '"+propertyC.id+"' must reference a valid dataType"});
                // check the value (to be used by default of an instance's - thus property's value):
                checkValue(propertyC,propertyC,"property class '"+propertyC.id+"'");
            });
        };
        // all is fine
    }
    function checkElementPropertyClasses(cL) {  
        if( Array.isArray(cL) ) {
            // cL is a list of resourceClasses, statementClasses or in earlier versions hierarchyClasses:
            cL.forEach( function( eC ){
                // for each class:
                if( Array.isArray( eC[pClasses] ) ) {
                    // a resourceClass, statementClass or hierarchyClass *has* propertyClasses:
                    eC[pClasses].forEach( function( propertyC ) {
                        // A class's propertyClass
                        // depending on the version, 
                        // - propertyC is a string: It is the identifier of an element of data.propertyClasses (starting v0.10.6 resp v0.11.6)
                        // - propertyC is an object: Then, it can be 
                        // -- either a key pointing to an element of data.propertyClasses (starting v0.10.6 resp v0.11.6)
                        // -- or a property class defined here (up until v0.10.5 resp v0.11.2)
                        // Note that itemByKey() handles keys in both forms 'identifier' or {id:'identifier',revision:'str'},
                        // so we have just to decide whether propertyC is a key or a propertyClass definition:
                        if( data.propertyClasses ) {
                            // starting v0.10.6 resp v0.11.6: 
                            // The propertyClass must be a valid key of an item in data.propertyClasses:
                            if( itemByKey( data.propertyClasses, propertyC )==undefined )
                                errorL.push({status:930, statusText: "property class of item with identifier '"+eC.id+"' must reference an item in 'propertyClasses'" });
                        } else {
                            // up until v0.10.5 resp v0.11.2 the propertyClasses are defined with each resourceClass, statementClass and hierarchyClass.
                            // A propertyClass's "dataType" must be the key of a member of "dataTypes":
                            if( itemByKey( data.dataTypes, propertyC.dataType)==undefined ) 
                                errorL.push({status:904, statusText: "property class with identifier '"+propertyC.id+"' must reference a valid dataType"});
                            // check the value (to be used by default of an instance's - thus property's value):
                            checkValue(propertyC,propertyC,"property class '"+propertyC.id+"'");
                        }
                    });
                };
            });
        };
        // all is fine
    }

    function checkStatementClasses() {    
        // All statementClass' "subjectClasses" must be the key of a member of "resourceClasses" or "statementClasses". 
        // "subjectClasses" is optional, but if present, the list may not be empty (as enforced by the schema).
        // Similarly for "objectClasses".
        function checkEls(aCL,cL) {
            // No subjectClasses resp. objectClasses means all classes are eligible.
            // The propertyClasses have already been checked by checkClsses().
            if( cL ) { 
                // each value in cL must be the key of a member of aCL:
                for( var i=cL.length-1;i>-1;i-- ) {
                    if( itemByKey(aCL, cL[i])==undefined ) return false;
                }
            };
            return true;
        }

        let aCL = data[rClasses].concat(data[sClasses]), 
            sCL = data[sClasses];    // statementClasses
        sCL.forEach( function( sC ){
            if( !checkEls(aCL, sC[subClasses]) ) 
                errorL.push({status:906, statusText: subClasses+" of "+sClass+" with identifier '"+sC.id+"' must reference a valid "+rClass });
            if( !checkEls(aCL, sC[objClasses]) ) 
                errorL.push({status:907, statusText: objClasses+" of "+sClass+" with identifier '"+sC.id+"' must reference a valid "+rClass });
        });
    }
    function checkStatements(dta,staL) { 
        // (It has been checked before that any "statement" is indeed of type "statementClass").
        let instanceL = dta.resources.concat(dta.statements),
            classL = dta[rClasses].concat(dta[sClasses]);
        staL.forEach( function(sta,i) {

            // A statement's "subject" must be the key of a member of "resources" or "statements":
            if( itemByKey( instanceL, sta.subject )==undefined && options.dontCheck.indexOf('statement.subject')<0 ) 
                errorL.push({status:908, statusText: "subject of statement["+i+"] with identifier '"+sta.id+"' must reference a valid resource or statement"});

            // Equally, an "object" must be the key of a member of "resources" or "statements":
            if( itemByKey( instanceL, sta.object )==undefined && options.dontCheck.indexOf('statement.object')<0 ) 
                errorL.push({status:909, statusText: "object of statement["+i+"] with identifier '"+sta.id+"' must reference a valid resource or statement"});

            let staC = itemByKey( dta[sClasses], sta[sClass] );		// the statement's class
			
            // If there are no staC[subClasses], all subjectClasses are eligible and so no checking is necessary.
            if( Array.isArray(staC[subClasses]) ) {
                let subj = itemByKey( instanceL, sta.subject ),	// the statement's subject, can be a resource or (starting with v0.10.8) a statement
                    eligibleCL = [];							// the list of eligible classes
                staC[subClasses].forEach( function(c) { let e=itemByKey( classL, c ); if(e) eligibleCL.push(e); });
//              console.debug('checkStatements',i,sta,staC,subj,obj,eligibleCL);

                // The subject's class must be listed in the statementClass' subjectClasses;
			    // in earlier versions, only resources were eligible as subject and object,
			    // and in later versions, where resources and statements are eligible, both have the same 'class' attribute, so subj[rClass] covers all cases:
                if( !itemByKey( eligibleCL, subj[rClass] ) )
                    errorL.push({status:919, statusText: "the subject of statement["+i+"] with identifier '"+sta.id+"' has a class which is not listed in the "+subClasses+" of the statement's class"});
            };

            // ... and similarly for object's class: 
            if( Array.isArray(staC[objClasses]) ) {
                let obj = itemByKey( instanceL, sta.object ),	// the statement's object, can be a resource or (starting with v0.10.8) a statement
                    eligibleCL = [];							// the list of eligible classes
                staC[objClasses].forEach( function(c) { let e=itemByKey( classL, c ); if(e) eligibleCL.push(e); });

                if( !itemByKey( eligibleCL, obj[[rClass]] ) )
                    errorL.push({status:919, statusText: "the object of statement["+i+"] with identifier '"+sta.id+"' has a class which is not listed in the "+objClasses+" of the statement's class"});
            };

        /*  // The statement's subject and object must not be the same:
            if( sta.subject == sta.object ) 
                errorL.push({status:90X, statusText: ""}); */
        });
    }
    function checkValue(pC,prp,etxt) { 
        let val = prp.value;
        if( val ) {
            // according to the schema, all property values are of type 'string', including boolean and numbers:
            let dT = itemByKey(data.dataTypes,pC.dataType);
            if( !dT ) {
				errorL.push({status:904, statusText: "propertyClass with identifier '"+pC.id+"' must reference a valid dataType"});
                return;	
            };				
            switch(dT.type) {
                case 'xhtml':
                case 'xs:string': 
                    // A property value of this type may be either a string or a list of objects with 'text' and 'language' attributes:
                    // here, the checking is more restrictive than the schema which does not require a 'maxLength' attribute:
                    if( dT.maxLength==undefined || options.dontCheck.indexOf('text.length')>-1 ) 
						break;
                    let txt = etxt+": string value must not exceed maxLength";
                    switch( typeof(val) ) {
                        case 'object':
                            // val is a list with some text in different languages, so check every one of them:
                            val.forEach( function( lv ) {
                                if( lv['text'].length>dT.maxLength ) 
                                    errorL.push({status:921, statusText:txt});
                            });
                            break;
                        case 'string':
                            // single language:
                            if( val.length>dT.maxLength ) 
                                errorL.push({status:921, statusText:txt});
                    };
                    break;
                case 'xs:double':
            //      if( (val*Math.pow(10,dT[fractionDigits])%1)==0 ) return {status:922,statusText:""};
                    val = parseFloat( val );
                    if( val=='NaN' ) 
                        errorL.push({status:925, statusText:etxt+": value is an invalid number"}); 
                    if( dT[minInclusive] && val<dT[minInclusive] ) 
                        errorL.push({status:923, statusText:etxt+": double value must be larger than min"});
                    if( dT[maxInclusive] && val>dT[maxInclusive] ) 
                        errorL.push({status:924, statusText:etxt+": double value must be smaller than max"}); 
                    break;
                case 'xs:integer':
                    // according to the schema, all property values are of type 'string', including the numbers:
                    val = parseInt( val );
                    if( val=='NaN' ) 
                        errorL.push({status:925, statusText:etxt+": value is an invalid number"}); 
                    if( dT[minInclusive] && val<dT[minInclusive] ) 
                        errorL.push({status:923, statusText:etxt+": integer value must be larger than min"});
                    if( dT[maxInclusive] && val>dT[maxInclusive] ) 
                        errorL.push({status:924, statusText:etxt+": integer value must be smaller than max"}); 
                    break;
                case 'xs:boolean':
                    // according to the schema, all property values are of type 'string', including boolean:
                    if( val!='true' && val!='false' ) 
                        errorL.push({status:925, statusText:etxt+": boolean value is an invalid"}); 
                    break;
                case 'xs:enumeration':
                    var vL=val.split(',');
                    // 'multiple' property at propertyClass supersedes 'multiple' at the dataType:
                    if( vL.length>1 && !( pC.multiple || ( typeof(pC.multiple)!=boolean && dT.multiple ))) 
                            errorL.push({status:926, statusText: etxt+": may not have more than one value"});
                    // enumerated values in properties must be defined in the dataType of the corresponding propertyClass
                    vL.forEach( function( v ) {
                        v = v.trim();
                        if( v && indexById( dT.values, v )<0 ) 
                            errorL.push({status:927, statusText: etxt+": enumerated values must be defined by the respective property type"});
                    })
            }
            // all is fine
        };
        // else: empty values are allowed
    }
    function checkProperties(cL,iL,typ) { 
        // check all properties of the instances listed in iL,
        // iL: instance list (resources, statements or up until v0.10.6 resp v0.11.6 hierarchies) to be checked
        // cL: the instance's respective classes (i.e. resourceClasses, if iL contains resources)
        if( Array.isArray(cL) && Array.isArray(iL) ) {
            let prp, propertyC, instanceC, extendedC, et;
            iL.forEach( function( ins ){
                if( ins.properties ) {
                    instanceC = itemByKey(cL,ins[typ]); // the instance's class.
                    // The instance's class must be members of cL (has already been checked with checkClasses()):
                    if( !instanceC ) 
                        errorL.push({status:903, statusText: "instance with identifier '"+ins.id+"' must reference a valid "+typ }); 
                    
                    ins.properties.forEach( function( prp ){
                        et = "property with class '"+prp[pClass]+"' of instance with identifier '"+ins.id+"'";
                        // Property's propertyClass must point to a propertyClass of the respective resourceClass or statementClass:
                        if( data.propertyClasses ) {
                            // starting v0.10.6
                            // a) property class id must be listed by the instance class or the extended instance class:
                            extendedC = itemByKey( cL, instanceC['extends'] );
                            if( (!instanceC.propertyClasses || instanceC.propertyClasses.indexOf(prp['class'])<0)
                                && (!extendedC || !extendedC.propertyClasses || extendedC.propertyClasses.indexOf(prp['class'])<0 ) )
                                errorL.push({status:920, statusText: et+": class must be listed with the instance class or the extended instance class"});
                            // b) the referenced property class must be defined:
                            propertyC = itemByKey( data.propertyClasses, prp['class'] )
                        } else {
                            // up until v0.10.5 there is no class inheritance/extension:
                            propertyC = itemById( instanceC[pClasses], prp[pClass] )
                        };
                        if( propertyC ) 
                            // Property's value ("content") must fit to the respective type's range
                            checkValue(propertyC,prp,et);
                        else
                            errorL.push({status:920, statusText: et+" must reference a valid propertyClass"}); 
                        
                    });
                };
            });
        };
    }
    function checkNodes(rL,ndL,lvl) {    // resourceList, nodeList, hierarchy level
        // Any node's "resource" must be the key of a member of "resources". 
        // A resource can just be an id string (where the latest revision is assumed) or a key consisting of id and revision.
        if( ndL ) {
            ndL.forEach( function( nd ){
                // Starting v0.10.8, hierarchy root nodes (lvl==0) reference a resource, but not before.
                // To recognize <v0.10.8, check for hClasses.
                if( (lvl>0 || !hClasses) && !itemByKey(rL,nd.resource) ) 
                    errorL.push({status:909, statusText: "hierarchy node with identifier '"+nd.id+"' must reference a valid resource"});    // check the node itself
                checkNodes(rL,nd.nodes,lvl+1);    // check references of next hierarchy levels recursively
            })
        };
    }
    function indexById(L,id) {
        if( Array.isArray(L) && id ) {
            // given the id of an element in a list, return it's index:
            id = id.trim();
            for( var i=L.length-1;i>-1;i-- )
                if( L[i].id === id ) return i;   // return list index 
		};
        return -1
    }
/*    function existsByKey( L, k ) {
        // Return the item in L with key k 
        //  - If the item in item list (L) has no specified revision, the reference may not specify a revision>0.
        //  - If k has no revision or revision==0, any item in L having the same id is acceptable
        //  - If k has a revision, there must be an item in L with the same key consisting of id and revision.
        //  - The uniqueness of keys has been checked, before.

        // clone the key k to not modify the submitted data-set ... and normalize:
        let _k;
        switch( typeof(k) ) {
            case 'object': _k = {id:k.id,revision:k.revision}; break;
            case 'string': _k = {id:k, revision: ""}; break;
            default: return null  // should never arrive here
        };
        let lR=null, eR = _k.revision || 0;
        for( var i=L.length-1;i>-1;i-- ) {
            lR = L[i].revision || 0;
            // check existence of _k:
            if ( L[i].id==_k.id && ( lR==eR || eR==0 ) ) return true
        };
        return false
    }  */
    function itemByKey( L, k ) {
        // Return the item in L with key k 
        //  - If the item in item list (L) has no specified revision, the reference may not specify a revision.
        //  - If k has no revision, the item in L having the latest revision applies.
        //  - If k has a revision, the item in L having an an equal or the next lower revision applies.
        //  - The uniqueness of keys has been checked, before.

        // Clone the key k to not modify the submitted data-set ... and normalize:
        let _k;
        switch( typeof(k) ) {
            case 'object': _k = {id:k.id,revision:k.revision}; break;
            case 'string': _k = {id:k, revision: ""}; break;
            default: return  // should never arrive here
        };
        // Find all elements with the same id:
        let itemsWithEqId = L.filter( function(e) { return e.id==_k.id });
        if( itemsWithEqId.length<1 ) return; // no element with the specified id
        
        if( itemsWithEqId.length==1 && !itemsWithEqId[0].revision ) {
            // a single item without revision has been found:
            if( _k.revision ) return // revisions don't match (this should not occur)
            else return itemsWithEqId[0] // both the found element and the key have no revision
        };
    
        // The elements in L have a revision and there may be more than 1 of them.
        // Sort revisions with descending order:
        itemsWithEqId.sort( function(laurel,hardy) { return hardy.changedAt - laurel.changedAt });
        if( !_k.revision ) return itemsWithEqId[0]; // return the latest revision
        
        // Find the element with equal revision:
        let itemsWithEqRev = itemsWithEqId.filter( function(e) { return e.revision==_k.revision });
        if( itemsWithEqRev.length>0 ) return itemsWithEqRev[0];
        // else, there is no element with the requested revision:
        // return undefined
    }  
    function errorsText(eL) {
        var eT = '';
        eL.forEach( function(e) { eT += (eT.length?',\n':'')+e.statusText+' ('+status+')'} );
        return eT
    }
}
