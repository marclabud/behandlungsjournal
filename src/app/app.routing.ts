import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {GuardService} from './shared/service/guard/guard.service';
import {SignupComponent} from './signup/signup.component';
import {LoginComponent} from './login/login.component';
import {UserComponent} from './user/user.component';
import {BhjournalComponent} from './bhjournal/bhjournal-view/bhjournal-view.component';
import {BhjournalListComponent} from './bhjournal/bhjournal-list/bhjournal-list.component';
import {BhjournalDetailComponent} from './bhjournal/bhjournal-detail/bhjournal-detail.component';
import {BhjournalListDetailComponent} from './bhjournal/bhjournal-list-detail/bhjournal-list-detail.component';
import {PatientCardComponent} from './patient/patient-card/patient-card.component';
import {LogoutComponent} from './logout/logout.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'user',
    component: UserComponent,
    canActivate: [GuardService]
  },
  {
    path: 'bhjournal',
    component: BhjournalComponent,
    canActivate: [GuardService]
  },
  {
    path: 'bhjournal-list',
    component: BhjournalListComponent,
    canActivate: [GuardService]
  },
  {
    path: 'bhjournal-detail',
    component: BhjournalDetailComponent,
    canActivate: [GuardService]
  },
  {
    path: 'bhjournal-list-detail',
    component: BhjournalListDetailComponent,
    canActivate: [GuardService]
  },
  {
    path: 'patient-card',
    component: PatientCardComponent,
    canActivate: [GuardService]
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'logout',
    component: LogoutComponent
  }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
