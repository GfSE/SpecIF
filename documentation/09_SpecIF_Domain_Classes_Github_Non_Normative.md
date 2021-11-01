## Domain 04: Automotive Requirements Engineering

### Data types of domain 04: Automotive Requirements Engineering

|title|id|revision|type|description|
|-|-|-|-|-|
|VDA:SupplierStatus|DT-SupplierStatus|1.1|xs:string|<p>Enumerated values for VDA supplier-status</p><ul><li>VDA:notApplicable [V-SupplierStatus-0]</li><li>VDA:toClarify [V-SupplierStatus-1]</li><li>VDA:agreed [V-SupplierStatus-2]</li><li>VDA:partlyAgreed [V-SupplierStatus-3]</li><li>VDA:notAgreed [V-SupplierStatus-4]</li></ul>|
|VDA:OemStatus|DT-OemStatus|1.1|xs:string|<p>Enumerated values for VDA oem-status</p><ul><li>VDA:notToEvaluate [V-OemStatus-0]</li><li>VDA:toEvaluate [V-OemStatus-1]</li><li>VDA:accepted [V-OemStatus-2]</li><li>VDA:notAccepted [V-OemStatus-3]</li></ul>|
### Property classes of domain 04: Automotive Requirements Engineering

|title|id|revision|dataType|description|
|-|-|-|-|-|
|VDA:SupplierStatus|PC-SupplierStatus|1.1|VDA:SupplierStatus||
|VDA:SupplierComment|PC-SupplierComment|1.1|Plain or formatted Text||
|VDA:OemStatus|PC-OemStatus|1.1|VDA:OemStatus||
|VDA:OemComment|PC-OemComment|1.1|Plain or formatted Text||
### Resource classes of domain 04: Automotive Requirements Engineering

|title|id|revision|description|
|-|-|-|-|
|VDA:Diagram|RC-VDA_Diagram|1.1|<p>A 'VDA:Diagram' is a Diagram with automotive-process-specific properties.</p><p>Property classes:<br/><ul><li>VDA:SupplierStatus [PC-SupplierStatus 1.1]</li><li>VDA:SupplierComment [PC-SupplierComment 1.1]</li><li>VDA:OemStatus [PC-OemStatus 1.1]</li><li>VDA:OemComment [PC-OemComment 1.1]</li></ul></p>|
|VDA:Requirement|RC-VDA_Requirement|1.1|<p>A VDA:Requirement is a Requirement with additional automotive-process-specific properties.</p><p>Property classes:<br/><ul><li>VDA:SupplierStatus [PC-SupplierStatus 1.1]</li><li>VDA:SupplierComment [PC-SupplierComment 1.1]</li><li>VDA:OemStatus [PC-OemStatus 1.1]</li><li>VDA:OemComment [PC-OemComment 1.1]</li></ul></p>|
|VDA:Feature|RC-VDA_Feature|1.1|<p>A 'VDA:Feature' is a Feature with automotiev specific properties.</p><p>Property classes:<br/><ul><li>VDA:SupplierStatus [PC-SupplierStatus 1.1]</li><li>VDA:SupplierComment [PC-SupplierComment 1.1]</li><li>VDA:OemStatus [PC-OemStatus 1.1]</li><li>VDA:OemComment [PC-OemComment 1.1]</li></ul></p>|
## Domain 05: Agile Requirements Engineering

### Resource classes of domain 05: Agile Requirements Engineering

|title|id|revision|description|
|-|-|-|-|
|SCRUM:Epic|RC-Epic|1.1|<p>An 'Epic' is a big user story and will be refined by user stories/requirements.</p>|
## Domain 06: UML-SpecIF mapping

## Domain 07: Issue Management

### Data types of domain 07: Issue Management

|title|id|revision|type|description|
|-|-|-|-|-|
|SpecIF:IssueStatus|DT-IssStatus|1.1|xs:string|<p>Enumerated values for issue status</p><ul><li>open [V-IssStatus-0]</li><li>assigned [V-IssStatus-1]</li><li>in progress [V-IssStatus-2]</li><li>closed [V-IssStatus-3]</li><li>reopened [V-IssStatus-4]</li><li>rejected [V-IssStatus-5]</li></ul>|
### Property classes of domain 07: Issue Management

|title|id|revision|dataType|description|
|-|-|-|-|-|
|SpecIF:IssueStatus|PC-IssStatus|1.1|SpecIF:IssueStatus||
### Resource classes of domain 07: Issue Management

|title|id|revision|description|
|-|-|-|-|
|SpecIF:Issue|RC-Issue|1.1|<p>An 'Issue' is a question to answer or decision to take which is worth tracking.</p><p>Property classes:<br/><ul><li>dcterms:identifier [PC-VisibleId 1.1]</li><li>dcterms:title [PC-Name 1.1]</li><li>dcterms:description [PC-Description 1.1]</li><li>SpecIF:IssueStatus [PC-IssStatus 1.1]</li><li>SpecIF:Priority [PC-Priority 1.1]</li><li>SpecIF:Responsible [PC-Responsible 1.1]</li><li>SpecIF:DueDate [PC-DueDate 1.1]</li></ul></p>|
## Domain 08: BOM

### Resource classes of domain 08: BOM

|title|id|revision|description|
|-|-|-|-|
|SpecIF:BillOfMaterials|RC-BillOfMaterials|1.1|<p>Root node of a bill of materials or product structure (sometimes bill of material, BOM or associated list) is a list of the raw materials, sub-assemblies, intermediate assemblies, sub-components, parts and the quantities of each needed to manufacture an end product. A BOM may be used for communication between manufacturing partners, or confined to a single manufacturing plant.</p><p>Property classes:<br/><ul><li>dcterms:title [PC-Name 1.1]</li><li>dcterms:description [PC-Description 1.1]</li></ul></p>|
## Domain 09: Variant Management

### Data types of domain 09: Variant Management

|title|id|revision|type|description|
|-|-|-|-|-|
|SpecIF:FeatureKind|DT-FeatureKind|1.1|xs:string|<p>Enumerated values for feature kind</p><ul><li>Mandatory [V-FeatureKind-Mandatory]</li><li>Alternative [V-FeatureKind-Alternative]</li><li>Optional [V-FeatureKind-Optional]</li><li>Or [V-FeatureKind-Or]</li></ul>|
|SpecIF:FeatureSelectionState|DT-FeatureSelectionState|1.1|xs:string|<p>Enumerated values for feature selection state</p><ul><li>Unchecked [V-FeatureSelectionState-Unchecked]</li><li>Checked [V-FeatureSelectionState-Checked]</li><li>Forbidden [V-FeatureSelectionState-Forbidden]</li><li>Recommended [V-FeatureSelectionState-Recommended]</li></ul>|
### Property classes of domain 09: Variant Management

|title|id|revision|dataType|description|
|-|-|-|-|-|
|SpecIF:FeatureKind|PC-FeatureKind|1.1|SpecIF:FeatureKind|<p>The kind of a feature used in a feature tree (mandatory, optional, alternative, or).</p>|
|SpecIF:FeatureSelectionState|PC-FeatureSelectionState|1.1|SpecIF:FeatureSelectionState|<p>The selection state for a feature used in a variant model.</p>|
### Resource classes of domain 09: Variant Management

|title|id|revision|description|
|-|-|-|-|
|SpecIF:FeatureModel|RC-FeatureModel|1.1|<p>A 'Feature Model' is the root resource of a feature tree to structure the set of features for a system as a tree structure (hierarchy).</p><p>Property classes:<br/><ul><li>dcterms:identifier [PC-VisibleId 1.1]</li><li>dcterms:title [PC-Name 1.1]</li><li>dcterms:description [PC-Description 1.1]</li><li>SpecIF:LifeCycleStatus [PC-LifeCycleStatus 1.1]</li></ul></p>|
|SpecIF:VariantModel|RC-VariantModel|1.1|<p>A 'Variant Model' is an instance of a feature model, where  a subset of features is selected to define a concrete system variant.</p><p>Property classes:<br/><ul><li>dcterms:identifier [PC-VisibleId 1.1]</li><li>dcterms:title [PC-Name 1.1]</li><li>dcterms:description [PC-Description 1.1]</li><li>SpecIF:LifeCycleStatus [PC-LifeCycleStatus 1.1]</li></ul></p>|
|SpecIF:FeatureModelFeature|RC-FeatureModelFeature|1.1|<p>A 'Feture Model Feature' is a feature used in a feature tree resp. feature model structure.</p><p>Property classes:<br/><ul><li>SpecIF:FeatureKind [PC-FeatureKind 1.1]</li><li>SpecIF:FeatureSelectionState [PC-FeatureSelectionState 1.1]</li><li>SpecIF:Abbreviation [PC-Abbreviation 1.1]</li></ul></p>|
## Domain 10: Vocabulary Definition

### Resource classes of domain 10: Vocabulary Definition

|title|id|revision|description|
|-|-|-|-|
|SpecIF:ResourceTerm|RC-ResourceTerm|1.1|<p>A term for resources (objects, entities) belonging to the SpecIF vocabulary</p><p>Property classes:<br/><ul><li>dcterms:title [PC-Name 1.1]</li><li>dcterms:description [PC-Description 1.1]</li><li>SpecIF:Origin [PC-Origin 1.1]</li><li>SpecIF:LifeCycleStatus [PC-LifeCycleStatus 1.1]</li></ul></p>|
|SpecIF:PredicateTerm|RC-PredicateTerm|1.1|<p>A term for statements (relations) belonging to the SpecIF vocabulary</p><p>Property classes:<br/><ul><li>dcterms:title [PC-Name 1.1]</li><li>dcterms:description [PC-Description 1.1]</li><li>SpecIF:Origin [PC-Origin 1.1]</li><li>SpecIF:LifeCycleStatus [PC-LifeCycleStatus 1.1]</li></ul></p>|
|SpecIF:PropertyTerm|RC-PropertyTerm|1.1|<p>A term for user-defined properties (attributes) belonging to the SpecIF vocabulary</p><p>Property classes:<br/><ul><li>dcterms:title [PC-Name 1.1]</li><li>dcterms:description [PC-Description 1.1]</li><li>SpecIF:Origin [PC-Origin 1.1]</li><li>SpecIF:LifeCycleStatus [PC-LifeCycleStatus 1.1]</li></ul></p>|
|SpecIF:ValueTerm|RC-ValueTerm|1.1|<p>A term for property values belonging to the SpecIF vocabulary</p><p>Property classes:<br/><ul><li>dcterms:title [PC-Name 1.1]</li><li>dcterms:description [PC-Description 1.1]</li><li>SpecIF:Origin [PC-Origin 1.1]</li><li>SpecIF:LifeCycleStatus [PC-LifeCycleStatus 1.1]</li></ul></p>|
### Statement classes of domain 10: Vocabulary Definition

|title|id|revision|description|
|-|-|-|-|
|SpecIF:isSynonymOf|SC-isSynonymousResource|1.0|<p>Synonymous resource-term</p>|
|SpecIF:isSynonymOf|SC-isSynonymousPredicate|1.0|<p>Synonymous predicate-term</p>|
|SpecIF:isSynonymOf|SC-isSynonymousProperty|1.0|<p>Synonymous property-term</p>|
|SpecIF:isSynonymOf|SC-isSynonymousValue|1.0|<p>Synonymous value-term</p>|
|SpecIF:isInverseOf|SC-isInverseOf|1.0|<p>Two terms are the inverse of each other, such as 'contains' and 'isContainedBy'.</p>|
|SpecIF:isSpecialisationOf|SC-isSpecialisationOf|1.0|<p>A term is a specialization of another, such as 'Passenger Car' and 'Vehicle'.</p>|
## Domain 11: Testing

### Data types of domain 11: Testing

