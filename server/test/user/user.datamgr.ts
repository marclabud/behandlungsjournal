import {Db} from 'mongodb';
import {UserData} from './user.data';
import {DataManager} from '../shared/datamgr';

export class UserDataMgr extends DataManager {

  constructor(db: Db, data: UserData) {
    super(db, data);
  }

  getCollectionName() {
    return 'User';
  }
  
  // some specific loader
  // ...

}
