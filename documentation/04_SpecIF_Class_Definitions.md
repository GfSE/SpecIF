# SpecIF Class Definitions

To define the semantics for SpecIF a collection of data type and class definitions is defined and is part of the SpecIF standard. 

The class definitions provided as SpecIF data is available here: https://github.com/GfSE/SpecIF/tree/master/classDefinitions

## Domains

The definition of the SpecIF classes is organized in application domains. 
This allows the definition of releases for some domains at the same time, where 
other domains are still under discussion and under development and will be released later in time.

For SpecIF 1.0 three domains are part of the first release:

* 01 - Base Definitions
* 02 - Requirements Engineering
* 03 - Model Integration 

### Domain types
The following list shows the currently defined domains and their IDs:

|Domain ID|Domain|Description|Release status|
|---------|-|-|-|
|01|Base definitions|Common definitions relevant for all domains (e.g. primitive data types)|Unreleased|
|02|Requirements Engineering|Classical requirements engineering following the IREB definitions|Unreleased|
|03|Model Integration|SpecIF mapping for the Fundamental Modeling Concepts approach usable to integrate system modeling data|Unreleased|
|04|Automotive Requirements Engineering|Automotive-specific requirements engineering extensions (VDA)|Unreleased|
|05|Agile Requirements Engineering|Requirements engineering for agile development (e.g. epics and user stories)|Unreleased|
|06|UML-SpecIF mapping|Extensions to map UML (Unified Modeling Language) models to SpecIF|Unreleased|
|07|Issue Management|Issue and Task management|Unreleased|
|08|BOM|Bill of materials|Unreleased|
|09|Variant Management|Feature model-based variant management|Unreleased|
|10|Vocabulary Definition|Resources to define Vocabularies (e.g. SpecIF Vocabulary)|Unreleased|

## Domain 01: Base Definitions