|title|id|revision|type|description|
|-|-|-|-|-|
|U2TP:Verdict|DT-TestVerdict|1.1|xs:string|<p>A verdict is a predefined enumeration specifying the set of possible evaluations of a test case.</p><ul><li>None [V-Verdict-0]</li><li>Pass [V-Verdict-1]</li><li>Inconclusive [V-Verdict-2]</li><li>Fail [V-Verdict-3]</li><li>Error [V-Verdict-4]</li></ul>|
### Property classes of domain 11: Testing

|title|id|revision|dataType|description|
|-|-|-|-|-|
|U2TP:Verdict|PC-TestVerdict|1.1|U2TP:Verdict|A verdict is a predefined enumeration specifying the set of possible evaluations of a test case.|
|ISTQB:ExpectedResult|PC-ExpectedResult|1.1||The predicted observable behavior of a component or system executing under specified conditions, based on its specification or another source. [After ISO 29119]|
|ISTQB:TestData|PC-TestData|1.1|Plain or formatted Text|Data created or selected to satisfy the execution preconditions and inputs to execute one or more test cases. [After ISO 29119]|
|U2TP:ReasonMessage|PC-TestResultReason|1.1||A textual note, describing a reason for a test result.|
|ISTQB:Precondition|PC-TestPrecondition|1.1|Plain or formatted Text|The required state of a test item and its environment prior to test case execution.|
|ISTQB:TestObject|PC-TestObject|1.1||The work product to be tested.|
### Resource classes of domain 11: Testing

|title|id|revision|description|
|-|-|-|-|
|ISTQB:TestCase|RC-TestCase|1.1|<p>A Test Case.</p><p>Property classes:<br/><ul><li>dcterms:identifier [PC-VisibleId 1.1]</li><li>dcterms:title [PC-Name 1.1]</li><li>dcterms:description [PC-Description 1.1]</li><li>ISTQB:Precondition [PC-TestPrecondition 1.1]</li><li>U2TP:Verdict [PC-TestVerdict 1.1]</li><li>SpecIF:LifeCycleStatus [PC-LifeCycleStatus 1.1]</li><li>SpecIF:Priority [PC-Priority 1.1]</li></ul></p>|
|U2TP:TestStep|RC-TestStep|1.1|<p>The smallest atomic (i.e., indivisible) part of a test case specification that is executed by a a test execution system during test case execution.</p><p>Property classes:<br/><ul><li>dcterms:title [PC-Name 1.1]</li><li>dcterms:description [PC-Description 1.1]</li><li>ISTQB:TestData [PC-TestData 1.1]</li><li>ISTQB:ExpectedResult [PC-ExpectedResult 1.1]</li><li>U2TP:Verdict [PC-TestVerdict 1.1]</li><li>U2TP:ReasonMessage [PC-TestResultReason 1.1]</li></ul></p>|
|U2TP:TestModel|RC-TestModel|1.1|<p>A set of test case definitions. Used as SpecIF hierarchy-root element.</p><p>Property classes:<br/><ul><li>dcterms:title [PC-Name 1.1]</li><li>dcterms:description [PC-Description 1.1]</li></ul></p>|
|ISTQB:TestSuite|RC-TestSuite|1.1|<p>A set of test scripts or test procedures to be executed in a specific test run.</p><p>Property classes:<br/><ul><li>dcterms:title [PC-Name 1.1]</li><li>dcterms:description [PC-Description 1.1]</li><li>ISTQB:TestObject [PC-TestObject 1.1]</li><li>U2TP:Verdict [PC-TestVerdict 1.1]</li><li>U2TP:ReasonMessage [PC-TestResultReason 1.1]</li></ul></p>|
### Statement classes of domain 11: Testing

|title|id|revision|description|
|-|-|-|-|
|ISTBQ:Verifies|SC-verifies|1.1|<p>Statement: The test case (subject) verifies the requirement (object).</p>|
## Domain 12: SpecIF Events

### Data types of domain 12: SpecIF Events

|title|id|revision|type|description|
|-|-|-|-|-|
|SpecIF:specifEventType|DT-SpecIfEventType|1.1|xs:string|<p>The SpecIF Event Type.</p><ul><li>Resource created [V-SET-ResourceCreated]</li><li>Resource updated [V-SET-ResourceUpdated]</li><li>Resource deleted [V-SET-ResourceDeleted]</li><li>Statement created [V-SET-StatementCreated]</li><li>Statement updated [V-SET-StatementUpdated]</li><li>Statement deleted [V-SET-StatementDeleted]</li></ul>|
### Property classes of domain 12: SpecIF Events

|title|id|revision|dataType|description|
|-|-|-|-|-|
|SpecIF:apiURL|PC-ApiURL|1.1|URL|The SpecIF API server URL.|
|SpecIF:project|PC-SpecIfProject|1.1|String[256]|The SpecIF project ID.|
|SpecIF:specifEventType|PC-SpecIfEventType|1.1|SpecIF:specifEventType|The SpecIF event type.|
|SpecIF:id|PC-SpecIfId|1.1|String[256]|The SpecIF element id.|
|SpecIF:revision|PC-SpecIfRevision|1.1|String[256]|The SpecIF element revision.|
|SpecIF:classId|PC-SpecIfClassId|1.1|String[256]|The SpecIF element class id.|
|SpecIF:classRevision|PC-SpecIfClassRevision|1.1|String[256]|The SpecIF element class revision.|
### Resource classes of domain 12: SpecIF Events

|title|id|revision|description|
|-|-|-|-|
|SpecIF:specifEvent|RC-SpecIfEvent|1.1|<p>A SpecIF change event.</p><p>Property classes:<br/><ul><li>SpecIF:Origin [PC-Origin 1.1]</li><li>SpecIF:project [PC-SpecIfProject 1.1]</li><li>SpecIF:specifEventType [PC-SpecIfEventType 1.1]</li><li>SpecIF:id [PC-SpecIfId 1.1]</li><li>SpecIF:revision [PC-SpecIfRevision 1.1]</li><li>SpecIF:classId [PC-SpecIfClassId 1.1]</li><li>SpecIF:classRevision [PC-SpecIfClassRevision 1.1]</li></ul></p>|
## Domain : Packages

### Data types of domain : Packages

