import {IData} from '../shared/data';
import * as mongoose from 'mongoose';
const ObjectId = mongoose.Types.ObjectId;

export class PatientData implements IData {

  private patienten = [
    {
      _id: new ObjectId('5848025ccd971414b8e71f32'),
      name: 'Toni',
      tierart: 'Vogel',
      rasse: 'Türkisvogel',
      eigentuemerVorname: 'Thomas',
      eigentuemerNachname: 'Test'
    },
    {
      _id: new ObjectId('5848025ccd971414b8e71f33'),
      name: 'Strolch',
      tierart: 'Hund',
      rasse: 'Mischling',
      eigentuemerVorname: 'Hans',
      eigentuemerNachname: 'Iten'
    },
    {
      _id: new ObjectId('5848025ccd971414b8e71f34'),
      name: 'Minka',
      tierart: 'Katze',
      rasse: 'Siam',
      eigentuemerVorname: 'Maria',
      eigentuemerNachname: 'Rogenmoser'
    },
    {
      _id: new ObjectId('5848025ccd971414b8e71f35'),
      name: 'Blacky',
      tierart: 'Pferd',
      rasse: 'Freiberger',
      eigentuemerVorname: 'Peter',
      eigentuemerNachname: 'Jura'

    }
  ];

  getData() {
    return this.patienten;
  }

}
