import {IData} from '../shared/data';

export class JournalData implements IData {

  private journale = [
    {
      _id: '1',
      name: 'Journal Strolch',
      patient_id: '1',
      diagnose: 'Bisswunde',
      startdatum: '2016-11-07',
      enddatum: '2016-11-16'
    },
    {
      _id: '2',
      name: 'Journal Minka',
      patient_id: '2',
      diagnose: 'Vergiftung',
      startdatum: '2016-11-08',
      enddatum: '2016-11-17'
    },
    {
      _id: '3',
      name: 'Journal Blacky',
      patient_id: '3',
      diagnose: 'Stauchung',
      startdatum: '2016-11-09',
      enddatum: '2016-11-18'
    }
  ];

  getData() {
    return this.journale;
  }

}
