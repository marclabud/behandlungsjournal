import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {PatientDetailComponent} from './patient-detail.component';
import {HttpClientModule} from '@angular/common/http';
import {PatientService} from '../service/patient.service';
import {FormsModule} from '@angular/forms';


describe('Component: PatientDetail', () => {
  let component: PatientDetailComponent;
  let fixture: ComponentFixture<PatientDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PatientDetailComponent],
      imports: [HttpClientModule, FormsModule],
      providers: [PatientService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientDetailComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
