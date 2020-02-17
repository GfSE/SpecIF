SpecIF class and data type definitions
===========================
This folder contains the data type and class definitions for the SpecIF metatypes:
* Primitive data types
* Enumeration data types
* Property classes
* Resource classes
* Statement classes

<b>It is currently still under development and under discussion and can change fast and widely until the first release version of SpecIF!</b>

If you want to support the SpecIF standardization process, join us and take a look at https://specif.de.

## Domains

The definition of the SpecIF classes is organized in application domains. 
This allows the definition of releases for some domains at the same time where 
other domains are still under discussion and under development.

### Domain types
The following list shows the currently identified domains and their IDs:

|Domain ID|Domain|Description|Release status|
|---------|-|-|-|
|01|Base definitions|Common definitions relevant for all domains (e.g. primitive data types)|Unreleased|
|02|Requirements Engineering|Classical requirements engineering following the IREB definitions|Unreleased|
|03|FMC modeling|SpecIF mapping for the Fundamental Modeling Concepts appoach|Unreleased|
|04|Automotive Requirements Engineering|Automotive-specific requirements engineering extensions (VDA)|Unreleased|
|05|Agile Requirements Engineering|Requirements engineering for agile development (e.g. epics and user stories)|Unreleased|
|06|UML-SpecIF mapping|Extensions to map UML (Unified Modeling Lanaguage) models to SpecIF|Unreleased|
|07|Issue Management|Issue and Task management|Unreleased|
|08|BOM|Bill of materials|Unreleased|
|09|Variant Management|Feature model-based variant management|Unreleased|
|10|Vocabulary Definition|Resources to define Vocabularies (e.g. SpecIF Vocabulary)|Unreleased|

## File naming schema
For the discussion process the metadata files have a special naming schema with a 3 digit number as prefix in the filename:

* The **first digit** stands for the meta type kind, that is defined by the file
* The **next two digits** are the domain IDs, listed above

This makes it possible to define a metatype by a set of files with the same first digit describing the class definition kind and the next digits referencing the domain.

<i>Example:</i> The files starting with `101_` is teh definition of primitive data types for the domain 01-Base definitions. 
The superset of all files starting with the same digit are building the complete specification for one metatype.

## Current file naming schema
Currently the following digits are assigned with the SpecIF metatypes. It is possible that this will change in the future, e.g when further metatypes are defined.

|1st Digit|SpecIF Metatype|
| ----|---------------|
|   1 | Primitive data types     |
|   2 | Enumeration data types |
|   3 | Property classes |
|   4 | Resource classes |
|   5 | Statement classes |


## What about the file `Empty.specif` ?

This file can be used as base for further metatype definitions. If you want to add a new definition file, please ensure to change the SpecIF file ID, title and check the SpecIF version.
