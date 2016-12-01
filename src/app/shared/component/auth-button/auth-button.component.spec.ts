/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {AuthButtonComponent} from './auth-button.component';
import {AuthentificationService} from '../../service/auth/authentification.service';
import {UserService} from '../../../user/service/user.service';
import {HttpModule} from '@angular/http';

describe('AuthButtonComponent', () => {
  let component: AuthButtonComponent;
  let fixture: ComponentFixture<AuthButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AuthButtonComponent],
      imports: [HttpModule],
      providers: [AuthentificationService, UserService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthButtonComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
