/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BhjournalService } from './bhjournal.service';

describe('Service: Bhjournal', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BhjournalService]
    });
  });

  it('should ...', inject([BhjournalService], (service: BhjournalService) => {
    expect(service).toBeTruthy();
  }));
});
