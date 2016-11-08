import { Component, OnInit } from '@angular/core';
import { PatientService } from '../service/patient.service';
import {Patient} from '../model/patient';
import {MessageService} from '../../shared/service/message/message.service';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {
  private patients = [];
  private isLoading = true;
  selectedPatient: Patient;
  // DropdownListbox im Menü
  PatientAnzeige: string = 'Patient';
// ToDo: @Output definieren: Output ist der ausgewählte Patient
  constructor(private patientService: PatientService, private messageService: MessageService) { }

  ngOnInit() {
    this.getPatients();

  }
  getPatients() {
    this.patientService.getPatients().subscribe(
      data => this.patients = data,
      error => console.log(error),
      () => this.isLoading = false
    );
  };

  onSelect(patient: Patient): void {
    this.selectedPatient = patient;
    console.log('Component list view onSelect', patient);
    this.PatientAnzeige = this.selectedPatient.name;
    this.messageService.selectPatient(patient);
  }

  onAddPatient(): Patient {
    let patient = new Patient();
    patient.name = 'Neuer Patient';
    console.log ('onselect patient', patient);
    this.selectedPatient = patient;
    console.log ('onselect selectedPatient', this.selectedPatient);
    return this.selectedPatient;
  }
}
