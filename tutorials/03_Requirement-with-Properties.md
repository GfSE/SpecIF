# Tutorial 3: 'Requirement with Properties'

Next, we would like to present ..

```json
{
}
```

Some explanations may help to understand the principles:
- lls

Let us have a look at the full example, now:

```json
{
    "specifVersion": "1.0",
    "id": "P-Requirement-with-Properties",
    "title": "Requirements Template",
    "dataTypes": [{
      "id": "DT-ShortString",
      "title": "String[96]",
      "description": "String with max. length 96.",
      "type": "xs:string",
      "maxLength": 96,
      "changedAt": "2016-05-26T08:59:00+02:00"
    },{
      "id": "DT-FormattedText",
      "title": "Formatted Text",
      "description": "XHTML formatted text with max. length 8156.",
      "type": "xhtml",
      "maxLength": 8156,
      "changedAt": "2016-05-26T08:59:00+02:00"
    }],
    "propertyClasses": [{
      "id": "PC-Name",
      "title": "dcterms:title",
      "description": "A name given to the resource.",
      "dataType": "DT-ShortString",
      "changedAt": "2016-05-26T08:59:00+02:00"
    },{
      "id": "PC-Description",
      "title": "dcterms:description",
      "description": "An account of the resource. Descriptive text about the resource represented as rich text in XHTML.",
      "dataType": "DT-FormattedText",
      "changedAt": "2016-05-26T08:59:00+02:00"
    }],
    "resourceClasses": [{
      "id": "RC-Requirement",
      "title": "IREB:Requirement",
      "description": "A 'Requirement' is a singular documented physical and functional need that a particular design, product or process must be able to perform.",
      "icon": "&#8623;",
      "propertyClasses": [ "PC-Name", "PC-Description" ],
      "changedAt": "2016-05-26T08:59:00+02:00"
    }],
    "statementClasses": [],
    "resources": [{
        "id": "Req-5ba3512b0000bca",
        "title": "Minimum button size",
        "class": "RC-Requirement",
        "properties": [{
            "title": "dcterms:title",
            "class": "PC-Name",
            "value": "Minimum button size"
        },{
            "class": "PC-Description",
            "value": "<p>The <i>button size</i> MUST not be less than 2 cm in diameter.</p>"
        }],
        "changedAt": "2017-06-19T20:13:08+02:00"
    }],
    "statements": [],
    "hierarchies": [{
        "id": "H-Requirements",
		"resource": "Req-5ba3512b0000bca",
        "changedAt": "2019-05-29T13:19:28.546Z"
    }]
}
```

Some more explanations:
- usoe

You may also view/download the example [Requirement with Properties](http://specif.de/examples/03_Requirement-with-Properties.specif "SpecIF Example \'Requirement with Properties\'") or display it using the [SpecIF Viewer](http://specif.de/apps-alpha/view.html#import=../examples/03_Requirement-with-Properties.specif).
