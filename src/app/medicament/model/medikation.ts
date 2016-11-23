import {Haeufigkeit} from '../../shared/model/haeufigkeit';
import {Dauer} from '../../shared/model/dauer';

export class Medikation {
  _id: string;
  name: string;
  journal_id: string;
  haeufigkeit: Haeufigkeit;
  dauer: Dauer;
}
