/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HaeufigkeitComponent } from './haeufigkeit.component';

describe('HaeufigkeitComponent', () => {
  let component: HaeufigkeitComponent;
  let fixture: ComponentFixture<HaeufigkeitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HaeufigkeitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HaeufigkeitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
