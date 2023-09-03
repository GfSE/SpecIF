# SpecIF Roles and Permissions

.. to be completed

## Introduction

Very basically, SpecIF defines two types of permissions:
- By *Class*: An instance of resource or statement can be accessed, if the most specialized class has a corresponding permission.
If no permission by clasee is granted at all, access is *prohibited*.
- By *Hierarchy*: An instance of resource can be accessed, if the most specialized node in the hierarchy has a corresponding permission.
If no permission by hierarchy is defined at all, access is *allowed* (in fact it is rather a prohibition in this case).  

The permissions of an individual resource are derived from both the class tree and the hierarchy tree with its nodes.
- In this context an *Item* is a project, class or node, but never a dataType or an instance. 
- A *PermissionSet* defines the permissions per Item with respect to CRUD. The permissions apply to all instances of the class resp. the resource referenced by the node.
- An *ItemPermission* is a *PermissionSet* per *Item*. Due to inheritance it is not necessary to systematically assign an *ItemPermission* to every *Item*.
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
 * A user is a person with a collection of project roles.
 */
interface SpecifUser extends Person {
    projectRoles: Array<SpecifProjectRole>
}

/**
 * A project role is given to a user based on group membership or other role information provided by an identity and access management (IAM) system. 
 */
interface SpecifProjectRole {
    project: SpecifId;  // the project reference, use 'any' as default value to cover all remaining projects
    role: SpecifId;  // the id of the role
}

/**
 * A role defined for a project has a collection of item permissions.
 */
interface SpecifRole {
    id: SpecifId;
    title: SpecifText;
    description?: SpecifMultiLanguageText;
    itemPermissions: Array<SpecifItemPermissions>;
}

/**
 * An item permission defines a permission set for an item, being either a project, a class or a node.
 */
interface SpecifItemPermissions {
    item: SpecifId;  // the item reference, at this time any propertyClass, resourceClass or statementClass can be referenced
    permissionSet: SpecifPermissionSet;
}

/**
 * A permission set defines the basic create, read, update and delete permission for an item.
 * The permission to change a *PermissionSet* or an *ItemPermission* is reserved to an administrator role in the context of the application code.
 */
interface SpecifPermissionSet {
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
    permissionSet: SpecifPermissionSet;
    constructor(iId: SpecifId, prmS: string) {
        this.item = iId;
        this.permissionSet = {
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
