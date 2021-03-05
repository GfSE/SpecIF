# SpecIF Model Integration Guide for BPMN

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
1. A messageFlow between different processes is transformed to a _dataObject_ with _SpecIF:writes_ and _SpecIF:reads statements_ connecting to the sending resp. receiving process steps or events.
1. Currently a _group_ is not represented as a SpecIF model-element, because some (or even all) widely used BPMN modelers do not indicate explicitly in their BPMN-XML export, which activities or other are contained. Thus, the semantics of a group are not easily derived. The geometric coordinates of the diagram can be analyzed to identify contained elements of a group, of course: This is a development task to do.

### Statements

At present, the following statements are derived from BPMN diagrams, where the _statement terms_ (_predicates_) are highlighted in _italics_:
- diagram _SpecIF:shows_ model-element
- process _SpecIF:contains_ lane
- lane _SpecIF:contains_ activity or event
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

## BPMN to SpecIF Mapping

_{ to be consolidated with the above }_

A Mapping for BPMN to SpecIF was developed in the Masterthesis of Robert Kanitz. The following Mapping Table shows the Mapping between BPMN- and SpecIF-Elements.
The implementation of the Transformation is accessible in the GFSE-Github (https://github.com/GfSE/BPMN-SpecIF-Bridge). 

### BPMN to SpecIF mapping table
|BPMN-Element | SpecIF Resource Class |dcterms:type| Remark|
| ------------- |:-------------|-| -----------|
|Process| SpecIF:Diagram |OMG:BPMN:2.0:Process| SpecIF:Diagram and SpecIF:shows Statements for Elements belonging to the diagram|
|||||
|Start Event | FMC:Event |OMG:BPMN:2.0:StartEvent|-|
|Intermediate Event | FMC:Event |OMG:BPMN:2.0:IntermediateEvent|-|
|End Event | FMC:Event |OMG:BPMN:2.0:EndEvent|-|
|TimerStartEvent| FMC:Event |OMG:BPMN:2.0:TimerStartEvent| -|
|TimerIntermediateEvent| FMC:Event |OMG:BPMN:2.0:TimerIntermediateEvent| -|
|MessageStartEvent| FMC:Event |OMG:BPMN:2.0:MessageStartEvent| -|
|MessageIntermediateEvent| FMC:Event |OMG:BPMN:2.0:MessageIntermediateEvent| -|
|MessageEndEvent| FMC:Event |OMG:BPMN:2.0:MessageEndEvent| -|
|||||
|Activity| FMC:Actor |OMG:BPMN:2.0:Acticity|-|
|Task| FMC:Actor |OMG:BPMN:2.0:Task|-|
|SendTask| FMC:Actor |OMG:BPMN:2.0:SendTask|-|
|ReceiveTask| FMC:Actor |OMG:BPMN:2.0:ReceiveTask|-|
|ServiceTask| FMC:Actor |OMG:BPMN:2.0:ServiceTask|-|
|UserTask| FMC:Actor |OMG:BPMN:2.0:UserTask|-|
|ManualTask| FMC:Actor |OMG:BPMN:2.0:ManualTask|-|
|ScriptTask| FMC:Actor |OMG:BPMN:2.0:ScriptTask|-|
|BusinessRuleTask| FMC:Actor |OMG:BPMN:2.0:BusinessRuleTask|-|
|||||
|Parallel Gateway (Seperation) | Statements || Statements between incoming and outgoing Elements|
|Parallel Gateway (Merge) | FMC:Actor || Actor with waiting function|
|Exclusive Gateway (Seperation)| FMC:Actor + FMC:Event + SpecIF:signals|| Events for different Activityflows|
|Exclusive Gateway (Merge)| Statements || Statements between incoming and outgoing Elements|
|||||
|Group| SpecIF:Collection |OMG:BPMN:2.0:Group| Additional SpecIF:contains Statements for Elements that are contained by the Group |
|||||
|Pool| FMC:Actor |OMG:BPMN:2.0:Participant| Additional SpecIF:contains Statements for Elements that are contained by the Pool|
|Lane| FMC:Actor |OMG:BPMN:2.0:Participant| Additional SpecIF:contains Statements for Elements that are contained by the Lane|
|DataObject| FMC:State |OMG:BPMN:2.0:DataObject| - |
|DataObject is Collection| FMC:State |OMG:BPMN:2.0:DataObjectCollection| - |
|Datainput| FMC:State |OMG:BPMN:2.0:DataInput| - |
|Dataoutput| FMC:State |OMG:BPMN:2.0:DataOutput| - |
|DataStore| FMC:State |OMG:BPMN:2.0:DataStore| - |
|||||
|Annotation| SpecIF:Comment |OMG:BPMN:2.0:TextAnnotation| - |
|||||
|Association| SpecIF:contains/refersTo || - |
|SequenceFlow| SpecIF:triggers/signals/precedes || - |
|MessageFlow| FMC:State + SpecIF:reads/writes || Messageflow Object is represented by FMC:State|
