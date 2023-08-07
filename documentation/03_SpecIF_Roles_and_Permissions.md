# SpecIF Roles and Permissions

.. to be completed

## Introduction

Very basically, SpecIF defines two types of permissions:
- By Type: An instance of resource or statement can be accessed, if the most specialized type has a corresponding permission.
If no permission by type is granted, access is prohibited.
- By Hierarchy: An instance of resource can be accessed, if the most specialized node in the hierarchy has a corresponding permission.
If no permission by hierarchy is defined, access is allowed. 

Permissions are inherited:
- By Type: project → resourceClass → propertyClass or project → statementClass → propertyClass. 
A permission granted at project level is inherited by all instances; where permissions at a lower level override a permission at a higher level.
- By Hierarchy: A node inherits all permissions of the parent node, unless permissions of its own are defined.
A permission granted at project level is inherited by all instances; where permissions at a lower level override a permission at a higher level.

A permission set per item consists of the following dimensions:
- C: Create
- R: Read
- U: Update
- D: Delete

Explanations:
- Permissions per instance are defined both by type and by hierarchy: Access is allowed, if it is explicitly granted by type *and* not explicitly prohibited by hierarchy.
- Example: If a  a permission is granted to a resourceClass, it is extended to all of its properties, unless overridden.

## Data Types

example: TypeScript

```typescript
/**
 * Some interface and type definitions for user roles and permissions.
 * New for SpecIF v1.2
 */
interface SpecifPermissionSet {
    C: boolean; // create item
    R: boolean; // read item
    U: boolean; // update item
    D: boolean; // delete item
//  A: boolean; // administer item's permissions, so modify the other attributes of this 
}
interface SpecifItemPermissions {
    item: SpecifId;  // the item reference, at this time any propertyClass, resourceClass or statementClass can be referenced
    permissionSet: SpecifPermissionSet;
}
interface SpecifRole {
    id: SpecifId;
    title: string;
    description?: SpecifMultiLanguageText;
    itemPermissions: Array<SpecifItemPermissions>;
}
interface SpecifProjectRole {
    project: SpecifId;  // the project reference, use 'any' as default value to cover all remaining projects
    role: SpecifId;  // the id of the role
}
interface Person {
    /**
     * 
     * @type {string}
     * @memberof Person
     */
    familyName?: string;
    /**
     * 
     * @type {string}
     * @memberof Person
     */
    givenName?: string;
    /**
     * 
     * @type {SpecifOrg}
     * @memberof Person
     */
    org?: SpecifOrg;
    /**
     * 
     * @type {string}
     * @memberof Person
     */
    email: string;
}
interface SpecifUser extends Person {
    projectRoles: Array<SpecifProjectRole>
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
        //  A: prmS.includes('A'),
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
