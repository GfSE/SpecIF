# Tutorial 2: 'Related Terms'

Next, we would like to present two *resources* and a *statement* about both. Statements express semantic relations between resources. In a real application, a SpecIF data-set represents a semantic net with resources as nodes and statements as arcs. This example could well be the beginning of a vocabulary or ontology in the traffic domain.

Thus very fundamentally, SpecIF is to represent entities, objects or nodes (called *resources*) on one hand and relations or arcs (called *statements*) on the other.

```json
{
    "statementClasses": [{
        "id": "SC-isSpecializationOf",
        "title": "is a specialization of",
        "description": "Signifies that a term is a specialization of another, such as 'Passenger Car' and 'Vehicle'.",
        "changedAt": "2018-03-21T18:06:20+01:00"
    }],
    "statements": [{
        "id": "S-X0lXi7lJP9DQs",
        "class": "SC-isSpecializationOf",
        "subject": "R-1234",
        "object": "R-9876",
        "changedAt": "2020-03-01T07:59:00+01:00"
    }]
}
```

Some explanations may help to understand the principles:
- *resourceClasses*, *resources* and *hierarchies* have been covered, before; see Tutorial 1: [Hello World](./01_Hello-World.md).
- Similarly to resources having *resourceClasses*, the statements have types called *statementClasses*.
- According to the SpecIF schema, a statementClass requires *id*, *title* and *changedAt*, all other attributes are optional.
- A *statement* is an instance of a *statementClass*. It is a triple of *subject*, predicate and *object*, where the predicate is defined by the statement's *title*. By default, it's statementClass *title* applies. Thus, the term \"is a specialization of\" is the predicate or verb of the given statement.
- Consider to use a vocabulary term, such as \"title\":\"SpecIF:isSpecializationOf\"; it has a commonly agreed meaning across application domains or national languages. While appearing a little awkward, a vocabulary term can be translated for display to any term deemed appropriate in the given context. The benefits of using a vocabulary will be covered more in depth in one of the subsequent tutorials.

Let us have a look at the full example, now:

```json
{
    "$schema": "https://specif.de/v1.0/schema.json",
    "id": "P-Related-Terms",
    "title": "Project 'Related Terms'",
    "resourceClasses": [{
        "id": "RC-ResourceTerm",
        "title": "Resource Term",
        "changedAt": "2020-03-01T07:59:00+01:00"
    }],
    "statementClasses": [{
        "id": "SC-isSpecializationOf",
        "title": "is a specialization of",
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
        "id": "S-X0lXi7lJP9DQs",
        "class": "SC-isSpecializationOf",
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

Some more explanations:
- The statement's *subject* may either be a resource *id* or statement *id*. The same applies to a statement's *object*, so that the example's statement expresses *Lorry is a specialization of Vehicle*.
- A *statementClass* may have an attribute *subjectClasses*. If missing, all resources or statements are eligible as a statement's *subject*. If present, only resources or statements of the specified classes may be used. An empty list is useless und thus isn't allowed by the schema.
- The same applies to a statement's *object*: It must be an instance of any of the classes listed in the respective statementClass' *objectClasses* ... or may be an instance of any *resourceClass* or *statementClass*, if *objectClasses* is missing.
- In the example, the statementCLass with \"id\":\"SC-isSpecializationOf\" determines that all it's instance statements may only have subjects and objects with a resourceClass \"id\":\"RC-ResourceTerm\". Have a look at the only instance with \"id\":\"S-X0lXi7lJP9DQs\": As required, it's subject and object are of type \"id\":\"RC-ResourceTerm\".
- This discussion may appear somewhat irrelevant here, as there are only a single resourceClass and a single statementClass. But it is a strong feature of SpecIF which develops its power, when there are multiple resourceClasses as well as statementClasses and it comes to select all resources which can be taken into consideration as subject or object for a given statement. It is rarely seen elsewhere. 

You may also view/download the example [Related Terms](http://specif.de/examples/02_Related-Terms.specif "SpecIF Example \'Related Terms\'") or work with it using the [SpecIF Viewer](http://specif.de/apps/view.html#import=../examples/02_Related-Terms.specif).
