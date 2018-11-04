/* tslint:disable:no-unused-variable */
import {TestBed, inject} from '@angular/core/testing';
import {HaeufigkeitService} from './haeufigkeit.service';
import {HttpClientModule} from '@angular/common/http';


describe('Service: Haeufigkeit', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [HaeufigkeitService],
    });
  });

  it('should ...', inject([HaeufigkeitService], (service: HaeufigkeitService) => {
    expect(service).toBeTruthy();
  }));
});
