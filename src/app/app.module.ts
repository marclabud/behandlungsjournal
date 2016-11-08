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
import { BhjournalComponent } from './bhjournal/bhjournal-view/bhjournal-view.component';
import { TitelComponent } from './titel/titel.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { MessageService } from './shared/service/message/message.service';
import { BhjournalDetailComponent } from './bhjournal/bhjournal-detail/bhjournal-detail.component';
import { BhjournalListComponent } from './bhjournal/bhjournal-list/bhjournal-list.component';
import {BhJournalService} from './bhjournal/service/bhjournal.service';

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
    BhjournalListComponent
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
    BhJournalService,
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
