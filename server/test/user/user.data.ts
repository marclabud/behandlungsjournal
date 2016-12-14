import {IData} from '../../src/shared/interface/data';

export class UserData implements IData {

  private users = [
    {
      'name': 'Tim',
      'email': 'tim@gmail.com',
      'password': 'tim',
      'role': 'Gast'
    },
    {
      'name': 'Peter',
      'email': 'peter@gmail.com',
      'password': 'peter',
      'role': 'Tierpfleger'
    },
    {
      'name': 'Paul',
      'email': 'paul@gmail.com',
      'password': 'paul',
      'role': 'Arzt'
    },
    {
      'name': 'Michael',
      'email': 'michael.gfeller@hsr.ch',
      'password': 'michael',
      'role': 'Administrator'
    },
    {
      'name': 'Silvan',
      'email': 'silvan.gehrig@hsr.ch',
      'password': 'silvan',
      'role': 'Administrator'
    }
  ];

  getData() {
    return this.users;
  }

}
