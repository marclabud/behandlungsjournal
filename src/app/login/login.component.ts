import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {User} from '../user/model/user';
import {AuthService} from '../shared/service/auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  private LoginForm: FormGroup;
  private LoginStatus: boolean;
  public submitted: boolean;

  constructor(private authService: AuthService,
              private router: Router,
              private _formbuilder: FormBuilder) {
  }

  ngOnInit() {
    this.LoginForm = this._formbuilder.group({
      email: ['', [<any>Validators.required]],
      password: ['', [<any>Validators.required]]
    });
  }

  onSubmit(model: User, isValid: Boolean) {
    if (typeof(model.email) === 'string' && typeof(model.password) === 'string') {
      this.submitted = true; // set form submit to true
      this.LoginStatus = this.authService.login(model);
      if (this.LoginStatus) {
        this.router.navigate(['/user']);
        // redirect to main
      } else {
        // redirect to login
        this.router.navigate(['/login']);
      }
    }
    console.log(model, isValid);
  }


}
