/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { FormBuilder, Validators } from '@angular/forms'
import { IUser} from "../shared/authorisation/user";

describe('Component: Login', () => {
  it('should create an instance', () => {
    let formbuilder= new FormBuilder() ;
    let component = new LoginComponent(formbuilder);
    expect(component).toBeTruthy();
  });
  describe('ngOnInit', () => {
    it('should create form group with email and password', () => {
      let formbuilder = new FormBuilder();
      spyOn(formbuilder, 'group');
      let component = new LoginComponent(formbuilder);

      component.ngOnInit();

      expect(formbuilder.group).toHaveBeenCalledWith({
        email: ['', [<any>Validators.required]],
        password: ['', [<any>Validators.required]]
      });
    });
  });

  describe('onSubmit', () => {
    it('should call addUser on UserService if isValid is true', () => {
      let formbuilder = new FormBuilder();
      let component = new LoginComponent(formbuilder);
      let user = {name: 'rudi', email: 'cant@fail.io', password: 'oops'};
      let isValid = true;

      component.onSubmit(user, isValid);

      //expect()
    });
    it('should do nothing if isValid is false', () => {
      let formbuilder = new FormBuilder();
      let component = new LoginComponent(formbuilder);
      let user = {name: 'rudi', email: 'cant@fail.io', password: 'oops'};
      let isValid = false;

      component.onSubmit(user, isValid);

      //expect()
    });
  });
});
