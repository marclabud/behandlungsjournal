import * as moment from 'moment';
export class Dauer {
  startDatum: moment.Moment;
  endeDatum: moment.Moment;

  constructor() {
    this.startDatum = moment();
    this.endeDatum = moment();
  }
}
