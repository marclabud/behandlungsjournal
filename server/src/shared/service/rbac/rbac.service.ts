import {RbacPermissions} from './rbac.permissions';
const RBAC = require('rbac-a');
const RbacProvider = require('./rbac.provider');

export class RbacService {

  public rbac;
  public rbacProvider = new RbacProvider(this.permissions.getData());

  constructor(private permissions: RbacPermissions) {
    this.rbac = new RBAC({
      provider: this.rbacProvider
    });

    this.rbac.on('error',
      function (err) {
        console.error('Error while checking $s/%s', err.role, err.user);
        console.error(err.stack);
      }
    );
  }

  setRoles(roles: string) {
    this.rbacProvider.roles = JSON.parse('{"' + roles + '":null}');
    console.log('provider.roles: ', JSON.stringify(this.rbacProvider.roles));
  };

}
