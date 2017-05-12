/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {PatientMenuComponent} from './patient-menu.component';
import {PatientService} from '../service/patient.service';
import {HttpModule} from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AUTH_PROVIDERS} from 'angular2-jwt';
import {RouterTestingModule} from '@angular/router/testing';
import {SearchService} from '../../shared/component/service/search.service';

describe('PatientMenuComponent', () => {
  let component: PatientMenuComponent;
  let fixture: ComponentFixture<PatientMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PatientMenuComponent],
      imports: [HttpModule, FormsModule, ReactiveFormsModule, RouterTestingModule],
      providers: [PatientService, SearchService, AUTH_PROVIDERS, ]

    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientMenuComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
