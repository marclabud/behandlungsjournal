import {IData} from '../shared/data';

export class PatientData implements IData {

  private patienten = [
    {
      name: 'Strolch',
      tierart: 'Hund',
      rasse: 'Mischling',
      diagnose: 'Bisswunde',
      eigentuemerVorname: 'Hans',
      eigentuemerNachname: 'Iten'
    },
    {
      name: 'Minka',
      tierart: 'Katze',
      rasse: 'Siam',
      diagnose: 'Vergiftung',
      eigentuemerVorname: 'Maria',
      eigentuemerNachname: 'Rogenmoser'
    },
    {
      name: 'Blacky',
      tierart: 'Pferd',
      rasse: 'Freiberger',
      diagnose: 'Stauchung',
      eigentuemerVorname: 'Peter',
      eigentuemerNachname: 'Jura'
    }
  ];

  getData() {
    return this.patienten;
  }

}
