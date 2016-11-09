'use strict';
import { Component, OnInit } from '@angular/core';
import {BhJournalService} from '../service/bhjournal.service';
import {Patient} from '../../patient/model/patient';
import {Subscription} from 'rxjs/Subscription';
import {MessageService} from '../../shared/service/message/message.service';
import {BhJournal} from '../model/bhjournal';

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
  constructor(private bhjournalService: BhJournalService, private messageService: MessageService) {
    this.subscription = messageService.Patientselected$.subscribe(
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
      this.selectedPatient = JSON.parse(sessionStorage.getItem('patient'));
      this.patient_id = this.selectedPatient._id;
      console.log('Bhjournal-Component ngOnInit selected Patient is undefined');
    }
    this.getJournalsbyPatient(this.patient_id);

  }
  private getJournalsbyPatient(patient_id: string) {
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
