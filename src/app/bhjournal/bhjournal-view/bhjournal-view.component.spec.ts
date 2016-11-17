/* tslint:disable:no-unused-variable */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {BhjournalComponent} from './bhjournal-view.component';
import {HttpModule} from '@angular/http';
import {BhJournalService} from '../service/bhjournal.service';
import {FormsModule} from '@angular/forms';
import {MedicamentListComponent} from '../../medicament/medicament-list/medicament-list.component';
import {IndikatorListComponent} from '../../indikator/indikator-list/indikator-list.component';
import {PatientService} from '../../patient/service/patient.service';


describe('Component: Bhjournal', () => {
  let component: BhjournalComponent;
  let fixture: ComponentFixture<BhjournalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BhjournalComponent, MedicamentListComponent, IndikatorListComponent ],
      imports: [ HttpModule, FormsModule ],
      providers: [ BhJournalService , PatientService]
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
