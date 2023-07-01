## Domain 04: Automotive Requirements Engineering

### Data types of domain 04: Automotive Requirements Engineering
+--------------------+-------------------+----------+-----------+-----------------------------------------------+
| title              | id                | revision | type      | description                                   |
+====================+===================+==========+===========+===============================================+
| VDA:SupplierStatus | DT-SupplierStatus | 1.1      | xs:string | Enumerated values for VDA supplier-status     |
|                    |                   |          |           | <p>VDA:notApplicable [V-SupplierStatus-0]</p> |
|                    |                   |          |           | <p>VDA:toClarify [V-SupplierStatus-1]</p>     |
|                    |                   |          |           | <p>VDA:agreed [V-SupplierStatus-2]</p>        |
|                    |                   |          |           | <p>VDA:partlyAgreed [V-SupplierStatus-3]</p>  |
|                    |                   |          |           | <p>VDA:notAgreed [V-SupplierStatus-4]</p>     |
+--------------------+-------------------+----------+-----------+-----------------------------------------------+
| VDA:OemStatus      | DT-OemStatus      | 1.1      | xs:string | Enumerated values for VDA oem-status          |
|                    |                   |          |           | <p>VDA:notToEvaluate [V-OemStatus-0]</p>      |
|                    |                   |          |           | <p>VDA:toEvaluate [V-OemStatus-1]</p>         |
|                    |                   |          |           | <p>VDA:accepted [V-OemStatus-2]</p>           |
|                    |                   |          |           | <p>VDA:notAccepted [V-OemStatus-3]</p>        |
+--------------------+-------------------+----------+-----------+-----------------------------------------------+

### Property classes of domain 04: Automotive Requirements Engineering
+---------------------+--------------------+----------+-------------------------+-------------+
| title               | id                 | revision | dataType                | description |
+=====================+====================+==========+=========================+=============+
| VDA:SupplierStatus  | PC-SupplierStatus  | 1.1      | VDA:SupplierStatus      |             |
+---------------------+--------------------+----------+-------------------------+-------------+
| VDA:SupplierComment | PC-SupplierComment | 1.1      | Plain or formatted Text |             |
+---------------------+--------------------+----------+-------------------------+-------------+
| VDA:OemStatus       | PC-OemStatus       | 1.1      | VDA:OemStatus           |             |
+---------------------+--------------------+----------+-------------------------+-------------+
| VDA:OemComment      | PC-OemComment      | 1.1      | Plain or formatted Text |             |
+---------------------+--------------------+----------+-------------------------+-------------+

### Resource classes of domain 04: Automotive Requirements Engineering
+-----------------+--------------------+----------+--------------------------------------------------------------------------------------------+
| title           | id                 | revision | description                                                                                |
+=================+====================+==========+============================================================================================+
| VDA:Diagram     | RC-VDA_Diagram     | 1.1      | A 'VDA:Diagram' is a Diagram with automotive-process-specific properties.                  |
|                 |                    |          | <p>Property classes:</p>                                                                   |
|                 |                    |          | <p>VDA:SupplierStatus [PC-SupplierStatus 1.1]</p>                                          |
|                 |                    |          | <p>VDA:SupplierComment [PC-SupplierComment 1.1]</p>                                        |
|                 |                    |          | <p>VDA:OemStatus [PC-OemStatus 1.1]</p>                                                    |
|                 |                    |          | <p>VDA:OemComment [PC-OemComment 1.1]</p>                                                  |
+-----------------+--------------------+----------+--------------------------------------------------------------------------------------------+
| VDA:Requirement | RC-VDA_Requirement | 1.1      | A VDA:Requirement is a Requirement with additional automotive-process-specific properties. |
|                 |                    |          | <p>Property classes:</p>                                                                   |
|                 |                    |          | <p>VDA:SupplierStatus [PC-SupplierStatus 1.1]</p>                                          |
|                 |                    |          | <p>VDA:SupplierComment [PC-SupplierComment 1.1]</p>                                        |
|                 |                    |          | <p>VDA:OemStatus [PC-OemStatus 1.1]</p>                                                    |
|                 |                    |          | <p>VDA:OemComment [PC-OemComment 1.1]</p>                                                  |
+-----------------+--------------------+----------+--------------------------------------------------------------------------------------------+
| VDA:Feature     | RC-VDA_Feature     | 1.1      | A 'VDA:Feature' is a Feature with automotive specific properties.                          |
|                 |                    |          | <p>Property classes:</p>                                                                   |
|                 |                    |          | <p>VDA:SupplierStatus [PC-SupplierStatus 1.1]</p>                                          |
|                 |                    |          | <p>VDA:SupplierComment [PC-SupplierComment 1.1]</p>                                        |
|                 |                    |          | <p>VDA:OemStatus [PC-OemStatus 1.1]</p>                                                    |
|                 |                    |          | <p>VDA:OemComment [PC-OemComment 1.1]</p>                                                  |
+-----------------+--------------------+----------+--------------------------------------------------------------------------------------------+

