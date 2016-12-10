import {Dauer} from '../../shared/model/dauer';

export class BhJournal {
  _id: string;
  name: string;
  patient_id: string;
  diagnose: string;
  dauer: Dauer = new Dauer();
}