### Data types of domain 01: Base Definitions
|title|id|revision|type|description|
|-|-|-|-|-|
|Boolean|DT-Boolean|1|xs:boolean|
|Byte|DT-Byte|1|xs:integer|
|Integer|DT-Integer|1|xs:integer|
|Real|DT-Real|1|xs:double|
|Real with 2 Decimals|DT-Decimal2|1|xs:double|
|Date or Timestamp|DT-Date|1|xs:dateTime|
|String[256]|DT-ShortString|1|xs:string|String with max. length 256
|dcterms:description|DT-Text|1|xs:string|A text string
|URL|DT-URL|1|xs:string|
|E-mail|DT-EmailAddress|1|xs:string|
|Formatted Text|DT-FormattedText|1|xhtml|
|SpecIF:Status|DT-Status|1|xs:enumeration|<p>Enumerated values for status</p><ul><li>00_deprecated [V-Status-0]</li><li>01_rejected [V-Status-1]</li><li>10_initial [V-Status-2]</li><li>20_drafted [V-Status-3]</li><li>30_submitted [V-Status-4]</li><li>40_approved [V-Status-5]</li><li>60_completed [V-Status-6]</li><li>80_released [V-Status-7]</li></ul>
|SpecIF:Priority|DT-Priority|1|xs:enumeration|<p>Enumerated values for priority</p><ul><li>SpecIF:priorityHigh [V-Prio-0]</li><li>SpecIF:priorityRatherHigh [V-Prio-1]</li><li>SpecIF:priorityMedium [V-Prio-2]</li><li>SpecIF:priorityRatherLow [V-Prio-3]</li><li>SpecIF:priorityLow [V-Prio-4]</li></ul>
|Perspective|DT-Perspective|1|xs:enumeration|<p>Enumerated values for perspective</p><ul><li>Business [V-perspective-0]</li><li>User [V-perspective-1]</li><li>System [V-perspective-2]</li></ul>
|Discipline|DT-Discipline|1|xs:enumeration|<p>Enumerated values for engineering discipline</p><ul><li>System [V-discipline-4]</li><li>Mechanics [V-discipline-0]</li><li>Electronics [V-discipline-1]</li><li>Software [V-discipline-2]</li><li>Safety [V-discipline-3]</li></ul>
|SpecIF:VisibilityKind|DT-VisibilityKind|1|xs:enumeration|<p>Enumerated values for visibility</p><ul><li>Public [V-VisibilityKind-0]</li><li>Private [V-VisibilityKind-1]</li><li>Protected [V-VisibilityKind-2]</li><li>Package [V-VisibilityKind-3]</li><li>Internal [V-VisibilityKind-4]</li><li>Protected Internal [V-VisibilityKind-5]</li></ul>
### Property classes of domain 01: Base Definitions
|title|id|revision|dataType|description|
|-|-|-|-|-|
|dcterms:identifier|PC-VisibleId|1|String[256]|<p>A unique reference to the resource within a given context. <small>(<i>source: <a href="http://dublincore.org/documents/dcmi-terms/">DCMI</a></i>)</small></p><p>An identifier for a resource. This identifier may be unique with a scope that is defined by the RM provider. Assigned by the service provider when a resource is created. Not intended for end-user display. <small>(<i>source: <a href="http://open-services.net/">OSLC</a></i>)</small></p>
|dcterms:title|PC-Name|1|String[256]|<p>A name given to the resource. <small>(<i>source: <a href="http://dublincore.org/documents/dcmi-terms/">DCMI</a></i>)</small></p><p>Title (reference: Dublin Core) of the resource represented as rich text in XHTML content. SHOULD include only content that is valid inside an XHTML &lt;span&gt; element. <small>(<i>source: <a href="http://open-services.net/">OSLC</a></i>)</small></p>
|dcterms:description|PC-Description|1|Formatted Text|<p>An account of the resource. <small>(<i>source: <a href="http://dublincore.org/documents/dcmi-terms/">DCMI</a></i>)</small></p><p>Descriptive text (reference: Dublin Core) about resource represented as rich text in XHTML content. SHOULD include only content that is valid and suitable inside an XHTML &lt;div&gt; element. <small>(<i>source: <a href="http://open-services.net/">OSLC</a></i>)</small></p>
|SpecIF:Origin|PC-Origin|1|String[256]|The origin (source, reference) of an information or requirement
|SpecIF:Diagram|PC-Diagram|1|Formatted Text|Contains the graphical representation of a diagram.
|SpecIF:Notation|PC-Notation|1|String[256]|The notation used by a model diagram, e.g. 'BPMN:2.0', 'OMG:SysML:1.3:Activity Diagram' or 'FMC:Block Diagram'.
|SpecIF:Status|PC-Status|1|SpecIF:Status|The 'Status', e.g. lifecycle state, of the resource.
|SpecIF:Priority|PC-Priority|1|SpecIF:Priority|The 'Priority' of the resource.
|SpecIF:Perspective|PC-Perspective|1|Perspective|tbd.
|SpecIF:Discipline|PC-Discipline|1|Discipline|The engineering discipline (system, electronics, mechanics, software, safety).
|SpecIF:Visibility|PC-Visibility|1|SpecIF:VisibilityKind|The visibility of a resource (e.g. Public, Private, Protected,...) as known from object orientation.
|SpecIF:Responsible|PC-Responsible|1|String[256]|The 'Person' being responsible for the resource.
|SpecIF:DueDate|PC-DueDate|1|Date or Timestamp|A 'Due Date' for the resource.
|UML:Stereotype|PC-Stereotype|1|String[256]|A stereotype gives an element an additional/different meaning.
|SpecIF:Abbreviation|PC-Abbreviation|1|String[256]|An abbreviation for the resource.
|dcterms:type|PC-Type|1|String[256]|The element type resp. the metamodel element (e.g. OMG:UML:2.5.1:Class)
|SpecIF:Alias|PC-Alias|1|String[256]|An alias name for the resource.
|rdf:value|PC-Value|1|String[256]|A value of different meaning, depending on the element type (attribute default value, a taggedValue value etc.)
### Resource classes of domain 01: Base Definitions
|title|id|revision|description|
|-|-|-|-|
|SpecIF:Hierarchy|RC-Hierarchy|1|<p>Root node of a hierarchically organized specification (outline).</p><p>Property classes:<br/><ul><li>dcterms:title</li><li>dcterms:description</li></ul></p>
|SpecIF:Comment|RC-Comment|1|<p>Comment referring to a model element ('resource' in general).</p><p>Property classes:<br/><ul><li>dcterms:description</li></ul></p>
### Statement classes of domain 01: Base Definitions
|title|id|revision|description|
|-|-|-|-|
|rdf:type|SC-Classifier|1|<p>States that the relation subject is an instance of the relation object.</p>
|SpecIF:refersTo|SC-refersTo|1|<p>A resource 'refers to' any other resource.</p><p>Property classes:<br/><ul><li>dcterms:type</li></ul></p>
## Domain 02: Requirements Engineering

