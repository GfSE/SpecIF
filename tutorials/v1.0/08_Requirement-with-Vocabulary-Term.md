# Tutorial 8: 'Requirement with Vocabulary Term'

The previously discussed requirement has a property indicating it's  priority. Here one of enumerated priority values is provided as a vocabulary term.

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
      },{
        "id": "V-Prio-4",
        "value": "SpecIF:priorityLow"
      }],
      "multiple": false,
      "changedAt": "2020-03-26T22:59:00+02:00"
    }]
}
```

Some explanations:
- The first value with "id":"V-Prio-0" is provided as a string in a single language and the second value with "id":"V-Prio-1" is provided as a list of JSON objects with *text* and *language* attributes (see tutorial [Requirement with Multiple Languages](./07_Requirement-with-Multiple-Languages.md)). 
- The last value with "id":"V-Prio-4" is a vocabulary term consisting of a namespace in front of the colon ':' and the term thereafter.
- Agreed-upon vocabulary terms help both collaborators to communicate more clearly and systems to match data fields automatically. SpecIF adopts terms and their definitions from other initiatives, for example from the [Dublin Core Metadata Initiative (DCMI)](http://dublincore.org/), the [Open Services for Lifecycle Collaboration (OSLC)](http://open-services.net/) and the [International Requirements Engineering Board (IREB)](http://ireb.org/).
- In fact, not only the last enumerated value, but also the *title* is a vocabulary term. Have a look at the currently defined [SpecIF Vocabulary Terms](https://specif.de/apps/view#import=../examples/Vocabulary.specifz). By the way, the vocabulary itself is represented in a SpecIF data-set.

Let us at last have a look at the full example:

```json
{
    "id": "P-Requirement-with-Vocabulary-Term",
    "title": "Requirement with Vocabulary Term",
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
        "value": "SpecIF:priorityLow"
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
        "value": "V-Prio-4"
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

When to use values with multiple languages or a vocabulary term? Some aspects are considered, here:
- A vocabulary term is most often preferred, if it exists. It is a clear definition of the concept without limitation to a specific domain or national language. The systems working with SpecIF data-sets must then be prepared to provide suitable translations for the users.
- In case of multiple-language values, the SpecIF data-set carries some language options and thus the systems used do not need to lookup vocabulary terms.
- Try with different language settings of your Web-Browser: In the example given below, the SpecIF Viewer shows the priority value "low", "niedrig" or "bas".

You may also view/download the example [Requirement with Vocabulary Term](http://specif.de/examples/08_Requirement-with-Vocabulary-Term.specif "SpecIF Example \'Requirement with Vocabulary Term\'") or display it using the [SpecIF Viewer](http://specif.de/apps/view#import=../examples/08_Requirement-with-Vocabulary-Term.specif).
