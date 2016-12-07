'use strict';
const Provider = require('../provider');


module.exports = class CustomProvider extends Provider {

  constructor(permissions, roles) {
    super();
    this.perm = permissions || {};
    this.roles = roles || {guest: null};
  }

  /**
   Return all the roles available for the given user. The return value
   must be an object, recursively defining the associated roles for the
   specified user. Return an empty object if user has no roles.

   Ex: {
          'role1': {
            'role1.1': null,
            'role1.2': { ... },
            ...
          },
          'secondary': ...,
          ...
        }

   The method mey return a promise resolving with the
   expected return value.

   @param use {mixed}
   @return {Object<string,number>}
   */
  getRoles(user) {
    console.log('getRoles for user: '+ user + ', roles='+ JSON.stringify(this.roles));
    return this.roles;
  }


  /**
   Return all permissions for the specified role. The return value
   must be an array. Return an empty array if role is missing or
   no permission for the specified role.

   Ex: ['permission1', 'permission2', ... ]

   The method mey return a promise resolving with the
   expected return value.

   @param role {mixed}
   @return {Array<string>}
   */
  getPermissions(role) {
    console.log('getPermissions for role: ', role);
    let permissions = this.perm && this.perm['roles'] && this.perm['roles'][role] && this.perm['roles'][role]['permissions'] || [];
    console.log('permissions: ', permissions);
    return permissions;
  }

  /**
   Return all attributes for the specified role. The return value must
   be an array. Return an empty array if role is missing or if no
   attributes for the specified role.

   Ex: ['attribute1', 'attribute2', ... ]

   The method mey return a promise resolving with the
   expected return value.

   @param role {mixed}
   @return {Array<string>}
   */
  getAttributes(role) {
    return []; // TODO : implement stub
  }
}

