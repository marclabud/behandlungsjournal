/* tslint:disable:no-unused-variable */
import {TestBed, inject} from '@angular/core/testing';
import {IndikatorService} from './indikator.service';
import {HttpModule} from '@angular/http';
import {AUTH_PROVIDERS} from 'angular2-jwt';

describe('IndikatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IndikatorService, AUTH_PROVIDERS],
      imports: [HttpModule]
    });
  });

  it('should ...', inject([IndikatorService], (service: IndikatorService) => {
    expect(service).toBeTruthy();
  }));
});
