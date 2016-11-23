import {IData} from '../shared/data';

export class MedikationData implements IData {

  private medikationen = [
    {
      _id: '1',
      name: 'Dolorsitamet',
      // patient_id: '1', /* ist bereits im Journal enthalten */
      journal_id: '1',
      dosierung: 2,
      haeufigkeit: {
        morgens: true,
        mittags: false,
        abends: true
      },
      dauer: {
        startdatum: '2016-11-07T08:00:00',
        enddatum: '2016-11-16T18:00:00'
      }
    },
    {
      _id: '2',
      name: 'Consectetuer',
      journal_id: '2',
      dosierung: 2,
      haeufigkeit: {
        morgens: true,
        mittags: true,
        abends: true
      },
      dauer: {
        startdatum: '2016-10-10T08:00:00',
        enddatum: '2016-10-15T18:00:00'
      }
    },
    {
      _id: '3',
      name: 'Aeneancommodo',
      journal_id: '1',
      dosierung: 1,
      haeufigkeit: {
        morgens: true,
        mittags: false,
        abends: false
      },
      dauer: {
        startdatum: '2016-09-10T08:00:00',
        enddatum: '2016-09-15T18:00:00'
      }
    }
  ];

  getData() {
    return this.medikationen;
  }
}
