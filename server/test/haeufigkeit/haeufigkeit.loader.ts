import {Db} from 'mongodb';
import {DataLoader} from '../shared/data.loader';
import {HaeufigkeitData} from './haeufigkeit.data';

export class HaeufigkeitLoader extends DataLoader {

  constructor(db: Db, data: HaeufigkeitData) {
    super(db, data);
  }

  // some specific loader
  // ...

  getCollectionName() {
    return 'Haeufigkeit';
  }
}
