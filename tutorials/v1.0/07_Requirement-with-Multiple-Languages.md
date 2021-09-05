# Tutorial 7: 'Requirement with Multiple Languages'

Now, let us examine how a value can be given in several languages. The previously discussed requirement has a property indicating it's  priority. Here one of enumerated priority values is provided in english and german language.

```json
{
    "dataTypes": [{
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
      }],
      "multiple": false,
      "changedAt": "2020-03-26T22:59:00+02:00"
    }]
}
```

Some explanations:
- The first value with "id":"V-Prio-0" is provided as a string in a single language.
- The second value with "id":"V-Prio-1" is provided as a list of JSON objects with *text* and *language* attributes. 
- The language is expected in an abbreviation as defined by IETF, for example "en", "en/US" or "de".
- The same applies not only to values of an enumerated dataType, but also to all titles, descriptions and property-values. Try it yourself!
- Which language is chosen in a given situation depends on the application. In case of the SpecIF Viewer, the language setting of the browser is used for selection. If the expected language is not provided by the SpecIF data-set, the first entry in the list is taken.
- To see the effect, klick the link given on the lower right corner of this page, change the language setting of your browser and klick it again.

Let us at last have a look at the full example:

```json
{
    "id": "P-Requirement-with-Multiple-Languages",
    "title": "Requirement with Multiple Languages",
    "$schema": "https://specif.de/v1.0/schema.json",
    "changedAt": "2020-03-26T22:59:00+02:00",
    "dataTypes": [{
      "id": "DT-ShortString",
      "title": "String[96]",
      "description": "String with max. length 96.",
      "type": "xs:string",
      "maxLength": 96,
      "changedAt": "2016-05-26T08:59:00+02:00"
    },{
      "id": "DT-Text",
      "title": "Plain or formatted Text",
      "description": "A text string, plain, or formatted with XHTML or markdown",
      "type": "xs:string",
      "changedAt": "2021-02-14T08:59:00+02:00"
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
      "changedAt": "2020-03-26T22:59:00+02:00"
    }],
    "propertyClasses": [{
      "id": "PC-Name",
      "title": "dcterms:title",
      "description": "A name given to the resource.",
      "dataType": "DT-ShortString",
      "changedAt": "2020-03-26T22:59:00+02:00"
    },{
      "id": "PC-Description",
      "title": "dcterms:description",
      "description": "An account of the resource (source: http://dublincore.org/documents/dcmi-terms/). Descriptive text represented in plain or rich text using XHTML or Markdown. SHOULD include only content that is valid and suitable inside an XHTML &lt;div&gt; element (source: http://open-services.net/).",
      "dataType": "DT-Text",
      "changedAt": "2021-02-23T08:59:00+02:00"
    },{
      "id": "PC-Priority",
      "title": "SpecIF:Priority",
      "description": "The 'Priority' of the resource.",
      "dataType": "DT-Priority",
      "changedAt": "2020-03-26T22:59:00+02:00"
    }],
    "resourceClasses": [{
      "id": "RC-Requirement",
      "title": "IREB:Requirement",
      "description": "A 'Requirement' is a singular documented physical and functional need that a particular design, product or process must be able to perform.",
      "icon": "&#8623;",
      "propertyClasses": [ "PC-Name", "PC-Description", "PC-Priority" ],
      "changedAt": "2020-03-26T22:59:00+02:00"
    }],
    "statementClasses": [],
    "resources": [{
      "id": "Req-5ba3512b0000bca",
      "title": [{
        "text": "Minimum button size",
        "language": "en"
      },{
        "text": "Minimale Größe des Tasters",
        "language": "de"
      }],
      "class": "RC-Requirement",
      "properties": [{
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
      "changedAt": "2020-03-26T22:59:00+02:00"
    }],
    "statements": [],
    "hierarchies": [{
      "id": "N-bca801377e3d1781",
      "resource": "Req-5ba3512b0000bca",
      "changedAt": "2020-03-26T22:59:00+02:00"
    }]
}
```

You may also view/download the example [Requirement with Multiple Languages](http://specif.de/examples/07_Requirement-with-Multiple-Languages.specif "SpecIF Example \'Requirement with Multiple Languages\'") or display it using the [SpecIF Viewer](http://specif.de/apps/view#import=../examples/07_Requirement-with-Multiple-Languages.specif).
