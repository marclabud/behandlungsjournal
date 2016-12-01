/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {BhjournalComponent} from './bhjournal-view.component';
import {HttpModule} from '@angular/http';
import {BhJournalService} from '../service/bhjournal.service';
import {FormsModule} from '@angular/forms';
import {BhjDatepickerComponent} from '../../shared/component/bhj-datepicker/bhj-datepicker.component';
import {MedicamentListComponent} from '../../medicament/medicament-list/medicament-list.component';
import {MedicamentDetailComponent} from '../../medicament/medicament-detail/medicament-detail.component';
import {IndikatorListComponent} from '../../indikator/indikator-list/indikator-list.component';
import {IndikatorDetailComponent} from '../../indikator/indikator-detail/indikator-detail.component';
import {PatientService} from '../../patient/service/patient.service';
import {DauerComponent} from '../../shared/component/dauer/dauer.component';
import {HaeufigkeitComponent} from '../../shared/component/haeufigkeit/haeufigkeit.component';


describe('Component: Bhjournal', () => {
  let component: BhjournalComponent;
  let fixture: ComponentFixture<BhjournalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BhjournalComponent,
        MedicamentListComponent,
        MedicamentDetailComponent,
        IndikatorListComponent,
        IndikatorDetailComponent,
        BhjDatepickerComponent,
        DauerComponent,
        HaeufigkeitComponent],
      imports: [HttpModule, FormsModule],
      providers: [BhJournalService, PatientService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BhjournalComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
