/* tslint:disable:no-unused-variable */
import {TestBed, inject} from '@angular/core/testing';
import {PatientService} from './patient.service';
import {HttpModule} from '@angular/http';
import {AUTH_PROVIDERS} from 'angular2-jwt';

describe('Service: Patient', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PatientService, AUTH_PROVIDERS],
      imports: [HttpModule]
    });
  });

  it('should ...', inject([PatientService], (service: PatientService) => {
    expect(service).toBeTruthy();
  }));
});
