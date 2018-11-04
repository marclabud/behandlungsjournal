/* tslint:disable:no-unused-variable */
import {TestBed, inject} from '@angular/core/testing';
import {BhJournalService} from './bhjournal.service';
import {HttpClientModule} from '@angular/common/http';

describe('Service: Bhjournal', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BhJournalService],
      imports: [HttpClientModule]
    });
  });

  it('should ...', inject([BhJournalService], (service: BhJournalService) => {
    expect(service).toBeTruthy();
  }));
});
