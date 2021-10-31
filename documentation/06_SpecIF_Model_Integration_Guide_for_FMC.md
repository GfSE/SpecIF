# SpecIF Model-Integration Guide for FMC

## FMC-SpecIF Mapping

For introduction to the Fundamental Modeling Concepts (FMC), see the [FMC Overview](http://f-m-c.org/). 
The FMC Metamodel is given in [Knöpfel, Gröne, Tabeling: Fundamental Modeling Concepts - Effective Communication of IT-Systems](https://www.wiley.com/en-us/Fundamental+Modeling+Concepts%3A+Effective+Communication+of+IT+Systems-p-9780470027103).

![FMC Metamodel](./images/FMC-Metamodel.png)

However, this Metamodel seems to be rather theoretic and it is perhaps not complete for practical purposes. 
When analyzing, among others we have the following questions:
- Why are some relations named as nouns, others as verbs (e.g. *"Observability"* vs. *"triggers"*).
- Why is 'Write access' directed and *Read access* is not?
- Is the relation between *Location* and *Value* named *has* and should it be directed?
- Can *Agent*, *Operation*, *Storage* and perhaps other entities be hierarchically nested?
- Is the relation *performs* shown in the correct direction?

As to our knowledge there is only one modeling tool for FMC, namely [ARCWAY Ccokpit](https://arcway.com),
we will show in the following the mapping from the entities and relationships realized in this tool.

### Resources

| *No standard serialization of a FMC model defined* | [SpecIF](https://specif.de) |
| --- | --- |
| Agent, Operation | [FMC:Actor](https://specif.de/apps/view#import=../examples/Vocabulary.specifz;view=doc;project=P-SpecIF-Vocabulary;node=N-4NoXVcSzSs07Htg4959SJnDEm0D) |
| Location, Storage, Channel, Value | [FMC:State](https://specif.de/apps/view#import=../examples/Vocabulary.specifz;view=doc;project=P-SpecIF-Vocabulary;node=N-yeUw4dc3iTxk7PHLdQo7efxLvBc) |
| Event, Point in time | [FMC:Event](https://specif.de/apps/view#import=../examples/Vocabulary.specifz;view=doc;project=P-SpecIF-Vocabulary;node=N-8HwdIxFap0pTQ5JiE31I1BQJ15z) |
|  | [SpecIF:Collection](https://specif.de/apps/view#import=../examples/Vocabulary.specifz;view=doc;project=P-SpecIF-Vocabulary;node=N-MCUw5EHwNYxa9wqMtctM4J2A2G8) |

The original model element type is stored in a property named _dcterms:type_. 

### Statements

| *No standard serialization of a FMC model defined* |  | [SpecIF](https://specif.de) | Comment |
| --- | --- | --- | --- |
| Occurrence | A model-element occurs on a plan | SpecIF:shows | Inverted statement |
| Containment | A model-element contains a model-element | SpecIF:contains |  |
| Reading | An actor reads a state | SpecIF:reads |  |
| Writing | An actor writes a state | SpecIF:writes |  |
| Modification | An actor writes and reads a state | SpecIF:stores |  |
| Influence | A state influences a state | *tbd* |  |
| Relation | A state influences and is reversely influenced by a state | *tbd* |  |
| Receiving | An actor receives a message from an actor | *tbd* |  |
| Sending | An actor sends a message to an actor | *tbd* |  |
| Communication | An actor sends to and receives a message from an actor | *tbd* |  |
| Succession | A model-element succeeds a model-element | SpecIF:precedes | Inverted statement |
| Precedence | A model-element precedes a model-element | SpecIF:precedes |  |

### Example

An explanation in detail is given in a tutorial [Very simple model using FMC](https://github.com/GfSE/SpecIF/blob/master/tutorials/06_Very-Simple-Model-FMC.md).

### Transformation Code

Here you may take a look at the current code of the [FMC Export from ARCWAY Cockpit to SpecIF](https://github.com/GfSE/ARCWAY-to-SpecIF-Exporter/blob/master/source/SpecIF-Export.rpttpl).


