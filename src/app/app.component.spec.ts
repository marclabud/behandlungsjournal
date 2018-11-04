import {TestBed, async} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {RouterTestingModule} from '@angular/router/testing';
import {MainNavComponent} from './main-nav/main-nav.component';
import {PatientListComponent} from './patient/patient-list/patient-list.component';
import {HttpClientModule} from '@angular/common/http';
import {PatientService} from './patient/service/patient.service';
import {AuthentificationService} from './shared/service/auth/authentification.service';
import {UserService} from './user/service/user.service';
import {AuthButtonComponent} from './shared/component/auth-button/auth-button.component';
import {PatientMenuComponent} from './patient/patient-menu/patient-menu.component';
import {SearchComponent} from './shared/component/search/search.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';

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
      imports: [RouterTestingModule, HttpClientModule, ReactiveFormsModule, FormsModule],
      providers: [PatientService, AuthentificationService, UserService]
    });
  });

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
