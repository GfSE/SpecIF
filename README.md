![SpecIF - Specification Integration Facility](./logo/SpecIF_Logo_small.png)

# Specification Integration Facility (SpecIF)

## Purpose

The Specification Integration Facility is a technology and standardization initiative, addressing the topic of data exchange and data integration in 
the domain of *Product Lifecycle Management* (PLM).
The project is driven by the [*Gesellschaft für Systems Engineering*](https://www.gfse.de/) (GfSE e.V.) - German Chapter of [INCOSE](https://www.incose.org/).  

![GfSE logo](https://www.gfse.de/images/GfSE-Logo_web.jpg)

SpecIF represents the visible, i.e. the diagrams and the text, as well as the semantics of system specifications for model integration and model exchange.

Basic Assumptions:
- There will be always specialized tools for different purposes
- It is unwise to require collaborators to use certain tools or even a single tool
- There is an interest to search, navigate and audit partial results in a common context

That‘s where SpecIF kicks in. For further details see http://specif.de and [the SpecIF specification documentation](./documentation/Readme.md) in this repository.

## SpecIF building blocks

SpecIF consists of multiple parts, that are covered by this repository and linked submodules:

1. The **documentation of SpecIF** is available in the [documentation](https://github.com/GfSE/SpecIF/tree/master/documentation) folder of this repository.
2. The **SpecIF logo** is defined in the [logo](https://github.com/GfSE/SpecIF/tree/master/logo) section. 
3. The **SpecIF JSON-schema and constraint checker** is defined in the sub-repository https://github.com/GfSE/SpecIF-Schema
4. The **SpecIF class definitions** to define a set of standardized terms and definitions with a fixed and well-defined semantics is located in the sub-repository https://github.com/GfSE/SpecIF-Class-Definitions
5. A **vocabulary**, defining terms used for SpecIF class definitions is located in the [vocabulary](https://github.com/GfSE/SpecIF/tree/master/vocabulary) section as SpecIF data.
6. The **SpecIF Web API** is available in the sub-repository https://github.com/GfSE/SpecIF-OpenAPI

## Examples

For examples have a look into the [tutorials](./tutorials/Readme.md).

## Acknowledgments

This work has been sponsored and supported by 
* [enso-managers gmbh](http://enso-managers.de) 
* [mdd4all](http://mdd4all.de)
* Members of the GfSE working group *Product Lifecycle Management for Systems Engineering* (PLM4MBSE)