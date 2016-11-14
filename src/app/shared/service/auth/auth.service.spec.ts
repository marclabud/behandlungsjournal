/* tslint:disable:no-unused-variable */

import {TestBed, inject} from '@angular/core/testing';
import {AuthService} from './auth.service';
import {UserService} from '../../../user/service/user.service';
import {HttpModule} from '@angular/http';

describe('Service: Authenticate', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthService,
        UserService],
      imports: [
        HttpModule
      ]
    });
  });

  it('should ...', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));
});
