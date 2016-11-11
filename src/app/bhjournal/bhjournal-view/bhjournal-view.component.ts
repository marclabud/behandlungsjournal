'use strict';
import {Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import {BhJournalService} from '../service/bhjournal.service';
import {Patient} from '../../patient/model/patient';
import {Subscription} from 'rxjs/Subscription';
import {MessageService} from '../../shared/service/message/message.service';
import {PatientService} from '../../patient/service/patient.service';

@Component({
  selector: 'app-bhjournal',
  templateUrl: 'bhjournal-view.component.html',
  styleUrls: ['bhjournal-view.component.css']
})
export class BhjournalComponent implements OnInit {
  title = 'Behandlungsjournal';
  private journals = [];
  private isLoading = true;
  private subscription: Subscription;
  private selectedPatient: Patient;
  private patient_id: string;
  private messageService: MessageService<Patient>;

  constructor(http: Http, private bhjournalService: BhJournalService, private patientService: PatientService) {
    this.messageService = new MessageService<Patient>(http, patientService);
    this.subscription = this.messageService.Itemselected$.subscribe(
      patient => {
        this.selectedPatient = patient;
        this.getJournalsbyPatient(this.selectedPatient._id);
      });
  }

  ngOnInit() {
    if (typeof (this.selectedPatient) !== 'undefined') {
      this.patient_id = this.selectedPatient._id;
    } else {
      // Component called by path
      this.selectedPatient = this.patientService.getCache().readCache();
      this.patient_id = this.selectedPatient._id;
      console.log('Bhjournal-Component ngOnInit selected Patient is undefined');
    }
    this.getJournalsbyPatient(this.patient_id);
  }

  private getJournalsbyPatient(patient_id:string) {
    this.bhjournalService.getJournalsbyPatient_id(patient_id).subscribe(
      journal => this.journals = journal,
      error => console.log(error),
      () => this.isLoading = false
    );
  };

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }
}
