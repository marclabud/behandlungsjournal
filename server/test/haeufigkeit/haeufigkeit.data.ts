import {IData} from '../shared/data';

export class HaeufigkeitData implements IData {

  private haeufigkeiten = [
    {
      name: 'Dolorsitamet',
      medikament_id: '1',
      patient_id: '1',
      morgens: true,
      mittags: false,
      abends: true
    },
    {
      name: 'Consectetuer',
      medikament_id: '2',
      patient_id: '1',
      morgens: true,
      mittags: true,
      abends: true
    },
    {
      name: 'Aeneancommodo',
      medikament_id: '3',
      patient_id: '2',
      morgens: true,
      mittags: false,
      abends: false
    }
  ];

  getData() {
    return this.haeufigkeiten;
  }

}
