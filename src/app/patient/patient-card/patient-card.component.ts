import {Component, OnInit} from '@angular/core';
import {Patient} from '../model/patient';
import {PatientService} from '../service/patient.service';
import {MessageService} from '../../shared/service/message/message.service';

@Component({
    selector: 'app-patient-card',
    templateUrl: './patient-card.component.html',
    styleUrls: ['./patient-card.component.css']
})

export class PatientCardComponent implements OnInit {

    private patients: Array<Patient> = [];
    private isLoading = true;
    private isEditing = false;
    selectedPatient: Patient;

    PatientAnzeige: string = 'Patient';
    private messageService: MessageService<Patient>;

    private infoMsg = {body: '', type: 'info'};

// ToDo: @Output definieren: Output ist der ausgewählte Patient
    constructor(private patientService: PatientService) {
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
    enableEditing() {
        this.isEditing = true;
    }

    sendInfoMsg(body, type, time = 3000) {
        this.infoMsg.body = body;
        this.infoMsg.type = type;
        window.setTimeout(() => this.infoMsg.body = '', time);
    }

    // private actualizeCache() {
    //     this.bhjournalService.writeCacheList(this.journals);
    // }

}
