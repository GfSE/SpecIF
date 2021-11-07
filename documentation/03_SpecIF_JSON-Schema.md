# SpecIF JSON-Schema

The SpecIF JSON-schema describes the syntax of SpecIF data as a concrete instance of the SpecIF-Metamodel, like it was described earlier in this specification.
The JSON-schema builds a platform-specific model (PSM), following the OMG MDA approach, realizing a JSON representation for SpecIF, based on the SpecIF metamodel.
The schema follows the JSON-schema standard defined here: https://json-schema.org/draft/2019-09/schema#.

The schema definition file for SpecIF is available under 

* https://specif.de/v1.1/schema.json or
* https://json.schemastore.org/specif-1.1.json

__Remark:__ The names, internally used in the JSON-schema for SpecIF all get a prefix `Specif`, 
followed by the names defined in the metamodel to avoid naming conflicts in 
implementations and code, generated from the schema definition, with equal names defined by other standards 
(e.g. the term *Node* is used in the JavaScript world by NodeJS and also defined in the SpecIF metamodel). 
So the metamodel term *Node* is called *SpecifNode* in the JSON-schema definition etc.

## SpecIF JSON example

The following example shows an empty SpecIF JSON-object to demonstrate the principle of data representation within SpecIF using JSON. 
Not all JSON-properties are set, but the SpecIF schema defines just a subset as mandatory:

```json
{
    "$schema": "https://specif.de/v1.1/schema.json",
    "id": "_3555D75E_0344_4BDF_B127_2340C7F2BF9A",
    "title": [ 
                {
                    "text": "Empty SpecIF file",
                    "format": "plain", 
                    "language": "en"
                },
                {
                    "text": "Eine leere SpecIF-Datei",
                    "format": "plain", 
                    "language": "de"
                }
             ],
    "isExtension": false,
    "dataTypes": [],
    "resourceClasses": [],
    "statementClasses": [],
    "resources": [],
    "statements": [],
    "hierarchies": [],
    "files": []
}
```

## Definition elements and data elements

The data and class definition in SpecIF is a cascading data structure: At first a data type is defined out of a set of primitive data types. 
The list below shows the available primitive data types based on the data types defined in XML-schemas (XSD):

* *xs:string* - a formatted or unformatted text string,
* *xs:boolean* - a boolean value,
* *xs:integer* - a number value,
* *xs:double* - a floating point number,
* *xs:dateTime* - a date value,
* *xs:anyURI* - a uniform resource identifier (URI) including a uniform resource locator (URL),
* *xs:duration* - a duration value.

Based on these primitive data types, a SpecIF user can define *DataType* elements. 
These data types can be used as base for *PropertyClass*-definitions. 
The property class definitions can then be used to define *ResourceClass*- and *StatementClass*-definitions. 
Using this approach all kinds of data representation can be defined in SpecIF.

The resources, statement, properties and hierarchies instantiate the class definitions. 
A SpecIF-tool can automatically generate a property editor for a resource or statement element, because all necessary information is available in the class and data type definition elements. 

A reference to another SpecIF element is always expressed using the *Key* -helper-element. 
It contains the *ID* and the *revision*-ID of the referenced element.
If no *revision* is given, the element with the newest ``changedAt`` date shall be used.

## Definition elements

### Data types

SpecIF data types define the data types used in a property to store a PLM data value. All data types are defined out of the primitive data types listed above. All data types, except enumerations, are defined in a very similar way. 

The JOSN-snippet below shows some data type definitions for non-enumeration types:

