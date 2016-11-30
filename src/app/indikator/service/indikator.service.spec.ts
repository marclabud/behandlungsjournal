/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { IndikatorService } from './indikator.service';
import {HttpModule} from '@angular/http';

describe('IndikatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IndikatorService],
      imports: [HttpModule]
    });
  });

  it('should ...', inject([IndikatorService], (service: IndikatorService) => {
    expect(service).toBeTruthy();
  }));
});
