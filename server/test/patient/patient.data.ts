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
      _id: '1',
      name: 'Strolch',
      tierart: 'Hund',
      rasse: 'Mischling',
      eigentuemerVorname: 'Hans',
      eigentuemerNachname: 'Iten'
    },
    {
      _id: '2',
      name: 'Minka',
      tierart: 'Katze',
      rasse: 'Siam',
      eigentuemerVorname: 'Maria',
      eigentuemerNachname: 'Rogenmoser'
    },
    {
      _id: '3',
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
