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
|VDA:Feature|RC-VDA_Feature|1.1|<p>A 'VDA:Feature' is a Feature with automotive specific properties.</p><p>Property classes:<br/><ul><li>VDA:SupplierStatus [PC-SupplierStatus 1.1]</li><li>VDA:SupplierComment [PC-SupplierComment 1.1]</li><li>VDA:OemStatus [PC-OemStatus 1.1]</li><li>VDA:OemComment [PC-OemComment 1.1]</li></ul></p>|
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
|SpecIF:TermResourceClass|RC-ResourceTerm|1.1|<p>A term for resources (objects, entities) belonging to the SpecIF vocabulary</p><p>Property classes:<br/><ul><li>dcterms:title [PC-Name 1.1]</li><li>dcterms:description [PC-Description 1.1]</li><li>SpecIF:Origin [PC-Origin 1.1]</li><li>SpecIF:LifeCycleStatus [PC-LifeCycleStatus 1.1]</li></ul></p>|
|SpecIF:TermStatementClass|RC-PredicateTerm|1.1|<p>A term for statements (relations) belonging to the SpecIF vocabulary</p><p>Property classes:<br/><ul><li>dcterms:title [PC-Name 1.1]</li><li>dcterms:description [PC-Description 1.1]</li><li>SpecIF:Origin [PC-Origin 1.1]</li><li>SpecIF:LifeCycleStatus [PC-LifeCycleStatus 1.1]</li></ul></p>|
|SpecIF:PropertyTerm|RC-TermProperty|1.1|<p>A term for user-defined properties (attributes) belonging to the SpecIF vocabulary</p><p>Property classes:<br/><ul><li>dcterms:title [PC-Name 1.1]</li><li>dcterms:description [PC-Description 1.1]</li><li>SpecIF:Origin [PC-Origin 1.1]</li><li>SpecIF:LifeCycleStatus [PC-LifeCycleStatus 1.1]</li></ul></p>|
|SpecIF:TermPropertyValue|RC-ValueTerm|1.1|<p>A term for property values belonging to the SpecIF vocabulary</p><p>Property classes:<br/><ul><li>dcterms:title [PC-Name 1.1]</li><li>dcterms:description [PC-Description 1.1]</li><li>SpecIF:Origin [PC-Origin 1.1]</li><li>SpecIF:LifeCycleStatus [PC-LifeCycleStatus 1.1]</li></ul></p>|
### Statement classes of domain 10: Vocabulary Definition

|title|id|revision|description|
|-|-|-|-|
|SpecIF:isSynonymOf|SC-isSynonymousResource|1.0|<p>Synonymous resource-term</p>|
|SpecIF:isSynonymOf|SC-isSynonymousPredicate|1.0|<p>Synonymous predicate-term</p>|
|SpecIF:isSynonymOf|SC-isSynonymousProperty|1.0|<p>Synonymous property-term</p>|
|SpecIF:isSynonymOf|SC-isSynonymousValue|1.0|<p>Synonymous value-term</p>|
|SpecIF:isInverseOf|SC-isInverseOf|1.0|<p>Two terms are the inverse of each other, such as 'contains' and 'isContainedBy'.</p>|
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
