# SpecIF Web API

The SpecIF Web API defines a set of REST endpoints for standardized access to SpecIF data available via web-services. 
It is possible to use such a web-service as part of a microservice software architecture.

This specification describes version 1.1 of the SpecIF Web API, which is the first official released version.

Swagger resp. OpenAPI is used to define the REST endpoints for SpecIF data access. 
You can find the formal API definition on GitHub under https://github.com/GfSE/SpecIF-OpenAPI.

## Structure of the SpecIF Web API

### CRUD operations

The SpecIF-WebAPI is designed to provide a set of create, read, update and delete (CRUD) operations for all endpoints.
This makes it easy for the API users to understand the structure of the API. 

### API versioning

The SpecIF Web API uses API versioning to allow parallel run of different API versions. 
This allows access to different version endpoints at the same time. 
The API version is included in the URL of the SpecIF Web API:

`/specif/v1.1/<endpointName>` 

The API version number defines a release version for the API itself. 
It does not mean that a SpecIF Web API version `1.1` is strictly assigned to a SpecIF schema 1.1.
You can find a table listing the version dependencies for the different parts of SpecIF in the concepts chapter of this specification. 

### Authentication and Authorization

The SpecIF Web API should implement authorization and authentication technology to restrict the access for some endpoints 
to realize know-how protection or restrict the access for changing common used data like data type definition endpoints.

### API Key Authentication

