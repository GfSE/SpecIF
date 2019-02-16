![alt text](http://specif.de/files/template/specif-logo.png "SpecIF Open SE Models")

Specification Integration Facility - schema, constraints, checker and examples

## Purpose
SpecIF represents the visible, i.e. the diagrams and the text, as well as the semantics of system specifications for model integration and model exchange.

For details see http://specif.de.

This branch details schema and constraints for 'fully-flegded' SpecIF. It is characterized by
- A SpecIF data set (container) may have information elements of multiple revisions. The identifiers are identical and there may be multiple revisions. The combination of identifier and revision, called 'key', must be unique, however. 
- Information content may be provided for more than one language.
- A transformation to ReqIF is possible, if a certain revision level and a certain language is chosen.
- A lossless transformation from ReqIF is always possible.
- For a simpler SpecIF schema without support for multiple revisions and without multi-language support, please consult the branch 'SpecIF Level-1' starting version 0.10.2.
- All SpecIF data sets (containers) conforming with schema v0.10.2 and above also conform with SpecIF v0.11.1 and above.

Thanks to @oalt for the discussion about support for multiple revisions and multiple languages!

## Schema

## Constraints

## Checker

## Examples

## Acknowledgements
This work has been sponsored by [enso-managers gmbh](http://enso-managers.de), Berlin
