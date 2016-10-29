import {Db} from 'mongodb';
import {PatientData} from './patient.data';
import {DataLoader} from '../shared/data.loader';

export class PatientLoader extends DataLoader {

  constructor(db: Db, data: PatientData) {
    super(db, data);
  }

  // some specific loader
  // ...

  getCollectionName() {
    return 'Patient';
  }
}
