import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-datepicker',
  templateUrl: './bhj-datepicker.component.html',
  styleUrls: ['./bhj-datepicker.component.css']
})
export class BhjDatepickerComponent implements OnInit {
  @Input()
  defaultDate: moment.Moment;
  @Input()
  labeltext: string;
  @Output()
  onDateChange: EventEmitter<moment.Moment> = new EventEmitter<moment.Moment>();
  private HTML5_inputtype_date_Supported = false;
  private HTML5Date: String;
  private NG2Date: Date;

  ngOnInit() {
    // Browser auf Unterstützung vom Inputtype date prüfen
    this.HTML5_inputtype_date_Supported = Modernizr.inputtypes.date;
    if (this.HTML5_inputtype_date_Supported) {
      if (typeof this.defaultDate !== 'undefined') {
        this.HTML5Date = this.defaultDate.format('YYYY-MM-DD');
      } else { // Fehlerbehandlung: nimm das aktuelle Datum
        this.HTML5Date = moment().format('YYYY-MM-DD');
        // Todo: Fehlerbenachrichtigung für @input defaultDate == 'undefined'
      }
    } else {
      // HTML5 type=date nicht supported ng2 datetimepcker init
      if (typeof this.defaultDate !== 'undefined') {
        this.NG2Date = this.defaultDate.toDate();
      } else { // Fehlerbehandlung: nimm das aktuelle Datum
        this.NG2Date = moment().toDate();
      }
    }
  }
  /* tslint:disable-next-line:no-unused-variable */
  private dateChange($event) {
    let dateReturned: moment.Moment;
    console.log ('dateChange: ngModelChange', $event, this.HTML5Date, this.defaultDate);
    if (this.HTML5_inputtype_date_Supported) {
      dateReturned = moment.utc(this.HTML5Date);
    }  else {
      dateReturned = this.defaultDate;
    }
    this.onDateChange.emit(dateReturned);
  }
}

