/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {IndikatorListComponent} from './indikator-list.component';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {BhJournalService} from '../../bhjournal/service/bhjournal.service';
import {IndikatorService} from '../service/indikator.service';
import {IndikatorDetailComponent} from '../indikator-detail/indikator-detail.component';
import {HaeufigkeitComponent} from '../../shared/component/haeufigkeit/haeufigkeit.component';
import {DauerComponent} from '../../shared/component/dauer/dauer.component';
import {BhjDatepickerComponent} from '../../shared/component/bhj-datepicker/bhj-datepicker.component';
import {HaeufigkeitService} from '../../shared/component/haeufigkeit/service/haeufigkeit.service';


describe('IndikatorListComponent', () => {
  let component: IndikatorListComponent;
  let fixture: ComponentFixture<IndikatorListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IndikatorListComponent, IndikatorDetailComponent, HaeufigkeitComponent, DauerComponent, BhjDatepickerComponent],
      imports: [HttpModule, FormsModule],
      providers: [BhJournalService, IndikatorService, HaeufigkeitService]
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
