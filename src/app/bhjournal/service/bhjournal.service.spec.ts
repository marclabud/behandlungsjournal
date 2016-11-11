/* tslint:disable:no-unused-variable */

import {TestBed, inject} from '@angular/core/testing';
import {BhJournalService} from './bhjournal.service';

describe('Service: Bhjournal', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BhJournalService]
    });
  });

  it('should ...', inject([BhJournalService], (service: BhJournalService) => {
    expect(service).toBeTruthy();
  }));
});
