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
import {AuthService} from './shared/service/auth/auth.service';
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
import {BhjDatepickerComponent} from './shared/component/bhj-datepicker/bhj-datepicker.component';
import {HaeufigkeitComponent} from './shared/component/haeufigkeit/haeufigkeit.component';
import {MedicamentDetailComponent} from './medicament/medicament-detail/medicament-detail.component';
import {MedicamentListComponent} from './medicament/medicament-list/medicament-list.component';
import { IndikatorListComponent } from './indikator/indikator-list/indikator-list.component';
import { IndikatorDetailComponent } from './indikator/indikator-detail/indikator-detail.component';
import { DauerComponent } from './shared/component/dauer/dauer.component';

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
    BhjDatepickerComponent,
    HaeufigkeitComponent,
    MedicamentDetailComponent,
    MedicamentDetailComponent,
    MedicamentListComponent,
    IndikatorListComponent,
    IndikatorDetailComponent,
    DauerComponent
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
    MessageService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule {
}
