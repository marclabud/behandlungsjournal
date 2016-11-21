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
  dateModelChange: EventEmitter<string> = new EventEmitter<string>();
  private HTML5_inputtype_date_Supported = false;
  private HTML5Date: String;

  ngOnInit() {
    // Browser auf Unterstützung vom Inputtype date prüfen
    this.HTML5_inputtype_date_Supported = Modernizr.inputtypes.date;
    if (this.HTML5_inputtype_date_Supported) {
      console.log ('labeltext', this.labeltext);
      if (typeof this.defaultDate !== 'undefined') {
        this.HTML5Date = this.defaultDate.format('YYYY-MM-DD');
      } else { // Fehlerbehandlung: nimm das aktuelle Datum
        this.HTML5Date = moment().format('YYYY-MM-DD');
        // Todo: Fehlerbenachrichtigung für @input defaultDate == 'undefined'
      }
    } else {
      // HTML5 type=date nicht supported
    }
  }
}

