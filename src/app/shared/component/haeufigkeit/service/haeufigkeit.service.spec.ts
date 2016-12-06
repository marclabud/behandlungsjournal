/* tslint:disable:no-unused-variable */
import {TestBed, inject} from '@angular/core/testing';
import {HaeufigkeitService} from './haeufigkeit.service';
import {HttpModule} from '@angular/http';
import {AUTH_PROVIDERS} from 'angular2-jwt';


describe('Service: Haeufigkeit', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [HaeufigkeitService, AUTH_PROVIDERS],
    });
  });

  it('should ...', inject([HaeufigkeitService], (service: HaeufigkeitService) => {
    expect(service).toBeTruthy();
  }));
});