## Domain 05: Agile Requirements Engineering

### Resource classes of domain 05: Agile Requirements Engineering
+------------+---------+----------+---------------------------------------------------------------------------------+
| title      | id      | revision | description                                                                     |
+============+=========+==========+=================================================================================+
| SCRUM:Epic | RC-Epic | 1.1      | An 'Epic' is a big user story and will be refined by user stories/requirements. |
+------------+---------+----------+---------------------------------------------------------------------------------+

## Domain 06: UML-SpecIF mapping

## Domain 07: Issue Management

### Data types of domain 07: Issue Management
+--------------------+--------------+----------+-----------+------------------------------------+
| title              | id           | revision | type      | description                        |
+====================+==============+==========+===========+====================================+
| SpecIF:IssueStatus | DT-IssStatus | 1.1      | xs:string | Enumerated values for issue status |
|                    |              |          |           | <p>open [V-IssStatus-0]</p>        |
|                    |              |          |           | <p>assigned [V-IssStatus-1]</p>    |
|                    |              |          |           | <p>in progress [V-IssStatus-2]</p> |
|                    |              |          |           | <p>closed [V-IssStatus-3]</p>      |
|                    |              |          |           | <p>reopened [V-IssStatus-4]</p>    |
|                    |              |          |           | <p>rejected [V-IssStatus-5]</p>    |
+--------------------+--------------+----------+-----------+------------------------------------+

### Property classes of domain 07: Issue Management
+--------------------+--------------+----------+--------------------+-------------+
| title              | id           | revision | dataType           | description |
+====================+==============+==========+====================+=============+
| SpecIF:IssueStatus | PC-IssStatus | 1.1      | SpecIF:IssueStatus |             |
+--------------------+--------------+----------+--------------------+-------------+

### Resource classes of domain 07: Issue Management
+--------------+----------+----------+---------------------------------------------------------------------------------+
| title        | id       | revision | description                                                                     |
+==============+==========+==========+=================================================================================+
| SpecIF:Issue | RC-Issue | 1.1      | An 'Issue' is a question to answer or decision to take which is worth tracking. |
|              |          |          | <p>Property classes:</p>                                                        |
|              |          |          | <p>dcterms:identifier [PC-VisibleId 1.1]</p>                                    |
|              |          |          | <p>dcterms:title [PC-Name 1.1]</p>                                              |
|              |          |          | <p>dcterms:description [PC-Description 1.1]</p>                                 |
|              |          |          | <p>SpecIF:IssueStatus [PC-IssStatus 1.1]</p>                                    |
|              |          |          | <p>SpecIF:Priority [PC-Priority 1.1]</p>                                        |
|              |          |          | <p>SpecIF:Responsible [PC-Responsible 1.1]</p>                                  |
|              |          |          | <p>SpecIF:DueDate [PC-DueDate 1.1]</p>                                          |
+--------------+----------+----------+---------------------------------------------------------------------------------+

## Domain 08: BOM

