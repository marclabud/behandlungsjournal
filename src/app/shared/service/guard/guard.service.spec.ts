/* tslint:disable:no-unused-variable */

import {TestBed, inject} from '@angular/core/testing';
import {GuardService} from './guard.service';
import {AuthentificationService} from '../auth/authentification.service';
import {UserService} from '../../../user/service/user.service';
import {HttpModule} from '@angular/http';
import {routing} from '../../../app.routing';
import {UserComponent} from '../../../user/user.component';
import {BhjournalComponent} from '../../../bhjournal/bhjournal-view/bhjournal-view.component';
import {SignupComponent} from '../../../signup/signup.component';
import {LoginComponent} from '../../../login/login.component';

// describe('Service: Guard', () => {
//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       declarations: [UserComponent, BhjournalComponent, SignupComponent, LoginComponent ],
//       providers: [GuardService,
//       AuthentificationService,
//       UserService,
//       ],
//       imports: [HttpModule, routing]
//     });
//   });
//   it('should ...', inject([GuardService], (service: GuardService) => {
//     expect(service).toBeTruthy();
//   }));
// });
