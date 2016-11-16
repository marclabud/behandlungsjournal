import {IData} from '../shared/data';

export class UserData implements IData {

  private users = [
    {
      'name': 'Tim',
      'email': 'tim@gmail.com',
      'password': 'tim'
    },
    {
      'name': 'Peter',
      'email': 'peter@gmail.com',
      'password': 'peter'
    },
    {
      'name': 'Paul',
      'email': 'paul@gmail.com',
      'password': 'paul'
    }
  ];

  getData() {
    return this.users;
  }

}
