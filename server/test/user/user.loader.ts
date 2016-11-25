import {Db} from 'mongodb';
import {UserData} from './user.data';
import {DataLoader} from '../shared/data.loader';

export class UserLoader extends DataLoader {

  constructor(db: Db, data: UserData) {
    super(db, data);
  }

  getCollectionName() {
    return 'UserCollection';
  }

  // some specific loader
  // ...

}
