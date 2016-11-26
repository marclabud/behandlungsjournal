/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HaeufigkeitService } from './haeufigkeit.service';
import {HttpModule} from '@angular/http';

describe('Service: Haeufigkeit', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HaeufigkeitService],
      imports: [HttpModule],
    });
  });

  it('should ...', inject([HaeufigkeitService], (service: HaeufigkeitService) => {
    expect(service).toBeTruthy();
  }));
});
