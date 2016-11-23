/* tslint:disable:no-unused-variable */

import {TestBed, inject} from '@angular/core/testing';
import {HttpModule} from '@angular/http';
import {MedikationService} from './medikation.service';

describe('Service: Medikation', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MedikationService],
      imports: [HttpModule]
    });
  });

  it('should ...', inject([MedikationService], (service: MedikationService) => {
    expect(service).toBeTruthy();
  }));
});
