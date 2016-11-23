/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IndikatorListComponent } from './indikator-list.component';
import {HttpModule} from '@angular/http';
import {BhJournalService} from '../../bhjournal/service/bhjournal.service';

describe('IndikatorListComponent', () => {
  let component: IndikatorListComponent;
  let fixture: ComponentFixture<IndikatorListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndikatorListComponent ],
      imports: [ HttpModule ],
      providers: [ BhJournalService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndikatorListComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
