import {IData} from '../shared/data';
import * as mongoose from 'mongoose';
const ObjectId = mongoose.Types.ObjectId;

export class JournalData implements IData {

  private journale = [
    {
      name: 'Journal Strolch',
      patient_id: new ObjectId('5848025ccd971414b8e71f33'),
      diagnose: 'Bisswunde',
      dauer: {
        startDatum: new Date('2016-10-07T00:00:00.00Z'),
        endeDatum: new Date('2016-10-17T00:00:00.000Z')
      }
    },
    {
      name: 'Journal Minka',
      patient_id: new ObjectId('5848025ccd971414b8e71f34'),
      diagnose: 'Vergiftung',
      dauer: {
        startDatum: new Date('2016-11-08T00:00:00.00Z'),
        endeDatum: new Date('2016-11-17T00:00:00.000Z')
      }
    },
    {
      name: 'Journal Blacky',
      patient_id: new ObjectId('5848025ccd971414b8e71f35'),
      diagnose: 'Stauchung',
      dauer: {
        startDatum: new Date('2016-11-21T00:00:00.00Z'),
        endeDatum: new Date('2016-11-30T00:00:00.00Z')
      }
    }
  ];
  getData() {
    return this.journale;
  }

}
