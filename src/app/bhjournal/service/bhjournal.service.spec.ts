/* tslint:disable:no-unused-variable */

import {TestBed, inject} from '@angular/core/testing';
import {BhJournalService} from './bhjournal.service';
import {HttpModule} from '@angular/http';

describe('Service: Bhjournal', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BhJournalService],
      imports: [HttpModule]
    });
  });

  it('should ...', inject([BhJournalService], (service: BhJournalService) => {
    expect(service).toBeTruthy();
  }));
});
