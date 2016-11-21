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
  label: string;
  @Output()
  dateModelChange: EventEmitter<string> = new EventEmitter<string>();
  private showDatepicker: boolean = false;
  private HTML5_inputtype_date_Supported = false;
  private HTML5Date: String;

  ngOnInit() {
    // Browser auf Unterstützung vom Inputtype date prüfen
    this.HTML5_inputtype_date_Supported = Modernizr.inputtypes.date;
    if (this.HTML5_inputtype_date_Supported) {
      if (typeof this.defaultDate !== 'undefined') {
        this.HTML5Date = this.defaultDate.format('YYYY-MM-DD');
      } else { // Fehlerbehandlung: nimm das aktuelle Datum
        this.HTML5Date = moment().format('YYYY-MM-DD');
        // Todo: Fehlerbehandlung für @input defaultDate == 'undefined'
      }
    } else {
      // HTML5 type=date nicht supported
    }
  }

  showPopup() {
    this.showDatepicker = true;
  }

  hidePopup(event) {
    this.showDatepicker = false;
    // this.dateModel = event;
    // this.dateModelChange.emit(event);
  }
}

