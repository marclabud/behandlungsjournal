import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {SignupComponent}      from './signup/signup.component';
import {LoginComponent}      from './login/login.component';

const appRoutes: Routes = [
  {
    path: '',
    component: SignupComponent
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
