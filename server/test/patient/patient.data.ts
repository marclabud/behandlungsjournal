import {IData} from '../shared/data';
import * as mongoose from 'mongoose';
const ObjectId = mongoose.Types.ObjectId;

export class PatientData implements IData {

  private patienten = [
    {
      _id: '10',
      name: 'Toni',
      tierart: 'Vogel',
      rasse: 'Türkisvogel',
      eigentuemerVorname: 'Thomas',
      eigentuemerNachname: 'Test'
    },
    {
      _id: new ObjectId('584a56feacef2512182a99fc'),
      name: 'Strolch',
      tierart: 'Hund',
      rasse: 'Mischling',
      eigentuemerVorname: 'Hans',
      eigentuemerNachname: 'Iten'
    },
    {
      _id: new ObjectId('584a584aacef2512182a99fd'),
      name: 'Minka',
      tierart: 'Katze',
      rasse: 'Siam',
      eigentuemerVorname: 'Maria',
      eigentuemerNachname: 'Rogenmoser'
    },
    {
      _id: new ObjectId('584a5986acef2512182a99fe'),
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
