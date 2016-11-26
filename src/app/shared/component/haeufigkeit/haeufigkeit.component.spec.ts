/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HaeufigkeitService } from './service/haeufigkeit.service';

import { HaeufigkeitComponent } from './haeufigkeit.component';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

describe('HaeufigkeitComponent', () => {
  let component: HaeufigkeitComponent;
  let fixture: ComponentFixture<HaeufigkeitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HaeufigkeitComponent ],
      imports: [HttpModule, FormsModule],
      providers: [HaeufigkeitService]
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
