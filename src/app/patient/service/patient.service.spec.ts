/* tslint:disable:no-unused-variable */
import {TestBed, inject} from '@angular/core/testing';
import {PatientService} from './patient.service';
import {HttpModule} from '@angular/http';

describe('Service: Patient', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PatientService],
      imports: [HttpModule]
    });
  });

  it('should ...', inject([PatientService], (service: PatientService) => {
    expect(service).toBeTruthy();
  }));
});
