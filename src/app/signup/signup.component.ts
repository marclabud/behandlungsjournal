import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, FormBuilder, Validators} from "@angular/forms";
import {IUser} from "../shared/authorisation/user";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html'
})
export class SignupComponent implements OnInit {
  public SignupForm: FormGroup;
  public submitted: boolean;
  constructor(private _formbuilder: FormBuilder) { }

  ngOnInit() {
    this.SignupForm = this._formbuilder.group({
      name: ['',[<any>Validators.required]],
      email: ['',[<any>Validators.required]],
      password: ['',[<any>Validators.required]]
    })
  }
  onSubmit(model: IUser, isValid: Boolean) {
    // ToDo: CheckValidators
    this.submitted = true; // set form submit to true
    console.log(model,isValid)
  }
}
