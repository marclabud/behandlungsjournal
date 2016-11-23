import { Component, Input, EventEmitter, OnInit,  Output } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-dauer',
  templateUrl: './dauer.component.html',
  styleUrls: ['./dauer.component.css']
})
export class DauerComponent implements OnInit {
  @Input()
  startDatum: moment.Moment;
  @Input()
  endeDatum: moment.Moment;
  @Input()
  labelStartDatum: string;
  @Input()
  labelEndeDatum: string;
  @Output()
  onStartDatumChange: EventEmitter<moment.Moment>= new EventEmitter<moment.Moment>();
  @Output()
  onEndeDatumChange: EventEmitter<moment.Moment>= new EventEmitter<moment.Moment>();

  ngOnInit() {}
  private onStartDatumChanged(startDatum: moment.Moment) {
    this.onStartDatumChange.emit(startDatum);
  }
  private onEndeDatumChanged(endeDatum: moment.Moment) {
    this.onEndeDatumChange.emit(endeDatum);
  }
}
