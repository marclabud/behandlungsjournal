/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {MainNavComponent} from './main-nav.component';
import {PatientListComponent} from '../patient/patient-list/patient-list.component';
import {HttpClientModule} from '@angular/common/http';
import {PatientService} from '../patient/service/patient.service';
import {AuthentificationService} from '../shared/service/auth/authentification.service';
import {UserService} from '../user/service/user.service';
import {AuthButtonComponent} from '../shared/component/auth-button/auth-button.component';
import {PatientMenuComponent} from '../patient/patient-menu/patient-menu.component';
import {SearchComponent} from '../shared/component/search/search.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';

describe('MainNavComponent', () => {
  let component: MainNavComponent;
  let fixture: ComponentFixture<MainNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MainNavComponent,
        PatientListComponent,
        AuthButtonComponent,
        PatientMenuComponent,
        SearchComponent
      ],
      imports: [HttpClientModule, ReactiveFormsModule, FormsModule],
      providers: [PatientService, AuthentificationService, UserService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainNavComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
