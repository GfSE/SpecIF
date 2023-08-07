# SpecIF Roles and Permissions

.. to be completed

## Introduction



## Interface Definitions

example: TypeScript

```typescript
/**
 * Some interface and type definitions for user roles and permissions.
 * New for SpecIF v1.2
 */
interface SpecifPermissions {
    C: boolean; // create item
    R: boolean; // read item
    U: boolean; // update item
    D: boolean; // delete item
//    A: boolean; // administer item's permissions, so modify the other attributes of this 
}
interface SpecifItemPermissions {
    item: SpecifId;  // the item reference, at this time any propertyClass, resourceClass or statementClass can be referenced
    permissions: SpecifPermissions;
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


## Reference Implementations

example: TypeScript

```typescript
class CItemPermissions implements SpecifItemPermissions {
	item: SpecifId;  // the item reference
	permissions: SpecifPermissions;
	constructor(iId: SpecifId, prm: string) {
		this.item = iId;
		this.permissions = {
        //  A: prm.includes('A'),
			C: prm.includes('C'),
			R: prm.includes('R'),
			U: prm.includes('U'),
			D: prm.includes('D')
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
