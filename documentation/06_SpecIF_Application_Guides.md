# SpecIF Application Guides

TO BE DEFINED...

## FMC-SpecIF mapping

## BPMN-SpecIF mapping

| FMC:Actor | FMC:State | FMC:Event | SpecIF:Collection |
| --- | --- | --- | --- |
| laneSet | dataObjectReference | startEvent |  |
| lane | dataStoreReference | intermediateThrowEvent |  |
| task |  | intermediateCatchEvent |  |
| manualTask |  | boundaryEvent |  |
| userTask |  | endEvent |  |
| scriptTask |  |  |  |
| serviceTask |  |  |  |
| sendTask |  |  |  |
| receiveTask |  |  |  |
| callActivity |  |  |  |
| subProcess |  |  |  |
|  |  |  |  |
|  |  |  |  |
|  |  |  |  |
|  |  |  |  |

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
