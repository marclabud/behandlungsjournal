/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HaeufigkeitService } from './haeufigkeit.service';

describe('Service: Haeufigkeit', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HaeufigkeitService]
    });
  });

  it('should ...', inject([HaeufigkeitService], (service: HaeufigkeitService) => {
    expect(service).toBeTruthy();
  }));
});
