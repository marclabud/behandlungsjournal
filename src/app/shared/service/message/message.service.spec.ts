/* tslint:disable:no-unused-variable */

import {TestBed, inject} from '@angular/core/testing';
import {MessageService} from './message.service';
import {Patient} from '../../../patient/model/patient';

describe('Service: Message', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessageService]
    });
  });

  it('should ...', inject([MessageService], (service: MessageService<Patient>) => {
    expect(service).toBeTruthy();
  }));
});
