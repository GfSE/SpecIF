# Tutorial 2: 'Related Terms'

Next, we would like to present two resources and a statement using both. Statements express semantic relations between entities. In a real application, a SpecIF data-set represents a semantic net with resources as nodes and startements as arcs. This example could well be the beginning of a vocabulary or ontology in the traffic domain.

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
        "id": "R-9876",
        "title": "Vehicle",
        "description": "Any means in or by which someone travels or something is carried or conveyed; a means of conveyance or transport. (Source: dictionary.com)",
        "class": "RC-ResourceTerm",
        "changedAt": "2020-03-01T07:59:00+01:00"
    },{
        "id": "R-1234",
        "title": "Lorry",
        "description": "Any of various conveyances running on rails, as for transporting material in a mine or factory. (Source: dictionary.com)",
        "class": "RC-ResourceTerm",
        "changedAt": "2020-03-01T07:59:00+01:00"
    }],
    "statements": [{
        "id": "S-X0lXi7lJP9DQsg4Jj4qbLuQYaGz",
        "class": "SC-isSpecialisationOf",
        "subject": "R-1234",
        "object": "R-9876",
        "changedAt": "2020-03-01T07:59:00+01:00"
    }],
    "hierarchies": [{
        "id": "N-78cf736b276",
        "resource": "R-1234",
        "changedAt": "2020-03-01T07:59:00+01:00"
    },{
        "id": "N-78cf736b277",
        "resource": "R-9876",
        "changedAt": "2020-03-01T07:59:00+01:00"
    }]
}
```

Some explanations may help to understand the principles:
- *resourceClasses*, *resources* and *hierarchies* have been covered, before, see Tutorial 1.
- Similarly to resources having *resourceClasses*, the statements have types, called *statementClasses*.
- According to the SpecIF schema, a statementClass requires *id*, *title* and *changedAt*, all other attributes are optional.
- A *statement* is an instance of a *statementClass*. It is a triple of *subject*, predicate and *object*, where the predicate is defined by the statement's *title*. By default, it's statementClass *title* can be used. Thus, in the example the vocabulary term \'SpecIF:isSpecialisationOf\' is the predicate or verb of the statement.
- The statement's *subject* may either be a resource *id* or statement *id*. The same applies to a statement's *object*, so that the example's statement expresses *Lorry is a specialisation of Vehicle*.
- A *statementClass* may have an attribute *subjectClasses*. If missing, all resources or statements are eligible as a statement's *subject*. If present, only resources or statements of the specified classes may be used. An empty list makes the statementClass useless und thus isn't allowed.
- The same applies to a statement's *object*: It must be an instance of any of the classes listed in the respective statementClass' *objectClasses* ... or may be an instance of any *resourceClass* or *statementClass*, if *objectClasses* is missing.
- In the example, the statementCLass with \"id\":\"SC-isSpecialisationOf\" determines that it's instance statement with \"id\":\"S-X0lXi7lJP9DQsg4Jj4qbLuQYaGz\" may only have resources with a resourceClass \"id\":\"RC-ResourceTerm\".
- This discussion may appear somewhat irrelevant, as there are only a single resourceClass and a single statementClass, here. But it is a rarely seen feature of SpecIF which develops its power, when there are multiple resourceClasses as well as statementClasses and it comes to select all resources which can be taken into consideration as subject or object for a given statement.

You may view or download the example [Hello World](http://specif.de/examples/02_Related-Terms.specif "SpecIF Example \'Related Terms\'") or view it using the [SpecIF Viewer](http://specif.de/apps-alpha/view.html#import=../examples/02_Related-Terms.specif).