### Resource classes of domain 08: BOM
+------------------------+--------------------+----------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| title                  | id                 | revision | description                                                                                                                                                                                                                                                                                                                                                                                 |
+========================+====================+==========+=============================================================================================================================================================================================================================================================================================================================================================================================+
| SpecIF:BillOfMaterials | RC-BillOfMaterials | 1.1      | Root node of a bill of materials or product structure (sometimes bill of material, BOM or associated list) is a list of the raw materials, sub-assemblies, intermediate assemblies, sub-components, parts and the quantities of each needed to manufacture an end product. A BOM may be used for communication between manufacturing partners, or confined to a single manufacturing plant. |
|                        |                    |          | <p>Property classes:</p>                                                                                                                                                                                                                                                                                                                                                                    |
|                        |                    |          | <p>dcterms:title [PC-Name 1.1]</p>                                                                                                                                                                                                                                                                                                                                                          |
|                        |                    |          | <p>dcterms:description [PC-Description 1.1]</p>                                                                                                                                                                                                                                                                                                                                             |
+------------------------+--------------------+----------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+

## Domain 09: Variant Management

### Data types of domain 09: Variant Management
+------------------------------+--------------------------+----------+-----------+----------------------------------------------------------+
| title                        | id                       | revision | type      | description                                              |
+==============================+==========================+==========+===========+==========================================================+
| SpecIF:FeatureKind           | DT-FeatureKind           | 1.1      | xs:string | Enumerated values for feature kind                       |
|                              |                          |          |           | <p>Mandatory [V-FeatureKind-Mandatory]</p>               |
|                              |                          |          |           | <p>Alternative [V-FeatureKind-Alternative]</p>           |
|                              |                          |          |           | <p>Optional [V-FeatureKind-Optional]</p>                 |
|                              |                          |          |           | <p>Or [V-FeatureKind-Or]</p>                             |
+------------------------------+--------------------------+----------+-----------+----------------------------------------------------------+
| SpecIF:FeatureSelectionState | DT-FeatureSelectionState | 1.1      | xs:string | Enumerated values for feature selection state            |
|                              |                          |          |           | <p>Unchecked [V-FeatureSelectionState-Unchecked]</p>     |
|                              |                          |          |           | <p>Checked [V-FeatureSelectionState-Checked]</p>         |
|                              |                          |          |           | <p>Forbidden [V-FeatureSelectionState-Forbidden]</p>     |
|                              |                          |          |           | <p>Recommended [V-FeatureSelectionState-Recommended]</p> |
+------------------------------+--------------------------+----------+-----------+----------------------------------------------------------+

### Property classes of domain 09: Variant Management
+------------------------------+--------------------------+----------+------------------------------+---------------------------------------------------------------------------------------------+
| title                        | id                       | revision | dataType                     | description                                                                                 |
+==============================+==========================+==========+==============================+=============================================================================================+
| SpecIF:FeatureKind           | PC-FeatureKind           | 1.1      | SpecIF:FeatureKind           | <p>The kind of a feature used in a feature tree (mandatory, optional, alternative, or).</p> |
+------------------------------+--------------------------+----------+------------------------------+---------------------------------------------------------------------------------------------+
| SpecIF:FeatureSelectionState | PC-FeatureSelectionState | 1.1      | SpecIF:FeatureSelectionState | <p>The selection state for a feature used in a variant model.</p>                           |
+------------------------------+--------------------------+----------+------------------------------+---------------------------------------------------------------------------------------------+

