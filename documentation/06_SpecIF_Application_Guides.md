# SpecIF Application Guide

For the usage of SpecIF, applications need to be developed. At the moment there are approaches for ReqIF, BPMN, Excel and SysML.
Before a new application is implemented there is some work to be done. Applications require a mapping to match meta elements of 
different modeling environments to SpecIF. In case of the SysML the mapping provides rules which SysML-Metaelement is transformed 
to which SpecIF-Metaelements. With these mapping rules a transformation from SysML to SpecIF can be implemented. This methodology 
can be used for various other applications such as BPMN and ReqIF.
This Application Guide shows mappings and examples for transformations from different modeling environments to SpecIF.

## SysML to SpecIF Mapping
The mapping from SysML to SpecIF is discussed in a working group. At the moment there is a sketch for a mapping of 
SysML- to SpecIF-Elements. This Mapping Table is not released and still in discussion. It consists of a resource, property
and statement mapping and only contains elements that are used in activity and block definition diagrams. The mapping is shown 
in the following three tables.

### Resource mapping table
|UML-Metaclass |EA-Element.Type |SpecIF Resource Class |dcterms:type|Remark|
| ------------- |:-------------:| -----:|-----:|-----:|
|Model|-|SpecIF:Collection|OMG:UML:2.5.1:Model|
|Package|Package|SpecIF:Collection|OMG:UML:2.5.1:Package|
|Diagram|Diagram|SpecIF:Diagram|OMG:UML:2.5.1:Diagram|
|-|-|-|-|-|
|Class|Class|FMC:State|OMG:UML:2.5.1:Class|
|State|State|FMC:State|OMG:UML:2.5.1:State|
|Port|Port|FMC:State|OMG:UML:2.5.1:Port|
|Attribute|Attribute|FMC:State|OMG:UML:2.5.1:Attribute|
|Object|Object|FMC:State|OMG:UML:2.5.1:Object|
|TaggedValue|TaggedValue|FMC:State|OMG:UML:2.5.1:TaggedValue|
|ObjectRunState|RunState|FMC:State|OMG:UML:2.5.1:RunState|
|Constraint|Constraint|FMC:State|OMG:UML:2.5.1:Constraint|
|Parameter|Parameter|FMC:State|OMG:UML:2.5.1:Parameter|
|-|-|-|-|-|
|Component|Component|FMC:Actor|OMG:UML:2.5.1:Component|
|Activity|Activity|FMC:Actor|OMG:UML:2.5.1:Activity|
|Action|Action|FMC:Actor|OMG:UML:2.5.1:Action|
|CallBehaviorAction||FMC:Actor|OMG:UML:2.5.1:CallBehaviorAction|
|InputPin||FMC:Actor|OMG:UML:2.5.1:InputPin|
|OutputPin||FMC:Actor|OMG:UML:2.5.1:OutputPin|
|Operation|Method|FMC:Actor|OMG:UML:2.5.1:Operation|
|StateMachine|StateMachine|FMC:Actor|OMG:UML:2.5.1:StateMachine|
|Actor|Actor|FMC:Actor|OMG:UML:2.5.1:Actor|
|DecisionNode|DecisionNode|FMC:Actor + FMC:Event|OMG:UML:2.5.1:DecisionNode|
|MergeNode|MergeNode|FMC:Actor|OMG:UML:2.5.1:MegeNode|
|ForkNode|Synchronization|FMC:Actor|OMG:UML:2.5.1:ForkNode|
|JoinNode|Synchronization|FMC:Actor|OMG:UML:2.5.1:JoinNode|
|ActivityPartition|-|FMC:Actor (+ SpecIF:contains)|OMG:UML:2.5.1:ActivityPartition|
|SendSignalAction|-|FMC:Actor (+ SpecIF:signals)|OMG:UML:2.5.1:SendSignalAction|
|AcceptEventAction|-|FMC:Actor (+ SpecIF:triggers)|OMG:UML:2.5.1:AcceptEventAction|
|TimeEvent|Event|FMC:Event|OMG:UML:2.5.1:TimeEvent|
|Signal|-|FMC:Event|OMG:UML:2.5.1:Signal|
|InitialNode|StateNode with SubType=100|FMC:Event|OMG:UML:2.5.1:InitialNode|
|ActivityFinalNode|StateNode with Subtype=101|FMC:Event|OMG:UML:2.5.1:ActivityFinal|
|FlowFinalNode|StateNode with Subtype=102|FMC:Event|OMG:UML:2.5.1:FlowFinal|
|-|-|-|-|-|
|Requirement|Requirement|IREB:Requirement|-|OMG:UML:2.5.1:Requirement||

### Property mapping table

|UML-Name|EA-Name|SpecIF-Property|Remark|
| ------------- |:-------------:| -----:|-----:|
|NamedElement.name|Name|dcterms:title|The name of an UML element|
|?|Notes|dcterms:description|The element descriptional text.|
|NamedElement.visibility|Visibility|SpecIF:VisibilityKind|e.g. Public, Private, Protected, Package|
|?|Status|SpecIF:Status|The element status value.|
|Stereotype|Stereotype|SpecIF:Stereotype||
|typeOf(Metaclass)|Type|dcterms:type|e.g. OMG:UML:2.5.1:Constraint. To avoid define a SpecIF Resource type for each UML element, a type attribute is used instead of metaclass inheritance.|
|_VALUES_|TaggedValue.Value / Attribute.Default / Constraint.Notes |rdf:value|An (initial) value of an attribute, tagged value, object run state etc.|
|alias|Alias|SpecIF:Alias||
|OpaqueExpression.language|?|UML:ImplementationLanguage?|e.g. Java, C, C# etc.|
|MultiplicityElement|Multiplicity|UML:Multiplicity?|e.g. a connector end multiplicity (*, 1..5 etc.)|


### Statement mapping table

|UML Metaclass|UML Stereotype|SpecIF Statement Class|Remark|
| ------------- |:-------------:| -----:|-----:|
|ObjectFlow|-|FMC:State + SpecIF:reads/writes + SpecIF:preceds|FMC:State + SpecIF:reads/writes to transfer the Object, additionally a control flow to trigger the reading actor|
|ControlFlow|-|SpecIF:triggers/preceds/signals|The connection type (precedes/triggers/signals) depends on the types of the connected elements|
|Transition|-|-|Used to interconnect states|
|Connector (w/o direction)|FMC4SE:acces type|-|Used in FMC4SE compositional structure modeling (---)|
|Connector (Unidirectional)|FMC4SE:access type|SpecIF:writes|Used in FMC4SE compositional structure modeling (-->)|
|Connector (Bi-Directional)|FMC4SE:access type|-|Used in FMC4SE compositional structure modeling (<->)|
|Composition|-|-|UML/SysML composition (black diamond)|
|Aggregation|-|-|UML/SysML aggregation (white diamond)|
|Association|-|-|UML/SysML association|
|Dependency|-|-|UML/SysML dependency|
|Dependency|satisfy|-|SysML satisfy connection|
|Dependency|verify|-|SysML verify connection|
|Dependency|allocate|-|SysML allocation connection|
|Dependency|deploy|-|UML deployment connection|


### Examples for the SysML mapping

![Versioning in SpecIF](./images/ElementsView.png)

![Versioning in SpecIF](./images/ActivityPartition.png)

## BPMN to SpecIF Mapping

A Mapping for BPMN to SpecIF was developed in a Masterthesis from Robert Kanitz. The following Mapping Table shows the Mapping between BPMN- and SpecIF-Elements.
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

###Examples
