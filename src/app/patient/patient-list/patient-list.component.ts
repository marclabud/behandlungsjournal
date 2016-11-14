import {Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import {PatientService} from '../service/patient.service';
import {Patient} from '../model/patient';
import {MessageService} from '../../shared/service/message/message.service';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {

  private patients: Array<Patient> = [];
  private isLoading = true;
  selectedPatient: Patient;
  // DropdownListbox im Menü
  PatientAnzeige: string = 'Patient';
  private messageService: MessageService<Patient>;

// ToDo: @Output definieren: Output ist der ausgewählte Patient
  constructor(http: Http, private patientService: PatientService) {
    this.messageService = patientService.messageService;
  }

  ngOnInit() {
    this.getPatients();
    this.getSelectedPatient();
  }

  getPatients() {
    this.patientService.getAllItems().subscribe(
      data => this.patients = data,
      error => console.log(error),
      () => this.isLoading = false
    );
  }

  getSelectedPatient() {
    let patient: Patient;
    patient = this.patientService.readCache();
    if (patient != null) {
      this.onSelect(patient);
    }
  }

  onSelect(patient: Patient): void {
    this.selectedPatient = patient;
    console.log('Component list view onSelect', patient);
    this.PatientAnzeige = this.selectedPatient.name;
    this.messageService.selectItem(patient);
  }

  onAddPatient(): Patient {
    let patient = new Patient();
    patient.name = 'Neuer Patient';
    console.log('onselect patient', patient);
    this.selectedPatient = patient;
    console.log('onselect selectedPatient', this.selectedPatient);
    return this.selectedPatient;
  }
}