```json 
{
    "id": "DT-Boolean",
    "title": "Boolean",
    "description": [
        {
            "text": "The Boolean data type.",
            "format": "plain",
            "language": "en"
        }
    ],
    "revision": "1.1",
    "replaces": [],
    "type": "xs:boolean",
    "changedAt": "2016-05-26T08:59:00+02:00"
},
{
    "id": "DT-Byte",
    "title": "Byte",
    "description": [
        {
            "text": "A byte is an integer value in range between 0 and 255.",
            "format": "plain",
            "language": "en"
        }
    ],
    "revision": "1.1",
    "replaces": [],
    "type": "xs:integer",
    "minInclusive": 0,
    "maxInclusive": 255,
    "changedAt": "2016-05-26T08:59:00+02:00"
},
{
    "id": "DT-Integer",
    "title": "Integer",
    "description": [
        {
            "text": "A numerical integer value from -32768 to 32767.",
            "format": "plain",
            "language": "en"
        }
    ],
    "revision": "1.1",
    "replaces": [],
    "type": "xs:integer",
    "minInclusive": -32768,
    "maxInclusive": 32767,
    "changedAt": "2016-05-26T08:59:00+02:00"
},
{
    "id": "DT-Real",
    "title": "Real",
    "description": [
        {
            "text": "A floating point number (double).",
            "format": "plain",
            "language": "en"
        }
    ],
    "revision": "1.1",
    "replaces": [],
    "type": "xs:double",
    "changedAt": "2021-02-14T08:59:00+02:00"
},
{
    "id": "DT-Decimal2",
    "title": "Real with 2 Decimals",
    "description": [
        {
            "text": "A floating point number (double) with two fraction digits.",
            "format": "plain",
            "language": "en"
        }
    ],
    "revision": "1.1",
    "replaces": [],
    "type": "xs:double",
    "fractionDigits": 2,
    "changedAt": "2021-02-14T08:59:00+02:00"
},
{
    "id": "DT-DateTime",
    "title": "Date or Timestamp",
    "description": [
        {
            "text": "Date or Timestamp in ISO-Format",
            "format": "plain",
            "language": "en"
        }
    ],
    "revision": "1.1",
    "replaces": [],
    "type": "xs:dateTime",
    "changedAt": "2016-05-26T08:59:00+02:00"
},
{
    "id": "DT-ShortString",
    "title": "String[256]",
    "description": [
        {
            "text": "String with max. length 256",
            "format": "plain",
            "language": "en"
        }
    ],
    "revision": "1.1",
    "replaces": [],
    "type": "xs:string",
    "maxLength": 256,
    "changedAt": "2016-05-26T08:59:00+02:00"
},
{
    "id": "DT-Text",
    "title": "Plain or formatted Text",
    "description": [
        {
            "text": "An account of the resource (source: http://dublincore.org/documents/dcmi-terms/). Descriptive text represented in plain or rich text using XHTML. SHOULD include only content that is valid and suitable inside an XHTML &lt;div&gt; element (source: http://open-services.net/).",
            "format": "plain",
            "language": "en"
        }
    ],
    "revision": "1.1",
    "replaces": [],
    "type": "xs:string",
    "changedAt": "2021-02-23T08:59:00+02:00"
},
{
    "id": "DT-URL",
    "title": "URL",
    "description": [
        {
            "text": "A uniform resource locator.",
            "format": "plain",
            "language": "en"
        }
    ],
    "revision": "1.1",
    "replaces": [],
    "type": "xs:string",
    "maxLength": 1024,
    "changedAt": "2016-05-26T08:59:00+02:00"
},
{
    "id": "DT-EmailAddress",
    "title": "E-mail",
    "description": [
        {
            "text": "Data type to represent an E-mail address.",
            "format": "plain",
            "language": "en"
        }
    ],
    "revision": "1.1",
    "replaces": [],
    "type": "xs:string",
    "maxLength": 256,
    "changedAt": "2016-05-26T08:59:00+02:00"
}
```

### Enumerations

Any data type exept *'xs:boolean'* may define a set of enumerated values using the attribute *enumeration*.
If defined, only those discrete values are eligible. For example,
- a data type to be used for priority can be defined as *'xs:string'* with the enumerated values *['high', 'medium', 'low']*.
- a data type to be used for an effort in planning poker can be defined as *'xs:integer'* with the enumerated values *[0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]*.

SpecIF supports enumeration with multiple selection, so more than one value of an enumeration can be selected in a SpecIF property. 
If the JSON-attribute *multiple* is set to *true*, multiple selection is allowed.

The following data type definitions show an example for an enumeration data type definition with SpecIF using the *xs:string* data type:

