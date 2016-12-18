/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {LogoutComponent} from './logout.component';
import {AuthentificationService} from '../shared/service/auth/authentification.service';
import {AUTH_PROVIDERS} from 'angular2-jwt';
import {HttpModule} from '@angular/http';
import {UserService} from '../user/service/user.service';

describe('LogoutComponent', () => {
  let component: LogoutComponent;
  let fixture: ComponentFixture<LogoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      declarations: [LogoutComponent],
      providers: [AuthentificationService, AUTH_PROVIDERS, UserService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
