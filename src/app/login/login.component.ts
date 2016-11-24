import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {User} from '../user/model/user';
import {AuthentificationService} from '../shared/service/auth/authentification.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  private LoginForm: FormGroup;
  private LoginStatus: boolean;
  public submitted: boolean;

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
      this.LoginStatus = this.authService.login(user);
      if (this.LoginStatus) {
        this.router.navigate(['/user']);
        // redirect to main
      } else {
        // redirect to login
        this.router.navigate(['/login']);
      }
    }
    console.log(user, isValid);
  }


}