```json
{
    "id": "DT-LifeCycleStatus",
    "title": "SpecIF:LifeCycleStatus",
    "description": [
        {
            "text": "Enumerated values for status"
        }
    ],
    "revision": "1.1",
    "replaces": [],
    "type": "xs:string",
    "enumeration": [
        {
            "id": "V-Status-0",
            "value": [
                {
                    "text": "SpecIF:LifecycleStatusDeprecated"
                }

            ]
        },
        {
            "id": "V-Status-1",
            "value": [
                {
                    "text": "SpecIF:LifecycleStatusRejected"
                }
            ]
        },
        {
            "id": "V-Status-2",
            "value": [
                {
                    "text": "SpecIF:LifecycleStatusInitial"
                }
            ]
        },
        {
            "id": "V-Status-3",
            "value": [
                {
                    "text": "SpecIF:LifecycleStatusDrafted"
                }
            ]
        },
        {
            "id": "V-Status-4",
            "value": [
                {
                    "text": "SpecIF:LifecycleStatusSubmitted"
                }
            ]
        },
        {
            "id": "V-Status-5",
            "value": [
                {
                    "text": "SpecIF:LifecycleStatusApproved"
                }
            ]
        },
        {
            "id": "V-Status-8",
            "value": [
                {
                    "text": "SpecIF:LifecycleStatusReady"
                }
            ]
        },
        {
            "id": "V-Status-6",
            "value": [
                {
                    "text": "SpecIF:LifecycleStatusDone"
                }
            ]
        },
        {
            "id": "V-Status-9",
            "value": [
                {
                    "text": "SpecIF:LifecycleStatusValidated"
                }
            ]
        },
        {
            "id": "V-Status-7",
            "value": [
                {
                    "text": "SpecIF:LifecycleStatusReleased"
                }
            ]
        },
        {
            "id": "V-Status-10",
            "value": [
                {
                    "text": "SpecIF:LifecycleStatusWithdrawn"
                }
            ]
        }
    ],
    "multiple": false,
    "changedAt": "2021-02-21T08:59:00+02:00"
}
```

### Property classes
   
Property classes define the type and kind of a property. 
The property is the SpecIF element containing the values of the PLM data. 
Resource and statement elements contain an array of defined property instances to store the PLM values.

The property class definitions are very important, because here the name resp. title of a property is defined. 
Properties are in principle key/value pairs representing data. 
The *title* JSON-property of the property class defines the term used for the property.

The SpecIF standard also contains a standardized set of data type and class definitions. 
The properties are one integral part of the standardized SpecIF data format vocabulary (syntax) and the standardization allows the data exchange between different tools without manual data mapping. 

An example of property class definitions is given below. 
If no ``format`` attribute is explicitly set, ``plain`` is used as default.

```json
{
    "id": "PC-Name",
    "title": "dcterms:title",
    "description": [
        {
            "text": "<p>A name given to the resource. <small>(<i>source: <a href=\"http://dublincore.org/documents/dcmi-terms/\">DCMI</a></i>)</small></p><p>Title (reference: Dublin Core) of the resource represented as rich text in XHTML content. SHOULD include only content that is valid inside an XHTML &lt;span&gt; element. <small>(<i>source: <a href=\"http://open-services.net/\">OSLC</a></i>)</small></p>",
            "format": "xhtml",
            "language": "en"
        }
    ],
    "revision": "1.1",
    "replaces": [],
    "dataType": {
        "id": "DT-ShortString",
        "revision": "1.1"
    },
    "changedAt": "2016-05-26T08:59:00+02:00"
},
{
    "id": "PC-Description",
    "title": "dcterms:description",
    "description": [
        {
            "text": "<p>An account of the resource. <small>(<i>source: <a href=\"http://dublincore.org/documents/dcmi-terms/\">DCMI</a></i>)</small></p><p>Descriptive text (reference: Dublin Core) about resource represented as rich text in XHTML content. SHOULD include only content that is valid and suitable inside an XHTML &lt;div&gt; element. <small>(<i>source: <a href=\"http://open-services.net/\">OSLC</a></i>)</small></p>",
            "format": "xhtml",
            "language": "en"
        }
    ],

    "revision": "1.1",
    "replaces": [],
    "format": "xhtml",
    "dataType": {
        "id": "DT-Text",
        "revision": "1.1"
    },
    "changedAt": "2016-05-26T08:59:00+02:00"
}
```

In the example you can see that as title for the property with the ID *PC-Name* the term *dcterms:title* is used. So this property class defines a property where the name of an PLM data element can be stored.

### Resource Classes
   
Resource classes define the resource types used to store PLM data. A resource class contains, similar to a property class, a definition for a title value, defining the syntax.  It also defines a list of key elements pointing to the property classes to define which properties are available to store data values in a resource, based on that resource class (JSON-property *propertyClasses*).

An example resource class definition is shown below. 
This example shows the resource class defining the data structure to store a requirement element following the IREB recommendation.