### Resource classes of domain 09: Variant Management
+----------------------------+------------------------+----------+-----------------------------------------------------------------------------------------------------------------------------------------+
| title                      | id                     | revision | description                                                                                                                             |
+============================+========================+==========+=========================================================================================================================================+
| SpecIF:FeatureModel        | RC-FeatureModel        | 1.1      | A 'Feature Model' is the root resource of a feature tree to structure the set of features for a system as a tree structure (hierarchy). |
|                            |                        |          | <p>Property classes:</p>                                                                                                                |
|                            |                        |          | <p>dcterms:identifier [PC-VisibleId 1.1]</p>                                                                                            |
|                            |                        |          | <p>dcterms:title [PC-Name 1.1]</p>                                                                                                      |
|                            |                        |          | <p>dcterms:description [PC-Description 1.1]</p>                                                                                         |
|                            |                        |          | <p>SpecIF:LifeCycleStatus [PC-LifeCycleStatus 1.1]</p>                                                                                  |
+----------------------------+------------------------+----------+-----------------------------------------------------------------------------------------------------------------------------------------+
| SpecIF:VariantModel        | RC-VariantModel        | 1.1      | A 'Variant Model' is an instance of a feature model, where  a subset of features is selected to define a concrete system variant.       |
|                            |                        |          | <p>Property classes:</p>                                                                                                                |
|                            |                        |          | <p>dcterms:identifier [PC-VisibleId 1.1]</p>                                                                                            |
|                            |                        |          | <p>dcterms:title [PC-Name 1.1]</p>                                                                                                      |
|                            |                        |          | <p>dcterms:description [PC-Description 1.1]</p>                                                                                         |
|                            |                        |          | <p>SpecIF:LifeCycleStatus [PC-LifeCycleStatus 1.1]</p>                                                                                  |
+----------------------------+------------------------+----------+-----------------------------------------------------------------------------------------------------------------------------------------+
| SpecIF:FeatureModelFeature | RC-FeatureModelFeature | 1.1      | A 'Feture Model Feature' is a feature used in a feature tree resp. feature model structure.                                             |
|                            |                        |          | <p>Property classes:</p>                                                                                                                |
|                            |                        |          | <p>SpecIF:FeatureKind [PC-FeatureKind 1.1]</p>                                                                                          |
|                            |                        |          | <p>SpecIF:FeatureSelectionState [PC-FeatureSelectionState 1.1]</p>                                                                      |
|                            |                        |          | <p>SpecIF:Abbreviation [PC-Abbreviation 1.1]</p>                                                                                        |
+----------------------------+------------------------+----------+-----------------------------------------------------------------------------------------------------------------------------------------+

## Domain 10: Vocabulary Definition

### Resource classes of domain 10: Vocabulary Definition
+---------------------------+------------------+----------+------------------------------------------------------------------------------------+
| title                     | id               | revision | description                                                                        |
+===========================+==================+==========+====================================================================================+
| SpecIF:TermResourceClass  | RC-ResourceTerm  | 1.1      | A term for resources (objects, entities) belonging to the SpecIF vocabulary        |
|                           |                  |          | <p>Property classes:</p>                                                           |
|                           |                  |          | <p>dcterms:title [PC-Name 1.1]</p>                                                 |
|                           |                  |          | <p>dcterms:description [PC-Description 1.1]</p>                                    |
|                           |                  |          | <p>SpecIF:Origin [PC-Origin 1.1]</p>                                               |
|                           |                  |          | <p>SpecIF:LifeCycleStatus [PC-LifeCycleStatus 1.1]</p>                             |
+---------------------------+------------------+----------+------------------------------------------------------------------------------------+
| SpecIF:TermStatementClass | RC-PredicateTerm | 1.1      | A term for statements (relations) belonging to the SpecIF vocabulary               |
|                           |                  |          | <p>Property classes:</p>                                                           |
|                           |                  |          | <p>dcterms:title [PC-Name 1.1]</p>                                                 |
|                           |                  |          | <p>dcterms:description [PC-Description 1.1]</p>                                    |
|                           |                  |          | <p>SpecIF:Origin [PC-Origin 1.1]</p>                                               |
|                           |                  |          | <p>SpecIF:LifeCycleStatus [PC-LifeCycleStatus 1.1]</p>                             |
+---------------------------+------------------+----------+------------------------------------------------------------------------------------+
| SpecIF:PropertyTerm       | RC-TermProperty  | 1.1      | A term for user-defined properties (attributes) belonging to the SpecIF vocabulary |
|                           |                  |          | <p>Property classes:</p>                                                           |
|                           |                  |          | <p>dcterms:title [PC-Name 1.1]</p>                                                 |
|                           |                  |          | <p>dcterms:description [PC-Description 1.1]</p>                                    |
|                           |                  |          | <p>SpecIF:Origin [PC-Origin 1.1]</p>                                               |
|                           |                  |          | <p>SpecIF:LifeCycleStatus [PC-LifeCycleStatus 1.1]</p>                             |
+---------------------------+------------------+----------+------------------------------------------------------------------------------------+
| SpecIF:TermPropertyValue  | RC-ValueTerm     | 1.1      | A term for property values belonging to the SpecIF vocabulary                      |
|                           |                  |          | <p>Property classes:</p>                                                           |
|                           |                  |          | <p>dcterms:title [PC-Name 1.1]</p>                                                 |
|                           |                  |          | <p>dcterms:description [PC-Description 1.1]</p>                                    |
|                           |                  |          | <p>SpecIF:Origin [PC-Origin 1.1]</p>                                               |
|                           |                  |          | <p>SpecIF:LifeCycleStatus [PC-LifeCycleStatus 1.1]</p>                             |
+---------------------------+------------------+----------+------------------------------------------------------------------------------------+

