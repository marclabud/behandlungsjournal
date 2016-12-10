/* tslint:disable:no-unused-variable */
import {TestBed, inject} from '@angular/core/testing';
import {HttpModule} from '@angular/http';
import {MedikationService} from './medikation.service';
import {AUTH_PROVIDERS} from 'angular2-jwt';

describe('Service: Medikation', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MedikationService, AUTH_PROVIDERS],
      imports: [HttpModule]
    });
  });

  it('should ...', inject([MedikationService], (service: MedikationService) => {
    expect(service).toBeTruthy();
  }));
});
