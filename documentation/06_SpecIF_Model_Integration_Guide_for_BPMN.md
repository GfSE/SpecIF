# SpecIF Model Integration Guide for BPMN

## BPMN to SpecIF Mapping

A Mapping for BPMN to SpecIF was developed in the Masterthesis of Robert Kanitz. The following Mapping Table shows the Mapping between BPMN- and SpecIF-Elements.
The implementation of the Transformation is accessible in the GFSE-Github (https://github.com/GfSE/BPMN-SpecIF-Bridge). 

### BPMN to SpecIF mapping table
|BPMN-Element | SpecIF-Element | Remark|
| ------------- |:-------------:| -----------:|
|Process| SpecIF:Diagram | SpecIF:Diagram and SpecIF:shows Statements for Elements belonging to the diagram|
|Start-, interim-, endevent | FMC:Event |-|
|Time or message event| FMC:Event | -|
|Activity | FMC:Actor |-|
|Parallel Gateway (Seperation) | Statements | Statements between incoming and outgoing Elements|
|Parallel Gateway (Merge) | FMC:Actor | Actor with waiting function|
|Exclusive Gateway (Seperation)| FMC:Actor + FMC:Event + SpecIF:signals| Events for different Activityflows|
|Exclusive Gateway (Merge)| Statements | Statements between incoming and outgoing Elements|
|Group| SpecIF:Collection | - |
|Pool| FMC:Actor | Additional SpecIF:contains Statements for Elements that are contained by the Pool|
|Lane| FMC:Actor | Additional SpecIF:contains Statements for Elements that are contained by the Lane|
|Dataobject| FMC:State | - |
|Datainput| FMC:State | - |
|Dataoutput| FMC:State | - |
|Datastorage| FMC:State | - |
|Annotation| SpecIF:Note | - |
|-|-|-|
|Association| SpecIF:contains/refersTo | - |
|Sequetialflow | SpecIF:triggers/signals/precedes | - |
|Messageflow | FMC:State + SpecIF:reads/writes | Messageflow Object is represented by FMC:State|
