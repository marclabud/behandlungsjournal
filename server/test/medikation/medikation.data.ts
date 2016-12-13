import {IData} from '../../src/shared/interface/data';
import * as mongoose from 'mongoose';
const ObjectId = mongoose.Types.ObjectId;

export class MedikationData implements IData {

  private medikationen = [
    {
      _id: new ObjectId('5835ec3cf47d103118bbd8ca'),
      name: 'Dolorsitamet',
      journal_id: new ObjectId('584a5d7a22ba7e1540f5d965'),
      dosierung: 2,
      haeufigkeit: {
        morgens: true,
        mittags: false,
        abends: true
      },
      dauer: {
        startDatum: new Date('2016-12-01T07:00:00.000Z'),
        endeDatum: new Date('2016-12-21T17:00:00.000Z')
      }
    },
    {
      _id: new ObjectId('5835ee70f47d103118bbd8cc'),
      name: 'Consectetuer',
      journal_id: ObjectId('584a5e6e22ba7e1540f5d966'),
      dosierung: 2,
      haeufigkeit: {
        morgens: true,
        mittags: true,
        abends: true
      },
      dauer: {
        startDatum: new Date('2016-12-02T07:00:00.000Z'),
        endeDatum: new Date('2016-12-21T17:00:00.000Z')
      }
    },
    {
      _id: new ObjectId('5835eefdf47d103118bbd8ce'),
      name: 'Aeneancommodo',
      journal_id: new ObjectId('584a5d7a22ba7e1540f5d965'),
      dosierung: 1,
      haeufigkeit: {
        morgens: true,
        mittags: false,
        abends: false
      },
      dauer: {
        startDatum: new Date('2016-12-12T07:00:00.000Z'),
        endeDatum: new Date('2016-12-18T17:00:00.000Z')
      }
    }
  ];

  getData() {
    return this.medikationen;
  }
}
