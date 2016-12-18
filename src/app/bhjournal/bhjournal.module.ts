import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {DauerModule} from '../shared/component/dauer/dauer.module';
import {HaeufigkeitModule} from '../shared/component/haeufigkeit/haeufigkeit.module';
import {BhJournalService} from './service/bhjournal.service';
import {BhjournalComponent} from './bhjournal-view/bhjournal-view.component';
import {BhjournalListComponent} from './bhjournal-list/bhjournal-list.component';
import {BhjournalDetailComponent} from './bhjournal-detail/bhjournal-detail.component';
import {BhjournalListDetailComponent} from './bhjournal-list-detail/bhjournal-list-detail.component';
import {IndikatorModule} from '../indikator/indikator.module';
import {MedikationModule} from '../medicament/medicament.module';

@NgModule({
  imports: [DauerModule, HaeufigkeitModule, FormsModule, ReactiveFormsModule, CommonModule, IndikatorModule, MedikationModule],
  declarations: [BhjournalComponent, BhjournalListComponent, BhjournalDetailComponent, BhjournalListDetailComponent],
  exports: [BhjournalComponent, BhjournalListComponent, BhjournalDetailComponent, BhjournalListDetailComponent],
  providers: [BhJournalService]
})
export class BehandlungsJournalModule {
}
