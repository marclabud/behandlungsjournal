import {Haeufigkeit} from '../../shared/model/haeufigkeit';
import {Dauer} from '../../shared/model/dauer';

export class Medikation {
  _id: string;
  name: string;
  journal_id: string;
  dosierung: number;
  haeufigkeit: Haeufigkeit;
  dauer: Dauer;

  constructor() {
    this.haeufigkeit = new Haeufigkeit();
    this.dauer = new Dauer();
  }
}
