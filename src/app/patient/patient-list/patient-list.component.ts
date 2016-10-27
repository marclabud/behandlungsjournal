import { Component, OnInit } from '@angular/core';
import { PatientService } from './../patient.service';
import {Patient} from '../model/patient';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {
  private patients = [];
  private isLoading = true;
  selectedPatient: Patient;
// ToDo: @Output definieren: Output ist der ausgewählte Patient
  constructor(private patientService: PatientService) { }

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
    console.log ('onselect patient', patient);
    this.selectedPatient = patient;
    console.log ('onselect selectedPatient', this.selectedPatient);
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
