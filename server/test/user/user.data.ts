import {IData} from '../../src/shared/interface/data';

export class UserData implements IData {

  private users = [
    {
      'name': 'Tim',
      'email': 'tim@gmail.com',
      'password': 'tim',
      'role': 'guest'
    },
    {
      'name': 'Paul',
      'email': 'paul@gmail.com',
      'password': 'paul',
      'role': 'arzt'
    },
    {
      'name': 'Peter',
      'email': 'peter@gmail.com',
      'password': 'peter',
      'role': 'tierpleger'
    }
  ];

  getData() {
    return this.users;
  }

}
