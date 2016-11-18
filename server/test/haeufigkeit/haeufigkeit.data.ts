import {IData} from '../shared/data';

export class HaeufigkeitData implements IData {

  private haeufigkeiten = [
    {
      _id: '1',
      morgens: true,
      mittags: false,
      abends: true
    },
    {
      _id: '2',
      morgens: true,
      mittags: true,
      abends: true
    },
    {
      _id: '3',
      morgens: true,
      mittags: false,
      abends: false
    }
  ];

  getData() {
    return this.haeufigkeiten;
  }

}