### Statement classes of domain 10: Vocabulary Definition
+--------------------+--------------------------+----------+----------------------------------------------------------------------------------+
| title              | id                       | revision | description                                                                      |
+====================+==========================+==========+==================================================================================+
| SpecIF:isSynonymOf | SC-isSynonymousResource  | 1.0      | Synonymous resource-term                                                         |
+--------------------+--------------------------+----------+----------------------------------------------------------------------------------+
| SpecIF:isSynonymOf | SC-isSynonymousPredicate | 1.0      | Synonymous predicate-term                                                        |
+--------------------+--------------------------+----------+----------------------------------------------------------------------------------+
| SpecIF:isSynonymOf | SC-isSynonymousProperty  | 1.0      | Synonymous property-term                                                         |
+--------------------+--------------------------+----------+----------------------------------------------------------------------------------+
| SpecIF:isSynonymOf | SC-isSynonymousValue     | 1.0      | Synonymous value-term                                                            |
+--------------------+--------------------------+----------+----------------------------------------------------------------------------------+
| SpecIF:isInverseOf | SC-isInverseOf           | 1.0      | Two terms are the inverse of each other, such as 'contains' and 'isContainedBy'. |
+--------------------+--------------------------+----------+----------------------------------------------------------------------------------+

## Domain 11: Testing

### Data types of domain 11: Testing
+--------------+----------------+----------+-----------+--------------------------------------------------------------------------------------------------+
| title        | id             | revision | type      | description                                                                                      |
+==============+================+==========+===========+==================================================================================================+
| U2TP:Verdict | DT-TestVerdict | 1.1      | xs:string | A verdict is a predefined enumeration specifying the set of possible evaluations of a test case. |
|              |                |          |           | <p>None [V-Verdict-0]</p>                                                                        |
|              |                |          |           | <p>Pass [V-Verdict-1]</p>                                                                        |
|              |                |          |           | <p>Inconclusive [V-Verdict-2]</p>                                                                |
|              |                |          |           | <p>Fail [V-Verdict-3]</p>                                                                        |
|              |                |          |           | <p>Error [V-Verdict-4]</p>                                                                       |
+--------------+----------------+----------+-----------+--------------------------------------------------------------------------------------------------+

### Property classes of domain 11: Testing
+----------------------+---------------------+----------+-------------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| title                | id                  | revision | dataType                | description                                                                                                                                                      |
+======================+=====================+==========+=========================+==================================================================================================================================================================+
| U2TP:Verdict         | PC-TestVerdict      | 1.1      | U2TP:Verdict            | A verdict is a predefined enumeration specifying the set of possible evaluations of a test case.                                                                 |
+----------------------+---------------------+----------+-------------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| ISTQB:ExpectedResult | PC-ExpectedResult   | 1.1      |                         | The predicted observable behavior of a component or system executing under specified conditions, based on its specification or another source. [After ISO 29119] |
+----------------------+---------------------+----------+-------------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| ISTQB:TestData       | PC-TestData         | 1.1      | Plain or formatted Text | Data created or selected to satisfy the execution preconditions and inputs to execute one or more test cases. [After ISO 29119]                                  |
+----------------------+---------------------+----------+-------------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| U2TP:ReasonMessage   | PC-TestResultReason | 1.1      |                         | A textual note, describing a reason for a test result.                                                                                                           |
+----------------------+---------------------+----------+-------------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| ISTQB:Precondition   | PC-TestPrecondition | 1.1      | Plain or formatted Text | The required state of a test item and its environment prior to test case execution.                                                                              |
+----------------------+---------------------+----------+-------------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| ISTQB:TestObject     | PC-TestObject       | 1.1      |                         | The work product to be tested.                                                                                                                                   |
+----------------------+---------------------+----------+-------------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------+

