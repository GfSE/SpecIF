# SpecIF Model-Integration Guide

The mapping of model elements of different notations to SpecIF is discussed in this chapter. 
A general introduction is given in [Model-Integration with SpecIF](https://specif.de/files/SpecIF/documents/2019-11-24%20Model-Integration%20with%20SpecIF).
Please refer to the [tutorials](https://github.com/GfSE/SpecIF/tree/master/tutorials) for an explanation of SpecIF resources and statements with their respective classes.

## FMC-SpecIF mapping

For introduction to FMC, see the [FMC Overview](http://f-m-c.org/).

The mapping of FMC model element types to SpecIF is straight forward, as SpecIF uses the FMC model element types to integrate models of different notations.
Thus, FMC Actors, States and Events are directly mapped to FMC:Actor, FMC:State and FMC:Event respectively.

### Example

An explanation in detail is given in a tutorial [Very simple model using FMC](https://github.com/GfSE/SpecIF/blob/master/tutorials/06_Very-Simple-Model-FMC.md).

## BPMN-SpecIF mapping

For introduction to BPMN, see the [BPMN 2.0 Symbol Reference](https://camunda.com/de/bpmn/bpmn-2-0-symbol-reference/), for example.

### Resources

| FMC:Actor | FMC:State | FMC:Event | SpecIF:Collection |
| --- | --- | --- | --- |
| laneSet | dataObjectReference<sup>3</sup> | startEvent | group |
| lane<sup>1</sup> | dataStoreReference<sup>3</sup> | intermediateThrowEvent |  |
| task |  | intermediateCatchEvent |  |
| manualTask |  | boundaryEvent |  |
| userTask |  | endEvent |  |
| scriptTask |  |  |  |
| serviceTask |  |  |  |
| sendTask |  |  |  |
| receiveTask |  |  |  |
| callActivity |  |  |  |
| transaction |  |  |  |
| subProcess |  |  |  |
| parallelGateway |  |  |  |
| exclusiveGateway<sup>2</sup> |  |  |  |
| inclusiveGateway<sup>2</sup> |  |  |  |
| eventBasedGateway |  |  |  |

The original model element type (BPMN-XML tag) is stored in a property named _dcterms:type_. 

Comments:
1. A lane is considered a responsible person or role, thus an Actor.
1. A forking exclusive or inclusive gateway is transformed to an Actor plus an Event per outgoing path.
1. Interestingly enough, in BPMN the name and other information are properties of _dataObjectReference_ resp. _dataStoreReference_. Also the associations point to the references. Therefore, the references are transformed and the dcterms:type is anyways set to _dataObject_ resp. _dataStore_.

### Statements

_{ToDo}_

### Example

The following excerpt from BPMN-XML representing a task and a sequenceFlow:
```
    <bpmn:userTask id="Activity_0spdj4v" name="Drink a beer">
      <bpmn:incoming>Flow_0ze546v</bpmn:incoming>
      <bpmn:outgoing>Flow_1to3p2q</bpmn:outgoing>
    </bpmn:userTask>
...
    <bpmn:sequenceFlow id="Flow_1to3p2q" sourceRef="Activity_0spdj4v" targetRef="Event_0af34ci" />
```

... is transformed to a SpecIF resource and statement, as follows:
```
{
    "id":"Activity_0spdj4v",
    "title":"Drink a beer",
    "class":"RC-Actor",
    "properties":[{
        "class":"PC-Type",
        "value":"bpmn:userTask"
    }],
    "changedAt":"2020-05-23T20:06:54.000Z"
}
...
{
    "id":"Flow_1to3p2q",
    "class":"SC-signals",
    "subject":"Activity_0spdj4v",
    "object":"Event_0hukwut",
    "properties":[{
        "class":"PC-Type",
        "value":"bpmn:sequenceFlow"
    }],
    "changedAt":"2020-05-23T20:06:54.000Z"
}
```

The full example can be inspected, here:
- [Telephone Connection Request (BPMN-XML)](https://specif.de/examples/Tel-Connection-Req.bpmn)
- [Telephone Connection Request (specif)](https://specif.de/examples/Tel-Connection-Req.specif)
- [Telephone Connection Request (SpecIF-Viewer)](https://specif.de/apps/view#import=../examples/Tel-Connection-Req.specif.zip)

### Transformation Code
Here you may look at the current code of the [BPMN to SpecIF transformation](https://github.com/GfSE/BPMN-SpecIF-Bridge/blob/master/source/js/BPMN2SpecIF.js).

## Archimate-SpecIF mapping

_{ToDo}_

### Resources

| FMC:Actor | FMC:State | FMC:Event | SpecIF:Collection |
| --- | --- | --- | --- |
|  | Goal | BusinessEvent | Location |
|  | Capability | ApplicationEvent | Grouping |
|  | Contract | TechnologyEvent |  |
|  | Representation |  |  |
|  | Artefact |  |  |
|  | Product |  |  |
|  | BusinessObject |  |  |
|  | DataObject |  |  |
|  |  |  |  |
|  |  |  |  |
|  |  |  |  |
|  |  |  |  |

The original model element type is stored in a property named _dcterms:type_. 

### Statements

_{ToDo}_

### Example

### Transformation Code
Here you may look at the current code of the [Archimate to SpecIF transformation](https://github.com/GfSE/Archimate-SpecIF-Bridge/blob/master/source/js/archimate2SpecIF.js).

## UML-SpecIF mapping

_{ToDo}_

## SysML-SpecIF mapping

_{ToDo}_

