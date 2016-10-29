import {Db} from 'mongodb';
import {PatientData} from './patient.data';
import {DataManager} from '../shared/datamgr';

export class PatientDataMgr extends DataManager {

  constructor(db: Db, data: PatientData) {
    super(db, data);
  }

  // some specific loader
  // ...

  getCollectionName() {
    return 'Patient';
  }
}
