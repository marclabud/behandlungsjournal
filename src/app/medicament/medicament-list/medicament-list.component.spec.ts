/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MedicamentListComponent } from './medicament-list.component';
import {MedicamentDetailComponent} from '../medicament-detail/medicament-detail.component';
import {HttpModule} from '@angular/http';
import {BhJournalService} from '../../bhjournal/service/bhjournal.service';
import {MedikationService} from '../service/medikation.service';

import {FormsModule} from '@angular/forms';

describe('MedicamentListComponent', () => {
  let component: MedicamentListComponent;
  let fixture: ComponentFixture<MedicamentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicamentListComponent , MedicamentDetailComponent],
      imports: [ HttpModule, FormsModule ],
      providers: [ BhJournalService, MedikationService ]
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
