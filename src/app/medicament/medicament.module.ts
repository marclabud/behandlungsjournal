import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {MedicamentListComponent} from './medicament-list/medicament-list.component';
import {MedicamentDetailComponent} from './medicament-detail/medicament-detail.component';
import {MedikationService} from './service/medikation.service';

import {HaeufigkeitModule} from '../shared/component/haeufigkeit/haeufigkeit.module';
import {DauerModule} from '../shared/component/dauer/dauer.module';

@NgModule({
  imports: [FormsModule, CommonModule, DauerModule, HaeufigkeitModule],
  declarations: [MedicamentListComponent, MedicamentDetailComponent],
  exports: [MedicamentListComponent, MedicamentDetailComponent],
  providers: [MedikationService]
})
export class MedikationModule {
}
