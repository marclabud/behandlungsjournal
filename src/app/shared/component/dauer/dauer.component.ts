import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-dauer',
  templateUrl: './dauer.component.html',
  styleUrls: ['./dauer.component.css']
})
export class DauerComponent implements OnInit {
  @Input()
  StartDatum: moment.Moment;
  @Input()
  EndeDatum: moment.Moment;
  @Input()
  labelStartDatum: string;
  @Input()
  labelEndeDatum: string;

  ngOnInit() {
  }

}
