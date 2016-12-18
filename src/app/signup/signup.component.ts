import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../user/service/user.service';
import {User} from '../user/model/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html'
})
export class SignupComponent implements OnInit {

  private signupForm: FormGroup;
  public submitted: boolean;
  /* tslint:disable-next-line:no-unused-variable */
  private title: string = 'Erstellen Sie ihr Konto';
  /* tslint:disable-next-line:no-unused-variable */
  private login: boolean = true;
  /* tslint:disable-next-line:no-unused-variable */
  private getstarted: boolean = true;

  constructor(private userService: UserService,
              private formbuilder: FormBuilder,
              private router: Router) {
  }

  ngOnInit() {
    this.signupForm = this.formbuilder.group({
      name: ['', [<any>Validators.required]],
      email: ['', [<any>Validators.required]],
      password: ['', [<any>Validators.required]]
    });
    this.submitted = false;
  }

  onSubmit(model: User, isValid: Boolean) {
    if (typeof(model.name) === 'string' &&
      typeof(model.email) === 'string' &&
      typeof(model.password) === 'string' && isValid) {
      this.userService.addUser(model).subscribe(
        res => {
          this.submitted = true; // set form submit to true
        },
        error => console.log(error)
      );
      this.actualizeCache();
      this.router.navigate(['/getstarted']);
    }
    // error
    console.log(model, isValid);
  }

  private actualizeCache() {
    // read all from DB and actualize cache
    this.userService.getAllItems(true);
  }
}
