/* tslint:disable:no-unused-variable */
import {} from 'jasmine';
import {TestBed, async} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {RouterTestingModule} from '@angular/router/testing';
import {MainNavComponent} from './main-nav/main-nav.component';
import {PatientListComponent} from './patient/patient-list/patient-list.component';
import {HttpModule} from '@angular/http';
import {PatientService} from './patient/service/patient.service';

describe('App: Behandlungsjournal', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MainNavComponent,
        PatientListComponent,
      ],
      imports: [RouterTestingModule, HttpModule, ],
      providers:
      [PatientService]
    });
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
