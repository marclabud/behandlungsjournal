import {Component, Input, Output, EventEmitter, OnInit, AfterViewChecked} from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-datepicker',
  templateUrl: './bhj-datepicker.component.html',
  styleUrls: ['./bhj-datepicker.component.css']
})
export class BhjDatepickerComponent implements OnInit, AfterViewChecked {
  @Input()
  private defaultDate: moment.Moment = moment();
  @Input()
  /* tslint:disable-next-line:no-unused-variable */
  private labeltext: string;
  @Output()
  private onDateChange: EventEmitter<moment.Moment> = new EventEmitter<moment.Moment>();

  private HTML5_inputtype_date_Supported = false;
  private HTML5Date: String;
  private NG2Date: Date;

  ngOnInit() {
    // Browser auf Unterstützung vom Inputtype date prüfen
    this.HTML5_inputtype_date_Supported = Modernizr.inputtypes.date;
  }

  ngAfterViewChecked() {
    this.checkInput(this.defaultDate);
    console.log('ngAfterViewChecked', this.defaultDate);
    if (moment.isMoment(this.defaultDate)) {
      this.NG2Date = this.defaultDate.toDate();
      this.HTML5Date = this.defaultDate.format('YYYY-MM-DD');
    } else {     // @InputDefaultDate is not momentMoment
      if (typeof this.defaultDate === 'string' ) {
        this.NG2Date = new Date(this.defaultDate);
        this.HTML5Date = this.defaultDate;
        console.warn ('@Input Parameter should be Type Moment not string');
      } else {
        console.log ('@Input Parameter default Date Ungültiger Type', typeof this.defaultDate );
      }
    }
  }
  /* tslint:disable-next-line:no-unused-variable */
  private dateChange($event) {
    let dateReturned: moment.Moment;
    console.log('dateChange: ngModelChange', $event, this.HTML5Date, this.defaultDate);
    if (this.HTML5_inputtype_date_Supported) {
      dateReturned = moment.utc(this.HTML5Date);
    } else {
      dateReturned = moment(this.NG2Date);
    }
    this.onDateChange.emit(dateReturned);
  }

  private checkInput(input: any) {
    console.log('checkInputDate: isMoment', moment.isMoment(input));
    console.log('checkInputDate: type of date', typeof input);
  }
}

