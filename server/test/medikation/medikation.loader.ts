import {Db} from 'mongodb';
import {DataLoader} from '../shared/data.loader';
import {MedikationData} from './medikation.data';

export class MedikationLoader extends DataLoader {

  constructor(db: Db, data: MedikationData) {
    super(db, data);
  }

  // some specific loader
  // ...

  getCollectionName() {
    return 'Medikation';
  }
}
