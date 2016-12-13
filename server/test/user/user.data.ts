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
      'name': 'Paul',
      'email': 'paul@gmail.com',
      'password': 'paul',
      'role': 'Arzt'
    },
    {
      'name': 'Michael',
      'email': 'michael.gfeller@hsr.ch',
      'password': 'michael',
      'role': 'Arzt'
    },
    {
      'name': 'Silvan',
      'email': 'silvan.gehrig@hsr.ch',
      'password': 'silvan',
      'role': 'Arzt'
    },

    {
      'name': 'Peter',
      'email': 'peter@gmail.com',
      'password': 'peter',
      'role': 'Tierpleger'
    }
  ];

  getData() {
    return this.users;
  }

}
