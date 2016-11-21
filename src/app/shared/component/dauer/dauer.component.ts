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
  private isLoading = true;

  ngOnInit() {
    console.log ('Input StartDatum', this.StartDatum);
    console.log ('Input EndeDatum', this.EndeDatum);
    console.log ('Input labelStartDatum', this.labelStartDatum);
    console.log ('Input labelEndeDatum', this.labelEndeDatum);
    this.isLoading = false;

  }

}
