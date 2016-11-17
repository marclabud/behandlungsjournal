/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {BhjDatepickerComponent} from './bhj-datepicker.component';
import {DatepickerModule} from 'ng2-bootstrap';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

describe('BhjDatepickerComponent', () => {
  let component: BhjDatepickerComponent;
  let fixture: ComponentFixture<BhjDatepickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BhjDatepickerComponent],
      imports: [DatepickerModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BhjDatepickerComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
