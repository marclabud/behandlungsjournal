///<reference path="../patient-detail/patient-detail.component.ts"/>
/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {PatientCardComponent} from './patient-card.component';
import {PatientDetailComponent} from '../patient-detail/patient-detail.component';
import {FormsModule} from '@angular/forms';
import {PatientService} from '../service/patient.service';
import {HttpClientModule} from '@angular/common/http';
import {SearchService} from '../../shared/component/service/search.service';

describe('PatientCardComponent', () => {
  let component: PatientCardComponent;
  let fixture: ComponentFixture<PatientCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PatientCardComponent, PatientDetailComponent],
      imports: [FormsModule, HttpClientModule],
      providers: [PatientService, SearchService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientCardComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
