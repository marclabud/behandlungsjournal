/* tslint:disable:no-unused-variable */
import {TestBed, inject} from '@angular/core/testing';
import {AuthentificationService} from './authentification.service';
import {UserService} from '../../../user/service/user.service';
import {HttpClientModule} from '@angular/common/http';

describe('Service: Authenticate', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthentificationService,
        UserService],
      imports: [
        HttpClientModule
      ]
    });
  });

  it('should ...', inject([AuthentificationService], (service: AuthentificationService) => {
    expect(service).toBeTruthy();
  }));
});
