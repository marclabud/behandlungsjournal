import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-datepicker',
  templateUrl: './bhj-datepicker.component.html',
  styleUrls: ['./bhj-datepicker.component.css']
})
export class BhjDatepickerComponent implements OnInit {
  @Input() private defaultDate: moment.Moment;
  /* tslint:disable-next-line:no-unused-variable */
  @Input() private labeltext: string;
  @Output() private DateChange: EventEmitter<moment.Moment> = new EventEmitter<moment.Moment>();

  private HTML5_inputtype_date_Supported = false;
  private HTML5Date: String;
  private NG2Date: Date;

  constructor() {
    // this.defaultDate = moment();
  }

  ngOnInit() {
    // Browser auf Unterstützung vom Inputtype date prüfen
    this.HTML5_inputtype_date_Supported = Modernizr.inputtypes.date;
    if (moment.isMoment(this.defaultDate)) {
      this.NG2Date = this.defaultDate.toDate();
      this.HTML5Date = this.defaultDate.format('YYYY-MM-DD');
    } else {     // @InputDefaultDate is not momentMoment
      if (typeof this.defaultDate !== 'string') {
        console.log('@Input Parameter default Date Ungültiger Type', typeof this.defaultDate);
      } else {
        this.NG2Date = new Date(this.defaultDate);
        this.HTML5Date = this.defaultDate;
        console.warn('@Input Parameter should be Type Moment not string');
      }
    }
  }

  /* tslint:disable-next-line:no-unused-variable */
  private onDateChange($event) {
    let dateReturned: moment.Moment;
    console.log('dateChange: ngModelChange', $event, this.HTML5Date, this.defaultDate);
    if (this.HTML5_inputtype_date_Supported) {
      dateReturned = moment.utc(this.HTML5Date);
    } else {
      dateReturned = moment(this.NG2Date);
    }
    this.DateChange.emit(dateReturned);
  }
}

