import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';

@Component({
  selector: 'app-bhj-datepicker',
  templateUrl: './bhj-datepicker.component.html',
  styleUrls: ['./bhj-datepicker.component.css']
})
export class BhjDatepickerComponent implements OnInit {
  @Input()
  dateModel: Date;
  @Input()
  label: string;
  @Output()
  dateModelChange: EventEmitter<string> = new EventEmitter<string>();
  private showDatepicker: boolean = false;
  private HTML5_inputtype_date_Supported = false;


  ngOnInit () {
    // Browser auf Unterstützung vom Inputtype date prüfen
    this.HTML5_inputtype_date_Supported = Modernizr.inputtypes.date;
  }

  showPopup() {
    this.showDatepicker = true;
  }

  hidePopup(event) {
    this.showDatepicker = false;
    this.dateModel = event;
    this.dateModelChange.emit(event);
  }
}

