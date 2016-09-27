import {BrowserModule} from '@angular/platform-browser';
import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {routing} from './app.routing';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {UserComponent} from './user/user.component';
import {SignupComponent} from './signup/signup.component';
import {LoginComponent} from './login/login.component';
import {DataService} from './services/data.service';
import {AuthService } from './shared/auth/auth.service';
import {GuardService} from './shared/guard/guard.service';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SignupComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routing,
  ],
  providers: [
    DataService,AuthService,GuardService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule {
}