```json
{
    "id": "RC-Requirement",
    "title": "IREB:Requirement",
    "description": [
        {
            "text": "A 'Requirement' is a singular documented physical and functional need that a particular design, product or process must be able to perform."
        }
    ],
    "revision": "1.1",
    "replaces": [],
    "icon": "&#8623;",
    "isHeading": false,
    "instantiation": [
        "user"
    ],
    "propertyClasses": [
        {
            "id": "PC-VisibleId",
            "revision": "1.1"
        },
        {
            "id": "PC-Name",
            "revision": "1.1"
        },
        {
            "id": "PC-Description",
            "revision": "1.1"
        },
        {
            "id": "PC-RequirementType",
            "revision": "1.1"
        },
        {
            "id": "PC-Priority",
            "revision": "1.1"
        },
        {
            "id": "PC-LifeCycleStatus",
            "revision": "1.1"
        },
        {
            "id": "PC-Perspective",
            "revision": "1.1"
        },
        {
            "id": "PC-Discipline",
            "revision": "1.1"
        }
    ],
    "changedAt": "2021-02-22T08:59:00+02:00"
}
```
### Statement Classes
   
Statement classes define the statements (links between SpecIF data elements - resources, statements and files). Statements start at a subject data element and end on an object data element. It is possible to restrict the subjects and objects where a statement can be used by defining entries in the *subjectClasses*  and *objectClasses* JSON-properties of the statement class definition. If there are no entries, any element can be used as the statement's subject or object.

The following example of a statement class definition defines a statement that can be used between requirement resource elements. It defines the *IREB:refines* relationship. Also known as *deriveReqt* dependency in SysML:
```json
{
    "id": "SC-refines",
    "title": "IREB:refines",
    "description": [
        {
            "text": "The subject requirement refines the object requirement."
        }
    ],
    "revision": "1.1",
    "replaces": [],
    "instantiation": [
        "user"
    ],
    "subjectClasses": [
        {
            "id": "RC-Requirement",
            "revision": "1.1"
        }
    ],
    "objectClasses": [
        {
            "id": "RC-Requirement",
            "revision": "1.1"
        }
    ],
    "changedAt": "2016-05-26T08:59:00+02:00"
}
``` 
## Data elements

The SpecIF data elements resource and statement represent concrete PLM data. All data elements shall have a reference to the definition class element (resource class or statement class) using the *class* JSON-property element. 

SpecIF-properties defined for a resource or statement are stored inside a resource or statement element containing the data value of the represented PLM data. 

### Resources

Resources are the nodes in a SpecIF data set graph. They contain the concrete data values. All elements, that are no relations resp. connectors between elements are represented as resources in SpecIF.

The following example shows a resource representing a requirement element.
In the description property value the attributes for ``format`` and ``language`` are not explicitly set. 
So the default values are used: English as default language and the format defined in the *PropertyClass* of the property. 

The property values representing textual content are using the *MultilanguageText* data structure. 
The status value, defined as enumeration, uses a string with the ``EnumerationValue`` identifier (ID).

```json
{
    "id": "_73392B3D_CF8F_4ac0_BC77_E6A2C9415EF4",
    "revision": "F16C40BE-DFC4-46BB-85C4-FDF9433F8E73",
    "replaces": [],
    "class": {
        "id": "RC-Requirement",
        "revision": "1.1"
    },
    "properties": [
        {
            "values": [
                [
                    {
                        "text" : "Login",
                        "format" : "plain",
                        "language" : "en"
                    },
                    {
                        "text" : "Benutzeranmeldung",
                        "format" : "plain",
                        "language" : "de"
                    },
                ]
            ],
            "class": {
                "id": "PC-Name",
                "revision": "1.1"
            }
        },
        {
            "values": [
                [
                    {
                        "text" : "The system shall provide the user with the ability to login."
                    },
                    {
                        "text" : "Das System muss dem Benutzer die Möglichkeit bieten sich anzumelden.",
                        "language" : "de"
                    }
                ]
            ],
            "class": {
                "id": "PC-Description",
                "revision": "1.1"
            }
        },
        {
            "values": [ 
                "V-Status-5" 
            ],
            "class": {
                "id": "PC-LifecycleStatus",
                "revision": "1.1"
            }
        }
    ],
    "changedAt": "2021-03-07T11:16:21",
    "changedBy": "oa"
}
```

### Statements

Statements are used in SpecIF to define relationships between concrete SpecIF data elements. Normally they express relationships between two resource elements. In some special cases they can also express relationships between two statements or a resource and a statement. This depends on what the given key for *subject* and *object* references.

