import {DataLoader} from '../shared/data.loader';
import {IndikatorData} from './indikator.data';

export class IndikatorLoader extends DataLoader {
  constructor(db, data: IndikatorData) {
    super(db, data);
  }

  // some specific loader
  // ...

  getCollectionName() {
    return 'Indikator';
  }
}
