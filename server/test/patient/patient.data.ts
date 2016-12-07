import {IData} from '../../src/shared/interface/data';

export class PatientData implements IData {

  private patienten = [
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
