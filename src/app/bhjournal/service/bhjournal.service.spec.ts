/* tslint:disable:no-unused-variable */
import {TestBed, inject} from '@angular/core/testing';
import {BhJournalService} from './bhjournal.service';
import {HttpModule} from '@angular/http';
import {AUTH_PROVIDERS} from 'angular2-jwt';

describe('Service: Bhjournal', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BhJournalService, AUTH_PROVIDERS],
      imports: [HttpModule]
    });
  });

  it('should ...', inject([BhJournalService], (service: BhJournalService) => {
    expect(service).toBeTruthy();
  }));
});