### Resource classes of domain 11: Testing
+-----------------+--------------+----------+-----------------------------------------------------------------------------------------------------------------------------------------------------+
| title           | id           | revision | description                                                                                                                                         |
+=================+==============+==========+=====================================================================================================================================================+
| ISTQB:TestCase  | RC-TestCase  | 1.1      | A Test Case.                                                                                                                                        |
|                 |              |          | <p>Property classes:</p>                                                                                                                            |
|                 |              |          | <p>dcterms:identifier [PC-VisibleId 1.1]</p>                                                                                                        |
|                 |              |          | <p>dcterms:title [PC-Name 1.1]</p>                                                                                                                  |
|                 |              |          | <p>dcterms:description [PC-Description 1.1]</p>                                                                                                     |
|                 |              |          | <p>ISTQB:Precondition [PC-TestPrecondition 1.1]</p>                                                                                                 |
|                 |              |          | <p>U2TP:Verdict [PC-TestVerdict 1.1]</p>                                                                                                            |
|                 |              |          | <p>SpecIF:LifeCycleStatus [PC-LifeCycleStatus 1.1]</p>                                                                                              |
|                 |              |          | <p>SpecIF:Priority [PC-Priority 1.1]</p>                                                                                                            |
+-----------------+--------------+----------+-----------------------------------------------------------------------------------------------------------------------------------------------------+
| U2TP:TestStep   | RC-TestStep  | 1.1      | The smallest atomic (i.e., indivisible) part of a test case specification that is executed by a a test execution system during test case execution. |
|                 |              |          | <p>Property classes:</p>                                                                                                                            |
|                 |              |          | <p>dcterms:title [PC-Name 1.1]</p>                                                                                                                  |
|                 |              |          | <p>dcterms:description [PC-Description 1.1]</p>                                                                                                     |
|                 |              |          | <p>ISTQB:TestData [PC-TestData 1.1]</p>                                                                                                             |
|                 |              |          | <p>ISTQB:ExpectedResult [PC-ExpectedResult 1.1]</p>                                                                                                 |
|                 |              |          | <p>U2TP:Verdict [PC-TestVerdict 1.1]</p>                                                                                                            |
|                 |              |          | <p>U2TP:ReasonMessage [PC-TestResultReason 1.1]</p>                                                                                                 |
+-----------------+--------------+----------+-----------------------------------------------------------------------------------------------------------------------------------------------------+
| U2TP:TestModel  | RC-TestModel | 1.1      | A set of test case definitions. Used as SpecIF hierarchy-root element.                                                                              |
|                 |              |          | <p>Property classes:</p>                                                                                                                            |
|                 |              |          | <p>dcterms:title [PC-Name 1.1]</p>                                                                                                                  |
|                 |              |          | <p>dcterms:description [PC-Description 1.1]</p>                                                                                                     |
+-----------------+--------------+----------+-----------------------------------------------------------------------------------------------------------------------------------------------------+
| ISTQB:TestSuite | RC-TestSuite | 1.1      | A set of test scripts or test procedures to be executed in a specific test run.                                                                     |
|                 |              |          | <p>Property classes:</p>                                                                                                                            |
|                 |              |          | <p>dcterms:title [PC-Name 1.1]</p>                                                                                                                  |
|                 |              |          | <p>dcterms:description [PC-Description 1.1]</p>                                                                                                     |
|                 |              |          | <p>ISTQB:TestObject [PC-TestObject 1.1]</p>                                                                                                         |
|                 |              |          | <p>U2TP:Verdict [PC-TestVerdict 1.1]</p>                                                                                                            |
|                 |              |          | <p>U2TP:ReasonMessage [PC-TestResultReason 1.1]</p>                                                                                                 |
+-----------------+--------------+----------+-----------------------------------------------------------------------------------------------------------------------------------------------------+

