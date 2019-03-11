SpecIF class and data type definitions
===========================
This folder contains the data type and class definitions for the SpecIF metatypes:
* Datatypes
* Property Classes
* Resource Classes
* Hierarchy Classes
* Statement Classes
* Hierarchy Classes

<b>It is currently still under development and under discussion and can change fast and widely until the first release version of SpecIF!</b>

If you want to support the SpecIF standardization process, join us and take a look at https://specif.de.

## File naming schema
For the discussion process the metadata files have a special naming schema with a 3 digit number as prefix in the filename:

* The **first digit** stands for the meta type kind, that is defined by the file
* The **next two digits** are counters, starting from 01 until 99

This makes it possible to define a metatype by a set of files with the same first digit and different counter numbers

<i>Example:</i> The files starting with `101_` and `102_` are both definitions of the same metatype (e.g. SpecIF-Datatypes) with the file counters `01` and `02`. The superset of all files starting with the same digit are building the complete specification for one metatype.

## Current file naming schema
Currently the following digits are assigned with the SpecIF metatypes. It is possible that this will change in the future, e.g when further metatypes are defined.

|1st Digit|SpecIF Metatype|
| ----|---------------|
|   1 | Datatypes     |
|   2 | Property Classes |
|   3 | Resource Classes |
|   4 | Statement Classes |
|   5 | Hierarchy Classes |

## What about the file `Empty.specif` ?

This file can be used as base for further metatype definitions. If you want to add a new definition file, please ensure to change the SpecIF file ID, title and check the SpecIF version.
