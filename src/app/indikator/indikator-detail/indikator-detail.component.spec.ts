/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {IndikatorDetailComponent} from './indikator-detail.component';
import {HaeufigkeitComponent} from '../../shared/component/haeufigkeit/haeufigkeit.component';
import {IndikatorListComponent} from '../indikator-list/indikator-list.component';
import {DauerComponent} from '../../shared/component/dauer/dauer.component';
import {BhjDatepickerComponent} from '../../shared/component/bhj-datepicker/bhj-datepicker.component';
import {HttpModule} from '@angular/http';
import {AUTH_PROVIDERS} from 'angular2-jwt';
import {FormsModule} from '@angular/forms';
import {BhJournalService} from '../../bhjournal/service/bhjournal.service';
import {IndikatorService} from '../service/indikator.service';
import {HaeufigkeitService} from '../../shared/component/haeufigkeit/service/haeufigkeit.service';


describe('IndikatorDetailComponent', () => {
  let component: IndikatorDetailComponent;
  let fixture: ComponentFixture<IndikatorDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IndikatorDetailComponent, IndikatorListComponent, HaeufigkeitComponent, DauerComponent, BhjDatepickerComponent],
      imports: [HttpModule, FormsModule],
      providers: [BhJournalService, IndikatorService, HaeufigkeitService, AUTH_PROVIDERS]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndikatorDetailComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
