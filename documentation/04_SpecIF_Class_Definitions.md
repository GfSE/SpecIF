# SpecIF Class Definitions

To define the semantics for SpecIF, a collection of data types and class definitions is defined and part of the SpecIF standard. 

The class definitions, provided as SpecIF files, are available here: https://github.com/GfSE/SpecIF-Class-Definitions.

It is strongly recommended to use exactly the data type and class definitions 
described here to get a SpecIF file or SpecIF data set that follows the official SpecIF standard.
Of course you can define your own data types and classes to extend the 
standardized SpecIF semantics with your own domain-specific definitions.
Nevertheless, try to reuse the standardized types as often as possible or use the concept of inheritance 
to define your own types based on existing and standardized ones.
This ensures compatibility with the SpecIF standard and allows a semantically correct interpretation 
of your data by tools supporting SpecIF.   

## Domains

The definition of SpecIF classes is organized in application domains. 
This allows the definition of releases for some domains at the same time, while 
other domains are still under discussion and development and will be released at a later date.

For SpecIF 1.1 three domains are selected to be part of the first release:

* 01 - Base Definitions,
* 02 - Requirements Engineering,
* 03 - Model Integration.

The other domains are still under discussion and not yet part of an official SpecIF release. 
It is planned to release them with a future release.

### Domain types
The following list shows the currently defined domains and their IDs:

|Domain ID|Domain|Description|Release status|
|---------|-|-|-|
|01|Base definitions|Common definitions relevant for all domains (e.g. primitive data types).|Released in 1.1|
|02|Requirements Engineering|Classical requirements engineering following the IREB definitions.|Released in 1.1|
|03|Model Integration|SpecIF mapping for the Fundamental Modeling Concepts approach usable to integrate system modeling data.|Released in 1.1|
|04|Automotive Requirements Engineering|Automotive-specific requirements engineering extensions (VDA).|Unreleased|
|05|Agile Requirements Engineering|Requirements engineering for agile development (e.g. epics and user stories).|Unreleased|
|06|UML/SysML Integration|Deprecated. Covered by domain 03-Model Integration.|Deprecated|
|07|Issue Management|Issue and Task management.|Unreleased|
|08|BOM|Bill of materials.|Unreleased|
|09|Variant Management|Feature model-based variant management.|Unreleased|
|10|Vocabulary Definition|Resources to define Vocabularies (e.g. SpecIF Vocabulary).|Unreleased|
|11|Testing|Testing domain according to ISTQB definitions.|Unreleased|
