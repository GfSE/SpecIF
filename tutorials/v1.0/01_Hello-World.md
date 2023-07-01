# Tutorial 1: 'Hello World'

At first, we would like to present the shortest SpecIF data-set ever. It contains only items minimally required by the SpecIF schema.

```json
{
    "$schema": "https://specif.de/v1.0/schema.json",
    "id": "P-Test-Hello-World",
    "title": "Project 'Hello World'",
    "resourceClasses": [{
        "id": "RC-94e50023b1a8015d57",
        "title": "SpecIF:Paragraph",
        "changedAt": "2020-03-01T07:59:00+01:00"
    }],
    "statementClasses": [],
    "resources": [{
        "id": "R-d5b994e50023",
        "title": "Hello World!",
        "class": "RC-94e50023b1a8015d57",
        "changedAt": "2020-03-01T07:59:00+01:00"
    }],
    "statements": [],
    "hierarchies": [{
        "id": "N-78cf736b265",
        "resource": "R-d5b994e50023",
        "changedAt": "2020-03-01T07:59:00+01:00"
    }]
}
```

Some explanations may help to understand the principles:
- The first item indicates the SpecIF schema to be applied.
- Of course, a SpecIF data-set must have an identifier. ASCII alphanumeric characters a-z, A-Z and 0-9 can be used as well as \'\_\', \'-\' and \'.\'. An \'id\' must begin with a letter or underscore \'\_\', though.
- The *title* applies to the whole data-set or project.
- The actual content is provided in the list *resources*. Every resource has a unique identifier *id*, a *title* and an indication, when it has been changed last.
- Every resource has a class to specify it's semantics and a definition of the applicable properties, which will be introduced in a subsequent tutorial. Here it is a text paragraph, but a *resourceClass* could equally well define a requirement or model-element. Note the use of a vocabulary term \'SpecIF:Paragraph\': Any string value could be used, but a vocabulary term helps to convey an unambiguous meaning within and across national languages.
- Optional list entries of *statementClasses* and *statements* are used to specify semantic relationships between resources and will be introduced in a subsequent tutorial.
- A *hierarchy* finally defines a view on resources. For example, it can be a document outline giving a selection and ordering of resources for reading or it can be a \"Bill of Materials\". A SpecIF data-set can have multiple hierarchies for different audiences or purposes, where a given resource may be referenced once, multiple times or not at all.

A SpecIF data-set in JSON format has a file extension \'.specif\'. It may be contained in a ZIP-file in which case it has a file extension \'.specifz\'.

You may view/download the example [Hello World](http://specif.de/examples/01_Hello-World.specif "SpecIF Example \'Hello World\'") or display it using the [SpecIF Viewer](http://specif.de/apps/view.html#import=../examples/01_Hello-World.specif).
