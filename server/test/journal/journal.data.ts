import {IData} from '../../src/shared/interface/data';
import * as mongoose from 'mongoose';
/* tslint:disable-next-line:no-unused-variable */
const ObjectId = mongoose.Types.ObjectId;

export class JournalData implements IData {

  private journale = [
    {
      _id: new ObjectId('584a5d7a22ba7e1540f5d965'),
      name: 'Journal Strolch',
      patient_id:  new ObjectId('584a56feacef2512182a99fc'),
      diagnose: 'Bisswunde',
      dauer: {
        startDatum: new Date('2016-12-07T00:00:00.00Z'),
        endeDatum: new Date('2016-12-21T00:00:00.000Z')
      }
    },
    {
      _id: ObjectId('584a5e6e22ba7e1540f5d966'),
      name: 'Journal Minka',
      patient_id: new ObjectId('584a584aacef2512182a99fd'),
      diagnose: 'Vergiftung',
      dauer: {
        startDatum: new Date('2016-12-01T00:00:00.00Z'),
        endeDatum: new Date('2016-12-18T00:00:00.000Z')
      }
    },
    {
      id: ObjectId('584ac9071d69030a74979cf9'),
      name: 'Journal Blacky',
      patient_id:  ObjectId('584a5986acef2512182a99fe'),
      diagnose: 'Stauchung',
      dauer: {
        startDatum: new Date('2016-12-02T00:00:00.00Z'),
        endeDatum: new Date('2016-12-21T00:00:00.00Z')
      }
    },
    {
      id: 'ObjectId("584a56feacef2512182a99fc")',
      name: 'Journal Toni',
      patient_id: ObjectId('584ada13b339191fc494ed18'),
      diagnose: 'Stauchung',
      dauer: {
        startDatum: new Date('2016-12-08T00:00:00.00Z'),
        endeDatum: new Date('2016-12-16T00:00:00.00Z')
      }
    }
  ];
  getData() {
    return this.journale;
  }

}
