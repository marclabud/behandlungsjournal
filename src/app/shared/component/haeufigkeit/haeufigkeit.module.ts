import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {HaeufigkeitComponent} from './haeufigkeit.component';
import {HaeufigkeitService} from './service/haeufigkeit.service';

@NgModule({
  imports: [FormsModule, CommonModule],
  declarations: [HaeufigkeitComponent],
  exports: [HaeufigkeitComponent],
  providers: [HaeufigkeitService]
})
export class HaeufigkeitModule {
}
