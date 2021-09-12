![SpecIF - Specification Integration Facility](./logo/SpecIF-Logo-120.png)

# Specification Integration Facility - schema, constraints, checker, documentation and examples

## Purpose
SpecIF represents the visible, i.e. the diagrams and the text, as well as the semantics of system specifications for model integration and model exchange.

Basic Assumptions:
- There will be always specialized tools for different purposes
- It is unwise to require collaborators to use certain tools or even a single tool
- There is an interest to search, navigate and audit partial results in a common context

That‘s where SpecIF kicks in.


For details see http://specif.de and [the SpecIF specification documentation](./documentation/Readme.md) in this repository.

This branch details schema and constraints for 'fully-flegded' SpecIF. It is characterized by
- A SpecIF data set (container) may have information elements of multiple revisions. The identifiers are identical and the revision tags change. 
The combination of identifier and revision, called 'key', must be unique, however. 
- Information content may be provided for more than one language.
- A transformation to ReqIF is possible, if a certain revision level and a certain language is chosen.
- A lossless transformation from ReqIF is always possible.
- For a simpler SpecIF schema without support for multiple revisions and without multi-language support, please consult the branch 'SpecIF Level-1' starting version 0.10.2.
- All SpecIF data sets (containers) conforming with schema v0.10.2 and above also conform with SpecIF v0.11.1 and above.

Thanks to @oalt for the discussion about support for multiple revisions and multiple languages!

## Schema

The SpecIF schema is developed according to [JSON-schema](http://json-schema.org) using this [Github repository](./schema/). It is hosted by
- SpecIF Home: https://specif.de/v1.0/schema.json and https://specif.de/v1.1/schema.json
- Schemastore.org: https://json.schemastore.org/specif-1.0.json

Sometimes the question is raised why there is a version v1.1 so shortly after v1.0. In fact there is no need for any additional feature. 
SpecIF v1.0 is particularly well suited to get acquainted with SpecIF concepts, as simple tasks allow a simple representation. 
If more advanced features such as multi-language support are needed, the SpecIF schema v1.0 would allow a more elaborate structure. 
While the learning is facilitated, the structural variance makes system implementation including transformations more complicated. 
Also, some development teams may decide to only implement certain structure variants, resulting in compatibility problems.
For that reason the schema v1.1 has eliminated all structural variances. Now the data structure seems to be more complicated, because all features are always accounted for,
but the structure is always the same: When a certain element *may* have several values, it is always a list, even if it has only one member.

## Constraints

In addition to the schema, the following constraints apply for SpecIF v1.1:
- An item's *key* consisting of *id* and *revision* must be unique. By default of a revision, the id must be unique.
- dataType 'xs:integer' or 'xs:double': If both exist, 'minInclusive' must be smaller or equal than 'maxInclusive'.
- dataType: If present, a list of enumerated values must have at least one entry.
- dataType except 'xs:string': If present, a list of enumerated values must have entries of type string.
- dataType 'xs:string': If present, a list of enumerated values must have entries with a list of multi-language texts each.
- A propertyClass's 'dataType' must reference a member of dataTypes by key.
- propertyClass: If present, the list of default values must not have more than one value, unless 'multiple' is true.
- propertyClass: If present, the list of default values must have valid entries according to the referenced dataType (see below).
- resourceClass not extending another: The list of propertyClasses must reference at least one a member of propertyClasses by key.
- resourceClass extending another: If present, the list of propertyClasses must reference members of propertyClasses by key.
- A resourceClass's 'extends' must reference a resourceClass by key.
- statementClass: If present, a list of propertyClasses must reference members of propertyClasses by key.
- A statementClass's 'subjectClasses': If present, the list must reference members of resourceClasses or statementClasses by key.
- A statementClass's 'objectClasses': If present, the list must reference members of resourceClasses or statementClasses by key.
- A statementClass's 'extends' must reference a statementClass by key.
- A resource's 'class' must reference a member of resourceClasses by key. 
- A resource's 'properties' must have valid entries according to the referenced dataType (see below).
- A statement's 'class' must reference a member of statementClasses by key.
- A statement's 'subject' must reference a valid resource or statement.
- A statement's 'subject' must have a class which is listed in the subjectClasses of the statement's class, if such subjectClasses are defined.
- A statement's 'object' must reference a valid resource or statement.
- A statement's 'object' must have a class which is listed in the objectClasses of the statement's class, if such objectClasses are defined.
- A statement's 'properties' must have valid entries according to the referenced dataType (see below).
- A node's 'resource' must reference a member of resources by key.
- The list of values must not have more than one item, unless 'multiple' of the propertyClass (or by default of the dataType) is true.
- Underlying dataType defines enumerated values: If present, the list of values must have entries defined as id in the dataType's enumeration list.
- Underlying dataType 'xs:string' without enumerated values: If present, the list of values must have multilanguage text items.
- Underlying dataType except 'xs:string' without enumerated values: If present, the list of values must have string items.
- Underlying dataType 'xs:boolean' without enumerated values: Each item of the value list must be either 'true' or 'false'.
- Underlying dataType 'xs:dateTime' without enumerated values: Each item of the value list must be a date-time according to ISO 8601.
- Underlying dataType 'xs:anyURI' without enumerated values: Each item of the value list must be a valid URI string according to according to RFC 3986.
- Underlying dataType 'xs:integer' without enumerated values: Each item of the value list must be a valid integer number.
- Underlying dataType 'xs:double' without enumerated values: Each item of the value list must be a valid number.
- Underlying dataType 'xs:integer' or 'xs:double' without enumerated values: Each item of the value list must be larger or equal to the dataTypes 'minInclusive', if defined.
- Underlying dataType 'xs:integer' or 'xs:double'  without enumerated values: Each item of the value list must be smaller or equal to the dataTypes 'maxInclusive', if defined.
- Underlying dataType 'xs:string' without enumerated values: Each multilanguage object of the value list must not be longer than 'maxLength', if defined.

A constraint checker is available as JavaScript function using this [Github repository](./check/). It is hosted by 
- SpecIF Home: https://specif.de/v1.0/check.js and https://specif.de/v1.1/check.js

## Examples

For examples have a look into the [tutorials](./tutorials/Readme.md).

## Acknowledgements
This work has been sponsored by [enso-managers gmbh](http://enso-managers.de) and [mdd4all](http://mdd4all.de).
