/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {PatientListComponent} from './patient-list.component';
import {HttpModule} from '@angular/http';
import {PatientService} from '../service/patient.service';
import {FormsModule} from '@angular/forms';


describe('Component: PatientList', () => {
  let component: PatientListComponent;
  let fixture: ComponentFixture<PatientListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PatientListComponent],
      imports: [HttpModule, FormsModule],
      providers: [PatientService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientListComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
