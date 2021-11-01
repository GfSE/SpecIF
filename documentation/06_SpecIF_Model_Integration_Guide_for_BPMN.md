# SpecIF Model Integration Guide for BPMN

## BPMN-SpecIF mapping

For introduction to the Business Process Model and Notation (BPMN), see the [BPMN 2.0 Symbol Reference](https://camunda.com/de/bpmn/bpmn-2-0-symbol-reference/), for example.

### Resources

| [BPMN-XML](https://www.omg.org/spec/BPMN/2.0/About-BPMN/) | [SpecIF](https://specif.de) |
| --- | --- |
| bpmn:collaboration | SpecIF:Diagram |
| bpmn:process | *tbd* |
| bpmn:participant<sup>1</sup>, bpmn:laneSet, bpmn:lane<sup>2</sup>, bpmn:task, bpmn:manualTask, bpmn:userTask, bpmn:scriptTask, bpmn:serviceTask, bpmn:sendTask, bpmn:receiveTask, bpmn:callActivity, bpmn:transaction, bpmn:subProcess, bpmn:businessRuleTask, forking and joining bpmn:parallelGateway, joining bpmn:exclusiveGateway, joining bpmn:inclusiveGateway | [FMC:Actor](https://specif.de/apps/view#import=../examples/Vocabulary.specifz;view=doc;node=N-4NoXVcSzSs07Htg4959SJnDEm0D) |
| forking bpmn:exclusiveGateway, forking bpmn:inclusiveGateway, forking bpmn:eventBasedGateway | [FMC:Actor](https://specif.de/apps/view#import=../examples/Vocabulary.specifz;view=doc;node=N-4NoXVcSzSs07Htg4959SJnDEm0D) plus [FMC:Event](https://specif.de/apps/view#import=../examples/Vocabulary.specifz;view=doc;node=N-8HwdIxFap0pTQ5JiE31I1BQJ15z) per outgoing sequenceFlow |
| bpmn:dataObjectReference<sup>3</sup>, bpmn:dataStoreReference<sup>3</sup>, bpmn:messageFlow<sup>4</sup> | [FMC:State](https://specif.de/apps/view#import=../examples/Vocabulary.specifz;view=doc;node=N-yeUw4dc3iTxk7PHLdQo7efxLvBc) |
| bpmn:startEvent, bpmn:timerStartEvent, bpmn:messageStartEvent, bpmn:intermediateEvent, bpmn:messageThrowEvent, bpmn:intermediateThrowEvent, bpmn:intermediateCatchEvent, bpmn:intermediateTimerCatchEvent, bpmn:intermediateMessageCatchEvent, bpmn:boundaryEvent, bpmn:timerBoundaryEvent, bpmn:messageBoundaryEvent, bpmn:endEvent | [FMC:Event](https://specif.de/apps/view#import=../examples/Vocabulary.specifz;view=doc;node=N-8HwdIxFap0pTQ5JiE31I1BQJ15z) |
| bpmn:group<sup>5</sup> | [SpecIF:Collection](https://specif.de/apps/view#import=../examples/Vocabulary.specifz;view=doc;node=N-MCUw5EHwNYxa9wqMtctM4J2A2G8) |

The original model element type (BPMN-XML tag) is stored in a property named _dcterms:type_. 

Comments:
1. A participant is also called a 'pool'.
1. A lane is considered a responsible person or role, thus an FMC:Actor.
1. Interestingly enough, in BPMN the name and other information are properties of _dataObjectReference_ resp. _dataStoreReference_ (rather than _dataObject_ or _dataStore_). Also the associations point to the references. Therefore, the references are transformed and the dcterms:type is anyways set to _dataObject_ resp. _dataStore_.
1. A messageFlow between different processes is transformed to a _dataObject_ with _SpecIF:writes_ and _SpecIF:reads statements_ connecting to the sending resp. receiving process steps or events.
1. Currently a _group_ is not represented as a SpecIF model-element, because some (or even all) widely used BPMN modelers do not indicate explicitly in their BPMN-XML export, which activities or other are contained. Thus, the semantics of a group are not easily derived. The geometric coordinates of the diagram can be analyzed to identify contained elements of a group, of course: This is a development task to do.

### Statements

At present, the following statements are derived from BPMN diagrams, where the _statement terms_ (_predicates_) are highlighted in _italics_:

| [BPMN-XML](https://www.omg.org/spec/BPMN/2.0/About-BPMN/) |  | [SpecIF](https://specif.de) | Comment |
| --- | --- | --- | --- |
| *Appearance on diagram* | diagram _SpecIF:shows_ model-element | SpecIF:shows |  |
| *Graphical Containment* | process _SpecIF:contains_ lane | SpecIF:contains |  |
| *Graphical Containment* | lane _SpecIF:contains_ activity or event | SpecIF:contains |  |
| bpmn:dataInputAssociation | activity _SpecIF:reads_ data | SpecIF:reads |  |
| bpmn:dataOutputAssociation | activity _SpecIF:writes_ data | SpecIF:writes |  |
| bpmn:sequenceFlow | activity _SpecIF:precedes_ activity | SpecIF:precedes |  |
| bpmn:sequenceFlow ('outgoing' with respect to the event) | event _SpecIF:precedes_ activity | SpecIF:precedes |  |
| bpmn:sequenceFlow ('incoming' with respect to the event) | activity _SpecIF:precedes_ event | SpecIF:precedes |  |
| bpmn:association | annotation _SpecIF:refersTo_ model-element | SpecIF:refersTo |  |

Where:
- 'model-element' is one of [ 'FMC:Actor', 'FMC:State', 'FMC:Event' ]
- 'activity' is one of [ bpmn:task, bpmn:manualTask, bpmn:userTask, bpmn:scriptTask, bpmn:serviceTask, bpmn:sendTask, bpmn:receiveTask, bpmn:callActivity, bpmn:transaction, bpmn:subProcess ], thus an FMC:Actor
- 'data' is one of [ bpmn:dataObjectReference, bpmn:dataStoreReference ], thus a FMC:State
- 'event' is one of [ bpmn:startEvent, bpmn:intermediateThrowEvent, bpmn:intermediateCatchEvent, bpmn:boundaryEvent, bpmn:endEvent ], thus a FMC:Event
 
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
