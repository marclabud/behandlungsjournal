import {BrowserModule} from '@angular/platform-browser';
import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {provideAuth} from 'angular2-jwt';
import {routing} from './app.routing';
import {AppComponent} from './app.component';
import {UserComponent} from './user/user.component';
import {SignupComponent} from './signup/signup.component';
import {LoginComponent} from './login/login.component';
import {LogoutComponent} from './logout/logout.component';
import {UserService} from './user/service/user.service';
import {AuthButtonComponent} from './shared/component/auth-button/auth-button.component';
import {AuthentificationService} from './shared/service/auth/authentification.service';
import {GuardService} from './shared/service/guard/guard.service';
import {PatientListComponent} from './patient/patient-list/patient-list.component';
import {PatientDetailComponent} from './patient/patient-detail/patient-detail.component';
import {PatientService} from './patient/service/patient.service';
import {TitelComponent} from './titel/titel.component';
import {MainNavComponent} from './main-nav/main-nav.component';
import {MessageService} from './shared/service/message/message.service';
import {Ng2DatetimePickerModule} from './shared/component/datetime-picker/NG2DatetimePicker.module';
// Feature-modules
import {IndikatorModule} from './indikator/indikator.module';
import {MedikationModule} from './medicament/medicament.module';
import {BehandlungsJournalModule} from './bhjournal/bhjournal.module';
import {PatientCardComponent} from './patient/patient-card/patient-card.component';
import {PatientMenuComponent} from './patient/patient-menu/patient-menu.component';
import {SearchComponent} from './shared/component/search/search.component';
import {SearchService} from './shared/component/service/search.service';

// Angular2-jwt authHttp const used in provideAuth
const bhj_HEADER_NAME = 'Authorisation',
  bhj_HEADER_PREFIX = 'Bearer',
  bhj_TOKEN_NAME = 'token',
  bhj_TOKEN_GETTER_FUNCTION = () => sessionStorage.getItem(bhj_TOKEN_NAME);

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SignupComponent,
    LoginComponent,
    PatientListComponent,
    PatientDetailComponent,
    TitelComponent,
    MainNavComponent,
    AuthButtonComponent,
    LogoutComponent,
    PatientCardComponent,
    PatientMenuComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2DatetimePickerModule,
    IndikatorModule,
    MedikationModule,
    BehandlungsJournalModule,
    routing
  ],
  providers: [
    provideAuth({
      headerName: bhj_HEADER_NAME,
      headerPrefix: bhj_HEADER_PREFIX,
      tokenName: bhj_TOKEN_NAME,
      tokenGetter: bhj_TOKEN_GETTER_FUNCTION,
      globalHeaders: [{'Content-Type': 'application/json'}],
      noJwtError: true,
      noTokenScheme: true
    }),
    UserService,
    PatientService,
    AuthentificationService,
    GuardService,
    MessageService,
    SearchService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule {
}
