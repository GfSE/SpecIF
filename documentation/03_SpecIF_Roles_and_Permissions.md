# SpecIF Roles and Permissions

.. to be completed

![SpecIF Project Metamodel](./images/StatementPermissions-M1.png)

![SpecIF Project Metamodel](./images/ResourcePermissions-M1.png)


## Introduction

Very basically, SpecIF defines two types of permissions:
- By *Class*: An instance of resource or statement can be accessed, if the most specialized class has a corresponding permission.
If no permission by class is granted at all, access is *prohibited*.
- By *Hierarchy*: An instance of resource can be accessed, if the closest node in the hierarchy has a corresponding permission.
If no permission by hierarchy is defined at all, access is *allowed* (in fact it is rather a prohibition in this case).  

The permissions of an individual resource are derived from both the class tree and the hierarchy tree with its nodes.
- In this context an *Item* is a project, class or node, but never a dataType or an instance. 
- A *PermissionVector* defines the permissions per Item in terms of create, read, update and delete (CRUD). The permissions apply to all instances of the class resp. the resource referenced by the node.
- An *ItemPermission* is a *PermissionVector* per *Item*. Due to inheritance it is not necessary to systematically assign an *ItemPermission* to every *Item*.
- One or more *Role*s are defined per project and have a collection of *ItemPermissions* each
- A *ProjectRole* is the assignment of a user to a role
- A *User* may have one *Role* per Project

The permissions of an individual statement are just derived from the class tree.

Permissions are inherited:
- By Class: project → resourceClass → propertyClass or project → statementClass → propertyClass. 
A permission granted at project level is inherited by all instances; where permissions at a lower level override a permission at a higher level.
- By Hierarchy: A node inherits all permissions of the parent node, unless permissions of its own are defined.
A permission granted at project level is inherited by all instances; where permissions at a lower level override a permission at a higher level.

A permission set per item consists of the following dimensions:
- C: Create
- R: Read
- U: Update
- D: Delete

Explanations:
- Permissions per instance are defined both by class and by hierarchy: Access is allowed, if it is explicitly granted by class *and* not explicitly prohibited by hierarchy.
- Example: If a  a permission is granted to a resourceClass, it is extended to all of its properties, unless overridden.

## Data Types

example: TypeScript

```typescript
/**
 * Some interface definitions for user roles and permissions.
 * New with SpecIF v1.2
 */

interface Person {
    familyName?: string;
    givenName?: string;
    org?: SpecifOrg;
    email: string;
}

/**
 * A user is a person with a collection of role assignments.
 */
interface SpecifUser extends Person {
    roleAssignments: Array<SpecifRoleAssignment>
}

/**
 * A role is assigned to a user based on group membership or other role information 
 * provided by an identity and access management (IAM) system. 
 */
interface SpecifRoleAssignment {
    project: SpecifId;  // the project reference, use 'any' as default value to cover all remaining projects
    role: SpecifText;  // the title of the role, ideally an ontology term
}

/**
 * A role defined for a project has a collection of item permissions.
 */
interface SpecifProjectRole {
    id: SpecifId;
    title: SpecifText;
    description?: SpecifMultiLanguageText;
    permissions: Array<SpecifPermissions>;
}

/**
 * A permission defines a permission vector for an item, being either a project, a class or a node.
 */
interface SpecifPermissions {
    item: SpecifId;  // a reference to any project, propertyClass, resourceClass, statementClass or node
    permissionVector: SpecifPermissionVector;
}

/**
 * A permission vector defines the basic create, read, update and delete permissions for an item.
 * The authority to change a *PermissionVector* or a *Permission* is reserved to an administrator role
 * in the context of the application code.
 */
interface SpecifPermissionVector {
    C: boolean; // create item
    R: boolean; // read item
    U: boolean; // update item
    D: boolean; // delete item
}
```


## Reference Implementation

example: TypeScript

```typescript
class CItemPermissions implements SpecifItemPermissions {
    item: SpecifId;  // the item reference
    permissionVector: SpecifPermissionVector;
    constructor(iId: SpecifId, prmS: string) {
        this.item = iId;
        this.permissionVector = {
            C: prmS.includes('C'),
            R: prmS.includes('R'),
            U: prmS.includes('U'),
            D: prmS.includes('D')
        }
    }
}
class CRole implements SpecifRole {
    id: SpecifId;
    title: string;
    description?: SpecifMultiLanguageText;
    itemPermissions: SpecifItemPermissions[] = [];
    constructor(roleName: string) {
        this.id = roleName.toSpecifId();
        this.title = roleName;
    }
    setItemPermissions(iId: SpecifId, prm: string) {
        let idx = LIB.indexBy(this.itemPermissions, 'item', iId);
        if (idx > -1)
            this.itemPermissions[idx] = new CItemPermissions(iId, prm)
        else
            this.itemPermissions.push(new CItemPermissions(iId, prm));
        return this  // make it chainable
    }
    removeItemPermissions(iId: SpecifId) {
        let idx = LIB.indexBy(this.itemPermissions, 'item', iId);
        if (idx > -1)
            this.itemPermissions.splice(idx, 1)
        return this  // make it chainable
    }
}
```
