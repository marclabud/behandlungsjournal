import {IData} from '../shared/data';

export class PatientData implements IData {

  private patienten = [
    {
      name: 'Strolch',
      tierart: 'Hund',
      rasse: 'Mischling',
      eigentuemerVorname: 'Hans',
      eigentuemerNachname: 'Iten'
    },
    {
      name: 'Minka',
      tierart: 'Katze',
      rasse: 'Siam',
      eigentuemerVorname: 'Maria',
      eigentuemerNachname: 'Rogenmoser'
    },
    {
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
