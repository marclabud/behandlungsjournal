import {Component, Input, EventEmitter, OnInit, Output} from '@angular/core';
import * as moment from 'moment';
import {Dauer} from '../../model/dauer';


@Component({
  selector: 'app-dauer',
  templateUrl: './dauer.component.html',
  styleUrls: ['./dauer.component.scss']
})
export class DauerComponent implements OnInit {
  /* tslint:disable-next-line:no-unused-variable */
  @Input() private isEditing: Boolean = true;
  @Input() private dauer: Dauer;
  /* tslint:disable-next-line:no-unused-variable */
  @Input() private labelStartDatum: string;
  /* tslint:disable-next-line:no-unused-variable */
  @Input() private labelEndeDatum: string;

  @Output() private StartDatumChange: EventEmitter<moment.Moment> = new EventEmitter<moment.Moment>();
  @Output() private EndeDatumChange: EventEmitter<moment.Moment> = new EventEmitter<moment.Moment>();

  private startdatum: moment.Moment;
  private endedatum: moment.Moment;

  private startDatumShow: string;
  private endeDatumShow: string;
  private isLoading = true;

  ngOnInit() {
    this.startdatum = moment(this.dauer.startDatum); // must be cast
    this.endedatum = moment(this.dauer.endeDatum);  // must be cast
    this.startDatumShow = this.startdatum.format('DD.MM.YYYY');
    this.endeDatumShow = this.endedatum.format('DD.MM.YYYY');
    this.isLoading = false;
  }

  /* tslint:disable-next-line:no-unused-variable */
  private onStartDatumChanged(startDatum: moment.Moment) {
    this.StartDatumChange.emit(startDatum);
  }

  /* tslint:disable-next-line:no-unused-variable */
  private onEndeDatumChanged(endeDatum: moment.Moment) {
    this.EndeDatumChange.emit(endeDatum);
  }

}
