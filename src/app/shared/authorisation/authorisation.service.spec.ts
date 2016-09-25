/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AuthorisationService } from './authorisation.service';
import { IUser} from "./user";

describe('Service: Authorisation', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthorisationService]
    });
  });

  it('should ...', inject([AuthorisationService], (service: AuthorisationService) => {
    expect(service).toBeTruthy();
  }));
});
