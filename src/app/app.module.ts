import {BrowserModule} from '@angular/platform-browser';
import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {routing} from './app.routing';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {UserComponent} from './user/user.component';
import {SignupComponent} from './signup/signup.component';
import {LoginComponent} from './login/login.component';
import {UserService} from './user/service/user.service';
import {AuthentificationService} from './shared/service/auth/authentification.service';
import {GuardService} from './shared/service/guard/guard.service';
import {PatientListComponent} from './patient/patient-list/patient-list.component';
import {PatientDetailComponent} from './patient/patient-detail/patient-detail.component';
import {PatientService} from './patient/service/patient.service';
import {BhjournalComponent} from './bhjournal/bhjournal-view/bhjournal-view.component';
import {TitelComponent} from './titel/titel.component';
import {MainNavComponent} from './main-nav/main-nav.component';
import {MessageService} from './shared/service/message/message.service';
import {BhjournalDetailComponent} from './bhjournal/bhjournal-detail/bhjournal-detail.component';
import {BhjournalListComponent} from './bhjournal/bhjournal-list/bhjournal-list.component';
import {BhJournalService} from './bhjournal/service/bhjournal.service';
import {Ng2DatetimePickerModule} from './shared/component/datetime-picker/NG2DatetimePicker.module';
import {AuthButtonComponent} from './shared/component/auth-button/auth-button.component';
import {LogoutComponent} from './logout/logout.component';
import {provideAuth} from 'angular2-jwt';

// Feature-modules
import {IndikatorModule} from './indikator/indikator.module';
import {MedikationModule} from './medicament/medicament.module';



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
    BhjournalComponent,
    TitelComponent,
    MainNavComponent,
    BhjournalDetailComponent,
    BhjournalListComponent,
    AuthButtonComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    Ng2DatetimePickerModule,
    IndikatorModule,
    MedikationModule,
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
    BhJournalService,
    AuthentificationService,
    GuardService,
    MessageService,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule {
}
