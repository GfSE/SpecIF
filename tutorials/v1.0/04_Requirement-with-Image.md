# Tutorial 4: 'Requirement with Image'

Next, we would like to present how to include an image in a resource description. The requirement known from the previous tutorial [Requirement with Properties](./03_Requirement-with-Properties.md) will serve as an example.

The definitions including *dataTypes*, *propertyClasses* and *resourceClasses* are exactly the same. As the description property is an XHTML formatted text, we simply can add an HTML &lt;object&gt; tag with a link to the image:

```json
{
    "resources": [{
        "id": "Req-5ba3512b0000bca",
        "title": "Minimum button size",
        "class": "RC-Requirement",
        "properties": [{
            "class": "PC-Name",
            "value": "Minimum button size"
        },{
            "class": "PC-Description",
            "value": "<p>The <i>button size</i> MUST not be less than 20mm in diameter.</p><p><object data=\"images/button-diameter.png\" type=\"image/png\">Diameter in different Forms</object></p>"
        }],
        "changedAt": "2017-06-19T20:13:08+02:00"
    }]
}
```

Some comments:
- The images are supplied in a ZIP-container together with the SpecIF data-set.
- There can or should be a directory or directory structure to hold the images. In this case a subdirectory \"images/\" is expected. 
- Apart from images, the HTML &lt;object&gt; tag can link many other file types. The type attribute may specify any IANA MIME-type. It is now a feature of your web-browser which file types can be shown or otherwise presented. In case of the SpecIF viewer referenced below, also a genuine BPMN-XML file can be referenced. By means of the bpmn.io library the viewer transforms the BPMN to SVG, so that it can be shown by the browser.


Thus the structure of the SpecIF container file, carrying the extension *.specifz* or *.specif.zip*, is as follows. By the way, this approach is similar to a ReqIF container with extension *.reqifz*.

```
04_Requirement-with-Image.specifz
 ┣━ 04_Requirement-with-Image.specif
 ┗━ images/
     ┗━ button-diameter.png
```


Let us have a look at the full example, now:

```json
{
    "$schema": "https://specif.de/v1.0/schema.json",
    "id": "P-Requirement-with-Image",
    "title": "Requirement with Image",
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
      "dataType": "DT-Text",
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
            "value": "<p>The <i>button size</i> MUST not be less than 20mm in diameter.</p><p><object data=\"images/button-diameter.png\" type=\"image/png\">Diameter in different Forms</object></p>"
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


You may also download the example [Requirement with Image](http://specif.de/examples/04_Requirement-with-Image.specifz) or display it using the [SpecIF Viewer](http://specif.de/apps/view#import=../examples/04_Requirement-with-Image.specifz).
