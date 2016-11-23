import {IData} from '../shared/data';

export class JournalData implements IData {

  private journale = [
    {
      _id: '1',
      name: 'Journal Strolch',
      patient_id: '1',
      diagnose: 'Bisswunde',
      startdatum:  new Date('2016-10-08T00:00:00'),
      enddatum: new Date('2016-10-16T00:00:00'),
    },
    {
      _id: '2',
      name: 'Journal Minka',
      patient_id: '2',
      diagnose: 'Vergiftung',
      startdatum: new Date('2016-11-08T00:00:00'),
      enddatum: new Date('2016-11-17T00:00:00'),
    },
    {
      _id: '3',
      name: 'Journal Blacky',
      patient_id: '3',
      diagnose: 'Stauchung',
      startdatum: new Date('2016-11-21T00:00:00'),
      enddatum: new Date('2016-11-30T00:00:00'),
    }
  ];

  getData() {
    return this.journale;
  }

}
