/* tslint:disable:no-unused-variable */
import {TestBed, inject} from '@angular/core/testing';
import {AuthentificationService} from './authentification.service';
import {UserService} from '../../../user/service/user.service';
import {HttpModule} from '@angular/http';
import {AUTH_PROVIDERS} from 'angular2-jwt';

describe('Service: Authenticate', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthentificationService,
        UserService,  AUTH_PROVIDERS],
      imports: [
        HttpModule
      ]
    });
  });

  it('should ...', inject([AuthentificationService], (service: AuthentificationService) => {
    expect(service).toBeTruthy();
  }));
});
