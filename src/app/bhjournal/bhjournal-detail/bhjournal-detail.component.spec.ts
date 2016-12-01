/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {BhjournalDetailComponent} from './bhjournal-detail.component';

describe('BhjournalDetailComponent', () => {
  let component: BhjournalDetailComponent;
  let fixture: ComponentFixture<BhjournalDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BhjournalDetailComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BhjournalDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
