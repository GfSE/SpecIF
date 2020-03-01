# Tutorial 1: 'Related Terms'

Next, we would like to present two resources and a statement using both. Statements express semantic relations between entities.

```json
{
    "specifVersion": "1.0",
    "id": "P-Related-Terms",
    "title": "Project 'Related Terms'",
    "resourceClasses": [{
        "id": "RC-ResourceTerm",
        "title": "Resource Term",
        "changedAt": "2020-03-01T07:59:00+01:00"
    }],
    "statementClasses": [{
        "id": "SC-isSpecialisationOf",
        "title": "SpecIF:isSpecialisationOf",
        "description": "Signifies that a term is a specialization of another, such as 'Passenger Car' and 'Vehicle'.",
        "subjectClasses": ["RC-ResourceTerm"],
        "objectClasses": ["RC-ResourceTerm"],
        "changedAt": "2018-03-21T18:06:20+01:00"
	}],
    "resources": [{
        "id": "R-d5b994e50034",
        "title": "Vehicle",
		"description": "Any means in or by which someone travels or something is carried or conveyed; a means of conveyance or transport. (Source: dictionary.com)",
        "class": "RC-ResourceTerm",
        "changedAt": "2020-03-01T07:59:00+01:00"
	},{
        "id": "R-d5b994e50035",
        "title": "Lorry",
		"description": "Any of various conveyances running on rails, as for transporting material in a mine or factory. (Source: dictionary.com)",
        "class": "RC-ResourceTerm",
        "changedAt": "2020-03-01T07:59:00+01:00"
    }],
    "statements": [{
        "id": "S-X0lXi7lJP9DQsg4Jj4qbLuQYaGz",
        "class": "SC-isSpecialisationOf",
        "subject": "R-d5b994e50035",
        "object": "R-d5b994e50034",
        "changedAt": "2020-03-01T07:59:00+01:00"
	}],
    "hierarchies": [{
        "id": "N-78cf736b276",
        "resource": "R-d5b994e50034",
        "changedAt": "2020-03-01T07:59:00+01:00"
	},{
        "id": "N-78cf736b277",
        "resource": "R-d5b994e50035",
        "changedAt": "2020-03-01T07:59:00+01:00"
    }]
}
```

Some explanations may help to understand the principles:
- to do.

You may download the example [Hello World](http://specif.de/examples/02_Related-Terms.specif "SpecIF Example \'Related Terms\'") or view it using the [SpecIF Viewer](http://specif.de/apps-alpha/view.html#import=../examples/02_Related-Terms.specif).
