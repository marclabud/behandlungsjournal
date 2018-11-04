/* tslint:disable:no-unused-variable */
import {TestBed, inject} from '@angular/core/testing';
import {PatientService} from './patient.service';
import {HttpClientModule} from '@angular/common/http';

describe('Service: Patient', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PatientService],
      imports: [HttpClientModule]
    });
  });

  it('should ...', inject([PatientService], (service: PatientService) => {
    expect(service).toBeTruthy();
  }));
});
