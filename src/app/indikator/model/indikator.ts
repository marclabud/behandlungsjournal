import {Haeufigkeit} from '../../shared/model/haeufigkeit';
import {Dauer} from '../../shared/model/dauer';

export class Indikator {
  _id: string;
  name: string;
  journal_id: string;
  rating_id: string;
  haeufigkeit: Haeufigkeit;
  dauer: Dauer;

  constructor() {
    this.haeufigkeit = new Haeufigkeit();
    this.dauer = new Dauer();
  }
}
