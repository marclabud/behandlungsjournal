import {TestBed, async} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {RouterTestingModule} from '@angular/router/testing';
import {MainNavComponent} from './main-nav/main-nav.component';
import {PatientListComponent} from './patient/patient-list/patient-list.component';
import {HttpModule} from '@angular/http';
import {PatientService} from './patient/service/patient.service';
import {AuthentificationService} from './shared/service/auth/authentification.service';
import {UserService} from './user/service/user.service';
import {AuthButtonComponent} from './shared/component/auth-button/auth-button.component';
import {AUTH_PROVIDERS} from 'angular2-jwt';
import {PatientMenuComponent} from './patient/patient-menu/patient-menu.component';
import {SearchComponent} from './shared/component/search/search.component';

describe('App: Behandlungsjournal', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MainNavComponent,
        PatientListComponent,
        PatientMenuComponent,
        AuthButtonComponent,
        SearchComponent
      ],
      imports: [RouterTestingModule, HttpModule],
      providers: [PatientService, AuthentificationService, AUTH_PROVIDERS, UserService]
    });
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
