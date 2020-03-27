# Tutorial 6: 'Very Simple Model (FMC)'

In the previous tutorials we have introduced all concepts we need to represent a simple model with SpecIF. Let's start with a block-diagram using the notation of the Fundamental Modelling Concepts (FMC). Let us first look at the model, itself:

![Very Simple Model (FMC)](./images/Very-Simple-Model-FMC.svg)

- In fact, this is not a model, but a diagram representing a model. It is a view of the model for a specific communication purpose; it is meant to be interpreted by a human being. In this particularly simple case, the diagram shows the whole model, but usually there are more and each diagram depicts a certain aspect of a model.
- We see two model elements with two relations. The upper box represents an IT-System with some business logic and the lower box represents the information that is being processed. The directed connections represent a writing and a reading relationship; thus this application can write and read the data.
- The notation being used is known as a block-diagram of the *Fundamental Modelling Concepts (FMC)*. A box with sharp corners represents an active element called *Actor*, while a box with rounded corners represents a passive element called *State*. *Actor* is a concept used for a system, tool, human role or function, whereas *State* is a concept used for information in gerneral, a document, a database, form or color.
- The model-diagram above defines three resources, the diagram itself and each of the depicted model-elements.


Let us first look at the relations of the model-elements; using SpecIF terminology we would say the statements made with the resources of the model. Below the statements for one of the model-elements, namely \'FiCo-Application\' are shown:

![Very Simple Model Relations](./images/Very-Simple-Model-Relations.png)

- Whereas the model-diagram shown first was created by an engineer to define an aspect of the model, the diagram shown above is a dynamically created view of all relations of a particular model-element, \'FiCo-Application\' in this case. 
- An accumulation of *all* relations is shown, no matter how and where they have been defined; it is the semantic net around the selected element with a radius of one. 
- We see that the selected model-element is shown on one diagram and that it writes and reads another model-element. 
- Each arrow is a statement, e.g. \'FiCo-Application reads FiCo-Data\'. 
- The icon in front of a model-element name helps to distinguish the fundamental model-element types. The icon is consistently defined for all instances in the respective *resourceClass* below.
- This relationship view lends itself particularly well to discover any inconsistendcy between model-views. Also it may help to discover model gaps, for example, if an information element is written, but never read.


Again, let's start with the new elements of a SpecIF data-set.

```json
{
    "propertyClasses": [{
        "id": "PC-Diagram",
        "title": "SpecIF:Diagram",
        "dataType": "DT-FormattedText",
        "changedAt": "2018-05-10T11:54:00+01:00"
    }, {
        "id": "PC-Type",
        "title": "dcterms:type",
        "dataType": "DT-ShortString",
        "changedAt": "2018-05-10T11:54:00+01:00"
    }],
    "resourceClasses": [{
        "id": "RC-Diagram",
        "title": "SpecIF:Diagram",
        "description": "A 'Diagram' is a graphical model view with a specific communication purpose, e.g. a business process or system composition.",
        "instantiation": ["user"],
        "icon": "&#9635;",
        "propertyClasses": ["PC-Name","PC-Text","PC-Diagram","PC-Type"],
        "changedAt": "2018-05-10T11:54:00+01:00"
    }, {
        "id": "RC-Actor",
        "title": "FMC:Actor",
        "description": "An 'Actor' is a fundamental model element type representing an active entity, be it an activity, a process step, a function, a system component or a role.",
        "instantiation": ["auto"],
        "icon": "&#9632;",
        "propertyClasses": ["PC-Name","PC-Text","PC-Type"],
        "changedAt": "2018-05-10T11:54:00+01:00"
    }, {
        "id": "RC-State",
        "title": "FMC:State",
        "description": "A 'State' is a fundamental model element type representing a passive entity, be it a value, a document, an information storage or even a physical shape.",
        "instantiation": ["auto"],
        "icon": "&#9679;",
        "propertyClasses": ["PC-Name","PC-Text","PC-Type"],
        "changedAt": "2018-05-10T11:54:00+01:00"
    }, {
        "id": "RC-Event",
        "title": "FMC:Event",
        "description": "An 'Event' is a fundamental model element type representing a time reference, a change in condition/value or more generally a synchronisation primitive.",
        "instantiation": ["auto"],
        "icon": "&#9830;",
        "propertyClasses": ["PC-Name","PC-Text","PC-Type"],
        "changedAt": "2018-05-10T11:54:00+01:00"
    }],
}
```

