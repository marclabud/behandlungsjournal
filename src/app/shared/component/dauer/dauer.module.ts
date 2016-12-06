import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {DauerComponent} from './dauer.component';
import {BhjDatepickerComponent} from '../bhj-datepicker/bhj-datepicker.component';
import {Ng2DatetimePickerModule} from '../datetime-picker/NG2DatetimePicker.module';

@NgModule({
  imports: [FormsModule, CommonModule, Ng2DatetimePickerModule],
  declarations: [DauerComponent, BhjDatepickerComponent],
  exports: [DauerComponent]
})
export class DauerModule {
}
