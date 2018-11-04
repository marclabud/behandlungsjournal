///<reference path="../bhjournal-detail/bhjournal-detail.component.ts"/>
///<reference path="../bhjournal-list/bhjournal-list.component.ts"/>
/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {BhjournalListDetailComponent} from './bhjournal-list-detail.component';
import {BhjournalDetailComponent} from '../bhjournal-detail/bhjournal-detail.component';
import {BhjournalListComponent} from '../bhjournal-list/bhjournal-list.component';
import {DauerModule} from '../../shared/component/dauer/dauer.module';
import {FormsModule} from '@angular/forms';
import {BhJournalService} from '../service/bhjournal.service';
import {HttpClientModule} from '@angular/common/http';
import {PatientService} from '../../patient/service/patient.service';
import {RouterTestingModule} from '@angular/router/testing';

describe('BhjournalListDetailComponent', () => {
  let component: BhjournalListDetailComponent;
  let fixture: ComponentFixture<BhjournalListDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BhjournalListDetailComponent, BhjournalDetailComponent, BhjournalListComponent],
      imports: [FormsModule, DauerModule, HttpClientModule, RouterTestingModule],
      providers: [BhJournalService, PatientService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BhjournalListDetailComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