### Resource classes of domain 02: Requirements Engineering
|title|id|revision|description|
|-|-|-|-|
|SpecIF:Heading|RC-Folder|1|<p>Folders with title and text for chapters or descriptive paragraphs.</p><p>Property classes:<br/><ul><li>dcterms:title</li><li>dcterms:description</li><li>dcterms:type</li></ul></p>
|SpecIF:Paragraph|RC-Paragraph|1|<p>Information with title and text for descriptive paragraphs.</p><p>Property classes:<br/><ul><li>dcterms:description</li></ul></p>
|IREB:Requirement|RC-Requirement|1|<p>A 'Requirement' is a singular documented physical and functional need that a particular design, product or process must be able to perform.</p><p>Property classes:<br/><ul><li>dcterms:identifier</li><li>dcterms:title</li><li>dcterms:description</li><li>SpecIF:Status</li><li>SpecIF:Priority</li><li>SpecIF:Perspective</li><li>SpecIF:Discipline</li><li>dcterms:type</li></ul></p>
|SpecIF:Feature|RC-Feature|1|<p>A 'Feature' is an intentional distinguishing characteristic of a system, often a unique selling proposition.</p><p>Property classes:<br/><ul><li>dcterms:identifier</li><li>dcterms:title</li><li>dcterms:description</li><li>SpecIF:Status</li><li>SpecIF:Priority</li><li>SpecIF:Perspective</li><li>SpecIF:Discipline</li><li>dcterms:type</li></ul></p>
|SpecIF:Heading|RC-Folder|1|<p>Folders with title and text for chapters or descriptive paragraphs.</p><p>Property classes:<br/><ul><li>dcterms:title</li><li>dcterms:description</li><li>dcterms:type</li></ul></p>
|SpecIF:Paragraph|RC-Paragraph|1|<p>Information with title and text for descriptive paragraphs.</p><p>Property classes:<br/><ul><li>dcterms:description</li></ul></p>
|IREB:Requirement|RC-Requirement|1|<p>A 'Requirement' is a singular documented physical and functional need that a particular design, product or process must be able to perform.</p><p>Property classes:<br/><ul><li>dcterms:identifier</li><li>dcterms:title</li><li>dcterms:description</li><li>SpecIF:Status</li><li>SpecIF:Priority</li><li>SpecIF:Perspective</li><li>SpecIF:Discipline</li><li>dcterms:type</li></ul></p>
|SpecIF:Feature|RC-Feature|1|<p>A 'Feature' is an intentional distinguishing characteristic of a system, often a unique selling proposition.</p><p>Property classes:<br/><ul><li>dcterms:identifier</li><li>dcterms:title</li><li>dcterms:description</li><li>SpecIF:Status</li><li>SpecIF:Priority</li><li>SpecIF:Perspective</li><li>SpecIF:Discipline</li><li>dcterms:type</li></ul></p>
### Statement classes of domain 02: Requirements Engineering
|title|id|revision|description|
|-|-|-|-|
|SpecIF:dependsOn|SC-dependsOn|1|<p>Statement: Requirement/Feature depends on Requirement/Feature</p>
|oslc_rm:satisfies|SC-satisfies|1|<p>Statement: Model-Element satisfies Requirement</p>
|SpecIF:duplicates|SC-duplicates|1|<p>The subject requirement duplicates the object requirement.</p>
|SpecIF:contradicts|SC-contradicts|1|<p>The subject requirement contradicts the object requirement.</p>
|IREB:refines|SC-refines|1|<p>The subject requirement refines the object requirement.</p>
## Domain 03: Model Integration

