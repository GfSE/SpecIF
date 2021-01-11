# SpecIF Application Guides

TO BE DEFINED...

## FMC-SpecIF mapping

## BPMN-SpecIF mapping

| FMC:Actor | FMC:State | FMC:Event | SpecIF:Collection |
| --- | --- | --- | --- |
| laneSet | dataObjectReference<sup>3</sup> | startEvent |  |
| lane<sup>1</sup> | dataStoreReference<sup>3</sup> | intermediateThrowEvent |  |
| task |  | intermediateCatchEvent |  |
| manualTask |  | boundaryEvent |  |
| userTask |  | endEvent |  |
| scriptTask |  |  |  |
| serviceTask |  |  |  |
| sendTask |  |  |  |
| receiveTask |  |  |  |
| callActivity |  |  |  |
| subProcess |  |  |  |
| parallelGateway |  |  |  |
| eventBasedGateway |  |  |  |
| exclusiveGateway<sup>2</sup> |  |  |  |
| inclusiveGateway<sup>2</sup> |  |  |  |

Comments:
1. A lane is considered a responsible person or role, thus an Actor.
1. A forking exclusive or inclusive gateway is transformed to an Actor plus an Event per outgoing path.
1. Interestingly enough, the name and other information are properties of _dataObjectReference_ resp. _dataStoreReference_. Also the associations point to the references. Therefore, the references are transformed and the dcterms:type is anyways set to _dataObject_ resp. _dataStore_.


Here is the current code of the [BPMN to SpecIF transformation](https://github.com/GfSE/BPMN-SpecIF-Bridge/blob/master/source/js/BPMN2SpecIF.js).

## Archimate-SpecIF mapping

| FMC:Actor | FMC:State | FMC:Event | SpecIF:Collection |
| --- | --- | --- | --- |
|  |  |  |  |
|  |  |  |  |
|  |  |  |  |
|  |  |  |  |

Here is the current code of the [Archimate to SpecIF transformation](https://github.com/GfSE/Archimate-SpecIF-Bridge/blob/master/source/js/archimate2SpecIF.js).

## UML-SpecIF mapping

## SysML-SpecIF mapping
