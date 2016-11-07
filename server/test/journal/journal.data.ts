import {IData} from '../shared/data';

export class JournalData implements IData {

  private journale = [
    {
      name: 'Journal Strolch',
      patient_id: '1',
      diagnose: 'Bisswunde',
      startdatum: '<2016-11-07T00:00:00>',
      enddatum:   '<2016-11-16T00:00:00>'

    },
    {
      name: 'Journal Minka',
      patient_id: '2',
      diagnose: 'Vergiftung',
      startdatum: '<2016-11-08T00:00:00>',
      enddatum: '<2016-11-17T00:00:00>'
    },
    {
      name: 'Journal Blacky',
      patient_id: '3',
      diagnose: 'Stauchung',
      startdatum: '<2016-11-09T00:00:00>',
      enddatum:  '<2016-11-18T00:00:00>'
    }
  ];
  getData() {
    return this.journale;
  }

}
