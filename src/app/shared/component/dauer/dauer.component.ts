import {Component, Input, EventEmitter, OnInit, Output} from '@angular/core';
import * as moment from 'moment';
import {Dauer} from '../../model/dauer';


@Component({
  selector: 'app-dauer',
  templateUrl: './dauer.component.html',
  styleUrls: ['./dauer.component.css']
})
export class DauerComponent implements OnInit {
  @Input()
  /* tslint:disable-next-line:no-unused-variable */
  private isEditing: Boolean = true;
  @Input()
  private dauer: Dauer;
  @Input()
  /* tslint:disable-next-line:no-unused-variable */
  private labelStartDatum: string;
  @Input()
  /* tslint:disable-next-line:no-unused-variable */
  private labelEndeDatum: string;
  @Output()
  private onStartDatumChange: EventEmitter<moment.Moment> = new EventEmitter<moment.Moment>();
  @Output()
  private onEndeDatumChange: EventEmitter<moment.Moment> = new EventEmitter<moment.Moment>();

  private startdatum: moment.Moment;
  private endedatum: moment.Moment;

  private startDatumShow: string;
  private endeDatumShow: string;

  ngOnInit() {
    this.startdatum = this.dauer.startDatum;
    this.endedatum = this.dauer.endeDatum;
    this.startDatumShow = this.startdatum.format('DD.MM.YYYY');
    this.endeDatumShow = this.endedatum.format('DD.MM.YYYY');
  }

  /* tslint:disable-next-line:no-unused-variable */
  private onStartDatumChanged(startDatum: moment.Moment) {
    this.onStartDatumChange.emit(startDatum);
  }

  /* tslint:disable-next-line:no-unused-variable */
  private onEndeDatumChanged(endeDatum: moment.Moment) {
    this.onEndeDatumChange.emit(endeDatum);
  }
}
