import {Db} from 'mongodb';
import {JournalData} from './journal.data';
import {DataLoader} from '../shared/data.loader';

export class JournalLoader extends DataLoader {

  constructor(db: Db, data: JournalData) {
    super(db, data);
  }

  // some specific loader
  // ...

  getCollectionName() {
    return 'Journal';
  }
}
