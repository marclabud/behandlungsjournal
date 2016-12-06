/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {BhjournalListComponent} from './bhjournal-list.component';
import {DauerModule} from '../../shared/component/dauer/dauer.module';
import {BhjournalDetailComponent} from '../bhjournal-detail/bhjournal-detail.component';
import {FormsModule} from '@angular/forms';
import {BhJournalService} from '../service/bhjournal.service';
import {AUTH_PROVIDERS} from 'angular2-jwt';
import {HttpModule} from '@angular/http';
import {PatientService} from '../../patient/service/patient.service';

describe('BhjournalListComponent', () => {
  let component: BhjournalListComponent;
  let fixture: ComponentFixture<BhjournalListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BhjournalListComponent, BhjournalDetailComponent],
      imports: [DauerModule, FormsModule, HttpModule],
      providers: [PatientService, BhJournalService, AUTH_PROVIDERS]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BhjournalListComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
