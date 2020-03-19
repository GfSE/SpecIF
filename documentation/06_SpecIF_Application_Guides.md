This is just a draft!

The tables define the data mapping of UML/SysML elements to SpecIF.

# UML-Element to Resource Mapping

|UML-Metaclass|EA-Element.Type|SpecIF Resource Class|dcterms:type|SpecIF:Stereotype|Remark|
|-|-|-|-|-|-|
|Model||SpecIF:Collection|OMG:UML:2.5.1:Model|
|Package|Package|SpecIF:Collection|OMG:UML:2.5.1:Package|
|||||
|Diagram|Diagram|SpecIF:Diagram|-|
|||||
|Class|Class|FMC:State|OMG:UML:2.5.1:Class|
|State|State|FMC:State|OMG:UML:2.5.1:State|
|Port|Port|FMC:State|OMG:UML:2.5.1:Port|
|Attribute|Attribute|FMC:State|OMG:UML:2.5.1:Attribute|
|Object|Object|FMC:State|OMG:UML:2.5.1:Object|
|TaggedValue|TaggedValue|FMC:State|OMG:UML:2.5.1:TaggedValue|
|ObjectRunState|RunState|FMC:State|OMG:UML:2.5.1:RunState|
|Constraint|Constraint|FMC:State|OMG:UML:2.5.1:Constraint|
|Parameter|Parameter|FMC:State|OMG:UML:2.5.1:Parameter|
||||||
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
|ActivityPartition||FMC:Actor (+ SpecIF:contains)|OMG:UML:2.5.1:ActivityPartition|
|SendSignalAction||FMC:Actor (+ SpecIF:signals)|OMG:UML:2.5.1:SendSignalAction|
|AcceptEventAction||FMC:Actor (+ SpecIF:triggers)|OMG:UML:2.5.1:AcceptEventAction|
|||||
|TimeEvent|Event|FMC:Event|OMG:UML:2.5.1:TimeEvent|
|Signal||FMC:Event|OMG:UML:2.5.1:Signal|
|InitialNode|StateNode with SubType=100|FMC:Event|OMG:UML:2.5.1:InitialNode|
|ActivityFinalNode|StateNode with Subtype=101|FMC:Event|OMG:UML:2.5.1:ActivityFinal|
|FlowFinalNode|StateNode with Subtype=102|FMC:Event|OMG:UML:2.5.1:FlowFinal|
|||||
|Class|Class|IREB:Requirement||requirement|The SysML requirement as defined by the SysML spec.|
|-|Requirement|IREB:Requirement||requirement|The SysML Requirement as represented in EA.|
|-|Requirement|IREB:Requirement|||EA Requirement|
|||||
|OpaqueExpression|Behavior-Code|UML:SourceCode||


# Property Mapping

|UML-Name|EA-Name|SpecIF-Property|Remark|
|-|-|-|-|
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
|-|Direction|UML:ConnectorDirection?|The connector direction e.g. Source -> Target, Unspecificd etc.|


# UML-Connector to Statement Mapping
Connectors explicitely modeld by an UML/SysML model user.

|UML Metaclass|UML Stereotype|SpecIF Statement Class|Remark|
|-|-|-|-|
|ObjectFlow|-|FMC:State + SpecIF:reads/writes + SpecIF:preceds|FMC:State + SpecIF:reads/writes to transfer the Object, additionally a control flow to trigger the reading actor|
|ControlFlow|-|SpecIF:triggers/preceds/signals||
|Transition|-||Used to interconnect states|
|Connector (w/o direction)|FMC4SE:acces type||Used in FMC4SE compositional structure modeling (---)|
|Connector (Unidirectional)|FMC4SE:access type|SpecIF:writes|Used in FMC4SE compositional structure modeling (-->)|
|Connector (Bi-Directional)|FMC4SE:access type||Used in FMC4SE compositional structure modeling (<->)|
|Composition|-||UML/SysML composition (black diamond)|
|Aggregation|-||UML/SysML aggregation (white diamond)|
|Association|-||UML/SysML association|
|Dependency|-||UML/SysML dependency|
|Dependency|satisfy||SysML satisfy connection|
|Dependency|verify||SysML verify connection|
|Dependency|allocate||SysML allocation connection|
|Dependency|deploy||UML deployment connection|

# Further Statements

|Meaning|SpecIF|Remark|
|-|-|-|
|Classifier of an element/Resource|rdf:type|object is the classifier/type of the subject.|
|behavior is implemented by|UML:BehaviorReference?|the object is a piece of source code that describes/implements the behavior of the subject|

