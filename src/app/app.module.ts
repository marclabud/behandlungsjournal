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
import {AuthService } from './shared/service/auth/auth.service';
import {GuardService} from './shared/service/guard/guard.service';
import { PatientListComponent } from './patient/patient-list/patient-list.component';
import { PatientDetailComponent } from './patient/patient-detail/patient-detail.component';
import {PatientService} from './patient/service/patient.service';
import { BhjournalComponent } from './bhjournal/bhjournal.component';
import { TitelComponent } from './titel/titel.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { MessageService } from './shared/message/message.service';

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
    MainNavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routing,
  ],
  providers: [
    UserService,
    PatientService,
    AuthService,
    GuardService,
    PatientService,
    MessageService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule {
}
