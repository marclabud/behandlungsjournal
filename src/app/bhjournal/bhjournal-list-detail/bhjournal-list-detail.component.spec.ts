///<reference path="../bhjournal-detail/bhjournal-detail.component.ts"/>
///<reference path="../bhjournal-list/bhjournal-list.component.ts"/>
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BhjournalListDetailComponent } from './bhjournal-list-detail.component';
import {BhjournalDetailComponent} from '../bhjournal-detail/bhjournal-detail.component';
import {BhjournalListComponent} from '../bhjournal-list/bhjournal-list.component';
import {DauerModule} from '../../shared/component/dauer/dauer.module';
import {FormsModule} from '@angular/forms';
import {BhJournalService} from '../service/bhjournal.service';
import {AUTH_PROVIDERS} from 'angular2-jwt';
import {HttpModule} from '@angular/http';
import {PatientService} from '../../patient/service/patient.service';

describe('BhjournalListDetailComponent', () => {
  let component: BhjournalListDetailComponent;
  let fixture: ComponentFixture<BhjournalListDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BhjournalListDetailComponent, BhjournalDetailComponent, BhjournalListComponent],
      imports: [FormsModule, DauerModule, HttpModule],
      providers: [BhJournalService, PatientService, AUTH_PROVIDERS]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BhjournalListDetailComponent, );
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