Statements can have a list of properties to store additional data.

The following example shows a statement example. This statement has no properties defined.

```json
{
    "id": "_2186cb8d_390f_427c_9df3_a9756763b6ed",
    "revision": "820BFEE3-5808-4395-A0C2-F11E27FAFE59",
    "replaces": [],
    "class": {
        "id": "SC-contains",
        "revision": "1.1"
    },
    "subject": {
        "id": "_7BBB98BF_6966_46cd_A2B4_677B15CEC761",
        "revision": "2B750A3F-23B5-4ACB-9D70-FB09D9C2604F"
    },
    "object": {
        "id": "_73392B3D_CF8F_4ac0_BC77_E6A2C9415EF4",
        "revision": "E6F0C4F3-6939-4A82-B4D9-2E48B702B8A6"
    },
    "properties": [],
    "changedAt": "2021-03-29T15:13:54.0813277+02:00",
    "changedBy": "oa"
}
``` 

## Hierarchies and Nodes

The *hierarchies* array in the SpecIF data set contains a collection of *node* SpecIF elements. 
It is possible to create a hierarchical view to a selected set of resource elements, using node elements.
The *Node* is defined as a recursive data structure. 
Each node includes a reference to a selected resource (JSON-property *resource*) and the node can contain a collection of child nodes in the JSON-property *nodes*. 
This allows using the node to define a hierarchical view to SpecIF resource elements. 

A typical application scenario is the representation of a chapter structure from textual requirements specifications. 

The following example shows the application of nodes to create a hierarchy:
```json
"hierarchies": [
    {
      "id": "_16d04111_9db8_4e4c_8223_7ebd6ec2abac",
      "revision": "60BF9E2F-D684-481B-B7A3-4C401DBE7762",
      "replaces": [],
      "title": [],
      "description": [
          {
              "text" : "Requirement specification"
          }
      ],
      "resource": {
          "id": "_5D647B1D_D622_4a45_90EB_5FC6ECCD405C",
          "revision": "F583802E-FE82-4D10-BCBF-1B387C04A84C"
      },
      "nodes": [
        {
          "id": "_5a48b367_c1c1_4184_8931_e5bb794d3fd5",
          "revision": "F583802E-FE82-4D10-BCBF-1B387C04A84C",
          "replaces": [],
          "title": [],
          "description": [
              {
                  "text" : "Element: Introduction"
              }
          ],
          "resource": {
              "id": "_7BBB98BF_6966_46cd_A2B4_677B15CEC761",
              "revision": "0D737A07-8DFE-4502-958A-04BBF1B0B16F"
          },
          "nodes": [
            {
              "id": "_81b06448_c844_4452_a3ef_8a2171c597c1",
              "revision": "00875EE1-7491-4AD9-92D1-27B377FCFDCD",
              "replaces": [],
              "title": [],
              "description": [
                  {
                      "text" : "Element: Login"
                  }
              ],
              "resource": {
                  "id": "_73392B3D_CF8F_4ac0_BC77_E6A2C9415EF4",
                  "revision": "F16C40BE-DFC4-46BB-85C4-FDF9433F8E73"
              },
              "nodes": [],
              "changedAt": "2019-05-31T15:13:54.0813277+02:00"
            }
          ],
          "changedAt": "2019-05-31T15:13:54.0303315+02:00"
        }
      ],
      "changedAt": "2019-05-31T15:13:53.8253311+02:00"
   }
]

``` 

## Files

SpecIF allows - beside the usage of JSON - the storage of native files as additional data.
For that purpose, the SpecIF schema defines a data structure to describe and manage these files.
The data structure contains an URL value to define the file's access path. 
The URL can be defined absolute or relative to the SpecIF data, where the file description is included.
If the URL is missing, the title applies as access path.

```json
{
    "id": "_9DCD9463_74E4_49B8_8C63_0E0877CDD47E",
    "revision": "95C00759-5CB5-49CF-B2AE-174B2C938730",
    "replaces": [],
    "title": "SystemArchitecture.png",
    "description": [
        {
            "text": "The logical system architecture as PNG image."
        }
    ],
    "url": "./files_and_images/SystemArchitecture.png",
    "type": "image/png",
    "changedAt": "2021-03-30T13:13:53.8253311+02:00",
    "changedBy": "oa" 
}
```