### Resource classes of domain 03: Model Integration
|title|id|revision|description|
|-|-|-|-|
|SpecIF:Collection|RC-Collection|1|<p><p>A 'Collection' is an arbitrary group of resources linked with a [[SpecIF:contains]] statement. It corresponds to a <a href="https://camunda.com/bpmn/reference/">'Group'</a> in BPMN Diagrams.</p><p>BPMN: An arbitrary set of objects can be defined as a Group to show that they logically belong together. <small>(<i>source: <a href="http://www.bpmn-tool.com/en/tutorial/">BPMN Tool</a></i>)</small></p></p><p>Property classes:<br/><ul><li>dcterms:title</li><li>dcterms:description</li><li>SpecIF:Status</li><li>UML:Stereotype</li><li>SpecIF:Visibility</li><li>dcterms:type</li></ul></p>
|SpecIF:Diagram|RC-Diagram|1|<p>A 'Diagram' is a graphical model view with a specific communication purpose, e.g. a business process or system composition.</p><p>Property classes:<br/><ul><li>dcterms:title</li><li>dcterms:description</li><li>SpecIF:Diagram</li><li>dcterms:type</li><li>SpecIF:Status</li><li>UML:Stereotype</li></ul></p>
|FMC:Actor|RC-Actor|1|<p>An 'Actor' is a fundamental model element type representing an active entity, be it an activity, a process step, a function, a system component or a role.</p><p>Property classes:<br/><ul><li>dcterms:title</li><li>dcterms:description</li><li>SpecIF:Status</li><li>SpecIF:Visibility</li><li>dcterms:type</li><li>UML:Stereotype</li><li>rdf:value</li><li>SpecIF:Alias</li></ul></p>
|FMC:State|RC-State|1|<p>A 'State' is a fundamental model element type representing a passive entity, be it a value, a condition, an information storage or even a physical shape.</p><p>Property classes:<br/><ul><li>dcterms:title</li><li>dcterms:description</li><li>SpecIF:Status</li><li>SpecIF:Visibility</li><li>dcterms:type</li><li>UML:Stereotype</li><li>rdf:value</li><li>SpecIF:Alias</li></ul></p>
|FMC:Event|RC-Event|1|<p>An 'Event' is a fundamental model element type representing a time reference, a change in condition/value or more generally a synchronisation primitive.</p><p>Property classes:<br/><ul><li>dcterms:title</li><li>dcterms:description</li><li>SpecIF:Status</li><li>SpecIF:Visibility</li><li>dcterms:type</li><li>UML:Stereotype</li><li>rdf:value</li><li>SpecIF:Alias</li></ul></p>
|SpecIF:Collection|RC-Collection|1|<p><p>A 'Collection' is an arbitrary group of resources linked with a [[SpecIF:contains]] statement. It corresponds to a <a href="https://camunda.com/bpmn/reference/">'Group'</a> in BPMN Diagrams.</p><p>BPMN: An arbitrary set of objects can be defined as a Group to show that they logically belong together. <small>(<i>source: <a href="http://www.bpmn-tool.com/en/tutorial/">BPMN Tool</a></i>)</small></p></p><p>Property classes:<br/><ul><li>dcterms:title</li><li>dcterms:description</li><li>SpecIF:Status</li><li>UML:Stereotype</li><li>SpecIF:Visibility</li><li>dcterms:type</li></ul></p>
|SpecIF:Diagram|RC-Diagram|1|<p>A 'Diagram' is a graphical model view with a specific communication purpose, e.g. a business process or system composition.</p><p>Property classes:<br/><ul><li>dcterms:title</li><li>dcterms:description</li><li>SpecIF:Diagram</li><li>dcterms:type</li><li>SpecIF:Status</li><li>UML:Stereotype</li></ul></p>
|FMC:Actor|RC-Actor|1|<p>An 'Actor' is a fundamental model element type representing an active entity, be it an activity, a process step, a function, a system component or a role.</p><p>Property classes:<br/><ul><li>dcterms:title</li><li>dcterms:description</li><li>SpecIF:Status</li><li>SpecIF:Visibility</li><li>dcterms:type</li><li>UML:Stereotype</li><li>rdf:value</li><li>SpecIF:Alias</li></ul></p>
|FMC:State|RC-State|1|<p>A 'State' is a fundamental model element type representing a passive entity, be it a value, a condition, an information storage or even a physical shape.</p><p>Property classes:<br/><ul><li>dcterms:title</li><li>dcterms:description</li><li>SpecIF:Status</li><li>SpecIF:Visibility</li><li>dcterms:type</li><li>UML:Stereotype</li><li>rdf:value</li><li>SpecIF:Alias</li></ul></p>
|FMC:Event|RC-Event|1|<p>An 'Event' is a fundamental model element type representing a time reference, a change in condition/value or more generally a synchronisation primitive.</p><p>Property classes:<br/><ul><li>dcterms:title</li><li>dcterms:description</li><li>SpecIF:Status</li><li>SpecIF:Visibility</li><li>dcterms:type</li><li>UML:Stereotype</li><li>rdf:value</li><li>SpecIF:Alias</li></ul></p>
### Statement classes of domain 03: Model Integration
|title|id|revision|description|
|-|-|-|-|
|SpecIF:shows|SC-shows|1|<p>Statement: Plan resp. diagram shows Model-Element</p>
|SpecIF:contains|SC-contains|1|<p>Statement: Model-Element contains Model-Element</p>
|SpecIF:stores|SC-stores|1|<p>Statement: Actor (Role, Function) writes and reads State (Information)</p>
|SpecIF:writes|SC-writes|1|<p>Statement: Actor (Role, Function) writes State (Information)</p>
|SpecIF:reads|SC-reads|1|<p>Statement: Actor (Role, Function) reads State (Information)</p>
|SpecIF:signals|SC-signals|1|<p>A FMC:Actor 'signals' a FMC:Event.</p>
|SpecIF:triggers|SC-triggers|1|<p>A FMC:Event 'trigers' an FMC:Actor.</p>
|SpecIF:preceeds|SC-preceeds|1|<p>An FMC:Actor 'preceeds' an FMC:Actor.</p>


## Further domains

The other domains are still under discussion and not yet part of an official SpecIF release. It is planed to release them with a future release.
