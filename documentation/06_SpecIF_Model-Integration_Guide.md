# SpecIF Model-Integration Guide

The mapping of model elements of different notations to SpecIF is discussed in this chapter. 
A general introduction is given in [Model-Integration with SpecIF](https://specif.de/files/SpecIF/documents/2019-11-24%20Model-Integration%20with%20SpecIF).
Please refer to the [tutorials](https://github.com/GfSE/SpecIF/tree/master/tutorials) for an explanation of SpecIF resources and statements with their respective classes.

## FMC-SpecIF mapping

For introduction to the Fundamental Modelling Concepts (FMC), see the [FMC Overview](http://f-m-c.org/).

The mapping of FMC model element types to SpecIF is straight forward, as SpecIF uses the FMC model element types to integrate models of different notations.
Thus, FMC Actors, States and Events are directly mapped to FMC:Actor, FMC:State and FMC:Event respectively.

### Example

An explanation in detail is given in a tutorial [Very simple model using FMC](https://github.com/GfSE/SpecIF/blob/master/tutorials/06_Very-Simple-Model-FMC.md).

## BPMN-SpecIF mapping

For introduction to the Business Process Model and Notation (BPMN), see the [BPMN 2.0 Symbol Reference](https://camunda.com/de/bpmn/bpmn-2-0-symbol-reference/), for example.

### Resources

| [BPMN-XML](https://www.omg.org/spec/BPMN/2.0/About-BPMN/) | [SpecIF](https://specif.de) |
| --- | --- |
| participant, laneSet, lane<sup>1</sup>, task, manualTask, userTask, scriptTask, serviceTask, sendTask, receiveTask, callActivity, transaction, subProcess, parallelGateway, exclusiveGateway<sup>2</sup>, inclusiveGateway<sup>2</sup>, eventBasedGateway | [FMC:Actor](https://specif.de/apps/view#import=../examples/Vocabulary.specifz;view=doc;project=P-SpecIF-Vocabulary;node=N-4NoXVcSzSs07Htg4959SJnDEm0D) |
| dataObjectReference<sup>3</sup>, dataStoreReference<sup>3</sup>, messageFlow<sup>4</sup> | [FMC:State](https://specif.de/apps/view#import=../examples/Vocabulary.specifz;view=doc;project=P-SpecIF-Vocabulary;node=N-yeUw4dc3iTxk7PHLdQo7efxLvBc) |
| startEvent, intermediateThrowEvent, intermediateCatchEvent, boundaryEvent, endEvent | [FMC:Event](https://specif.de/apps/view#import=../examples/Vocabulary.specifz;view=doc;project=P-SpecIF-Vocabulary;node=N-8HwdIxFap0pTQ5JiE31I1BQJ15z) |
| group<sup>5</sup> | [SpecIF:Collection](https://specif.de/apps/view#import=../examples/Vocabulary.specifz;view=doc;project=P-SpecIF-Vocabulary;node=N-MCUw5EHwNYxa9wqMtctM4J2A2G8) |

The original model element type (BPMN-XML tag) is stored in a property named _dcterms:type_. 

Comments:
1. A lane is considered a responsible person or role, thus an FMC:Actor.
1. A forking exclusive or inclusive gateway is transformed to an FMC:Actor plus an FMC:Event per outgoing path.
1. Interestingly enough, in BPMN the name and other information are properties of _dataObjectReference_ resp. _dataStoreReference_ (rather than _dataObject_ or _dataStore_). Also the associations point to the references. Therefore, the references are transformed and the dcterms:type is anyways set to _dataObject_ resp. _dataStore_.
1. A messageFlow between different processes is transformed to a dataObject with SpecIF:writes and SpecIF:reads statements connecting to the sending resp. receiving process steps or events.
1. Currently a group is not represented as a SpecIF model-element, because some widely used BPMN modelers do not indicate in the BPMN-XML representation, which activities or other are contained. Thus, a group is without semantic value and therefore omitted. The diagram could be a graphically analyzed to identify any contained elements, of course.

### Statements

At present, the following statements are derived from BPMN diagrams, where the _statement terms_ (_predicates_) are highlighted in _italics_:
- diagram _SpecIF:shows_ model-element
- process _SpecIF:contains_ lane
- activity _SpecIF:reads_ data ('dataInputAssociation')
- activity _SpecIF:writes_ data ('dataOutputAssociation')
- activity _SpecIF:precedes_ activity ('sequenceFlow')
- event _SpecIF:triggers_ activity ('outgoing' with respect to the event)
- activity _SpecIF:signals_ event ('incoming' with respect to the event)
- annotation _SpecIF:refersTo_ model-element

Where:
- 'model-element' is one of [ 'FMC:Actor', 'FMC:State', 'FMC:Event' ]
- 'activity' is one of [ task, manualTask, userTask, scriptTask, serviceTask, sendTask, receiveTask, callActivity, transaction, subProcess ], thus an FMC:Actor
- 'data' is one of [ dataObjectReference, dataStoreReference ], thus a FMC:State
 
### Example

The following excerpt from BPMN-XML representing an activity and a sequenceFlow:
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
- [Telephone Connection Request (SpecIF-Viewer)](https://specif.de/apps/view#import=../examples/Tel-Connection-Req.bpmn)

### Transformation Code
Here you may look at the current code of the [BPMN to SpecIF transformation](https://github.com/GfSE/BPMN-SpecIF-Bridge/blob/master/source/js/BPMN2SpecIF.js).

## Archimate-SpecIF mapping

_{ToDo}_

### Resources

| [Archimate Open Exchange (XML)](https://www.opengroup.org/xsd/archimate/) | [SpecIF](https://specif.de) |
| --- | --- |
|  | [FMC:Actor](https://specif.de/apps/view#import=../examples/Vocabulary.specifz;view=doc;project=P-SpecIF-Vocabulary;node=N-4NoXVcSzSs07Htg4959SJnDEm0D) |
| Goal, Capability, Contract, Representation, Artefact, Product, BusinessObject, DataObject | [FMC:State](https://specif.de/apps/view#import=../examples/Vocabulary.specifz;view=doc;project=P-SpecIF-Vocabulary;node=N-yeUw4dc3iTxk7PHLdQo7efxLvBc) |
| BusinessEvent, ApplicationEvent, TechnologyEvent | [FMC:Event](https://specif.de/apps/view#import=../examples/Vocabulary.specifz;view=doc;project=P-SpecIF-Vocabulary;node=N-8HwdIxFap0pTQ5JiE31I1BQJ15z) |
| Location, Grouping | [SpecIF:Collection](https://specif.de/apps/view#import=../examples/Vocabulary.specifz;view=doc;project=P-SpecIF-Vocabulary;node=N-MCUw5EHwNYxa9wqMtctM4J2A2G8) |

The original model element type is stored in a property named _dcterms:type_. 

### Statements

At present, the following statements are derived from Archimate diagrams, where the _statement terms_ (_predicates_) are highlighted in _italics_:

_{ToDo}_

### Example

### Transformation Code
Here you may look at the current code of the [Archimate to SpecIF transformation](https://github.com/GfSE/Archimate-SpecIF-Bridge/blob/master/source/js/archimate2SpecIF.js).

## UML-SpecIF mapping

_{ToDo}_

## SysML-SpecIF mapping

_{ToDo}_

