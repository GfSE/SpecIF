## Domain 01: Base Definitions

### Data types of domain 01: Base Definitions

|title|id|revision|type|description|
|-|-|-|-|-|
|Boolean|DT-Boolean|1.1|xs:boolean|The Boolean data type.|
|Byte|DT-Byte|1.1|xs:integer|A byte is an integer value between 0 and 255.|
|Integer|DT-Integer|1.1|xs:integer|A numerical integer value from -32768 to 32767.|
|Real|DT-Real|1.1|xs:double|A floating point number (double).|
|Real with 2 Decimals|DT-Decimal2|1.1|xs:double|A floating point number (double) with two fraction digits.|
|Date or Timestamp|DT-DateTime|1.1|xs:dateTime|Date or timestamp in ISO-format|
|String[256]|DT-ShortString|1.1|xs:string|String with max. length 256|
|Plain or formatted Text|DT-Text|1.1|xs:string|An account of the resource (source: http://dublincore.org/documents/dcmi-terms/). Descriptive text represented in plain or rich text using XHTML. SHOULD include only content that is valid and suitable inside an XHTML &lt;div&gt; element (source: http://open-services.net/).|
|URL|DT-URL|1.1|xs:string|A uniform resource locator.|
|E-mail|DT-EmailAddress|1.1|xs:string|Data type to represent an e-mail address.|
|SpecIF:LifeCycleStatus|DT-LifeCycleStatus|1.1|xs:string|<p>Enumerated values for status</p><ul><li>SpecIF:LifecycleStatusDeprecated [V-Status-0]</li><li>SpecIF:LifecycleStatusRejected [V-Status-1]</li><li>SpecIF:LifecycleStatusInitial [V-Status-2]</li><li>SpecIF:LifecycleStatusDrafted [V-Status-3]</li><li>SpecIF:LifecycleStatusSubmitted [V-Status-4]</li><li>SpecIF:LifecycleStatusApproved [V-Status-5]</li><li>SpecIF:LifecycleStatusReady [V-Status-8]</li><li>SpecIF:LifecycleStatusDone [V-Status-6]</li><li>SpecIF:LifecycleStatusValidated [V-Status-9]</li><li>SpecIF:LifecycleStatusReleased [V-Status-7]</li><li>SpecIF:LifecycleStatusWithdrawn [V-Status-10]</li></ul>|
|SpecIF:Priority|DT-Priority|1.1|xs:string|<p>Enumerated values for priority</p><ul><li>SpecIF:priorityHigh [V-Prio-0]</li><li>SpecIF:priorityRatherHigh [V-Prio-1]</li><li>SpecIF:priorityMedium [V-Prio-2]</li><li>SpecIF:priorityRatherLow [V-Prio-3]</li><li>SpecIF:priorityLow [V-Prio-4]</li></ul>|
|SpecIF:Discipline|DT-Discipline|1.1|xs:string|<p>Enumerated values for engineering discipline</p><ul><li>SpecIF:DisciplineSystem [V-discipline-4]</li><li>SpecIF:DisciplineMechanics [V-discipline-0]</li><li>SpecIF:DisciplineElectronics [V-discipline-1]</li><li>SpecIF:DisciplineSoftware [V-discipline-2]</li><li>SpecIF:DisciplineSafety [V-discipline-3]</li></ul>|
### Property classes of domain 01: Base Definitions

|title|id|revision|dataType|description|
|-|-|-|-|-|
|dcterms:identifier|PC-VisibleId|1.1|String[256]|<p>A unique reference to the resource within a given context. <small>(<i>source: <a href="http://dublincore.org/documents/dcmi-terms/">DCMI</a></i>)</small></p><p>An identifier for a resource. This identifier may be unique with a scope that is defined by the RM provider. Assigned by the service provider when a resource is created. Not intended for end-user display. <small>(<i>source: <a href="http://open-services.net/">OSLC</a></i>)</small></p>|
|dcterms:title|PC-Name|1.1|String[256]|<p>A name given to the resource. <small>(<i>source: <a href="http://dublincore.org/documents/dcmi-terms/">DCMI</a></i>)</small></p><p>Title (reference: Dublin Core) of the resource represented as rich text in XHTML content. SHOULD include only content that is valid inside an XHTML &lt;span&gt; element. <small>(<i>source: <a href="http://open-services.net/">OSLC</a></i>)</small></p>|
|dcterms:description|PC-Description|1.1|Plain or formatted Text|<p>An account of the resource. <small>(<i>source: <a href="http://dublincore.org/documents/dcmi-terms/">DCMI</a></i>)</small></p><p>Descriptive text (reference: Dublin Core) about resource represented as rich text in XHTML content. SHOULD include only content that is valid and suitable inside an XHTML &lt;div&gt; element. <small>(<i>source: <a href="http://open-services.net/">OSLC</a></i>)</small></p>|
|SpecIF:Origin|PC-Origin|1.1|String[256]|The origin (source, reference) of an information or requirement.|
|SpecIF:Diagram|PC-Diagram|1.1|Plain or formatted Text|A partial graphical representation (diagram) of a model.|
|SpecIF:Notation|PC-Notation|1.1|String[256]|The notation used by a model diagram, e.g. 'BPMN:2.0', 'OMG:SysML:1.3:Activity Diagram' or 'FMC:Block Diagram'.|
|SpecIF:LifeCycleStatus|PC-LifeCycleStatus|1.1|SpecIF:LifeCycleStatus|The 'status', e.g. lifecycle state, of the resource.|
|SpecIF:Priority|PC-Priority|1.1|SpecIF:Priority|The 'priority' of the resource.|
|SpecIF:Discipline|PC-Discipline|1.1|SpecIF:Discipline|The engineering discipline (system, electronics, mechanics, software, safety).|
|SpecIF:Responsible|PC-Responsible|1.1|String[256]|The 'person' being responsible for the resource.|
|SpecIF:DueDate|PC-DueDate|1.1|Date or Timestamp|A 'due date' for the resource.|
|UML:Stereotype|PC-Stereotype|1.1|String[256]|A stereotype gives an element an additional/different meaning.|
|SpecIF:Abbreviation|PC-Abbreviation|1.1|String[256]|An abbreviation for the resource or statement.|
|dcterms:type|PC-Type|1.1|String[256]|The element type resp. the metamodel element (e.g. OMG:UML:2.5.1:Class)|
|SpecIF:Alias|PC-Alias|1.1|String[256]|An alias name for the resource.|
|rdf:value|PC-Value|1.1|Plain or formatted Text|A value of different meaning, depending on the element type (attribute default value, a taggedValue value etc.).|
### Resource classes of domain 01: Base Definitions

|title|id|revision|description|
|-|-|-|-|
|SpecIF:Heading|RC-Folder|1.1|<p>Folders with title and text for chapters or descriptive paragraphs.</p><p>Property classes:<br/><ul><li>dcterms:title [PC-Name 1.1]</li><li>dcterms:description [PC-Description 1.1]</li><li>dcterms:type [PC-Type 1.1]</li></ul></p>|
|SpecIF:Paragraph|RC-Paragraph|1.1|<p>Information with text for descriptive paragraphs.</p><p>Property classes:<br/><ul><li>dcterms:title [PC-Name 1.1]</li><li>dcterms:description [PC-Description 1.1]</li></ul></p>|
|SpecIF:Hierarchy|RC-Hierarchy|1.1|<p>Root node of a hierarchically organized specification (outline).</p><p>Property classes:<br/><ul><li>dcterms:title [PC-Name 1.1]</li><li>dcterms:description [PC-Description 1.1]</li></ul></p>|
|SpecIF:Comment|RC-Comment|1.1|<p>Comment referring to a model element ('resource' or 'statement' in general).</p><p>Property classes:<br/><ul><li>dcterms:title [PC-Name 1.1]</li><li>dcterms:description [PC-Description 1.1]</li></ul></p>|
### Statement classes of domain 01: Base Definitions

|title|id|revision|description|
|-|-|-|-|
|rdf:type|SC-Classifier|1.1|<p>States that the relation subject is an instance of the relation object.</p>|
|SpecIF:refersTo|SC-refersTo|1.1|<p>A resource 'refers to' any other resource.</p><p>Property classes:<br/><ul><li>dcterms:type [PC-Type 1.1]</li></ul></p>|
## Domain 02: Requirements Engineering

### Data types of domain 02: Requirements Engineering

|title|id|revision|type|description|
|-|-|-|-|-|
|IREB:RequirementType|DT-RequirementType|1.1|xs:string|<p>Enumerated values for the requirement type according to IREB.</p><ul><li>IREB:FunctionalRequirement [V-RequirementType-0]</li><li>IREB:QualityRequirement [V-RequirementType-1]</li><li>IREB:Constraint [V-RequirementType-2]</li></ul>|
|Perspective|DT-Perspective|1.1|xs:string|<p>Enumerated values for the perspective (of a requirement)</p><ul><li>IREB:PerspectiveBusiness [V-perspective-0]</li><li>IREB:PerspectiveStakeholder [V-perspective-3]</li><li>IREB:PerspectiveUser [V-perspective-1]</li><li>IREB:PerspectiveOperator [V-perspective-4]</li><li>IREB:PerspectiveSystem [V-perspective-2]</li></ul>|
### Property classes of domain 02: Requirements Engineering

|title|id|revision|dataType|description|
|-|-|-|-|-|
|IREB:RequirementType|PC-RequirementType|1.1|IREB:RequirementType|Enumerated value for the requirement type according to IREB.|
|SpecIF:Perspective|PC-Perspective|1.1|Perspective|Enumerated values for the perspective (of a requirement).|
### Resource classes of domain 02: Requirements Engineering

|title|id|revision|description|
|-|-|-|-|
|IREB:Requirement|RC-Requirement|1.1|<p>A 'requirement' is a singular documented physical and functional need that a particular design, product or process must be able to perform.</p><p>Property classes:<br/><ul><li>dcterms:identifier [PC-VisibleId 1.1]</li><li>dcterms:title [PC-Name 1.1]</li><li>dcterms:description [PC-Description 1.1]</li><li>IREB:RequirementType [PC-RequirementType 1.1]</li><li>SpecIF:Priority [PC-Priority 1.1]</li><li>SpecIF:LifeCycleStatus [PC-LifeCycleStatus 1.1]</li><li>SpecIF:Perspective [PC-Perspective 1.1]</li><li>SpecIF:Discipline [PC-Discipline 1.1]</li></ul></p>|
|SpecIF:Feature|RC-Feature|1.1|<p>A 'feature' is an intentional distinguishing characteristic of a system, often a unique selling proposition.</p><p>Property classes:<br/><ul><li>dcterms:identifier [PC-VisibleId 1.1]</li><li>dcterms:title [PC-Name 1.1]</li><li>dcterms:description [PC-Description 1.1]</li><li>SpecIF:Priority [PC-Priority 1.1]</li><li>SpecIF:LifeCycleStatus [PC-LifeCycleStatus 1.1]</li><li>SpecIF:Perspective [PC-Perspective 1.1]</li><li>SpecIF:Discipline [PC-Discipline 1.1]</li></ul></p>|
### Statement classes of domain 02: Requirements Engineering

|title|id|revision|description|
|-|-|-|-|
|SpecIF:dependsOn|SC-dependsOn|1.1|<p>Statement: Requirement/feature depends on requirement/feature.</p>|
|SpecIF:duplicates|SC-duplicates|1.1|<p>The subject requirement duplicates the object requirement.</p>|
|SpecIF:contradicts|SC-contradicts|1.1|<p>The subject requirement contradicts the object requirement.</p>|
|IREB:refines|SC-refines|1.1|<p>The subject requirement refines the object requirement.</p>|
## Domain 03: Model Integration

### Data types of domain 03: Model Integration

|title|id|revision|type|description|
|-|-|-|-|-|
|SpecIF:VisibilityKind|DT-VisibilityKind|1.1|xs:string|<p>Enumerated values for visibility.</p><ul><li>UML:Public [V-VisibilityKind-0]</li><li>UML:Private [V-VisibilityKind-1]</li><li>UML:Protected [V-VisibilityKind-2]</li><li>UML:Package [V-VisibilityKind-3]</li><li>UML:Internal [V-VisibilityKind-4]</li><li>UML:ProtectedInternal [V-VisibilityKind-5]</li></ul>|
### Property classes of domain 03: Model Integration

|title|id|revision|dataType|description|
|-|-|-|-|-|
|SpecIF:Visibility|PC-Visibility|1.1|SpecIF:VisibilityKind|The visibility of a resource (e.g. public, private, protected,...) as known from object orientation.|
|SpecIF:ImplementationLanguage|PC-ImplementationLanguage|1.1|String[256]|The name of an used implementation language (e.g. C, C++, C#, Java, ADA, OCL, ALF etc.).|
### Resource classes of domain 03: Model Integration

|title|id|revision|description|
|-|-|-|-|
|UML:Package|RC-Package|1.1|<p>A 'package' is used to bring structure into a model. Packages can contain further packages and/or (model-)elements. It corresponds to a package in UML/SysML or a folder in a file system.</p><p>Property classes:<br/><ul><li>dcterms:title [PC-Name 1.1]</li><li>dcterms:description [PC-Description 1.1]</li><li>SpecIF:LifeCycleStatus [PC-LifeCycleStatus 1.1]</li><li>SpecIF:Visibility [PC-Visibility 1.1]</li><li>dcterms:type [PC-Type 1.1]</li><li>UML:Stereotype [PC-Stereotype 1.1]</li><li>rdf:value [PC-Value 1.1]</li><li>SpecIF:Alias [PC-Alias 1.1]</li></ul></p>|
|SpecIF:Diagram|RC-Diagram|1.1|<p>A 'diagram' is a graphical model view with a specific communication purpose, e.g. a business process or system composition.</p><p>Property classes:<br/><ul><li>dcterms:title [PC-Name 1.1]</li><li>dcterms:description [PC-Description 1.1]</li><li>SpecIF:Diagram [PC-Diagram 1.1]</li><li>dcterms:type [PC-Type 1.1]</li><li>SpecIF:Notation [PC-Notation 1.1]</li><li>SpecIF:LifeCycleStatus [PC-LifeCycleStatus 1.1]</li><li>UML:Stereotype [PC-Stereotype 1.1]</li></ul></p>|
|FMC:Actor|RC-Actor|1.1|<p>An 'actor' is a fundamental model element type representing an active entity, be it an activity, a process step, a function, a system component or a role.</p><p>Property classes:<br/><ul><li>dcterms:title [PC-Name 1.1]</li><li>dcterms:description [PC-Description 1.1]</li><li>SpecIF:LifeCycleStatus [PC-LifeCycleStatus 1.1]</li><li>SpecIF:Visibility [PC-Visibility 1.1]</li><li>dcterms:type [PC-Type 1.1]</li><li>UML:Stereotype [PC-Stereotype 1.1]</li><li>rdf:value [PC-Value 1.1]</li><li>SpecIF:Alias [PC-Alias 1.1]</li></ul></p>|
|FMC:State|RC-State|1.1|<p>A 'state' is a fundamental model element type representing a passive entity, be it a value, a condition, an information storage or even a physical shape.</p><p>Property classes:<br/><ul><li>dcterms:title [PC-Name 1.1]</li><li>dcterms:description [PC-Description 1.1]</li><li>SpecIF:LifeCycleStatus [PC-LifeCycleStatus 1.1]</li><li>SpecIF:Visibility [PC-Visibility 1.1]</li><li>dcterms:type [PC-Type 1.1]</li><li>UML:Stereotype [PC-Stereotype 1.1]</li><li>rdf:value [PC-Value 1.1]</li><li>SpecIF:Alias [PC-Alias 1.1]</li></ul></p>|
|FMC:Event|RC-Event|1.1|<p>An 'event' is a fundamental model element type representing a time reference, a change in condition/value or more generally a synchronization primitive.</p><p>Property classes:<br/><ul><li>dcterms:title [PC-Name 1.1]</li><li>dcterms:description [PC-Description 1.1]</li><li>SpecIF:LifeCycleStatus [PC-LifeCycleStatus 1.1]</li><li>SpecIF:Visibility [PC-Visibility 1.1]</li><li>dcterms:type [PC-Type 1.1]</li><li>UML:Stereotype [PC-Stereotype 1.1]</li><li>rdf:value [PC-Value 1.1]</li><li>SpecIF:Alias [PC-Alias 1.1]</li></ul></p>|
|SpecIF:Collection|RC-Collection|1.1|<p>A 'collection' is a logic (often conceptual) group of resources linked with a SpecIF:contains statement. It corresponds to a 'group' in BPMN diagrams or a 'boundary' in UML diagrams.</p><p>Property classes:<br/><ul><li>dcterms:title [PC-Name 1.1]</li><li>dcterms:description [PC-Description 1.1]</li><li>SpecIF:LifeCycleStatus [PC-LifeCycleStatus 1.1]</li><li>SpecIF:Visibility [PC-Visibility 1.1]</li><li>dcterms:type [PC-Type 1.1]</li><li>UML:Stereotype [PC-Stereotype 1.1]</li><li>rdf:value [PC-Value 1.1]</li><li>SpecIF:Alias [PC-Alias 1.1]</li></ul></p>|
|SpecIF:SourceCode|RC-SourceCode|1.1|<p>Source code assigned to a model element (e.g. an activity or operation). Typically used for model-based code generation to provide some code snippets inside the model.</p><p>Property classes:<br/><ul><li>dcterms:title [PC-Name 1.1]</li><li>SpecIF:ImplementationLanguage [PC-ImplementationLanguage 1.1]</li><li>rdf:value [PC-Value 1.1]</li></ul></p>|
### Statement classes of domain 03: Model Integration

|title|id|revision|description|
|-|-|-|-|
|SpecIF:shows|SC-shows|1.1|<p>Statement: Plan resp. diagram shows model element.</p>|
|SpecIF:contains|SC-contains|1.1|<p>Statement: Model element contains model element.</p>|
|SpecIF:serves|SC-serves|1.1|<p>Statement: An actor serves an actor.</p>|
|SpecIF:stores|SC-stores|1.1|<p>Statement: Actor (role, function) writes and reads state (information).</p>|
|SpecIF:writes|SC-writes|1.1|<p>Statement: Actor (role, function) writes state (information).</p>|
|SpecIF:reads|SC-reads|1.1|<p>Statement: Actor (role, function) reads state (information).</p>|
|SpecIF:influences|SC-influences|1.1|<p>Statement: A state (information) influences a state (information).</p>|
|SpecIF:precedes|SC-precedes|1.1|<p>An FMC:Actor 'precedes' an FMC:Actor or an FMC:Actor 'precedes' an FMC:Event or an FMC:Event 'precedes' an FMC:Actor. The rdf:type property specifies if it is a simple precedes, a SpecIF:signals or a SpecIF:triggers.</p><p>Property classes:<br/><ul><li>dcterms:type [PC-Type 1.1]</li></ul></p>|
|oslc_rm:satisfies|SC-satisfies|1.1|<p>Statement: Model element satisfies requirement.</p>|
|SpecIF:allocates|SC-allocates|1.1|<p>Statement: Model element is allocated to model element. The semantics are equal to allocation in SysML or deployment relation in UML.</p>|
|SpecIF:implements|SC-implements|1.1|<p>A FMC:Actor or FMC:State 'implements' a SpecIF:Feature.</p>|
|SpecIF:isAssociatedWith|SC-isAssociatedWith|1.1|<p>The subject is associated with the object.</p><p>Property classes:<br/><ul><li>dcterms:type [PC-Type 1.1]</li></ul></p>|
|SpecIF:isSpecializationOf|SC-isSpecializationOf|1.0|<p>A term is a specialization of another, such as 'Passenger Car' and 'Vehicle'.</p>|
