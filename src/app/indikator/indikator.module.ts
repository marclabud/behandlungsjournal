import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {IndikatorListComponent} from './indikator-list/indikator-list.component';
import {IndikatorDetailComponent} from './indikator-detail/indikator-detail.component';
import {IndikatorService} from './service/indikator.service';
import {DauerModule} from '../shared/component/dauer/dauer.module';
import {HaeufigkeitModule} from '../shared/component/haeufigkeit/haeufigkeit.module';

@NgModule({
  imports: [DauerModule, HaeufigkeitModule, FormsModule, CommonModule],
  declarations: [IndikatorListComponent, IndikatorDetailComponent],
  exports: [IndikatorListComponent, IndikatorDetailComponent],
  providers: [IndikatorService]
})
export class IndikatorModule {
}
