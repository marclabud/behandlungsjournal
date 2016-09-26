import {Component, OnInit} from "@angular/core";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {User} from "../shared/authorisation/user";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  public LoginForm: FormGroup;
  public submitted: boolean;

  constructor(private _formbuilder: FormBuilder) {
  }

  ngOnInit() {
    this.LoginForm = this._formbuilder.group({
      email:['',[<any>Validators.required]],
      password: ['',[<any>Validators.required]]
    })
  }

  onSubmit(model: User, isValid: Boolean) {
    if (typeof(model.email) === 'string' && typeof(model.password) === 'string') {
      this.submitted = true; // set form submit to true
    }
    console.log(model,isValid)
  }


}