### Statement classes of domain 11: Testing
+----------------+-------------+----------+-----------------------------------------------------------------------+
| title          | id          | revision | description                                                           |
+================+=============+==========+=======================================================================+
| ISTBQ:Verifies | SC-verifies | 1.1      | Statement: The test case (subject) verifies the requirement (object). |
+----------------+-------------+----------+-----------------------------------------------------------------------+

## Domain 12: SpecIF Events

### Data types of domain 12: SpecIF Events
+------------------------+--------------------+----------+-----------+---------------------------------------------------+
| title                  | id                 | revision | type      | description                                       |
+========================+====================+==========+===========+===================================================+
| SpecIF:specifEventType | DT-SpecIfEventType | 1.1      | xs:string | The SpecIF Event Type.                            |
|                        |                    |          |           | <p>Resource created [V-SET-ResourceCreated]</p>   |
|                        |                    |          |           | <p>Resource updated [V-SET-ResourceUpdated]</p>   |
|                        |                    |          |           | <p>Resource deleted [V-SET-ResourceDeleted]</p>   |
|                        |                    |          |           | <p>Statement created [V-SET-StatementCreated]</p> |
|                        |                    |          |           | <p>Statement updated [V-SET-StatementUpdated]</p> |
|                        |                    |          |           | <p>Statement deleted [V-SET-StatementDeleted]</p> |
+------------------------+--------------------+----------+-----------+---------------------------------------------------+

### Property classes of domain 12: SpecIF Events
+------------------------+------------------------+----------+------------------------+------------------------------------+
| title                  | id                     | revision | dataType               | description                        |
+========================+========================+==========+========================+====================================+
| SpecIF:apiURL          | PC-ApiURL              | 1.1      | URL                    | The SpecIF API server URL.         |
+------------------------+------------------------+----------+------------------------+------------------------------------+
| SpecIF:project         | PC-SpecIfProject       | 1.1      | String[256]            | The SpecIF project ID.             |
+------------------------+------------------------+----------+------------------------+------------------------------------+
| SpecIF:specifEventType | PC-SpecIfEventType     | 1.1      | SpecIF:specifEventType | The SpecIF event type.             |
+------------------------+------------------------+----------+------------------------+------------------------------------+
| SpecIF:id              | PC-SpecIfId            | 1.1      | String[256]            | The SpecIF element id.             |
+------------------------+------------------------+----------+------------------------+------------------------------------+
| SpecIF:revision        | PC-SpecIfRevision      | 1.1      | String[256]            | The SpecIF element revision.       |
+------------------------+------------------------+----------+------------------------+------------------------------------+
| SpecIF:classId         | PC-SpecIfClassId       | 1.1      | String[256]            | The SpecIF element class id.       |
+------------------------+------------------------+----------+------------------------+------------------------------------+
| SpecIF:classRevision   | PC-SpecIfClassRevision | 1.1      | String[256]            | The SpecIF element class revision. |
+------------------------+------------------------+----------+------------------------+------------------------------------+

### Resource classes of domain 12: SpecIF Events
+--------------------+----------------+----------+----------------------------------------------------------+
| title              | id             | revision | description                                              |
+====================+================+==========+==========================================================+
| SpecIF:specifEvent | RC-SpecIfEvent | 1.1      | A SpecIF change event.                                   |
|                    |                |          | <p>Property classes:</p>                                 |
|                    |                |          | <p>SpecIF:Origin [PC-Origin 1.1]</p>                     |
|                    |                |          | <p>SpecIF:project [PC-SpecIfProject 1.1]</p>             |
|                    |                |          | <p>SpecIF:specifEventType [PC-SpecIfEventType 1.1]</p>   |
|                    |                |          | <p>SpecIF:id [PC-SpecIfId 1.1]</p>                       |
|                    |                |          | <p>SpecIF:revision [PC-SpecIfRevision 1.1]</p>           |
|                    |                |          | <p>SpecIF:classId [PC-SpecIfClassId 1.1]</p>             |
|                    |                |          | <p>SpecIF:classRevision [PC-SpecIfClassRevision 1.1]</p> |
+--------------------+----------------+----------+----------------------------------------------------------+

