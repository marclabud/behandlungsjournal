import {ModuleWithProviders}    from '@angular/core';
import {Routes, RouterModule}   from '@angular/router';
import {GuardService} from './shared/guard/guard.service';

import {SignupComponent}        from './signup/signup.component';
import {LoginComponent}         from './login/login.component';
import {UserComponent}          from './user/user.component';
import {BhjournalComponent} from './bhjournal/bhjournal.component';

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
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
