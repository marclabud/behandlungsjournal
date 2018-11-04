/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {HaeufigkeitService} from './service/haeufigkeit.service';
import {HaeufigkeitComponent} from './haeufigkeit.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

describe('HaeufigkeitComponent', () => {
  let component: HaeufigkeitComponent;
  let fixture: ComponentFixture<HaeufigkeitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HaeufigkeitComponent],
      imports: [HttpClientModule, FormsModule],
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
