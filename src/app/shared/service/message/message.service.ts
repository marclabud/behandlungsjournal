import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Patient} from './../../../patient/model/patient';

@Injectable()
export class MessageService {
  // Observable string sources
  private selectedPatientSource = new Subject<Patient>();
  // Observable string streams
  Patientselected$ = this.selectedPatientSource.asObservable();

// Service message commands
  selectPatient(patient: Patient) {
    sessionStorage.setItem('patient', JSON.stringify(patient));
    console.log('patient', JSON.stringify(patient));
    this.selectedPatientSource.next(patient);
  }

}
