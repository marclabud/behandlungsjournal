import {IData} from '../../src/shared/interface/data';
import * as mongoose from 'mongoose';
const ObjectId = mongoose.Types.ObjectId;

export class MedikationData implements IData {

  private medikationen = [
    {
      _id: new ObjectId('5835ec3cf47d103118bbd8ca'),
      name: 'Dolorsitamet',
      journal_id: '1',
      dosierung: 2,
      haeufigkeit: {
        morgens: true,
        mittags: false,
        abends: true
      },
      dauer: {
        startDatum: new Date('2016-11-07T07:00:00.000Z'),
        endeDatum: new Date('2016-11-16T17:00:00.000Z')
      }
    },
    {
      _id: new ObjectId('5835ee70f47d103118bbd8cc'),
      name: 'Consectetuer',
      journal_id: '2',
      dosierung: 2,
      haeufigkeit: {
        morgens: true,
        mittags: true,
        abends: true
      },
      dauer: {
        startDatum: new Date('2016-10-10T07:00:00.000Z'),
        endeDatum: new Date('2016-10-15T17:00:00.000Z')
      }
    },
    {
      _id: new ObjectId('5835eefdf47d103118bbd8ce'),
      name: 'Aeneancommodo',
      journal_id: '1',
      dosierung: 1,
      haeufigkeit: {
        morgens: true,
        mittags: false,
        abends: false
      },
      dauer: {
        startDatum: new Date('2016-09-10T07:00:00.000Z'),
        endeDatum: new Date('2016-09-15T17:00:00.000Z')
      }
    }
  ];

  getData() {
    return this.medikationen;
  }
}
