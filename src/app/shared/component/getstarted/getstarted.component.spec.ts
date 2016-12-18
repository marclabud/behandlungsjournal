/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GetstartedComponent } from './getstarted.component';

describe('GetstartedComponent', () => {
  let component: GetstartedComponent;
  let fixture: ComponentFixture<GetstartedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetstartedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetstartedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
