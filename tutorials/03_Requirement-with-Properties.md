# Tutorial 3: 'Requirement with Properties'

Next, we would like to discuss how to add specific information to a resource or statement using properties. A requirement with name and description will serve as an example.

Again, let's start with the new elements of a SpecIF data-set.

```json
{
    "dataTypes": [{
      "id": "DT-Text",
      "title": "Plain or formatted Text",
      "description": "A text string, plain, or formatted with XHTML or markdown",
      "type": "xs:string",
      "changedAt": "2021-02-14T08:59:00+02:00"
    }],
    "propertyClasses": [{
      "id": "PC-Description",
      "title": "dcterms:description",
      "description": "An account of the resource (source: http://dublincore.org/documents/dcmi-terms/). Descriptive text represented in plain or rich text using XHTML or Markdown. SHOULD include only content that is valid and suitable inside an XHTML &lt;div&gt; element (source: http://open-services.net/).",
      "dataType": "DT-Text",
      "changedAt": "2016-05-26T08:59:00+02:00"
    }],
}
```

Some explanations may help to understand the principles:
- Properties have a base *dataType*. The SpecIF schema accepts a number of boolean, numeric, character string and enumerated data types.
- Above, we see a *dataType* for formatted text of a certain maximum length. Properties using this dataType may use XHTML tags to format the text content.
- Next, a *propertyClass* is to be defined with it's dataType. 
- The role of the properties instantiated from a propertyClass is assigned in it's *title*. In this case the properties shall be used for describing the parent resource or statement. Note that a vocabulary term introduced by the [Dublin Core Metadata Initiative](https://dublincore.org/), namely \"dcterms:description\" is used.
- A given propertyClass can of course be used by several resourceClasses or statementClasses.


```json
{
    "resourceClasses": [{
      "id": "RC-Requirement",
      "title": "IREB:Requirement",
      "description": "A 'Requirement' is a singular documented physical and functional need that a particular design, product or process must be able to perform.",
      "icon": "&#8623;",
      "propertyClasses": [ "PC-Name", "PC-Description" ],
      "changedAt": "2016-05-26T08:59:00+02:00"
    }],
    "resources": [{
        "id": "Req-5ba3512b0000bca",
        "title": "Minimum button size",
        "class": "RC-Requirement",
        "properties": [{
            "class": "PC-Description",
            "value": "<p>The <i>button size</i> MUST not be less than 2 cm in diameter.</p>"
        }],
        "changedAt": "2017-06-19T20:13:08+02:00"
    }],
}
```

Some more explanations:
- Now the type for a parent element, *resourceClass* in this case, is defined. 
- The *title* denotes the role of the derived instances, i.e. *resources*; here a requirement according to the [International Requirements Engineering Board (IREB)](https://www.ireb.org/de/).
- An *icon* may be specified that can be used with all instances of the resourceClass. A value can be for example one or more HTML-encoded UTF-8 characters as in the example, a data-URL with encoded image-data or even an URL for use in a XHTML img-tag.
- The *propertyClasses* to be used are referenced by identifier.
- Finally, a *resource* is an instance of a *resourceClass*.
- Next to the known attributes a property instance with *class* and *value* is specified.
- The property value with a base dataType \"xhtml\" may contain any formatting including tables, images, web-links or other.


Let us have a look at the full example, now:

```json
{
    "$schema": "https://specif.de/v1.0/schema.json",
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
      "id": "DT-Text",
      "title": "Plain or formatted Text",
      "description": "A text string, plain, or formatted with XHTML or markdown",
      "type": "xs:string",
      "changedAt": "2021-02-14T08:59:00+02:00"
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
      "description": "An account of the resource (source: http://dublincore.org/documents/dcmi-terms/). Descriptive text represented in plain or rich text using XHTML or Markdown. SHOULD include only content that is valid and suitable inside an XHTML &lt;div&gt; element (source: http://open-services.net/).",
      "dataType": "DT-FormattedText",
      "changedAt": "2021-02-23T08:59:00+02:00"
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
        "id": "N-bca801377e3d1525",
        "resource": "Req-5ba3512b0000bca",
        "changedAt": "2019-05-29T13:19:28.546Z"
    }]
}
```

Some more explanations:
- The resource with \"id\":\"Req-5ba3512b0000bca\" has another property for the title now. Even though redundant with the *title* of the resource itself, it has an explicit *propertyType* and thus *dataType*.
- The role of the added property is indicated by \"title\":\"dcterms:title\", where a vocabulary term is used. It takes precedence over the title attribute of the resource itself.
- Note that the added title property has a title, whereas the description property has not. This is just for demonstration purposes: If a properties' title is specified, it takes of course precedence. I it is not specified, the respective propertyClass' title applies.


You may also view/download the example [Requirement with Properties](http://specif.de/examples/03_Requirement-with-Properties.specif "SpecIF Example \'Requirement with Properties\'") or display it using the [SpecIF Viewer](http://specif.de/apps/view.html#import=../examples/03_Requirement-with-Properties.specif).
