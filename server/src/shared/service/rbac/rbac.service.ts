'use strict';
import {RbacPermissions} from './rbac.permissions';
const RBAC = require('rbac-a');
const CustomProvider = RBAC.providers.CustomProvider;

// const CustomProvider = require('CustomProvider');
// const JsonProvider = RBAC.providers.JsonProvider;

export class RbacService {

  public rbac;
  public provider = new CustomProvider(this.permissions.getData());

  constructor(private permissions: RbacPermissions) {
    this.rbac = new RBAC({
      provider: this.provider
    });

    this.rbac.on('error',
      function (err) {
        console.error('Error while checking $s/%s', err.role, err.user);
        console.error(err.stack);
      }
    );
  }

  setRoles(roles: string) {
    this.provider.roles = JSON.parse('{"' + roles + '":null}');
    console.log('provider.roles: ', JSON.stringify(this.provider.roles));
  };

}
