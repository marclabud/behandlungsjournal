import {Component, OnInit} from "@angular/core";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import { DataService } from '../services/data.service';
import {User} from "../shared/auth/user";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html'
})
export class SignupComponent implements OnInit {
  private SignupForm: FormGroup;
  public submitted: boolean;
  constructor( private dataService: DataService,
               private formbuilder: FormBuilder) { }

  ngOnInit() {
    this.SignupForm = this.formbuilder.group({
      name: ['',[<any>Validators.required]],
      email: ['',[<any>Validators.required]],
      password: ['',[<any>Validators.required]]
    })
  }

  onSubmit(model: User, isValid: Boolean) {
    if (typeof(model.name) === 'string' &&
      typeof(model.email) === 'string' &&
      typeof(model.password) === 'string' &&
      isValid) {

      this.dataService.addUser(model).subscribe(
        res => {
          var newUser = res.json();
          this.submitted = true; // set form submit to true
        },
        error => console.log(error)
      );


    }
    // error
    console.log(model, isValid)
  }
}
