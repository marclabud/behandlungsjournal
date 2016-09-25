/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { FormBuilder } from '@angular/forms'

describe('Component: Login', () => {
  it('should create an instance', () => {
    let formbuilder= new FormBuilder() ;
    let component = new LoginComponent(formbuilder);
    expect(component).toBeTruthy();
  });
});
