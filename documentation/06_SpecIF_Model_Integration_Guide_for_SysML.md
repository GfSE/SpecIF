# SpecIF Model Integration Guide for SysML

## SysML to SpecIF Mapping

The mapping from SysML to SpecIF is discussed in a working group. At the moment there is a sketch for a mapping of 
SysML- to SpecIF-Elements. This Mapping Table is not released and still in discussion. It consists of a resource-, property-
and statement-mapping and only contains elements that are used in activity and block definition diagrams. The mapping is shown
in the following three tables.
The general idea is to map a high number of SysML elements to a small model core in SpecIF. This model core consist of the
fundamental modeling elements Actor, State and Event and the two SpecIF-Elements SpecIF:Diagram and SpecIF:Collection. 
Mapped elements in the mapping tables should have a matching semantic meaning, e.g. a SysML Action is 
an active element. Regarding to the [SpecIF Vocabulary](https://specif.de/apps/view.html#import=%22../examples/Vocabulary.specifz%22),
a FMC:Actor represents an active element. Since these definitions match both elements can be added to the mapping table. 

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
|Requirement|Requirement|IREB:Requirement|OMG:UML:2.5.1:Requirement||

### Property mapping table

|UML-Name|EA-Name|SpecIF-Property|Remark|
| ------------- |:-------------:| -----:|-----:|
|NamedElement.name|Name|dcterms:title|The name of an UML element|
|Comment|Notes|dcterms:description|The element descriptional text.|
|NamedElement.visibility|Visibility|SpecIF:VisibilityKind|e.g. Public, Private, Protected, Package|
|?|Status|SpecIF:Status|The element status value.|
|Stereotype|Stereotype|SpecIF:Stereotype||
|typeOf(Metaclass)|Type|dcterms:type|e.g. OMG:UML:2.5.1:Constraint. To avoid define a SpecIF Resource type for each UML element, a type attribute is used instead of metaclass inheritance.|
|_VALUES_|TaggedValue.Value / Attribute.Default / Constraint.Notes |rdf:value|An (initial) value of an attribute, tagged value, object run state etc.|
|alias|Alias|SpecIF:Alias||

### Statement mapping table

|UML Metaclass|UML Stereotype|SpecIF Statement Class|Remark|
| ------------- |:-------------:| -----:|-----:|
|ObjectFlow|-|FMC:State + SpecIF:reads/writes + SpecIF:preceds|FMC:State + SpecIF:reads/writes to transfer the Object, additionally a control flow to trigger the reading actor|
|ControlFlow|-|SpecIF:triggers/preceds/signals|The connection type (precedes/triggers/signals) depends on the types of the connected elements|

### Examples for SysML mapping and transformation of Activity diagrams
In SpecIF model elements are representated as FMC:Actor (square), FMC:State (circle) and FMC:Event (diamond). Elements 
in SpecIF are named resources and relations between these resources are named statements (arrows). 
The following figure shows the element representation in Cameo Systems Modeler and SpecIF. The notation that is shown in 
the figure is also used for the following examples.

<img src="./images/Mapping_SysML_Representation.PNG" width="600px" />

In the next three figures examples for the transformation of activity diagram elements are shown in a small context. The
example elements are a ActivityPartition, a DecisionNode and a MergeNode. 
The first figure shows three Actions, two ControlFlows and a ActivityPartition in a SysML-diagram and in the SpecIF-notation.
Actions are transformed into FMC:Actor resources aswell as the activity partition. For the assignment that "Action 2" is
contained by the ActivityPartition a statement SpecIF:contains is generated in the transformation. Since the Actions are
connected by two ControlFlows there are SpecIF:precedes statements between the actions. SpecIF:precedes represents a
ControlFlow between two FMC:Actors.
 
<img src="./images/Mapping_SysML_ActivityPartition.PNG" width="450px" />

The following figure shows a example for the transformation of a DecisionNode. The DecisionNode in the context has one 
incoming ControlFlow from a action and two outgoing controlflows to two actions. The DecisionNode is represented by a FMC:Actor
and two FMC:Events in the SpecIF-Notation. The statements between the resources are dependent on the types of the resources.
For statements from a FMC:Actor to a FMC:Actor a SpecIF:precedes statement, from a FMC:Actor to a FMC:Event a SpecIF:signals
statement and from a FMC:Event to a FMC:Actor a SpecIF:triggers statement is used. 

<img src="./images/Mapping_SysML_DecisionNode.PNG" width="450px" />

In a MergeNode two incoming activity flows are merged into one outgoing activity flow. The DecisionNode is transformed into
a FMC:Actor. Incoming and outgoing ControlFlows in the example are from FMC:Actor to FMC:Actor. This results in SpecIF:precedes
statements for the connection from the other elements to the FMC:Actor of the MergeNode. The same SpecIF representation is
used for the transformation of JoinNodes and ForkNodes. 

<img src="./images/Mapping_SysML_MergeNode.PNG" width="450px" />

Regarding the model structure SysML-Tools provide a containment tree, that shows diagrams and elements that are assigned
to a diagramm (shown in the figure below). Additional Relations between the elements and global Signals or SignalEvents 
are shown in the containment tree. After the transformationto SpecIF this structure is provided by the SpecIF-Hierarchy. 
Different structure levels are defined by hierarchy-elements and nodes. E.g a Activity (in the example CabinProcess) can
be a hierarchy-element. A nodelist can be added to this hierarchy-element to create a structure. One hierarchy-element is 
always linked to one model-element. In the figure below the model structure is shown in a Cameo Systems Modeler containment
tree and in the SpecIF-Viewer. The SpecIF-Viewer is offering a possibility to read a SpecIF files and create a overview.
The model structure is shown on the left side in the hierarchy tree. Information about model elements are provided by the 
"Document" section and relations to other model elements are provided by the "Statements" section.  

![Structure_Mapping](./images/Strucuture_Mapping_example.png)