|title|id|revision|type|description|
|-|-|-|-|-|
|Boolean|DT-Boolean|1.1|xs:boolean|The Boolean data type.|
|Byte|DT-Byte|1.1|xs:integer|A byte is an integer value in range between 0 and 255.|
|Integer|DT-Integer|1.1|xs:integer|A numerical integer value from -32768 to 32768.|
|Real|DT-Real|1.1|xs:double|A floating point number (double).|
|Real with 2 Decimals|DT-Decimal2|1.1|xs:double|A floating point number (double) with two fraction digits.|
|Date or Timestamp|DT-DateTime|1.1|xs:dateTime|Date or Timestamp in ISO-Format|
|String[256]|DT-ShortString|1.1|xs:string|String with max. length 256|
|Plain or formatted Text|DT-Text|1.1|xs:string|An account of the resource (source: http://dublincore.org/documents/dcmi-terms/). Descriptive text represented in plain or rich text using XHTML. SHOULD include only content that is valid and suitable inside an XHTML &lt;div&gt; element (source: http://open-services.net/).|
|URL|DT-URL|1.1|xs:string|A uniform resource locator.|
|E-mail|DT-EmailAddress|1.1|xs:string|Data type to represent an E-mail address.|
|SpecIF:LifeCycleStatus|DT-LifeCycleStatus|1.1|xs:string|<p>Enumerated values for status</p><ul><li>SpecIF:LifecycleStatusDeprecated [V-Status-0]</li><li>SpecIF:LifecycleStatusRejected [V-Status-1]</li><li>SpecIF:LifecycleStatusInitial [V-Status-2]</li><li>SpecIF:LifecycleStatusDrafted [V-Status-3]</li><li>SpecIF:LifecycleStatusSubmitted [V-Status-4]</li><li>SpecIF:LifecycleStatusApproved [V-Status-5]</li><li>SpecIF:LifecycleStatusReady [V-Status-8]</li><li>SpecIF:LifecycleStatusDone [V-Status-6]</li><li>SpecIF:LifecycleStatusValidated [V-Status-9]</li><li>SpecIF:LifecycleStatusReleased [V-Status-7]</li><li>SpecIF:LifecycleStatusWithdrawn [V-Status-10]</li></ul>|
|SpecIF:Priority|DT-Priority|1.1|xs:string|<p>Enumerated values for priority</p><ul><li>SpecIF:priorityHigh [V-Prio-0]</li><li>SpecIF:priorityRatherHigh [V-Prio-1]</li><li>SpecIF:priorityMedium [V-Prio-2]</li><li>SpecIF:priorityRatherLow [V-Prio-3]</li><li>SpecIF:priorityLow [V-Prio-4]</li></ul>|
|SpecIF:Discipline|DT-Discipline|1.1|xs:string|<p>Enumerated values for engineering discipline</p><ul><li>SpecIF:DisciplineSystem [V-discipline-4]</li><li>SpecIF:DisciplineMechanics [V-discipline-0]</li><li>SpecIF:DisciplineElectronics [V-discipline-1]</li><li>SpecIF:DisciplineSoftware [V-discipline-2]</li><li>SpecIF:DisciplineSafety [V-discipline-3]</li></ul>|
|IREB:RequirementType|DT-RequirementType|1.1|xs:string|<p>Enumerated values for the Requirement type according IREB</p><ul><li>IREB:FunctionalRequirement [V-RequirementType-0]</li><li>IREB:QualityRequirement [V-RequirementType-1]</li><li>IREB:Constraint [V-RequirementType-2]</li></ul>|
|Perspective|DT-Perspective|1.1|xs:string|<p>Enumerated values for the perspective (of a requirement)</p><ul><li>IREB:PerspectiveBusiness [V-perspective-0]</li><li>IREB:PerspectiveStakeholder [V-perspective-3]</li><li>IREB:PerspectiveUser [V-perspective-1]</li><li>IREB:PerspectiveOperator [V-perspective-4]</li><li>IREB:PerspectiveSystem [V-perspective-2]</li></ul>|
|Boolean|DT-Boolean|1.1|xs:boolean|The Boolean data type.|
|Byte|DT-Byte|1.1|xs:integer|A byte is an integer value in range between 0 and 255.|
|Integer|DT-Integer|1.1|xs:integer|A numerical integer value from -32768 to 32768.|
|Real|DT-Real|1.1|xs:double|A floating point number (double).|
|Real with 2 Decimals|DT-Decimal2|1.1|xs:double|A floating point number (double) with two fraction digits.|
|Date or Timestamp|DT-DateTime|1.1|xs:dateTime|Date or Timestamp in ISO-Format|
|String[256]|DT-ShortString|1.1|xs:string|String with max. length 256|
|Plain or formatted Text|DT-Text|1.1|xs:string|An account of the resource (source: http://dublincore.org/documents/dcmi-terms/). Descriptive text represented in plain or rich text using XHTML. SHOULD include only content that is valid and suitable inside an XHTML &lt;div&gt; element (source: http://open-services.net/).|
|URL|DT-URL|1.1|xs:string|A uniform resource locator.|
|E-mail|DT-EmailAddress|1.1|xs:string|Data type to represent an E-mail address.|
|SpecIF:LifeCycleStatus|DT-LifeCycleStatus|1.1|xs:string|<p>Enumerated values for status</p><ul><li>SpecIF:LifecycleStatusDeprecated [V-Status-0]</li><li>SpecIF:LifecycleStatusRejected [V-Status-1]</li><li>SpecIF:LifecycleStatusInitial [V-Status-2]</li><li>SpecIF:LifecycleStatusDrafted [V-Status-3]</li><li>SpecIF:LifecycleStatusSubmitted [V-Status-4]</li><li>SpecIF:LifecycleStatusApproved [V-Status-5]</li><li>SpecIF:LifecycleStatusReady [V-Status-8]</li><li>SpecIF:LifecycleStatusDone [V-Status-6]</li><li>SpecIF:LifecycleStatusValidated [V-Status-9]</li><li>SpecIF:LifecycleStatusReleased [V-Status-7]</li><li>SpecIF:LifecycleStatusWithdrawn [V-Status-10]</li></ul>|
|SpecIF:Priority|DT-Priority|1.1|xs:string|<p>Enumerated values for priority</p><ul><li>SpecIF:priorityHigh [V-Prio-0]</li><li>SpecIF:priorityRatherHigh [V-Prio-1]</li><li>SpecIF:priorityMedium [V-Prio-2]</li><li>SpecIF:priorityRatherLow [V-Prio-3]</li><li>SpecIF:priorityLow [V-Prio-4]</li></ul>|
|SpecIF:Discipline|DT-Discipline|1.1|xs:string|<p>Enumerated values for engineering discipline</p><ul><li>SpecIF:DisciplineSystem [V-discipline-4]</li><li>SpecIF:DisciplineMechanics [V-discipline-0]</li><li>SpecIF:DisciplineElectronics [V-discipline-1]</li><li>SpecIF:DisciplineSoftware [V-discipline-2]</li><li>SpecIF:DisciplineSafety [V-discipline-3]</li></ul>|
|IREB:RequirementType|DT-RequirementType|1.1|xs:string|<p>Enumerated values for the Requirement type according IREB</p><ul><li>IREB:FunctionalRequirement [V-RequirementType-0]</li><li>IREB:QualityRequirement [V-RequirementType-1]</li><li>IREB:Constraint [V-RequirementType-2]</li></ul>|
|Perspective|DT-Perspective|1.1|xs:string|<p>Enumerated values for the perspective (of a requirement)</p><ul><li>IREB:PerspectiveBusiness [V-perspective-0]</li><li>IREB:PerspectiveStakeholder [V-perspective-3]</li><li>IREB:PerspectiveUser [V-perspective-1]</li><li>IREB:PerspectiveOperator [V-perspective-4]</li><li>IREB:PerspectiveSystem [V-perspective-2]</li></ul>|
|SpecIF:VisibilityKind|DT-VisibilityKind|1.1|xs:string|<p>Enumerated values for visibility</p><ul><li>UML:Public [V-VisibilityKind-0]</li><li>UML:Private [V-VisibilityKind-1]</li><li>UML:Protected [V-VisibilityKind-2]</li><li>UML:Package [V-VisibilityKind-3]</li><li>UML:Internal [V-VisibilityKind-4]</li><li>UML:ProtectedInternal [V-VisibilityKind-5]</li></ul>|
|Boolean|DT-Boolean|1.1|xs:boolean|The Boolean data type.|
|Byte|DT-Byte|1.1|xs:integer|A byte is an integer value in range between 0 and 255.|
|Integer|DT-Integer|1.1|xs:integer|A numerical integer value from -32768 to 32768.|
|Real|DT-Real|1.1|xs:double|A floating point number (double).|
|Real with 2 Decimals|DT-Decimal2|1.1|xs:double|A floating point number (double) with two fraction digits.|
|Date or Timestamp|DT-DateTime|1.1|xs:dateTime|Date or Timestamp in ISO-Format|
|String[256]|DT-ShortString|1.1|xs:string|String with max. length 256|
|Plain or formatted Text|DT-Text|1.1|xs:string|An account of the resource (source: http://dublincore.org/documents/dcmi-terms/). Descriptive text represented in plain or rich text using XHTML. SHOULD include only content that is valid and suitable inside an XHTML &lt;div&gt; element (source: http://open-services.net/).|
|URL|DT-URL|1.1|xs:string|A uniform resource locator.|
|E-mail|DT-EmailAddress|1.1|xs:string|Data type to represent an E-mail address.|
|SpecIF:LifeCycleStatus|DT-LifeCycleStatus|1.1|xs:string|<p>Enumerated values for status</p><ul><li>SpecIF:LifecycleStatusDeprecated [V-Status-0]</li><li>SpecIF:LifecycleStatusRejected [V-Status-1]</li><li>SpecIF:LifecycleStatusInitial [V-Status-2]</li><li>SpecIF:LifecycleStatusDrafted [V-Status-3]</li><li>SpecIF:LifecycleStatusSubmitted [V-Status-4]</li><li>SpecIF:LifecycleStatusApproved [V-Status-5]</li><li>SpecIF:LifecycleStatusReady [V-Status-8]</li><li>SpecIF:LifecycleStatusDone [V-Status-6]</li><li>SpecIF:LifecycleStatusValidated [V-Status-9]</li><li>SpecIF:LifecycleStatusReleased [V-Status-7]</li><li>SpecIF:LifecycleStatusWithdrawn [V-Status-10]</li></ul>|
|SpecIF:Priority|DT-Priority|1.1|xs:string|<p>Enumerated values for priority</p><ul><li>SpecIF:priorityHigh [V-Prio-0]</li><li>SpecIF:priorityRatherHigh [V-Prio-1]</li><li>SpecIF:priorityMedium [V-Prio-2]</li><li>SpecIF:priorityRatherLow [V-Prio-3]</li><li>SpecIF:priorityLow [V-Prio-4]</li></ul>|
|SpecIF:Discipline|DT-Discipline|1.1|xs:string|<p>Enumerated values for engineering discipline</p><ul><li>SpecIF:DisciplineSystem [V-discipline-4]</li><li>SpecIF:DisciplineMechanics [V-discipline-0]</li><li>SpecIF:DisciplineElectronics [V-discipline-1]</li><li>SpecIF:DisciplineSoftware [V-discipline-2]</li><li>SpecIF:DisciplineSafety [V-discipline-3]</li></ul>|
|IREB:RequirementType|DT-RequirementType|1.1|xs:string|<p>Enumerated values for the Requirement type according IREB</p><ul><li>IREB:FunctionalRequirement [V-RequirementType-0]</li><li>IREB:QualityRequirement [V-RequirementType-1]</li><li>IREB:Constraint [V-RequirementType-2]</li></ul>|
|Perspective|DT-Perspective|1.1|xs:string|<p>Enumerated values for the perspective (of a requirement)</p><ul><li>IREB:PerspectiveBusiness [V-perspective-0]</li><li>IREB:PerspectiveStakeholder [V-perspective-3]</li><li>IREB:PerspectiveUser [V-perspective-1]</li><li>IREB:PerspectiveOperator [V-perspective-4]</li><li>IREB:PerspectiveSystem [V-perspective-2]</li></ul>|
|SpecIF:VisibilityKind|DT-VisibilityKind|1.1|xs:string|<p>Enumerated values for visibility</p><ul><li>UML:Public [V-VisibilityKind-0]</li><li>UML:Private [V-VisibilityKind-1]</li><li>UML:Protected [V-VisibilityKind-2]</li><li>UML:Package [V-VisibilityKind-3]</li><li>UML:Internal [V-VisibilityKind-4]</li><li>UML:ProtectedInternal [V-VisibilityKind-5]</li></ul>|
|VDA:SupplierStatus|DT-SupplierStatus|1.1|xs:string|<p>Enumerated values for VDA supplier-status</p><ul><li>VDA:notApplicable [V-SupplierStatus-0]</li><li>VDA:toClarify [V-SupplierStatus-1]</li><li>VDA:agreed [V-SupplierStatus-2]</li><li>VDA:partlyAgreed [V-SupplierStatus-3]</li><li>VDA:notAgreed [V-SupplierStatus-4]</li></ul>|
|VDA:OemStatus|DT-OemStatus|1.1|xs:string|<p>Enumerated values for VDA oem-status</p><ul><li>VDA:notToEvaluate [V-OemStatus-0]</li><li>VDA:toEvaluate [V-OemStatus-1]</li><li>VDA:accepted [V-OemStatus-2]</li><li>VDA:notAccepted [V-OemStatus-3]</li></ul>|
|SpecIF:IssueStatus|DT-IssStatus|1.1|xs:string|<p>Enumerated values for issue status</p><ul><li>open [V-IssStatus-0]</li><li>assigned [V-IssStatus-1]</li><li>in progress [V-IssStatus-2]</li><li>closed [V-IssStatus-3]</li><li>reopened [V-IssStatus-4]</li><li>rejected [V-IssStatus-5]</li></ul>|
|SpecIF:FeatureKind|DT-FeatureKind|1.1|xs:string|<p>Enumerated values for feature kind</p><ul><li>Mandatory [V-FeatureKind-Mandatory]</li><li>Alternative [V-FeatureKind-Alternative]</li><li>Optional [V-FeatureKind-Optional]</li><li>Or [V-FeatureKind-Or]</li></ul>|
|SpecIF:FeatureSelectionState|DT-FeatureSelectionState|1.1|xs:string|<p>Enumerated values for feature selection state</p><ul><li>Unchecked [V-FeatureSelectionState-Unchecked]</li><li>Checked [V-FeatureSelectionState-Checked]</li><li>Forbidden [V-FeatureSelectionState-Forbidden]</li><li>Recommended [V-FeatureSelectionState-Recommended]</li></ul>|
|U2TP:Verdict|DT-TestVerdict|1.1|xs:string|<p>A verdict is a predefined enumeration specifying the set of possible evaluations of a test case.</p><ul><li>None [V-Verdict-0]</li><li>Pass [V-Verdict-1]</li><li>Inconclusive [V-Verdict-2]</li><li>Fail [V-Verdict-3]</li><li>Error [V-Verdict-4]</li></ul>|
|SpecIF:specifEventType|DT-SpecIfEventType|1.1|xs:string|<p>The SpecIF Event Type.</p><ul><li>Resource created [V-SET-ResourceCreated]</li><li>Resource updated [V-SET-ResourceUpdated]</li><li>Resource deleted [V-SET-ResourceDeleted]</li><li>Statement created [V-SET-StatementCreated]</li><li>Statement updated [V-SET-StatementUpdated]</li><li>Statement deleted [V-SET-StatementDeleted]</li></ul>|
|Boolean|DT-Boolean|1.1|xs:boolean|The Boolean data type.|
|Byte|DT-Byte|1.1|xs:integer|A byte is an integer value in range between 0 and 255.|
|Integer|DT-Integer|1.1|xs:integer|A numerical integer value from -32768 to 32768.|
|Real|DT-Real|1.1|xs:double|A floating point number (double).|
|Real with 2 Decimals|DT-Decimal2|1.1|xs:double|A floating point number (double) with two fraction digits.|
|Date or Timestamp|DT-DateTime|1.1|xs:dateTime|Date or Timestamp in ISO-Format|
|String[256]|DT-ShortString|1.1|xs:string|String with max. length 256|
|Plain or formatted Text|DT-Text|1.1|xs:string|An account of the resource (source: http://dublincore.org/documents/dcmi-terms/). Descriptive text represented in plain or rich text using XHTML. SHOULD include only content that is valid and suitable inside an XHTML &lt;div&gt; element (source: http://open-services.net/).|
|URL|DT-URL|1.1|xs:string|A uniform resource locator.|
|E-mail|DT-EmailAddress|1.1|xs:string|Data type to represent an E-mail address.|
|SpecIF:LifeCycleStatus|DT-LifeCycleStatus|1.1|xs:string|<p>Enumerated values for status</p><ul><li>SpecIF:LifecycleStatusDeprecated [V-Status-0]</li><li>SpecIF:LifecycleStatusRejected [V-Status-1]</li><li>SpecIF:LifecycleStatusInitial [V-Status-2]</li><li>SpecIF:LifecycleStatusDrafted [V-Status-3]</li><li>SpecIF:LifecycleStatusSubmitted [V-Status-4]</li><li>SpecIF:LifecycleStatusApproved [V-Status-5]</li><li>SpecIF:LifecycleStatusReady [V-Status-8]</li><li>SpecIF:LifecycleStatusDone [V-Status-6]</li><li>SpecIF:LifecycleStatusValidated [V-Status-9]</li><li>SpecIF:LifecycleStatusReleased [V-Status-7]</li><li>SpecIF:LifecycleStatusWithdrawn [V-Status-10]</li></ul>|
|SpecIF:Priority|DT-Priority|1.1|xs:string|<p>Enumerated values for priority</p><ul><li>SpecIF:priorityHigh [V-Prio-0]</li><li>SpecIF:priorityRatherHigh [V-Prio-1]</li><li>SpecIF:priorityMedium [V-Prio-2]</li><li>SpecIF:priorityRatherLow [V-Prio-3]</li><li>SpecIF:priorityLow [V-Prio-4]</li></ul>|
|SpecIF:Discipline|DT-Discipline|1.1|xs:string|<p>Enumerated values for engineering discipline</p><ul><li>SpecIF:DisciplineSystem [V-discipline-4]</li><li>SpecIF:DisciplineMechanics [V-discipline-0]</li><li>SpecIF:DisciplineElectronics [V-discipline-1]</li><li>SpecIF:DisciplineSoftware [V-discipline-2]</li><li>SpecIF:DisciplineSafety [V-discipline-3]</li></ul>|
|IREB:RequirementType|DT-RequirementType|1.1|xs:string|<p>Enumerated values for the Requirement type according IREB</p><ul><li>IREB:FunctionalRequirement [V-RequirementType-0]</li><li>IREB:QualityRequirement [V-RequirementType-1]</li><li>IREB:Constraint [V-RequirementType-2]</li></ul>|
|Perspective|DT-Perspective|1.1|xs:string|<p>Enumerated values for the perspective (of a requirement)</p><ul><li>IREB:PerspectiveBusiness [V-perspective-0]</li><li>IREB:PerspectiveStakeholder [V-perspective-3]</li><li>IREB:PerspectiveUser [V-perspective-1]</li><li>IREB:PerspectiveOperator [V-perspective-4]</li><li>IREB:PerspectiveSystem [V-perspective-2]</li></ul>|
|SpecIF:VisibilityKind|DT-VisibilityKind|1.1|xs:string|<p>Enumerated values for visibility</p><ul><li>UML:Public [V-VisibilityKind-0]</li><li>UML:Private [V-VisibilityKind-1]</li><li>UML:Protected [V-VisibilityKind-2]</li><li>UML:Package [V-VisibilityKind-3]</li><li>UML:Internal [V-VisibilityKind-4]</li><li>UML:ProtectedInternal [V-VisibilityKind-5]</li></ul>|
### Property classes of domain : Packages

|title|id|revision|dataType|description|
|-|-|-|-|-|
|dcterms:identifier|PC-VisibleId|1.1|String[256]|<p>A unique reference to the resource within a given context. <small>(<i>source: <a href="http://dublincore.org/documents/dcmi-terms/">DCMI</a></i>)</small></p><p>An identifier for a resource. This identifier may be unique with a scope that is defined by the RM provider. Assigned by the service provider when a resource is created. Not intended for end-user display. <small>(<i>source: <a href="http://open-services.net/">OSLC</a></i>)</small></p>|
|dcterms:title|PC-Name|1.1|String[256]|<p>A name given to the resource. <small>(<i>source: <a href="http://dublincore.org/documents/dcmi-terms/">DCMI</a></i>)</small></p><p>Title (reference: Dublin Core) of the resource represented as rich text in XHTML content. SHOULD include only content that is valid inside an XHTML &lt;span&gt; element. <small>(<i>source: <a href="http://open-services.net/">OSLC</a></i>)</small></p>|
|dcterms:description|PC-Description|1.1|Plain or formatted Text|<p>An account of the resource. <small>(<i>source: <a href="http://dublincore.org/documents/dcmi-terms/">DCMI</a></i>)</small></p><p>Descriptive text (reference: Dublin Core) about resource represented as rich text in XHTML content. SHOULD include only content that is valid and suitable inside an XHTML &lt;div&gt; element. <small>(<i>source: <a href="http://open-services.net/">OSLC</a></i>)</small></p>|
|SpecIF:Origin|PC-Origin|1.1|String[256]|The origin (source, reference) of an information or requirement|
|SpecIF:Diagram|PC-Diagram|1.1|Plain or formatted Text|A partial graphical representation (diagram) of a model.|
|SpecIF:Notation|PC-Notation|1.1|String[256]|The notation used by a model diagram, e.g. 'BPMN:2.0', 'OMG:SysML:1.3:Activity Diagram' or 'FMC:Block Diagram'.|
|SpecIF:LifeCycleStatus|PC-LifeCycleStatus|1.1|SpecIF:LifeCycleStatus|The 'Status', e.g. lifecycle state, of the resource.|
|SpecIF:Priority|PC-Priority|1.1|SpecIF:Priority|The 'Priority' of the resource.|
|SpecIF:Discipline|PC-Discipline|1.1|SpecIF:Discipline|The engineering discipline (system, electronics, mechanics, software, safety).|
|SpecIF:Responsible|PC-Responsible|1.1|String[256]|The 'Person' being responsible for the resource.|
|SpecIF:DueDate|PC-DueDate|1.1|Date or Timestamp|A 'Due Date' for the resource.|
|UML:Stereotype|PC-Stereotype|1.1|String[256]|A stereotype gives an element an additional/different meaning.|
|SpecIF:Abbreviation|PC-Abbreviation|1.1|String[256]|An abbreviation for the resource or statement.|
|dcterms:type|PC-Type|1.1|String[256]|The element type resp. the metamodel element (e.g. OMG:UML:2.5.1:Class)|
|SpecIF:Alias|PC-Alias|1.1|String[256]|An alias name for the resource.|
|rdf:value|PC-Value|1.1|Plain or formatted Text|A value of different meaning, depending on the element type (attribute default value, a taggedValue value etc.)|
|IREB:RequirementType|PC-RequirementType|1.1|IREB:RequirementType|Enumerated value for the Requirement type according IREB|
|SpecIF:Perspective|PC-Perspective|1.1|Perspective|Enumerated values for the perspective (of a requirement)|
|dcterms:identifier|PC-VisibleId|1.1|String[256]|<p>A unique reference to the resource within a given context. <small>(<i>source: <a href="http://dublincore.org/documents/dcmi-terms/">DCMI</a></i>)</small></p><p>An identifier for a resource. This identifier may be unique with a scope that is defined by the RM provider. Assigned by the service provider when a resource is created. Not intended for end-user display. <small>(<i>source: <a href="http://open-services.net/">OSLC</a></i>)</small></p>|
|dcterms:title|PC-Name|1.1|String[256]|<p>A name given to the resource. <small>(<i>source: <a href="http://dublincore.org/documents/dcmi-terms/">DCMI</a></i>)</small></p><p>Title (reference: Dublin Core) of the resource represented as rich text in XHTML content. SHOULD include only content that is valid inside an XHTML &lt;span&gt; element. <small>(<i>source: <a href="http://open-services.net/">OSLC</a></i>)</small></p>|
|dcterms:description|PC-Description|1.1|Plain or formatted Text|<p>An account of the resource. <small>(<i>source: <a href="http://dublincore.org/documents/dcmi-terms/">DCMI</a></i>)</small></p><p>Descriptive text (reference: Dublin Core) about resource represented as rich text in XHTML content. SHOULD include only content that is valid and suitable inside an XHTML &lt;div&gt; element. <small>(<i>source: <a href="http://open-services.net/">OSLC</a></i>)</small></p>|
|SpecIF:Origin|PC-Origin|1.1|String[256]|The origin (source, reference) of an information or requirement|
|SpecIF:Diagram|PC-Diagram|1.1|Plain or formatted Text|A partial graphical representation (diagram) of a model.|
|SpecIF:Notation|PC-Notation|1.1|String[256]|The notation used by a model diagram, e.g. 'BPMN:2.0', 'OMG:SysML:1.3:Activity Diagram' or 'FMC:Block Diagram'.|
|SpecIF:LifeCycleStatus|PC-LifeCycleStatus|1.1|SpecIF:LifeCycleStatus|The 'Status', e.g. lifecycle state, of the resource.|
|SpecIF:Priority|PC-Priority|1.1|SpecIF:Priority|The 'Priority' of the resource.|
|SpecIF:Discipline|PC-Discipline|1.1|SpecIF:Discipline|The engineering discipline (system, electronics, mechanics, software, safety).|
|SpecIF:Responsible|PC-Responsible|1.1|String[256]|The 'Person' being responsible for the resource.|
|SpecIF:DueDate|PC-DueDate|1.1|Date or Timestamp|A 'Due Date' for the resource.|
|UML:Stereotype|PC-Stereotype|1.1|String[256]|A stereotype gives an element an additional/different meaning.|
|SpecIF:Abbreviation|PC-Abbreviation|1.1|String[256]|An abbreviation for the resource or statement.|
|dcterms:type|PC-Type|1.1|String[256]|The element type resp. the metamodel element (e.g. OMG:UML:2.5.1:Class)|
|SpecIF:Alias|PC-Alias|1.1|String[256]|An alias name for the resource.|
|rdf:value|PC-Value|1.1|Plain or formatted Text|A value of different meaning, depending on the element type (attribute default value, a taggedValue value etc.)|
|IREB:RequirementType|PC-RequirementType|1.1|IREB:RequirementType|Enumerated value for the Requirement type according IREB|
|SpecIF:Perspective|PC-Perspective|1.1|Perspective|Enumerated values for the perspective (of a requirement)|
|SpecIF:Visibility|PC-Visibility|1.1|SpecIF:VisibilityKind|The visibility of a resource (e.g. Public, Private, Protected,...) as known from object orientation.|
|dcterms:identifier|PC-VisibleId|1.1|String[256]|<p>A unique reference to the resource within a given context. <small>(<i>source: <a href="http://dublincore.org/documents/dcmi-terms/">DCMI</a></i>)</small></p><p>An identifier for a resource. This identifier may be unique with a scope that is defined by the RM provider. Assigned by the service provider when a resource is created. Not intended for end-user display. <small>(<i>source: <a href="http://open-services.net/">OSLC</a></i>)</small></p>|
|dcterms:title|PC-Name|1.1|String[256]|<p>A name given to the resource. <small>(<i>source: <a href="http://dublincore.org/documents/dcmi-terms/">DCMI</a></i>)</small></p><p>Title (reference: Dublin Core) of the resource represented as rich text in XHTML content. SHOULD include only content that is valid inside an XHTML &lt;span&gt; element. <small>(<i>source: <a href="http://open-services.net/">OSLC</a></i>)</small></p>|
|dcterms:description|PC-Description|1.1|Plain or formatted Text|<p>An account of the resource. <small>(<i>source: <a href="http://dublincore.org/documents/dcmi-terms/">DCMI</a></i>)</small></p><p>Descriptive text (reference: Dublin Core) about resource represented as rich text in XHTML content. SHOULD include only content that is valid and suitable inside an XHTML &lt;div&gt; element. <small>(<i>source: <a href="http://open-services.net/">OSLC</a></i>)</small></p>|
|SpecIF:Origin|PC-Origin|1.1|String[256]|The origin (source, reference) of an information or requirement|
|SpecIF:Diagram|PC-Diagram|1.1|Plain or formatted Text|A partial graphical representation (diagram) of a model.|
|SpecIF:Notation|PC-Notation|1.1|String[256]|The notation used by a model diagram, e.g. 'BPMN:2.0', 'OMG:SysML:1.3:Activity Diagram' or 'FMC:Block Diagram'.|
|SpecIF:LifeCycleStatus|PC-LifeCycleStatus|1.1|SpecIF:LifeCycleStatus|The 'Status', e.g. lifecycle state, of the resource.|
|SpecIF:Priority|PC-Priority|1.1|SpecIF:Priority|The 'Priority' of the resource.|
|SpecIF:Discipline|PC-Discipline|1.1|SpecIF:Discipline|The engineering discipline (system, electronics, mechanics, software, safety).|
|SpecIF:Responsible|PC-Responsible|1.1|String[256]|The 'Person' being responsible for the resource.|
|SpecIF:DueDate|PC-DueDate|1.1|Date or Timestamp|A 'Due Date' for the resource.|
|UML:Stereotype|PC-Stereotype|1.1|String[256]|A stereotype gives an element an additional/different meaning.|
|SpecIF:Abbreviation|PC-Abbreviation|1.1|String[256]|An abbreviation for the resource or statement.|
|dcterms:type|PC-Type|1.1|String[256]|The element type resp. the metamodel element (e.g. OMG:UML:2.5.1:Class)|
|SpecIF:Alias|PC-Alias|1.1|String[256]|An alias name for the resource.|
|rdf:value|PC-Value|1.1|Plain or formatted Text|A value of different meaning, depending on the element type (attribute default value, a taggedValue value etc.)|
|IREB:RequirementType|PC-RequirementType|1.1|IREB:RequirementType|Enumerated value for the Requirement type according IREB|
|SpecIF:Perspective|PC-Perspective|1.1|Perspective|Enumerated values for the perspective (of a requirement)|
|SpecIF:Visibility|PC-Visibility|1.1|SpecIF:VisibilityKind|The visibility of a resource (e.g. Public, Private, Protected,...) as known from object orientation.|
|SpecIF:ImplementationLanguage|PC-ImplementationLanguage|1.1|String[256]|The name of an used implementation language (e.g. C, C++, C#, Java, ADA, OCL, ALF etc.)|
|VDA:SupplierStatus|PC-SupplierStatus|1.1|VDA:SupplierStatus||
|VDA:SupplierComment|PC-SupplierComment|1.1|Plain or formatted Text||
|VDA:OemStatus|PC-OemStatus|1.1|VDA:OemStatus||
|VDA:OemComment|PC-OemComment|1.1|Plain or formatted Text||
|SpecIF:IssueStatus|PC-IssStatus|1.1|SpecIF:IssueStatus||
|SpecIF:FeatureKind|PC-FeatureKind|1.1|SpecIF:FeatureKind|<p>The kind of a feature used in a feature tree (mandatory, optional, alternative, or).</p>|
|SpecIF:FeatureSelectionState|PC-FeatureSelectionState|1.1|SpecIF:FeatureSelectionState|<p>The selection state for a feature used in a variant model.</p>|
|U2TP:Verdict|PC-TestVerdict|1.1|U2TP:Verdict|A verdict is a predefined enumeration specifying the set of possible evaluations of a test case.|
|ISTQB:ExpectedResult|PC-ExpectedResult|1.1||The predicted observable behavior of a component or system executing under specified conditions, based on its specification or another source. [After ISO 29119]|
|ISTQB:TestData|PC-TestData|1.1|Plain or formatted Text|Data created or selected to satisfy the execution preconditions and inputs to execute one or more test cases. [After ISO 29119]|
|U2TP:ReasonMessage|PC-TestResultReason|1.1||A textual note, describing a reason for a test result.|
|ISTQB:Precondition|PC-TestPrecondition|1.1|Plain or formatted Text|The required state of a test item and its environment prior to test case execution.|
|ISTQB:TestObject|PC-TestObject|1.1||The work product to be tested.|
|SpecIF:apiURL|PC-ApiURL|1.1|URL|The SpecIF API server URL.|
|SpecIF:project|PC-SpecIfProject|1.1|String[256]|The SpecIF project ID.|
|SpecIF:specifEventType|PC-SpecIfEventType|1.1|SpecIF:specifEventType|The SpecIF event type.|
|SpecIF:id|PC-SpecIfId|1.1|String[256]|The SpecIF element id.|
|SpecIF:revision|PC-SpecIfRevision|1.1|String[256]|The SpecIF element revision.|
|SpecIF:classId|PC-SpecIfClassId|1.1|String[256]|The SpecIF element class id.|
|SpecIF:classRevision|PC-SpecIfClassRevision|1.1|String[256]|The SpecIF element class revision.|
|dcterms:identifier|PC-VisibleId|1.1|String[256]|<p>A unique reference to the resource within a given context. <small>(<i>source: <a href="http://dublincore.org/documents/dcmi-terms/">DCMI</a></i>)</small></p><p>An identifier for a resource. This identifier may be unique with a scope that is defined by the RM provider. Assigned by the service provider when a resource is created. Not intended for end-user display. <small>(<i>source: <a href="http://open-services.net/">OSLC</a></i>)</small></p>|
|dcterms:title|PC-Name|1.1|String[256]|<p>A name given to the resource. <small>(<i>source: <a href="http://dublincore.org/documents/dcmi-terms/">DCMI</a></i>)</small></p><p>Title (reference: Dublin Core) of the resource represented as rich text in XHTML content. SHOULD include only content that is valid inside an XHTML &lt;span&gt; element. <small>(<i>source: <a href="http://open-services.net/">OSLC</a></i>)</small></p>|
|dcterms:description|PC-Description|1.1|Plain or formatted Text|<p>An account of the resource. <small>(<i>source: <a href="http://dublincore.org/documents/dcmi-terms/">DCMI</a></i>)</small></p><p>Descriptive text (reference: Dublin Core) about resource represented as rich text in XHTML content. SHOULD include only content that is valid and suitable inside an XHTML &lt;div&gt; element. <small>(<i>source: <a href="http://open-services.net/">OSLC</a></i>)</small></p>|
|SpecIF:Origin|PC-Origin|1.1|String[256]|The origin (source, reference) of an information or requirement|
|SpecIF:Diagram|PC-Diagram|1.1|Plain or formatted Text|A partial graphical representation (diagram) of a model.|
|SpecIF:Notation|PC-Notation|1.1|String[256]|The notation used by a model diagram, e.g. 'BPMN:2.0', 'OMG:SysML:1.3:Activity Diagram' or 'FMC:Block Diagram'.|
|SpecIF:LifeCycleStatus|PC-LifeCycleStatus|1.1|SpecIF:LifeCycleStatus|The 'Status', e.g. lifecycle state, of the resource.|
|SpecIF:Priority|PC-Priority|1.1|SpecIF:Priority|The 'Priority' of the resource.|
|SpecIF:Discipline|PC-Discipline|1.1|SpecIF:Discipline|The engineering discipline (system, electronics, mechanics, software, safety).|
|SpecIF:Responsible|PC-Responsible|1.1|String[256]|The 'Person' being responsible for the resource.|
|SpecIF:DueDate|PC-DueDate|1.1|Date or Timestamp|A 'Due Date' for the resource.|
|UML:Stereotype|PC-Stereotype|1.1|String[256]|A stereotype gives an element an additional/different meaning.|
|SpecIF:Abbreviation|PC-Abbreviation|1.1|String[256]|An abbreviation for the resource or statement.|
|dcterms:type|PC-Type|1.1|String[256]|The element type resp. the metamodel element (e.g. OMG:UML:2.5.1:Class)|
|SpecIF:Alias|PC-Alias|1.1|String[256]|An alias name for the resource.|
|rdf:value|PC-Value|1.1|Plain or formatted Text|A value of different meaning, depending on the element type (attribute default value, a taggedValue value etc.)|
|IREB:RequirementType|PC-RequirementType|1.1|IREB:RequirementType|Enumerated value for the Requirement type according IREB|
|SpecIF:Perspective|PC-Perspective|1.1|Perspective|Enumerated values for the perspective (of a requirement)|
|SpecIF:Visibility|PC-Visibility|1.1|SpecIF:VisibilityKind|The visibility of a resource (e.g. Public, Private, Protected,...) as known from object orientation.|
|SpecIF:ImplementationLanguage|PC-ImplementationLanguage|1.1|String[256]|The name of an used implementation language (e.g. C, C++, C#, Java, ADA, OCL, ALF etc.)|
### Resource classes of domain : Packages

|title|id|revision|description|
|-|-|-|-|
|SpecIF:Heading|RC-Folder|1.1|<p>Folders with title and text for chapters or descriptive paragraphs.</p><p>Property classes:<br/><ul><li>dcterms:title [PC-Name 1.1]</li><li>dcterms:description [PC-Description 1.1]</li><li>dcterms:type [PC-Type 1.1]</li></ul></p>|
|SpecIF:Paragraph|RC-Paragraph|1.1|<p>Information with text for descriptive paragraphs.</p><p>Property classes:<br/><ul><li>dcterms:title [PC-Name 1.1]</li><li>dcterms:description [PC-Description 1.1]</li></ul></p>|
|SpecIF:Hierarchy|RC-Hierarchy|1.1|<p>Root node of a hierarchically organized specification (outline).</p><p>Property classes:<br/><ul><li>dcterms:title [PC-Name 1.1]</li><li>dcterms:description [PC-Description 1.1]</li></ul></p>|
|SpecIF:Comment|RC-Comment|1.1|<p>Comment referring to a model element ('resource' or 'statement' in general).</p><p>Property classes:<br/><ul><li>dcterms:title [PC-Name 1.1]</li><li>dcterms:description [PC-Description 1.1]</li></ul></p>|
|IREB:Requirement|RC-Requirement|1.1|<p>A 'Requirement' is a singular documented physical and functional need that a particular design, product or process must be able to perform.</p><p>Property classes:<br/><ul><li>dcterms:identifier [PC-VisibleId 1.1]</li><li>dcterms:title [PC-Name 1.1]</li><li>dcterms:description [PC-Description 1.1]</li><li>IREB:RequirementType [PC-RequirementType 1.1]</li><li>SpecIF:Priority [PC-Priority 1.1]</li><li>SpecIF:LifeCycleStatus [PC-LifeCycleStatus 1.1]</li><li>SpecIF:Perspective [PC-Perspective 1.1]</li><li>SpecIF:Discipline [PC-Discipline 1.1]</li></ul></p>|
|SpecIF:Feature|RC-Feature|1.1|<p>A 'Feature' is an intentional distinguishing characteristic of a system, often a unique selling proposition.</p><p>Property classes:<br/><ul><li>dcterms:identifier [PC-VisibleId 1.1]</li><li>dcterms:title [PC-Name 1.1]</li><li>dcterms:description [PC-Description 1.1]</li><li>SpecIF:Priority [PC-Priority 1.1]</li><li>SpecIF:LifeCycleStatus [PC-LifeCycleStatus 1.1]</li><li>SpecIF:Perspective [PC-Perspective 1.1]</li><li>SpecIF:Discipline [PC-Discipline 1.1]</li></ul></p>|
|SpecIF:Heading|RC-Folder|1.1|<p>Folders with title and text for chapters or descriptive paragraphs.</p><p>Property classes:<br/><ul><li>dcterms:title [PC-Name 1.1]</li><li>dcterms:description [PC-Description 1.1]</li><li>dcterms:type [PC-Type 1.1]</li></ul></p>|
|SpecIF:Paragraph|RC-Paragraph|1.1|<p>Information with text for descriptive paragraphs.</p><p>Property classes:<br/><ul><li>dcterms:title [PC-Name 1.1]</li><li>dcterms:description [PC-Description 1.1]</li></ul></p>|
|SpecIF:Hierarchy|RC-Hierarchy|1.1|<p>Root node of a hierarchically organized specification (outline).</p><p>Property classes:<br/><ul><li>dcterms:title [PC-Name 1.1]</li><li>dcterms:description [PC-Description 1.1]</li></ul></p>|
|SpecIF:Comment|RC-Comment|1.1|<p>Comment referring to a model element ('resource' or 'statement' in general).</p><p>Property classes:<br/><ul><li>dcterms:title [PC-Name 1.1]</li><li>dcterms:description [PC-Description 1.1]</li></ul></p>|
|IREB:Requirement|RC-Requirement|1.1|<p>A 'Requirement' is a singular documented physical and functional need that a particular design, product or process must be able to perform.</p><p>Property classes:<br/><ul><li>dcterms:identifier [PC-VisibleId 1.1]</li><li>dcterms:title [PC-Name 1.1]</li><li>dcterms:description [PC-Description 1.1]</li><li>IREB:RequirementType [PC-RequirementType 1.1]</li><li>SpecIF:Priority [PC-Priority 1.1]</li><li>SpecIF:LifeCycleStatus [PC-LifeCycleStatus 1.1]</li><li>SpecIF:Perspective [PC-Perspective 1.1]</li><li>SpecIF:Discipline [PC-Discipline 1.1]</li></ul></p>|
|SpecIF:Feature|RC-Feature|1.1|<p>A 'Feature' is an intentional distinguishing characteristic of a system, often a unique selling proposition.</p><p>Property classes:<br/><ul><li>dcterms:identifier [PC-VisibleId 1.1]</li><li>dcterms:title [PC-Name 1.1]</li><li>dcterms:description [PC-Description 1.1]</li><li>SpecIF:Priority [PC-Priority 1.1]</li><li>SpecIF:LifeCycleStatus [PC-LifeCycleStatus 1.1]</li><li>SpecIF:Perspective [PC-Perspective 1.1]</li><li>SpecIF:Discipline [PC-Discipline 1.1]</li></ul></p>|
|SpecIF:Diagram|RC-Diagram|1.1|<p>A 'Diagram' is a graphical model view with a specific communication purpose, e.g. a business process or system composition.</p><p>Property classes:<br/><ul><li>dcterms:title [PC-Name 1.1]</li><li>dcterms:description [PC-Description 1.1]</li><li>SpecIF:Diagram [PC-Diagram 1.1]</li><li>dcterms:type [PC-Type 1.1]</li><li>SpecIF:Notation [PC-Notation 1.1]</li><li>SpecIF:LifeCycleStatus [PC-LifeCycleStatus 1.1]</li><li>UML:Stereotype [PC-Stereotype 1.1]</li></ul></p>|
|FMC:Actor|RC-Actor|1.1|<p>An 'Actor' is a fundamental model element type representing an active entity, be it an activity, a process step, a function, a system component or a role.</p><p>Property classes:<br/><ul><li>dcterms:title [PC-Name 1.1]</li><li>dcterms:description [PC-Description 1.1]</li><li>SpecIF:LifeCycleStatus [PC-LifeCycleStatus 1.1]</li><li>SpecIF:Visibility [PC-Visibility 1.1]</li><li>dcterms:type [PC-Type 1.1]</li><li>UML:Stereotype [PC-Stereotype 1.1]</li><li>rdf:value [PC-Value 1.1]</li><li>SpecIF:Alias [PC-Alias 1.1]</li></ul></p>|
|FMC:State|RC-State|1.1|<p>A 'State' is a fundamental model element type representing a passive entity, be it a value, a condition, an information storage or even a physical shape.</p><p>Property classes:<br/><ul><li>dcterms:title [PC-Name 1.1]</li><li>dcterms:description [PC-Description 1.1]</li><li>SpecIF:LifeCycleStatus [PC-LifeCycleStatus 1.1]</li><li>SpecIF:Visibility [PC-Visibility 1.1]</li><li>dcterms:type [PC-Type 1.1]</li><li>UML:Stereotype [PC-Stereotype 1.1]</li><li>rdf:value [PC-Value 1.1]</li><li>SpecIF:Alias [PC-Alias 1.1]</li></ul></p>|
|FMC:Event|RC-Event|1.1|<p>An 'Event' is a fundamental model element type representing a time reference, a change in condition/value or more generally a synchronisation primitive.</p><p>Property classes:<br/><ul><li>dcterms:title [PC-Name 1.1]</li><li>dcterms:description [PC-Description 1.1]</li><li>SpecIF:LifeCycleStatus [PC-LifeCycleStatus 1.1]</li><li>SpecIF:Visibility [PC-Visibility 1.1]</li><li>dcterms:type [PC-Type 1.1]</li><li>UML:Stereotype [PC-Stereotype 1.1]</li><li>rdf:value [PC-Value 1.1]</li><li>SpecIF:Alias [PC-Alias 1.1]</li></ul></p>|
|SpecIF:Collection|RC-Collection|1.1|<p>A 'Collection' is a logic (often conceptual) group of resources linked with a SpecIF:contains statement. It corresponds to a 'Group' in BPMN Diagrams.</p><p>Property classes:<br/><ul><li>dcterms:title [PC-Name 1.1]</li><li>dcterms:description [PC-Description 1.1]</li><li>SpecIF:LifeCycleStatus [PC-LifeCycleStatus 1.1]</li><li>SpecIF:Visibility [PC-Visibility 1.1]</li><li>dcterms:type [PC-Type 1.1]</li><li>UML:Stereotype [PC-Stereotype 1.1]</li><li>rdf:value [PC-Value 1.1]</li><li>SpecIF:Alias [PC-Alias 1.1]</li></ul></p>|
|SpecIF:Heading|RC-Folder|1.1|<p>Folders with title and text for chapters or descriptive paragraphs.</p><p>Property classes:<br/><ul><li>dcterms:title [PC-Name 1.1]</li><li>dcterms:description [PC-Description 1.1]</li><li>dcterms:type [PC-Type 1.1]</li></ul></p>|
|SpecIF:Paragraph|RC-Paragraph|1.1|<p>Information with text for descriptive paragraphs.</p><p>Property classes:<br/><ul><li>dcterms:title [PC-Name 1.1]</li><li>dcterms:description [PC-Description 1.1]</li></ul></p>|
|SpecIF:Hierarchy|RC-Hierarchy|1.1|<p>Root node of a hierarchically organized specification (outline).</p><p>Property classes:<br/><ul><li>dcterms:title [PC-Name 1.1]</li><li>dcterms:description [PC-Description 1.1]</li></ul></p>|
|SpecIF:Comment|RC-Comment|1.1|<p>Comment referring to a model element ('resource' or 'statement' in general).</p><p>Property classes:<br/><ul><li>dcterms:title [PC-Name 1.1]</li><li>dcterms:description [PC-Description 1.1]</li></ul></p>|
|IREB:Requirement|RC-Requirement|1.1|<p>A 'Requirement' is a singular documented physical and functional need that a particular design, product or process must be able to perform.</p><p>Property classes:<br/><ul><li>dcterms:identifier [PC-VisibleId 1.1]</li><li>dcterms:title [PC-Name 1.1]</li><li>dcterms:description [PC-Description 1.1]</li><li>IREB:RequirementType [PC-RequirementType 1.1]</li><li>SpecIF:Priority [PC-Priority 1.1]</li><li>SpecIF:LifeCycleStatus [PC-LifeCycleStatus 1.1]</li><li>SpecIF:Perspective [PC-Perspective 1.1]</li><li>SpecIF:Discipline [PC-Discipline 1.1]</li></ul></p>|
|SpecIF:Feature|RC-Feature|1.1|<p>A 'Feature' is an intentional distinguishing characteristic of a system, often a unique selling proposition.</p><p>Property classes:<br/><ul><li>dcterms:identifier [PC-VisibleId 1.1]</li><li>dcterms:title [PC-Name 1.1]</li><li>dcterms:description [PC-Description 1.1]</li><li>SpecIF:Priority [PC-Priority 1.1]</li><li>SpecIF:LifeCycleStatus [PC-LifeCycleStatus 1.1]</li><li>SpecIF:Perspective [PC-Perspective 1.1]</li><li>SpecIF:Discipline [PC-Discipline 1.1]</li></ul></p>|
|SpecIF:Diagram|RC-Diagram|1.1|<p>A 'Diagram' is a graphical model view with a specific communication purpose, e.g. a business process or system composition.</p><p>Property classes:<br/><ul><li>dcterms:title [PC-Name 1.1]</li><li>dcterms:description [PC-Description 1.1]</li><li>SpecIF:Diagram [PC-Diagram 1.1]</li><li>dcterms:type [PC-Type 1.1]</li><li>SpecIF:Notation [PC-Notation 1.1]</li><li>SpecIF:LifeCycleStatus [PC-LifeCycleStatus 1.1]</li><li>UML:Stereotype [PC-Stereotype 1.1]</li></ul></p>|
|FMC:Actor|RC-Actor|1.1|<p>An 'Actor' is a fundamental model element type representing an active entity, be it an activity, a process step, a function, a system component or a role.</p><p>Property classes:<br/><ul><li>dcterms:title [PC-Name 1.1]</li><li>dcterms:description [PC-Description 1.1]</li><li>SpecIF:LifeCycleStatus [PC-LifeCycleStatus 1.1]</li><li>SpecIF:Visibility [PC-Visibility 1.1]</li><li>dcterms:type [PC-Type 1.1]</li><li>UML:Stereotype [PC-Stereotype 1.1]</li><li>rdf:value [PC-Value 1.1]</li><li>SpecIF:Alias [PC-Alias 1.1]</li></ul></p>|
|FMC:State|RC-State|1.1|<p>A 'State' is a fundamental model element type representing a passive entity, be it a value, a condition, an information storage or even a physical shape.</p><p>Property classes:<br/><ul><li>dcterms:title [PC-Name 1.1]</li><li>dcterms:description [PC-Description 1.1]</li><li>SpecIF:LifeCycleStatus [PC-LifeCycleStatus 1.1]</li><li>SpecIF:Visibility [PC-Visibility 1.1]</li><li>dcterms:type [PC-Type 1.1]</li><li>UML:Stereotype [PC-Stereotype 1.1]</li><li>rdf:value [PC-Value 1.1]</li><li>SpecIF:Alias [PC-Alias 1.1]</li></ul></p>|
|FMC:Event|RC-Event|1.1|<p>An 'Event' is a fundamental model element type representing a time reference, a change in condition/value or more generally a synchronization primitive.</p><p>Property classes:<br/><ul><li>dcterms:title [PC-Name 1.1]</li><li>dcterms:description [PC-Description 1.1]</li><li>SpecIF:LifeCycleStatus [PC-LifeCycleStatus 1.1]</li><li>SpecIF:Visibility [PC-Visibility 1.1]</li><li>dcterms:type [PC-Type 1.1]</li><li>UML:Stereotype [PC-Stereotype 1.1]</li><li>rdf:value [PC-Value 1.1]</li><li>SpecIF:Alias [PC-Alias 1.1]</li></ul></p>|
|SpecIF:Collection|RC-Collection|1.1|<p>A 'Collection' is a logic (often conceptual) group of resources linked with a SpecIF:contains statement. It corresponds to a 'Group' in BPMN Diagrams.</p><p>Property classes:<br/><ul><li>dcterms:title [PC-Name 1.1]</li><li>dcterms:description [PC-Description 1.1]</li><li>SpecIF:LifeCycleStatus [PC-LifeCycleStatus 1.1]</li><li>SpecIF:Visibility [PC-Visibility 1.1]</li><li>dcterms:type [PC-Type 1.1]</li><li>UML:Stereotype [PC-Stereotype 1.1]</li><li>rdf:value [PC-Value 1.1]</li><li>SpecIF:Alias [PC-Alias 1.1]</li></ul></p>|
|SpecIF:SourceCode|RC-SourceCode|1.1|<p>Source code assigned to a model element (e.g. an activity or operation). Typically used for model-based code generation to provide some code snippets inside the model.</p><p>Property classes:<br/><ul><li>dcterms:title [PC-Name 1.1]</li><li>SpecIF:ImplementationLanguage [PC-ImplementationLanguage 1.1]</li><li>rdf:value [PC-Value 1.1]</li></ul></p>|
|VDA:Diagram|RC-VDA_Diagram|1.1|<p>A 'VDA:Diagram' is a Diagram with automotive-process-specific properties.</p><p>Property classes:<br/><ul><li>VDA:SupplierStatus [PC-SupplierStatus 1.1]</li><li>VDA:SupplierComment [PC-SupplierComment 1.1]</li><li>VDA:OemStatus [PC-OemStatus 1.1]</li><li>VDA:OemComment [PC-OemComment 1.1]</li></ul></p>|
|VDA:Requirement|RC-VDA_Requirement|1.1|<p>A VDA:Requirement is a Requirement with additional automotive-process-specific properties.</p><p>Property classes:<br/><ul><li>VDA:SupplierStatus [PC-SupplierStatus 1.1]</li><li>VDA:SupplierComment [PC-SupplierComment 1.1]</li><li>VDA:OemStatus [PC-OemStatus 1.1]</li><li>VDA:OemComment [PC-OemComment 1.1]</li></ul></p>|
|VDA:Feature|RC-VDA_Feature|1.1|<p>A 'VDA:Feature' is a Feature with automotiev specific properties.</p><p>Property classes:<br/><ul><li>VDA:SupplierStatus [PC-SupplierStatus 1.1]</li><li>VDA:SupplierComment [PC-SupplierComment 1.1]</li><li>VDA:OemStatus [PC-OemStatus 1.1]</li><li>VDA:OemComment [PC-OemComment 1.1]</li></ul></p>|
|SCRUM:Epic|RC-Epic|1.1|<p>An 'Epic' is a big user story and will be refined by user stories/requirements.</p>|
|SpecIF:Issue|RC-Issue|1.1|<p>An 'Issue' is a question to answer or decision to take which is worth tracking.</p><p>Property classes:<br/><ul><li>dcterms:identifier [PC-VisibleId 1.1]</li><li>dcterms:title [PC-Name 1.1]</li><li>dcterms:description [PC-Description 1.1]</li><li>SpecIF:IssueStatus [PC-IssStatus 1.1]</li><li>SpecIF:Priority [PC-Priority 1.1]</li><li>SpecIF:Responsible [PC-Responsible 1.1]</li><li>SpecIF:DueDate [PC-DueDate 1.1]</li></ul></p>|
|SpecIF:BillOfMaterials|RC-BillOfMaterials|1.1|<p>Root node of a bill of materials or product structure (sometimes bill of material, BOM or associated list) is a list of the raw materials, sub-assemblies, intermediate assemblies, sub-components, parts and the quantities of each needed to manufacture an end product. A BOM may be used for communication between manufacturing partners, or confined to a single manufacturing plant.</p><p>Property classes:<br/><ul><li>dcterms:title [PC-Name 1.1]</li><li>dcterms:description [PC-Description 1.1]</li></ul></p>|
|SpecIF:FeatureModel|RC-FeatureModel|1.1|<p>A 'Feature Model' is the root resource of a feature tree to structure the set of features for a system as a tree structure (hierarchy).</p><p>Property classes:<br/><ul><li>dcterms:identifier [PC-VisibleId 1.1]</li><li>dcterms:title [PC-Name 1.1]</li><li>dcterms:description [PC-Description 1.1]</li><li>SpecIF:LifeCycleStatus [PC-LifeCycleStatus 1.1]</li></ul></p>|
|SpecIF:VariantModel|RC-VariantModel|1.1|<p>A 'Variant Model' is an instance of a feature model, where  a subset of features is selected to define a concrete system variant.</p><p>Property classes:<br/><ul><li>dcterms:identifier [PC-VisibleId 1.1]</li><li>dcterms:title [PC-Name 1.1]</li><li>dcterms:description [PC-Description 1.1]</li><li>SpecIF:LifeCycleStatus [PC-LifeCycleStatus 1.1]</li></ul></p>|
|SpecIF:FeatureModelFeature|RC-FeatureModelFeature|1.1|<p>A 'Feture Model Feature' is a feature used in a feature tree resp. feature model structure.</p><p>Property classes:<br/><ul><li>SpecIF:FeatureKind [PC-FeatureKind 1.1]</li><li>SpecIF:FeatureSelectionState [PC-FeatureSelectionState 1.1]</li><li>SpecIF:Abbreviation [PC-Abbreviation 1.1]</li></ul></p>|
|SpecIF:ResourceTerm|RC-ResourceTerm|1.1|<p>A term for resources (objects, entities) belonging to the SpecIF vocabulary</p><p>Property classes:<br/><ul><li>dcterms:title [PC-Name 1.1]</li><li>dcterms:description [PC-Description 1.1]</li><li>SpecIF:Origin [PC-Origin 1.1]</li><li>SpecIF:LifeCycleStatus [PC-LifeCycleStatus 1.1]</li></ul></p>|
|SpecIF:PredicateTerm|RC-PredicateTerm|1.1|<p>A term for statements (relations) belonging to the SpecIF vocabulary</p><p>Property classes:<br/><ul><li>dcterms:title [PC-Name 1.1]</li><li>dcterms:description [PC-Description 1.1]</li><li>SpecIF:Origin [PC-Origin 1.1]</li><li>SpecIF:LifeCycleStatus [PC-LifeCycleStatus 1.1]</li></ul></p>|
|SpecIF:PropertyTerm|RC-PropertyTerm|1.1|<p>A term for user-defined properties (attributes) belonging to the SpecIF vocabulary</p><p>Property classes:<br/><ul><li>dcterms:title [PC-Name 1.1]</li><li>dcterms:description [PC-Description 1.1]</li><li>SpecIF:Origin [PC-Origin 1.1]</li><li>SpecIF:LifeCycleStatus [PC-LifeCycleStatus 1.1]</li></ul></p>|
|SpecIF:ValueTerm|RC-ValueTerm|1.1|<p>A term for property values belonging to the SpecIF vocabulary</p><p>Property classes:<br/><ul><li>dcterms:title [PC-Name 1.1]</li><li>dcterms:description [PC-Description 1.1]</li><li>SpecIF:Origin [PC-Origin 1.1]</li><li>SpecIF:LifeCycleStatus [PC-LifeCycleStatus 1.1]</li></ul></p>|
|ISTQB:TestCase|RC-TestCase|1.1|<p>A Test Case.</p><p>Property classes:<br/><ul><li>dcterms:identifier [PC-VisibleId 1.1]</li><li>dcterms:title [PC-Name 1.1]</li><li>dcterms:description [PC-Description 1.1]</li><li>ISTQB:Precondition [PC-TestPrecondition 1.1]</li><li>U2TP:Verdict [PC-TestVerdict 1.1]</li><li>SpecIF:LifeCycleStatus [PC-LifeCycleStatus 1.1]</li><li>SpecIF:Priority [PC-Priority 1.1]</li></ul></p>|
|U2TP:TestStep|RC-TestStep|1.1|<p>The smallest atomic (i.e., indivisible) part of a test case specification that is executed by a a test execution system during test case execution.</p><p>Property classes:<br/><ul><li>dcterms:title [PC-Name 1.1]</li><li>dcterms:description [PC-Description 1.1]</li><li>ISTQB:TestData [PC-TestData 1.1]</li><li>ISTQB:ExpectedResult [PC-ExpectedResult 1.1]</li><li>U2TP:Verdict [PC-TestVerdict 1.1]</li><li>U2TP:ReasonMessage [PC-TestResultReason 1.1]</li></ul></p>|
|U2TP:TestModel|RC-TestModel|1.1|<p>A set of test case definitions. Used as SpecIF hierarchy-root element.</p><p>Property classes:<br/><ul><li>dcterms:title [PC-Name 1.1]</li><li>dcterms:description [PC-Description 1.1]</li></ul></p>|
|ISTQB:TestSuite|RC-TestSuite|1.1|<p>A set of test scripts or test procedures to be executed in a specific test run.</p><p>Property classes:<br/><ul><li>dcterms:title [PC-Name 1.1]</li><li>dcterms:description [PC-Description 1.1]</li><li>ISTQB:TestObject [PC-TestObject 1.1]</li><li>U2TP:Verdict [PC-TestVerdict 1.1]</li><li>U2TP:ReasonMessage [PC-TestResultReason 1.1]</li></ul></p>|
|SpecIF:specifEvent|RC-SpecIfEvent|1.1|<p>A SpecIF change event.</p><p>Property classes:<br/><ul><li>SpecIF:Origin [PC-Origin 1.1]</li><li>SpecIF:project [PC-SpecIfProject 1.1]</li><li>SpecIF:specifEventType [PC-SpecIfEventType 1.1]</li><li>SpecIF:id [PC-SpecIfId 1.1]</li><li>SpecIF:revision [PC-SpecIfRevision 1.1]</li><li>SpecIF:classId [PC-SpecIfClassId 1.1]</li><li>SpecIF:classRevision [PC-SpecIfClassRevision 1.1]</li></ul></p>|
|SpecIF:Heading|RC-Folder|1.1|<p>Folders with title and text for chapters or descriptive paragraphs.</p><p>Property classes:<br/><ul><li>dcterms:title [PC-Name 1.1]</li><li>dcterms:description [PC-Description 1.1]</li><li>dcterms:type [PC-Type 1.1]</li></ul></p>|
|SpecIF:Paragraph|RC-Paragraph|1.1|<p>Information with text for descriptive paragraphs.</p><p>Property classes:<br/><ul><li>dcterms:title [PC-Name 1.1]</li><li>dcterms:description [PC-Description 1.1]</li></ul></p>|
|SpecIF:Hierarchy|RC-Hierarchy|1.1|<p>Root node of a hierarchically organized specification (outline).</p><p>Property classes:<br/><ul><li>dcterms:title [PC-Name 1.1]</li><li>dcterms:description [PC-Description 1.1]</li></ul></p>|
|SpecIF:Comment|RC-Comment|1.1|<p>Comment referring to a model element ('resource' or 'statement' in general).</p><p>Property classes:<br/><ul><li>dcterms:title [PC-Name 1.1]</li><li>dcterms:description [PC-Description 1.1]</li></ul></p>|
|IREB:Requirement|RC-Requirement|1.1|<p>A 'Requirement' is a singular documented physical and functional need that a particular design, product or process must be able to perform.</p><p>Property classes:<br/><ul><li>dcterms:identifier [PC-VisibleId 1.1]</li><li>dcterms:title [PC-Name 1.1]</li><li>dcterms:description [PC-Description 1.1]</li><li>IREB:RequirementType [PC-RequirementType 1.1]</li><li>SpecIF:Priority [PC-Priority 1.1]</li><li>SpecIF:LifeCycleStatus [PC-LifeCycleStatus 1.1]</li><li>SpecIF:Perspective [PC-Perspective 1.1]</li><li>SpecIF:Discipline [PC-Discipline 1.1]</li></ul></p>|
|SpecIF:Feature|RC-Feature|1.1|<p>A 'Feature' is an intentional distinguishing characteristic of a system, often a unique selling proposition.</p><p>Property classes:<br/><ul><li>dcterms:identifier [PC-VisibleId 1.1]</li><li>dcterms:title [PC-Name 1.1]</li><li>dcterms:description [PC-Description 1.1]</li><li>SpecIF:Priority [PC-Priority 1.1]</li><li>SpecIF:LifeCycleStatus [PC-LifeCycleStatus 1.1]</li><li>SpecIF:Perspective [PC-Perspective 1.1]</li><li>SpecIF:Discipline [PC-Discipline 1.1]</li></ul></p>|
|SpecIF:Diagram|RC-Diagram|1.1|<p>A 'Diagram' is a graphical model view with a specific communication purpose, e.g. a business process or system composition.</p><p>Property classes:<br/><ul><li>dcterms:title [PC-Name 1.1]</li><li>dcterms:description [PC-Description 1.1]</li><li>SpecIF:Diagram [PC-Diagram 1.1]</li><li>dcterms:type [PC-Type 1.1]</li><li>SpecIF:Notation [PC-Notation 1.1]</li><li>SpecIF:LifeCycleStatus [PC-LifeCycleStatus 1.1]</li><li>UML:Stereotype [PC-Stereotype 1.1]</li></ul></p>|
|FMC:Actor|RC-Actor|1.1|<p>An 'Actor' is a fundamental model element type representing an active entity, be it an activity, a process step, a function, a system component or a role.</p><p>Property classes:<br/><ul><li>dcterms:title [PC-Name 1.1]</li><li>dcterms:description [PC-Description 1.1]</li><li>SpecIF:LifeCycleStatus [PC-LifeCycleStatus 1.1]</li><li>SpecIF:Visibility [PC-Visibility 1.1]</li><li>dcterms:type [PC-Type 1.1]</li><li>UML:Stereotype [PC-Stereotype 1.1]</li><li>rdf:value [PC-Value 1.1]</li><li>SpecIF:Alias [PC-Alias 1.1]</li></ul></p>|
|FMC:State|RC-State|1.1|<p>A 'State' is a fundamental model element type representing a passive entity, be it a value, a condition, an information storage or even a physical shape.</p><p>Property classes:<br/><ul><li>dcterms:title [PC-Name 1.1]</li><li>dcterms:description [PC-Description 1.1]</li><li>SpecIF:LifeCycleStatus [PC-LifeCycleStatus 1.1]</li><li>SpecIF:Visibility [PC-Visibility 1.1]</li><li>dcterms:type [PC-Type 1.1]</li><li>UML:Stereotype [PC-Stereotype 1.1]</li><li>rdf:value [PC-Value 1.1]</li><li>SpecIF:Alias [PC-Alias 1.1]</li></ul></p>|
|FMC:Event|RC-Event|1.1|<p>An 'Event' is a fundamental model element type representing a time reference, a change in condition/value or more generally a synchronisation primitive.</p><p>Property classes:<br/><ul><li>dcterms:title [PC-Name 1.1]</li><li>dcterms:description [PC-Description 1.1]</li><li>SpecIF:LifeCycleStatus [PC-LifeCycleStatus 1.1]</li><li>SpecIF:Visibility [PC-Visibility 1.1]</li><li>dcterms:type [PC-Type 1.1]</li><li>UML:Stereotype [PC-Stereotype 1.1]</li><li>rdf:value [PC-Value 1.1]</li><li>SpecIF:Alias [PC-Alias 1.1]</li></ul></p>|
|SpecIF:Collection|RC-Collection|1.1|<p>A 'Collection' is a logic (often conceptual) group of resources linked with a SpecIF:contains statement. It corresponds to a 'Group' in BPMN Diagrams.</p><p>Property classes:<br/><ul><li>dcterms:title [PC-Name 1.1]</li><li>dcterms:description [PC-Description 1.1]</li><li>SpecIF:LifeCycleStatus [PC-LifeCycleStatus 1.1]</li><li>SpecIF:Visibility [PC-Visibility 1.1]</li><li>dcterms:type [PC-Type 1.1]</li><li>UML:Stereotype [PC-Stereotype 1.1]</li><li>rdf:value [PC-Value 1.1]</li><li>SpecIF:Alias [PC-Alias 1.1]</li></ul></p>|
|SpecIF:SourceCode|RC-SourceCode|1.1|<p>Source code assigned to a model element (e.g. an activity or operation). Typically used for model-based code generation to provide some code snippets inside the model.</p><p>Property classes:<br/><ul><li>dcterms:title [PC-Name 1.1]</li><li>SpecIF:ImplementationLanguage [PC-ImplementationLanguage 1.1]</li><li>rdf:value [PC-Value 1.1]</li></ul></p>|
### Statement classes of domain : Packages

|title|id|revision|description|
|-|-|-|-|
|rdf:type|SC-Classifier|1.1|<p>States that the relation subject is an instance of the relation object.</p>|
|SpecIF:refersTo|SC-refersTo|1.1|<p>A resource 'refers to' any other resource.</p><p>Property classes:<br/><ul><li>dcterms:type [PC-Type 1.1]</li></ul></p>|
|SpecIF:dependsOn|SC-dependsOn|1.1|<p>Statement: Requirement/Feature depends on Requirement/Feature</p>|
|SpecIF:duplicates|SC-duplicates|1.1|<p>The subject requirement duplicates the object requirement.</p>|
|SpecIF:contradicts|SC-contradicts|1.1|<p>The subject requirement contradicts the object requirement.</p>|
|IREB:refines|SC-refines|1.1|<p>The subject requirement refines the object requirement.</p>|
|rdf:type|SC-Classifier|1.1|<p>States that the relation subject is an instance of the relation object.</p>|
|SpecIF:refersTo|SC-refersTo|1.1|<p>A resource 'refers to' any other resource.</p><p>Property classes:<br/><ul><li>dcterms:type [PC-Type 1.1]</li></ul></p>|
|SpecIF:dependsOn|SC-dependsOn|1.1|<p>Statement: Requirement/Feature depends on Requirement/Feature</p>|
|SpecIF:duplicates|SC-duplicates|1.1|<p>The subject requirement duplicates the object requirement.</p>|
|SpecIF:contradicts|SC-contradicts|1.1|<p>The subject requirement contradicts the object requirement.</p>|
|IREB:refines|SC-refines|1.1|<p>The subject requirement refines the object requirement.</p>|
|SpecIF:shows|SC-shows|1.1|<p>Statement: Plan resp. diagram shows Model-Element</p>|
|SpecIF:contains|SC-contains|1.1|<p>Statement: Model-Element contains Model-Element</p>|
|SpecIF:stores|SC-stores|1.1|<p>Statement: Actor (Role, Function) writes and reads State (Information)</p>|
|SpecIF:writes|SC-writes|1.1|<p>Statement: Actor (Role, Function) writes State (Information)</p>|
|SpecIF:reads|SC-reads|1.1|<p>Statement: Actor (Role, Function) reads State (Information)</p>|
|SpecIF:signals|SC-signals|1.1|<p>A FMC:Actor 'signals' a FMC:Event.</p>|
|SpecIF:triggers|SC-triggers|1.1|<p>A FMC:Event 'triggers' an FMC:Actor.</p>|
|SpecIF:precedes|SC-precedes|1.1|<p>An FMC:Actor 'precedes' an FMC:Actor.</p>|
|oslc_rm:satisfies|SC-satisfies|1.1|<p>Statement: Model-Element satisfies Requirement</p>|
|SpecIF:allocates|SC-allocates|1.1|<p>Statement: Model-Element is allocated to Model-Element. The semantics is equal to the Allocation in SysML or the deployment relation in UML.</p>|
|rdf:type|SC-Classifier|1.1|<p>States that the relation subject is an instance of the relation object.</p>|
|SpecIF:refersTo|SC-refersTo|1.1|<p>A resource 'refers to' any other resource.</p><p>Property classes:<br/><ul><li>dcterms:type [PC-Type 1.1]</li></ul></p>|
|SpecIF:dependsOn|SC-dependsOn|1.1|<p>Statement: Requirement/Feature depends on Requirement/Feature</p>|
|SpecIF:duplicates|SC-duplicates|1.1|<p>The subject requirement duplicates the object requirement.</p>|
|SpecIF:contradicts|SC-contradicts|1.1|<p>The subject requirement contradicts the object requirement.</p>|
|IREB:refines|SC-refines|1.1|<p>The subject requirement refines the object requirement.</p>|
|SpecIF:shows|SC-shows|1.1|<p>Statement: Plan resp. diagram shows Model-Element</p>|
|SpecIF:contains|SC-contains|1.1|<p>Statement: Model-Element contains Model-Element</p>|
|SpecIF:stores|SC-stores|1.1|<p>Statement: Actor (Role, Function) writes and reads State (Information)</p>|
|SpecIF:writes|SC-writes|1.1|<p>Statement: Actor (Role, Function) writes State (Information)</p>|
|SpecIF:reads|SC-reads|1.1|<p>Statement: Actor (Role, Function) reads State (Information)</p>|
|SpecIF:signals|SC-signals|1.1|<p>A FMC:Actor 'signals' a FMC:Event.</p>|
|SpecIF:triggers|SC-triggers|1.1|<p>A FMC:Event 'triggers' an FMC:Actor.</p>|
|SpecIF:precedes|SC-precedes|1.1|<p>An FMC:Actor 'precedes' an FMC:Actor.</p>|
|oslc_rm:satisfies|SC-satisfies|1.1|<p>Statement: Model-Element satisfies Requirement</p>|
|SpecIF:allocates|SC-allocates|1.1|<p>Statement: Model-Element is allocated to Model-Element. The semantics is equal to the Allocation in SysML or the deployment relation in UML.</p>|
|SpecIF:isAssociatedWith|SC-isAssociatedWith|e699bbc5-e3e5-4506-aafa-2e5d45be22e9|<p>The subject is associated with the object.</p><p>Property classes:<br/><ul><li>dcterms:type [PC-Type 1.1]</li></ul></p>|
|SpecIF:isSynonymOf|SC-isSynonymousResource|1.0|<p>Synonymous resource-term</p>|
|SpecIF:isSynonymOf|SC-isSynonymousPredicate|1.0|<p>Synonymous predicate-term</p>|
|SpecIF:isSynonymOf|SC-isSynonymousProperty|1.0|<p>Synonymous property-term</p>|
|SpecIF:isSynonymOf|SC-isSynonymousValue|1.0|<p>Synonymous value-term</p>|
|SpecIF:isInverseOf|SC-isInverseOf|1.0|<p>Two terms are the inverse of each other, such as 'contains' and 'isContainedBy'.</p>|
|SpecIF:isSpecialisationOf|SC-isSpecialisationOf|1.0|<p>A term is a specialization of another, such as 'Passenger Car' and 'Vehicle'.</p>|
|ISTBQ:Verifies|SC-verifies|1.1|<p>Statement: The test case (subject) verifies the requirement (object).</p>|
|rdf:type|SC-Classifier|1.1|<p>States that the relation subject is an instance of the relation object.</p>|
|SpecIF:refersTo|SC-refersTo|1.1|<p>A resource 'refers to' any other resource.</p><p>Property classes:<br/><ul><li>dcterms:type [PC-Type 1.1]</li></ul></p>|
|SpecIF:dependsOn|SC-dependsOn|1.1|<p>Statement: Requirement/Feature depends on Requirement/Feature</p>|
|SpecIF:duplicates|SC-duplicates|1.1|<p>The subject requirement duplicates the object requirement.</p>|
|SpecIF:contradicts|SC-contradicts|1.1|<p>The subject requirement contradicts the object requirement.</p>|
|IREB:refines|SC-refines|1.1|<p>The subject requirement refines the object requirement.</p>|
|SpecIF:shows|SC-shows|1.1|<p>Statement: Plan resp. diagram shows Model-Element</p>|
|SpecIF:contains|SC-contains|1.1|<p>Statement: Model-Element contains Model-Element</p>|
|SpecIF:stores|SC-stores|1.1|<p>Statement: Actor (Role, Function) writes and reads State (Information)</p>|
|SpecIF:writes|SC-writes|1.1|<p>Statement: Actor (Role, Function) writes State (Information)</p>|
|SpecIF:reads|SC-reads|1.1|<p>Statement: Actor (Role, Function) reads State (Information)</p>|
|SpecIF:signals|SC-signals|1.1|<p>A FMC:Actor 'signals' a FMC:Event.</p>|
|SpecIF:triggers|SC-triggers|1.1|<p>A FMC:Event 'triggers' an FMC:Actor.</p>|
|SpecIF:precedes|SC-precedes|1.1|<p>An FMC:Actor 'precedes' an FMC:Actor.</p>|
|oslc_rm:satisfies|SC-satisfies|1.1|<p>Statement: Model-Element satisfies Requirement</p>|
|SpecIF:allocates|SC-allocates|1.1|<p>Statement: Model-Element is allocated to Model-Element. The semantics is equal to the Allocation in SysML or the deployment relation in UML.</p>|
|SpecIF:isAssociatedWith|SC-isAssociatedWith|57a2a510-dfc8-40e4-9d90-59b086398ed4|<p>The subject is associated with the object.</p><p>Property classes:<br/><ul><li>dcterms:type [PC-Type 1.1]</li></ul></p>|
