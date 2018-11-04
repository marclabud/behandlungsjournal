/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {BhjournalDetailComponent} from './bhjournal-detail.component';
import {DauerModule} from '../../shared/component/dauer/dauer.module';
import {FormsModule} from '@angular/forms';
import {BhJournalService} from '../service/bhjournal.service';
import {HttpClientModule} from '@angular/common/http';


describe('BhjournalDetailComponent', () => {
  let component: BhjournalDetailComponent;
  let fixture: ComponentFixture<BhjournalDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BhjournalDetailComponent],
      imports: [DauerModule, FormsModule, HttpClientModule],
      providers: [BhJournalService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BhjournalDetailComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
