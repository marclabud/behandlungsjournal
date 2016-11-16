/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MainNavComponent } from './main-nav.component';
import {PatientListComponent} from '../patient/patient-list/patient-list.component';
import {HttpModule} from '@angular/http';
import {PatientService} from '../patient/service/patient.service';

describe('MainNavComponent', () => {
  let component: MainNavComponent;
  let fixture: ComponentFixture<MainNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MainNavComponent,
        PatientListComponent
      ],
      imports: [HttpModule],
      providers: [PatientService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
