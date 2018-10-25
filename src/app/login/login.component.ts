import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {User} from '../user/model/user';
import {AuthentificationService} from '../shared/service/auth/authentification.service';
import {Router} from '@angular/router';
import {HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  public submitted: boolean;
  // private removed due to angular aot-restriction
  LoginForm: FormGroup;
  isLoading = false;
  infoMsg = {body: '', type: 'info'};
  /* tslint:disable-next-line:no-unused-variable */
  title = 'Bitte anmelden';
  /* tslint:disable-next-line:no-unused-variable */
  signup = true;
  /* tslint:disable-next-line:no-unused-variable */
  getstarted = true;

  constructor(private authService: AuthentificationService,
              private router: Router,
              private _formbuilder: FormBuilder) {
  }

  ngOnInit() {
    this.LoginForm = this._formbuilder.group({
      email: ['', [<any>Validators.required]],
      password: ['', [<any>Validators.required]]
    });
  }

  onSubmit(user: User, isValid: Boolean) {
    if (typeof(user.email) === 'string' && typeof(user.password) === 'string') {
      this.submitted = true; // set form submit to true
      this.authService.login(user).subscribe(userIsLoggedIn => {
          if (userIsLoggedIn) {
            this.isLoading = true;
            // Check redirect for succesful login
            if (this.authService.isLoggedIn()) {
              const redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/patient-card';
              this.router.navigate([redirect]);
            } else {
              this.isLoading = false;
              this.router.navigate(['/login']);
            }

          } else {
            // redirect to login
            this.isLoading = false;
            this.sendInfoMsg('Ungültige Autorisierungsdaten', 'danger');
            this.router.navigate(['/login']);
          }
        },
        error => {
          if (error instanceof HttpResponse) {
            if (401 === error.status) {
              this.sendInfoMsg('Ungültige Autorisierungsdaten', 'danger');
            } else {
              this.sendInfoMsg('Status: ' + error.status + ' Text: ' + error.statusText, 'danger');
            }
          } else {
            console.log(error);
          }
        });
    }
  }

  sendInfoMsg(body, type, time = 3000) {
    this.infoMsg.body = body;
    this.infoMsg.type = type;
    window.setTimeout(() => this.infoMsg.body = '', time);
  }
}

