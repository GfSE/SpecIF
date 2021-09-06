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
While the learning is facilitated, the structural variance makes system implementation more complicated; also some systems may only implement certain structure variants.
For that reason the schema v1.1 has eliminated all structural variance. Now the data structure seems to be more complicated, because all features are always accounted for,
but the structure is always the same: When any element *may* have several values, it is always a list, even if it has only one member.

## Constraints

In addition to the schema, the following constraints on apply:
- Any item's *key* consisting of *id* and *revision* must be unique. By default of a revision, the id must be unique.
- A propertyClass's *dataType* value must be the *id* of a member of *dataTypes*.
- ... 
- A resource's *class* value must be the *id* of a member of *resourceClasses*. 
- Similarly, A statement's *class* value must be the *id* of a member of *statementClasses*.
- ...
- A node's *resource* value must be the *id* of a member of *resources*.

A syntax and constraint checker is available as JavaScript function using this [Github repository](./check/). It is hosted by 
- SpecIF Home: https://specif.de/v1.0/check.js and https://specif.de/v1.1/check.js

## Examples

For examples have a look into the [tutorials](./tutorials/Readme.md).

## Acknowledgements
This work has been sponsored by [enso-managers gmbh](http://enso-managers.de) and [mdd4all](http://mdd4all.de).
