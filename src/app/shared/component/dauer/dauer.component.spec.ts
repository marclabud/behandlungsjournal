/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {FormsModule} from '@angular/forms';
import {BhjDatepickerComponent} from '../bhj-datepicker/bhj-datepicker.component';

import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DauerComponent } from './dauer.component';

describe('DauerComponent', () => {
  let component: DauerComponent;
  let fixture: ComponentFixture<DauerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DauerComponent, BhjDatepickerComponent ],
      imports: [FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DauerComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