- In this example we need three *resourceClasses* for the diagram as well as model-elements of class *Actor* and *State*.
- The forth resourceClass given with \"id\":\"RC-Event\" is not used by FMC Block Diagrams, but it is the third fundamental model-element type. One of the interesting principles of FMC is that *any model notation* consists of only three fundamental model-element types, namely *Actor*, *State* and *Event*.
- Apart from the *propertyClasses* discussed in earlier tutorials, we find two new ones: 
The diagram shall be shown by a property \"id\":\"PC-Diagram\" of it's own to give it a distinguished role by means of it's \"title\":\"SpecIF:Diagram\". 
The original type of each element, which can be seen as a subclass to the fundamental class, is specified in a property of class \"id\":\"PC-Type\".


Next, we look at the *statementClasses*:

```json
{
    "statementClasses": [{
        "id": "SC-Visibility",
        "title": "SpecIF:shows",
        "description": "'Diagram' shows 'Model-Element'",
        "instantiation": ["auto"],
        "subjectClasses": ["RC-Diagram"],
        "objectClasses": ["RC-Actor", "RC-State", "RC-Event"],
        "changedAt": "2018-05-10T11:54:00+01:00"
    }, {
        "id": "SC-Writing",
        "title": "SpecIF:writes",
        "description": "'Actor' (Role, Function) writes 'State' (Information)",
        "instantiation": ["auto"],
        "subjectClasses": ["RC-Actor"],
        "objectClasses": ["RC-State"],
        "changedAt": "2018-05-10T11:54:00+01:00"
    }, {
        "id": "SC-Reading",
        "title": "SpecIF:reads",
        "description": "'Actor' (Role, Function) reads 'State' (Information)",
        "instantiation": ["auto"],
        "subjectClasses": ["RC-Actor"],
        "objectClasses": ["RC-State"],
        "changedAt": "2018-05-10T11:54:00+01:00"
    }],
}
```

- The first statementClass with \"id\":\"SC-Visibility\" will be used to relate the diagram to all depicted model-elements. In a more complex model it allows to easily find out on which diagrams a certain model-element appears. 
- In such a statement, only an instance of the class with \"id\":\"RC-Diagram" can serve as a subject (source) and only an instance of any fundamental model-element type can serve as an object (target).
- The last two statementClasses will be used for the 'writes' and 'reads' predicates (relationships) discussed in the beginning. We see that in both cases only an instance of the class with \"id\":\"RC-Actor" can serve as a subject and only an instance of the class with \"id\":\"RC-State" can serve as an object.
- The attribute *subjectClasses* can be omitted as discussed in tutorial 02, then any resource can be used as a subject. Similarly for *objectClasses*.


Let us at last have a look at the full example, now:

