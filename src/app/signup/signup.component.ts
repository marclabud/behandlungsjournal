import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { UserService } from '../user/service/user.service';
import {User} from '../shared/auth/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html'
})
export class SignupComponent implements OnInit {
  private SignupForm: FormGroup;
  public submitted: boolean;
  constructor( private userService: UserService,
               private formbuilder: FormBuilder) { }

  ngOnInit() {
    this.SignupForm = this.formbuilder.group({
      name: ['', [<any>Validators.required]],
      email: ['', [<any>Validators.required]],
      password: ['', [<any>Validators.required]]
    });
  }

  onSubmit(model: User, isValid: Boolean) {
    if (typeof(model.name) === 'string' &&
      typeof(model.email) === 'string' &&
      typeof(model.password) === 'string' &&
      isValid) {

      this.userService.addUser(model).subscribe(
        res => {
          this.submitted = true; // set form submit to true
        },
        error => console.log(error)
      );


    }
    // error
    console.log(model, isValid);
  }
}
