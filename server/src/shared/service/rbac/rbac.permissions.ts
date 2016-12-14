import {IData} from '../../interface/data';

export class RbacPermissions implements IData {

  private permissions = {
    roles: {
      'Gast': {},
      'Reader': {
        permissions: ['read'],
        inherited: ['Gast']
      },
      'Writer': {
        permissions: ['create'],
        inherited: ['Reader']
      },
      'Editor': {
        permissions: ['update'],
        inherited: ['Reader']
      },
      'Director': {
        permissions: ['delete'],
        inherited: ['Writer', 'Editor'],
        attributes: ['test']
      },
      'Tierpfleger': {
        inherited: ['Writer', 'Editor'],
      },
      'Administrator': {
        permissions: ['administrate'],
        inherited: ['Director']
      },
      'Arzt': {
        permissions: ['manage'],
        inherited: ['Director']
      }
    }
  };

  getData() {
    return this.permissions;
  }
}
