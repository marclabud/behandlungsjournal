/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {MedicamentListComponent} from './medicament-list.component';
import {MedicamentDetailComponent} from '../medicament-detail/medicament-detail.component';
import {HttpClientModule} from '@angular/common/http';
import {BhJournalService} from '../../bhjournal/service/bhjournal.service';
import {MedikationService} from '../service/medikation.service';
import {FormsModule} from '@angular/forms';
import {HaeufigkeitComponent} from '../../shared/component/haeufigkeit/haeufigkeit.component';
import {HaeufigkeitService} from '../../shared/component/haeufigkeit/service/haeufigkeit.service';
import {DauerComponent} from '../../shared/component/dauer/dauer.component';
import {BhjDatepickerComponent} from '../../shared/component/bhj-datepicker/bhj-datepicker.component';


describe('MedicamentListComponent', () => {
  let component: MedicamentListComponent;
  let fixture: ComponentFixture<MedicamentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MedicamentListComponent, MedicamentDetailComponent, HaeufigkeitComponent, DauerComponent, BhjDatepickerComponent],
      imports: [HttpClientModule, FormsModule],
      providers: [BhJournalService, MedikationService, HaeufigkeitService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicamentListComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
