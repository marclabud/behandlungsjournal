import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {GuardService} from './shared/service/guard/guard.service';
import {SignupComponent} from './signup/signup.component';
import {LoginComponent} from './login/login.component';
import {UserComponent} from './user/user.component';
import {BhjournalComponent} from './bhjournal/bhjournal-view/bhjournal-view.component';
import {BhjournalListComponent} from './bhjournal/bhjournal-list/bhjournal-list.component';
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
    path: 'bhjournal-liste',
    component: BhjournalListComponent,
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
