# Tutorial 7: 'Requirement with Multiple Languages'

Next, we would like to discuss how to add a property to a resource which may assume one of several predefined (\"enumerated\") values. The previously discussed requirement will now get a property indicating it's  priority.

Again, let's start with the new elements of a SpecIF data-set.

```json
{
}
```

Some explanations:
- W

Let us have a look at the full example, now:

```json
{
    "id": "P-Requirement-with-Multilanguage-Content-D",
    "title": "Requirement with Multilanguage-Content D",
    "specifVersion": "1.0",
    "rights": {
        "title": "Creative Commons 4.0 CC BY-SA",
        "type": "dcterms:rights",
        "url": "https://creativecommons.org/licenses/by-sa/4.0/"
    },
    "createdAt": "2019-05-29T14:12:59.960Z",
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
    },{
      "id": "DT-Priority",
      "title": "SpecIF:Priority",
      "description": "Enumerated values for priority",
      "type": "xs:enumeration",
      "values": [{
        "id": "V-Prio-0",
        "value": "High"
      },{
        "id": "V-Prio-1",
        "value": [{
          "text": "Rather High",
          "language": "en"
        },{
          "text": "Eher hoch",
          "language": "de"
        }]
      },{
        "id": "V-Prio-2",
        "value": "Medium"
      },{
        "id": "V-Prio-3",
        "value": "Rather Low"
      },{
        "id": "V-Prio-4",
        "value": "Low"
      }],
      "multiple": false,
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
    },{
      "id": "PC-Priority",
      "title": "SpecIF:Priority",
      "description": "The 'Priority' of the resource.",
      "dataType": "DT-Priority",
      "changedAt": "2016-05-26T08:59:00+02:00"
    }],
    "resourceClasses": [{
      "id": "RC-Requirement",
      "title": "IREB:Requirement",
      "description": "A 'Requirement' is a singular documented physical and functional need that a particular design, product or process must be able to perform.",
      "icon": "&#8623;",
      "propertyClasses": [ "PC-Name", "PC-Description", "PC-Priority" ],
      "changedAt": "2016-05-26T08:59:00+02:00"
    }],
    "statementClasses": [],
    "resources": [{
      "id": "Req-5ba3512b0000bca",
      "title": "Minimum button size",
      "class": "RC-Requirement",
      "properties": [{
        "class": "PC-Name",
        "value": [{
          "text": "Minimum button size",
          "language": "en"
        },{
          "text": "Minimale Größe des Tasters",
          "language": "de"
        }],
        "changedAt": "2017-06-19T20:13:08+02:00"
      },{
        "class": "PC-Description",
        "value": [{
          "text": "<p>The <i>button size</i> MUST not be less than 20mm in diameter.</p>",
          "language": "en"
        },{
          "text": "<p>Der <i>Durchmesser</i> des Tasters MUSS mindestens 20mm betragen.</p>",
          "language": "de"
        }]
      },{
        "class": "PC-Priority",
        "value": "V-Prio-1"
      }],
      "changedAt": "2017-06-19T20:13:08+02:00"
    }],
    "statements": [],
    "hierarchies": [{
      "id": "N-bca801377e3d1781",
      "resource": "Req-5ba3512b0000bca",
      "changedAt": "2019-05-29T13:19:28.546Z"
    }]
}
```

Some more explanations:
- Here we see that the *resourceClass* has an additionally listed *propertyClass* \"PC-Priority\".
- Also the resource's list of *properties* has an additional element with a priority value. Note that the *id* of the *dataType* is being referenced.

You may also view/download the example [Requirement with Multiple Languages](http://specif.de/examples/07_Requirement-with-Multiple-Languages.specif "SpecIF Example \'Requirement with Multiple Languages\'") or display it using the [SpecIF Viewer](http://specif.de/apps-alpha/view.html#import=../examples/07_Requirement-with-Multiple-Languages.specif).
