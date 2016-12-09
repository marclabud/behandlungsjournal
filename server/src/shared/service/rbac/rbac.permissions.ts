import {IData} from '../../interface/data';

export class RbacPermissions implements IData {

  private permissions = {
    roles: {
      'guest': {},
      'reader': {
        permissions: ['read'],
        inherited: ['guest']
      },
      'writer': {
        permissions: ['create'],
        inherited: ['reader']
      },
      'editor': {
        permissions: ['update'],
        inherited: ['reader']
      },
      'director': {
        permissions: ['delete'],
        inherited: ['writer', 'editor'],
        attributes: ['test']
      },
      'tierpfleger': {
        inherited: ['writer', 'editor'],
      },
      'arzt': {
        permissions: ['manage'],
        inherited: ['director']
      }
    }
  };

  getData() {
    return this.permissions;
  }
}
