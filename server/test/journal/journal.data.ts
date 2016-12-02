import {IData} from '../shared/data';

export class JournalData implements IData {

  private journale = [
    {
      _id: '1',
      name: 'Journal Strolch',
      patient_id: '1',
      diagnose: 'Bisswunde',
      dauer: {
        startDatum: new Date('2016-10-07T00:00:00.00Z'),
        endeDatum: new Date('2016-10-17T00:00:00.000Z')
      }
    },
    {
      _id: '2',
      name: 'Journal Minka',
      patient_id: '2',
      diagnose: 'Vergiftung',
      dauer: {
        startDatum: new Date('2016-11-08T00:00:00.00Z'),
        endeDatum: new Date('2016-11-17T00:00:00.000Z')
      }
    },
    {
      _id: '3',
      name: 'Journal Blacky',
      patient_id: '3',
      diagnose: 'Stauchung',
      dauer: {
        startDatum: new Date('2016-11-21T00:00:00.00Z'),
        endeDatum: new Date('2016-11-30T00:00:00.00Z')
      }
    }
  ];
  getData() {
    return this.journale;
  }

}
