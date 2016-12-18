import {Component, OnInit, OnChanges} from '@angular/core';
import {Patient} from '../model/patient';
import {PatientService} from '../service/patient.service';
import {MessageService} from '../../shared/service/message/message.service';
import {SearchService} from '../../shared/component/service/search.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-patient-card',
  templateUrl: './patient-card.component.html',
  styleUrls: ['./patient-card.component.scss']
})

export class PatientCardComponent implements OnInit, OnChanges {

  private patients: Array<Patient> = [];
  private filteredpatients: Array<Patient> = [];
  private isLoading = true;
  private isEditing = false;
  selectedPatient: Patient;
  searchSubscript: Subscription;

  PatientAnzeige: string = 'Patient';
  private messageService: MessageService<Patient>;

  private infoMsg = {body: '', type: 'info'};

// ToDo: @Output definieren: Output ist der ausgewählte Patient
  constructor(private patientService: PatientService, private searchService: SearchService) {
    this.messageService = patientService.messageService;
    this.searchSubscript = searchService.SearchTermselected$.subscribe(
      search => {
        this.onNewFilter(search);
      });
  }

  ngOnInit() {
    this.getPatients();
  }

  ngOnChanges() {
    this.isEditing = false;
  }

  getPatients() {
    this.patientService.getAllItems().subscribe(
      data => {
        this.patients = data;
        this.filteredpatients = this.patients;
        this.isLoading = false;
      },
      error => console.log(error),
      () => this.isLoading = false
    );
  }

  onNewFilter(search: string) {
    this.filteredpatients = this.patients.filter(filterPatientname(search));
    console.log(this.filteredpatients);
  }

  onSelect(patient: Patient): void {
    this.selectedPatient = patient;
    this.PatientAnzeige = this.selectedPatient.name;
    this.messageService.selectItem(patient);
  }

  // Ein neuer Patient soll im patient-Detail angelegt werden (button-click hinzufügen)
  onAddPatient(): Patient {
    let patient = new Patient();
    patient.name = 'Neuer Patient';
    this.selectedPatient = patient;
    // Patient-Detail anzeigen
    this.isEditing = true;
    return this.selectedPatient;
  }

  // Im Patient-Detail wurde ein neuer Patient angelegt
  onNewPatient(patient: Patient): Patient {
    console.log('onselect selectedPatient', this.selectedPatient);
    this.selectedPatient = patient;
    this.patients.push(patient);
    this.actualizeCache();
    this.isEditing = false;
    return this.selectedPatient;
  }

  onEditPatient(patient: Patient): void {
    console.log('OnEditPatient isEditing', this.isEditing);
    this.selectedPatient = patient;
    this.isEditing = true;
  }

  /* tslint:disable-next-line:no-unused-variable */
  private onDeletePatient(patient: Patient) {
    if (patient) {
      this.patientService.deletePatient(patient).subscribe(
        res => {
          let pos = this.patients.map(obj => {
            return obj._id;
          }).indexOf(patient._id);
          this.patients.splice(pos, 1);
          this.actualizeCache();
          this.sendInfoMsg('Patient erfolgreich gelöscht.', 'success');
        },
        error => console.log(error)
      );
    } else {
      this.sendInfoMsg('Kein Patient zum Löschen ausgewählt.', 'danger');
    }
  }

  onDetailDone() {
    this.isEditing = false;
  };


  private actualizeCache() {
    this.patientService.writeCacheList(this.patients);
  }

  sendInfoMsg(body, type, time = 3000) {
    this.infoMsg.body = body;
    this.infoMsg.type = type;
    window.setTimeout(() => this.infoMsg.body = '', time);
  }

}

function filterPatientname(searchTerm: string) {
  return function (element) {
    return element.name.indexOf(searchTerm) !== -1;
  };
}

