import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Patient} from './../../patient/model/patient';

@Injectable()
export class MessageService {
  // Observable string sources
  private selectedPatientSource = new Subject<Patient>();
  // Observable string streams
  Patientselected$ = this.selectedPatientSource.asObservable();

// Service message commands
  selectPatient(patient: Patient) {
    this.selectedPatientSource.next(patient);
  }

}