```json
{
    "id": "ACP-Very-Simple-Model-FMC",
    "title": "Very Simple Model (FMC)",
    "specifVersion": "1.0",
    "createdAt": "2020-03-06T09:05:00+01:00",
    "dataTypes": [{
        "id": "DT-ShortString",
        "title": "String [96]",
        "description": "String with length 96",
        "type": "xs:string",
        "maxLength": 96,
        "changedAt": "2018-05-10T11:54:00+01:00"
    }, {
        "id": "DT-FormattedText",
        "title": "Formatted Text with length 8192",
        "type": "xhtml",
        "maxLength": 8192,
        "changedAt": "2018-05-10T11:54:00+01:00"
    }],
    "propertyClasses": [{
        "id": "PC-Name",
        "title": "dcterms:title",
        "dataType": "DT-ShortString",
        "changedAt": "2018-05-10T11:54:00+01:00"
    }, {
        "id": "PC-Text",
        "title": "dcterms:description",
        "dataType": "DT-FormattedText",
        "changedAt": "2018-05-10T11:54:00+01:00"
    }, {
        "id": "PC-Diagram",
        "title": "SpecIF:Diagram",
        "dataType": "DT-FormattedText",
        "changedAt": "2018-05-10T11:54:00+01:00"
    }, {
        "id": "PC-Type",
        "title": "dcterms:type",
        "dataType": "DT-ShortString",
        "changedAt": "2018-05-10T11:54:00+01:00"
    }],
    "resourceClasses": [{
        "id": "RC-Diagram",
        "title": "SpecIF:Diagram",
        "description": "A 'Diagram' is a graphical model view with a specific communication purpose, e.g. a business process or system composition.",
        "instantiation": ["user"],
        "icon": "&#9635;",
        "propertyClasses": ["PC-Name","PC-Text","PC-Diagram","PC-Type"],
        "changedAt": "2018-05-10T11:54:00+01:00"
    }, {
        "id": "RC-Actor",
        "title": "FMC:Actor",
        "description": "An 'Actor' is a fundamental model element type representing an active entity, be it an activity, a process step, a function, a system component or a role.",
        "instantiation": ["auto"],
        "icon": "&#9632;",
        "propertyClasses": ["PC-Name","PC-Text","PC-Type"],
        "changedAt": "2018-05-10T11:54:00+01:00"
    }, {
        "id": "RC-State",
        "title": "FMC:State",
        "description": "A 'State' is a fundamental model element type representing a passive entity, be it a value, a document, an information storage or even a physical shape.",
        "instantiation": ["auto"],
        "icon": "&#9679;",
        "propertyClasses": ["PC-Name","PC-Text","PC-Type"],
        "changedAt": "2018-05-10T11:54:00+01:00"
    }, {
        "id": "RC-Event",
        "title": "FMC:Event",
        "description": "An 'Event' is a fundamental model element type representing a time reference, a change in condition/value or more generally a synchronisation primitive.",
        "instantiation": ["auto"],
        "icon": "&#9830;",
        "propertyClasses": ["PC-Name","PC-Text","PC-Type"],
        "changedAt": "2018-05-10T11:54:00+01:00"
    }],
    "statementClasses": [{
        "id": "SC-Visibility",
        "title": "SpecIF:shows",
        "description": "'Diagram' shows 'Model-Element'",
        "instantiation": ["auto"],
        "subjectClasses": ["RC-Diagram"],
        "objectClasses": ["RC-Actor", "RC-State", "RC-Event"],
        "changedAt": "2018-05-10T11:54:00+01:00"
    }, {
        "id": "SC-Writing",
        "title": "SpecIF:writes",
        "description": "'Actor' writes 'State'.",
        "instantiation": ["auto"],
        "subjectClasses": ["RC-Actor"],
        "objectClasses": ["RC-State"],
        "changedAt": "2018-05-10T11:54:00+01:00"
    }, {
        "id": "SC-Reading",
        "title": "SpecIF:reads",
        "description": "'Actor' reads 'State'.",
        "instantiation": ["auto"],
        "subjectClasses": ["RC-Actor"],
        "objectClasses": ["RC-State"],
        "changedAt": "2018-05-10T11:54:00+01:00"
    }],
    "resources": [{
        "id": "Diagram-aec0df7900010000017001eaf53e8876",
        "title": "IT-Integration: FiCo-Application and FiCo-Data",
        "class": "RC-Diagram",
        "properties": [{
            "class": "PC-Name",
            "value": "IT-Integration: FiCo-Application and FiCo-Data"
        }, {
            "class": "PC-Diagram",
            "value": "<div><p class=\"inline-label\">Model Diagram:</p><p><object type=\"image/svg+xml\" data=\"files_and_images/Very-Simple-Model-FMC.svg\">Notation: FMC Block Diagram</object></p></div>"
        }, {
            "class": "PC-Type",
            "value": "FMC Block Diagram"
        }],
        "changedAt": "2020-03-06T08:32:00+01:00"
    }, {
        "id": "MEl-50fbfe8f0029b1a8016ea86245a9d83a",
        "title": "FiCo-Application",
        "class": "RC-Actor",
        "properties": [{
            "class": "PC-Name",
            "value": "FiCo-Application"
        }, {
            "class": "PC-Text",
            "value": "<div><p>IT-Application for Finance and Controlling.</p></div>"
        }],
        "changedAt": "2020-03-06T09:04:00+01:00"
    }, {
        "id": "MEl-50feddc00029b1a8016e2872e78ecadc",
        "title": "FiCo-Data",
        "class": "RC-State",
        "properties": [{
            "class": "PC-Name",
            "value": "FiCo-Data"
        }, {
            "class": "PC-Text",
            "value": "<div><p>Finance and Controlling Data, such as cost-units per project with budget, accrued cost etc.</p></div>"
        }],
        "changedAt": "2020-03-06T09:03:00+01:00"
    }],
    "statements": [{
        "id": "SVis-aec0df7900010000017001eaf53e8876-50fbfe8f0029b1a8016ea86245a9d83a",
        "title": "SpecIF:shows",
        "description": "'Notation: FMC Block Diagram' shows 'FiCo-Application'",
        "class": "SC-Visibility",
        "subject": "Diagram-aec0df7900010000017001eaf53e8876",
        "object": "MEl-50fbfe8f0029b1a8016ea86245a9d83a",
        "changedAt": "2020-03-06T08:32:00+01:00"
    }, {
        "id": "SVis-aec0df7900010000017001eaf53e8876-50feddc00029b1a8016e2872e78ecadc",
        "title": "SpecIF:shows",
        "description": "'Notation: FMC Block Diagram' shows 'FiCo-Data'",
        "class": "SC-Visibility",
        "subject": "Diagram-aec0df7900010000017001eaf53e8876",
        "object": "MEl-50feddc00029b1a8016e2872e78ecadc",
        "changedAt": "2020-03-06T08:32:00+01:00"
    }, {
        "id": "SWri-50fbfe8f0029b1a8016ea86245a9d83a-50feddc00029b1a8016e2872e78ecadc",
        "title": "SpecIF:writes",
        "description": "'FiCo-Application' writes 'FiCo-Data'",
        "class": "SC-Writing",
        "subject": "MEl-50fbfe8f0029b1a8016ea86245a9d83a",
        "object": "MEl-50feddc00029b1a8016e2872e78ecadc",
        "changedAt": "2020-03-06T09:05:00+01:00"
    }, {
        "id": "SRea-50fbfe8f0029b1a8016ea86245a9d83a-50feddc00029b1a8016e2872e78ecadc",
        "title": "SpecIF:reads",
        "description": "'FiCo-Application' reads 'FiCo-Data'",
        "class": "SC-Reading",
        "subject": "MEl-50fbfe8f0029b1a8016ea86245a9d83a",
        "object": "MEl-50feddc00029b1a8016e2872e78ecadc",
        "changedAt": "2020-03-06T09:05:00+01:00"
    }],
    "hierarchies": [{
		"id": "N-Diagram-aec0df7900010000017001eaf53e8876",
		"resource": "Diagram-aec0df7900010000017001eaf53e8876",
		"nodes": [{
			"id": "N-MEl-50fbfe8f0029b1a8016ea86245a9d83a",
			"resource": "MEl-50fbfe8f0029b1a8016ea86245a9d83a",
			"changedAt": "2020-03-06T09:05:00+01:00"
		}, {
			"id": "N-MEl-50feddc00029b1a8016e2872e78ecadc",
			"resource": "MEl-50feddc00029b1a8016e2872e78ecadc",
			"changedAt": "2020-03-06T09:05:00+01:00"
		}],
		"changedAt": "2018-05-10T11:54:00+01:00"
    }],
    "files": []
}
```

The instances, the actual model content, have not been discussed, yet:
- You can easily see the diagram and the two model-elements in *resources*. The *properties* carry the information payload; those without a defined value can be omitted, e.g. the diagram has no property of type \"PC-Text\" and the model-elements have no property of type \"PC-Type\".
- The four *statements* are equally easy to interpret: One *shows* relationship per model-element plus the *writes* and *reads* relationships between the model-elements.
- By the way, if you display this example with the [SpecIF Viewer](http://specif.de/apps-alpha/view.html#import=../examples/06_Very-Simple-Model-FMC.specifz) and you hover the mouse over one of the model-elements or double-click it, you can see the potential of web-technology. This is not by virtue of SpecIF, but when the SVG is generated in a way that the model-element *id* is associated to a graphic element and an app like the SpecIF Viewer finds it, such behaviour is easily implemented.


You may also view/download the example [Very Simple Model (FMC)](http://specif.de/examples/06_Very-Simple-Model-FMC.specifz "SpecIF Example \'Very Simple Model (FMC)\'") or display it using the [SpecIF Viewer](http://specif.de/apps-alpha/view.html#import=../examples/06_Very-Simple-Model-FMC.specifz).