A SpecIF Web API shall provide an [API Key-based authentication](https://swagger.io/docs/specification/authentication/api-keys/) for API users. 
It is not part of the standard to define how these API keys are managed or generated. 
This is a task for the API developer.

The API key shall be sent inside the HTTP request header, for example:

`X-API-KEY abcdef12345`

API key-based authentication is only considered secure if used together with other security mechanisms such as HTTPS/SSL.
It is required for all SpecIF Web APIs to use the secure HTTPS/SSL protocol.
Using a non-secure HTTP protocol will lead to an error response.

### Role-based authorization

To restrict access to some endpoints of a SpecIF Web API, role-based authorization should be implemented, using the following roles. 
The roles are assigned to a registered user per project, except for 'Anybody', which is only assigned to projects.
Without role assignment, a user cannot see a project.

|Role name|Role description|
|-|-|
|Anybody|Grants permission to read all instances (i.e. resources, statements, files and hierarchies) to anybody without authentication. Makes projects publicly available. The data type definition endpoints are readable to anybody if no know-how protection is necessary.|
|Reader|A user is granted read privilege for the project's instances. This is the standard role with the lowest access rights. The user role is automatically applied when a user is successfully authenticated as a SpecIF Web API user.|
|Editor|An Editor is granted create, read, update and delete privilege for the project's instances.|
|Manager|A Manager is granted create, read, update as well as delete privilege for the project's classes and instances. In addition, projects can be created and deleted.|
|Administrator|An Administrator has unrestricted access to all endpoints of a SpecIF Web API.|

The endpoint specification below describes if an endpoint requires further rights above the User role.

If a SpecIF Web API provides just data- and class-type definitions with public character, these endpoints are open for Anybody. 
If some of the data type and class type definitions have restricted usage (e.g. internal know-how protection) 
at least the reader role should be applied.   

### Error handling

The SpecIF Web API uses HTTP status codes for error handling. 
The following tables define the standard error handling behavior of the API for application endpoints.
In addition, a server may send some further error messages (e.g. code 500 - Internal Server Error etc.) in exceptional situations.

#### Success return codes

|Code|Message|Description|
|-|-|-|
|200|OK|The request was successful and a result was provided if necessary.|
|201|Created|Used for POST requests: The item was successfully created.| 

#### Error return codes

|Code|Message|Description|
|-|-|-|
|400|Bad Request|The data given as parameter is not sufficient to handle the request.|
|401|Unauthorized|The given API key is not valid.|
|403|Forbidden|The role of the user authenticated by the API key is not permitted to access the requested endpoint.|
|404|Not Found|The requested data was not found in the data repository.|
|601|Invalid ID|Specified item identifier within a POST request is not unique. Depending on the implementation, this can be avoided if the API corrects the ID on demand and returns the data with the correct ID.|

### Data model and data format

The data used in the SpecIF Web API complies with the SpecIF JSON-schema described above.
Currently only JSON is defined as SpecIF data set.
SpecIF Web API requests shall accept all data as `application/json` and respond with `application/json` data only.

### Parameters

Parameter data in SpecIF Web API requests may be transmitted in three different ways:

* As part of the endpoint URL, defined in curly brackets (e.g. `/specif/v1.1/resources/{id}`), called path-parameters.
* As query parameter appended to the URL such as `?parameterA=1234;parameterB=foe`. Query parameters are optional!
* As body content in JSON format.

The endpoint parameters are defined below, and it is described for each endpoint which parameters are available and how they shall be provided.

## Handling of revisions

Some endpoints have a path parameter `id` to query for data. 
The `revision` parameter is defined as an optional query parameter to specify a specific revision.
If the revision parameter is missing, the element with the newest change date (changedAt) is used.

### Revisioning for data elements

A `POST` request shall always create a new element. 
If an element with a specified ID already exists, 
the API has to change the ID and return it in the result body data as first revision (no `replaces` entries).

To create a new revision of an existing element a `PUT` request shall be used. 
The data sent as body parameter in a PUT request shall have the same `id` as the current element.

We have to differentiate the following cases:
* If the `id`, `revision` and `replaces` value is identical to an existing element, the API has to create a new revision identifier and add the data as new revision to the existing element.
* If the `id` and `replaces` values are set to valid values, the API shall check if the `revision` value is unique and if not, create a new revision and add the data as new revision to the elements that are referenced by the `replaces` values.

### Revisioning for meta elements

The versioning of the dataType- and class- elements (metatypes) should be handled a little bit differently to the handling of data elements.
Such meta elements are typically defined by an administrator in a process of term and vocabulary definitions using SpecIF. 
It is not required to track each single change on these elements. 
So the behavior for revisioning is a little bit differently to the element representing concrete PLM-data:

* When a POST request is used, a new element should be created with an initial revision.
* When a PUT request is used with `id` and `revision` set to an existing element and the `replaces` submitted is equal to the existing element, the element data should be updated WITHOUT creating a new revision.
* When a PUT request is used and the `id` and `replaces` is pointing to an existing element, a new revision shall be created. The API has to enforce the consistency and correctness of the `revision` property.

## Data definition endpoints

The following sections describe the SpecIF Web API endpoints for data definition (metadata) endpoints.

### Data types

Endpoints for CRUD operations on SpecIF *DataType* elements.

|Endpoint|Parameters|Response data|Minimum access role|Description|
|-|-|-|-|-|
|`GET /specif/v1.1/dataTypes`|-|DataType[]|Anybody or Reader|Returns all data types with all available revisions.|
|`POST /specif/v1.1/dataTypes`|DataType (body)|DataType|Administrator|Create a new DataType and returns the created DataType as response body.|
|`PUT /specif/v1.1/dataTypes`|DataType (body)|DataType|Administrator|Update the data type; the supplied ID must exist. The updated data is returned as response body.|
|`GET /specif/v1.1/dataTypes/{id}`|*id:string* (path): The id of the element to get.<br>*revision:string* (query): The revision of the element to get.|DataType|Anybody or Reader|Returns the data type with the given ID.|
|`DELETE /specif/v1.1/dataTypes/{id}`|*id:string* (path): The id of the element to delete.<br>*revision:string* (query): The revision of the element to delete.|-|Administrator|Delete the data type; the supplied ID must exist. Return an error if there are dependant model elements.|
|`GET /specif/v1.1/dataTypes/{id}/revisions`|*id:string* (path): The id of the element to get.|DataType[]|Anybody or Reader|Returns all element revisions for the given id. These elements have the same id value, but different revisions.|

### Property classes

Endpoints for CRUD operations on SpecIF *PropertyClass* elements.

|Endpoint|Parameters|Response data|Minimum access role|Description|
|-|-|-|-|-|
|`GET /specif/v1.1/propertyClasses`|-|PropertyClass[]|Anybody or Reader|Returns all property classes with all available revisions.|
|`POST /specif/v1.1/propertyClasses`|PropertyClass (body)|PropertyClass|Administrator|Creates a new DataType and returns the created PropertyClass as response body.|
|`PUT /specif/v1.1/propertyClasses`|PropertyClass (body)|PropertyClass|Administrator|Updates the data type; the supplied ID must exist. The updated data is returned as response body.|
|`GET /specif/v1.1/propertyClasses/{id}`|*id:string* (path): The ID of the element to get.<br>*revision:string* (query): The revision of the element to get.|PropertyClass|Anybody or Reader|Returns the property class with the given ID.|
|`DELETE /specif/v1.1/propertyClasses/{id}`|*id:string* (path): The ID of the element to delete.<br>*revision:string* (query): The revision of the element to delete.|-|Administrator|Delete the property class; the supplied ID must exist. Return an error if there are dependant model elements.|
|`GET /specif/v1.1/propertyClasses/{id}/revisions`|*id:string* (path): The ID of the element to get.|PropertyClass[]|Anybody or Reader|Returns all element revisions for the given ID. These elements have the same ID value, but different revisions.|

### Resource classes

Endpoints for CRUD operations on SpecIF *ResourceClass* elements.

|Endpoint|Parameters|Response data|Minimum access role|Description|
|-|-|-|-|-|
|`GET /specif/v1.1/resourceClasses`|-|ResourceClass[]|Anybody or Reader|Returns all resource classes with all available revisions.|
|`POST /specif/v1.1/resourceClasses`|ResourceClass (body)|ResourceClass|Administrator|Creates a new DataType and returns the created ResourceClass as response body.|
|`PUT /specif/v1.1/resourceClasses`|ResourceClass (body)|ResourceClass|Administrator|Updates the data type; the supplied ID must exist. The updated data is returned as response body.|
|`GET /specif/v1.1/resourceClasses/{id}`|*id:string* (path): The ID of the element to get.<br>*revision:string* (query): The revision of the element to get.|ResourceClass|Anybody or Reader|Returns the resource class with the given ID.|
|`DELETE /specif/v1.1/resourceClasses/{id}`|*id:string* (path): The ID of the element to delete.<br>*revision:string* (query): The revision of the element to delete.|-|Administrator|Deletes the resource class; the supplied ID must exist. Return an error if there are dependant model elements.|
|`GET /specif/v1.1/resourceClasses/{id}/revisions`|*id:string* (path): The ID of the element to get.|ResourceClass[]|Anybody or Reader|Returns all element revisions for the given ID. These elements have the same ID value, but different revisions.|

### Statement classes

Endpoints for CRUD operations on SpecIF *StatementClass* elements.

|Endpoint|Parameters|Response data|Minimum access role|Description|
|-|-|-|-|-|
|`GET /specif/v1.1/statementClasses`|-|StatemenetClass[]|Anybody or Reader|Returns all statement classes with all available revisions.|
|`POST /specif/v1.1/statementClasses`|StatemenetClass (body)|StatemenetClass|Administrator|Creates a new StatementClass and returns the created StatementClass as response body.|
|`PUT /specif/v1.1/statementClasses`|StatemenetClass (body)|StatemenetClass|Administrator|Updates the data type; the supplied ID must exist. The updated data is returned as response body.|
|`GET /specif/v1.1/statementClasses/{id}`|*id:string* (path): The ID of the element to get.<br>*revision:string* (query): The revision of the element to get.|StatemenetClass|Anybody or Reader|Returns the resource class with the given ID.|
|`DELETE /specif/v1.1/statementClasses/{id}`|*id:string* (path): The ID of the element to delete.<br>*revision:string* (query): The revision of the element to delete.|-|Administrator|Deletes the statement class; the supplied ID must exist. Return an error if there are dependant model elements.|
|`GET /specif/v1.1/statementClasses/{id}/revisions`|*id:string* (path): The ID of the element to get.|StatemenetClass[]|Anybody or Reader|Returns all element revisions for the given ID. These elements have the same ID value, but different revisions.|

## Data endpoints

The following sections describe the SpecIF Web API endpoints for data endpoints.

### Resources 

Endpoints for CRUD operations on SpecIF *Resource* elements.

|Endpoint|Parameters|Response data|Minimum access role|Description|
|-|-|-|-|-|
|`GET /specif/v1.1/resources`|*projectID:string* (query): An optional project ID. The endpoint then returns only resources for the given project.|Resource[]|Reader|Returns all resource elements with all available revisions.|
|`POST /specif/v1.1/resources`|*Resource* (body): The resource data to add.<br>*projectID:string* (query): The optional project ID. If a project ID is not given, the data is added to a default project.|Resource|Editor|Creates a new resource and returns the created resource as response body.|
|`PUT /specif/v1.1/resources`|*Resource* (body): The resource to update.|Resource|Editor|Updates the data type; the supplied ID must exist. The updated data with a new revision is returned as response body.|
|`GET /specif/v1.1/resources/{id}`|*id:string* (path): The ID of the element to get.<br>*revision:string* (query): The revision of the element to get.|Resource|Reader|Returns the resource with the given ID.|
|`DELETE /specif/v1.1/resources/{id}`|*id:string* (path): The ID of the element to delete.<br>*revision:string* (query): The revision of the element to delete.|-|Manager|Deletes the resource; the supplied ID must exist.|
|`GET /specif/v1.1/resources/{id}/revisions`|*id:string* (path): The ID of the element to get.|Resource[]|Reader|Returns all element revisions for the given ID. These elements have the same ID value, but different revisions.|

### Statements 

Endpoints for CRUD operations on SpecIF *Statement* elements.

|Endpoint|Parameters|Response data|Minimum access role|Description|
|-|-|-|-|-|
|`GET /specif/v1.1/statements`|*projectID:string* (query): The optional project ID to filter statements by project.<br>*subjectID:string* (query): The optional subject ID to filter statements only sourcing the element with the given ID.<br>*subjectRevision:string* (query): An optional subject revision. Only useful together with subject ID.<br>*objectID:string* (query): The optional object ID to filter statements only targeting the element with the given ID.<br>*objectRevision:string* (query): An optional object revision. Only useful together with object ID.|Statement[]|Reader|Returns all resource elements with all available revisions.|
|`POST /specif/v1.1/statements`|*Statement* (body): The statement to add.|Statement|Editor|Creates a new statement and returns the created statement as response body.|
|`PUT /specif/v1.1/statements`|*Statement* (body): The statement to update.|Statement|Editor|Updates the data type; the supplied ID must exist. The updated data with a new revision is returned as response body.|
|`GET /specif/v1.1/statements/{id}`|*id:string* (path): The ID of the element to get.<br>*revision:string* (query): The revision of the element to get.|Statement|Reader|Returns the resource with the given ID.|
|`DELETE /specif/v1.1/statements/{id}`|*id:string* (path): The ID of the element to delete.<br>*revision:string* (query): The revision of the element to delete.|-|Manager|Delete the statement; the supplied ID must exist.|
|`GET /specif/v1.1/statements/{id}/revisions`|*id:string* (path): The ID of the element to get.|Statement[]|Reader|Returns all element revisions for the given ID. These elements have the same ID value, but different revisions.|


### Hierarchies 

Endpoints for CRUD operations on SpecIF *Hierarchy/Node* elements.

|Endpoint|Parameters|Response data|Minimum access role|Description|
|-|-|-|-|-|
|`GET /specif/v1.1/hierarchies`|*projectID:string* (query): An optional project ID. The endpoint then returns only hierarchies for the given project.<br>*rootNodesOnly:bool=true* (query): If set to true only the hierarchy root nodes are returned and not the complete tree structure.|Node[]|Reader|Returns all hierarchies.|
|`POST /specif/v1.1/hierarchies`|*Node* (body): The node data to add.<br>*parent:string* (query): An optional parent node ID. The sub-tree will be inserted as first child.<br>*predecessor:string* (query): An optional predecessor node ID. The sub-tree will be inserted after the specified node.<br>*projectId:string* (query): The project ID. If the ID is given, the new hierarchy will be added to the specific project. Only useful for new hierarchies - no parent or predecessor given.|Node|Editor|Creates a hierarchy (sub-tree) with supplied nodes; the supplied ID must be unique. If no ID is supplied, it is generated before insertion. Query ?parent=nodeId - the sub-tree will be inserted as first child; query ?predecessor=nodeId - the sub-tree will be inserted after the specified node; no query - the sub-tree will be inserted as first element at root level. Without query string, the node (sub-tree) is inserted as first element at root level.|
|`PUT /specif/v1.1/hierarchies`|*Node* (body): The node to update.<br>*parent:string* (query): An optional parent node ID. The sub-tree will be inserted as first child.<br>*predecessor:string* (query): An optional predecessor node ID. The sub-tree will be inserted after the specified node.|Node|Editor|Updates the hierarchy; the supplied ID must exist. The updated data is returned as response body.|
|`GET /specif/v1.1/hierarchies/{id}`|*id:string* (path): The ID of the element to get.<br>*depth:integer* (query): The maximum depth of child nodes to return. If not set the complete hierarchy depth is returned.|Node|-|Returns the node with the given ID.|
|`DELETE /specif/v1.1/hierarchies/{id}`|*id:string* (path): The ID of the element to delete.|-|Editor|Deletes the node with the given ID; the supplied ID must exist. All sub-nodes are deleted as well.|

### Projects

Endpoints for CRUD operations on SpecIF *Project* elements.
Projects in SpecIF are equal to a SpecIF file as defined by the SpecIF-JSON-schema.
The SpecIF Web API endpoints for project operations can be used to import or export SpecIF data from and to JSON-files.

|Endpoint|Parameters|Response data|Minimum access role|Description|
|-|-|-|-|-|  
|`GET /specif/v1.1/projects`|-|SpecIF without data and data type arrays.|Reader|Returns all projects; to limit the size only root properties are delivered.|
|`POST /specif/v1.1/projects`|*SpecIF* (body): The SpecIF data to add.<br>*integrationID:string* (query): If this value is set and a project with such an ID exists, the data is not added to a new project, but added as new data to the existing project.|SpecIF|Manager|Creates a new SpecIF project and returns the result as response body.|
|`PUT /specif/v1.1/projects`|*SpecIF* (body): The SpecIF data to update.|Manager|SpecIF|Updates a project with the given ID by including the data into an existing project. The project with the supplied ID must exist.|
|`GET /specif/v1.1/projects/{id}`|*id:string* (path): The project ID.<br>*hierarchyFilter:list of string* (query): An optional comma separated list of hierarchy root node IDs to limit the output of selected hierarchies.<br>*includeMetadata:bool=true* (query): Set to true if the metadata should be included (e.g. resource classes etc.)|SpecIF|Reader|Gets the project data with the given ID.|
|`DELETE specif/v1.1/projects/{id}`|*id:string* (path): The ID of the element to delete.|-|Administrator|Deletes a project with the given ID.|

### Files

Endpoints for CRUD operations on SpecIF *File* elements.
File elements have a file and an additional description JSON-part.
The JSON file description contains a URL where the described file can be accessed using a ``GET <fileURL>`` request. 
If the URL is a relative URL, the file can be accessed adding the relative URL to the prefix ``GET /specif/v1.1/``
The SpecIF Web API is responsible for file management and file storage.

|Endpoint|Parameters|Response data|Minimum access role|Description|
|-|-|-|-|-| 
|`GET /specif/v1.1/files`|*projectID:string* (query): An optional project ID. The endpoint then returns only file-data for the given project.|JSON File object|Reader|Returns all file descriptions for all available files in all revisions.|
|`POST /specif/v1.1/files`|*file:binary* (body): The file to include to the SpecIF repository.<br>*projectID:string* (query): An optional project ID.|JSON-File description.|Editor|Creates a new file element.|
|`PUT /specif/v1.1/files/{id}`|*id:string* (path): The file ID as given by the JSON-File object.<br>*file:binary* (body): The file data.|JSON-File description.|Editor|Updates an existing file.|
|`GET /specif/v1.1/files/{id}`|*id:string* (path): The file ID as given by the JSON-File object.<br>*revision:string* (query): Optional file revision.|The file content.|Reader|Gets the file content by identifier.|
|`DELETE /specif/v1.1/files/{id}`|*id:string* (path): The file ID to be delete.|-|Administrator|Deletes the file with the given ID.|
|`GET /specif/v1.1/files/{id}/revisions`|*id:string* (path): The file ID to get.|File[]|Reader|Returns all File description revisions for the given ID. These elements have the same ID value, but different revisions.|
