# SpecIF Model Integration Guide for Archimate

## Archimate-SpecIF mapping

_{ToDo}_

### Resources

| [Archimate Open Exchange (XML)](https://www.opengroup.org/xsd/archimate/) | [SpecIF](https://specif.de) |
| --- | --- |
| BusinessActor, BusinessRole, BusinessCollaboration, BusinessInterface, BusinessProcess, BusinessFunction, BusinessInteraction, BusinessService, ApplicationComponent, ApplicationCollaboration, ApplicationInterface, ApplicationFunction, ApplicationInteraction, ApplicationProcess, ApplicationService, Node, Equipment, Facility, DistributionNetwork, Device, SystemSoftware, TechnologyCollaboration, TechnologyInterface, Path, CommunicationNetwork, TechnologyFunction, TechnologyProcess, TechnologyInteraction, TechnologyService, OrJunction, AndJunction | [FMC:Actor](https://specif.de/apps/view#import=../examples/Vocabulary.specifz;view=doc;project=P-SpecIF-Vocabulary;node=N-4NoXVcSzSs07Htg4959SJnDEm0D) |
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
