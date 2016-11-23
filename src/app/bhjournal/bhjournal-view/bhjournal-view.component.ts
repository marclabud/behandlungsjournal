'use strict';
import {Component, OnInit, OnDestroy} from '@angular/core';
import {Http} from '@angular/http';
import {BhJournalService} from '../service/bhjournal.service';
import {Patient} from '../../patient/model/patient';
import {Subscription} from 'rxjs/Subscription';
import {MessageService} from '../../shared/service/message/message.service';
import {PatientService} from '../../patient/service/patient.service';
import {BhJournal} from '../model/bhjournal';
import * as moment from 'moment';

@Component({
  selector: 'app-bhjournal',
  templateUrl: 'bhjournal-view.component.html',
  styleUrls: ['bhjournal-view.component.css']
})
export class BhjournalComponent implements OnInit, OnDestroy {
  title = 'Behandlungsjournal';
  private journalsUTC: Array<BhJournal> = [];
  private therapieStartDatum: moment.Moment;
  private therapieEndeDatum: moment.Moment;
  private isLoading = true;
  private subscriptionPatient: Subscription;
  private selectedPatient: Patient;
  private selectedBhJournal: BhJournal;
  private patient_id: string;
  private messageServicePatient: MessageService<Patient>;
  private messageServiceBhJournal: MessageService<BhJournal>;
  public labelTherapieStart = 'Beginn der Therapie';
  public labelTherapieEnde = 'Ende der Therapie';
  // ToDo: move label to const

  constructor(http: Http, private bhjournalService: BhJournalService, private patientService: PatientService) {
    this.messageServiceBhJournal = bhjournalService.messageService;
    this.messageServicePatient = patientService.messageService;
    this.subscriptionPatient = this.messageServicePatient.Itemselected$.subscribe(
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
      this.selectedPatient = this.patientService.readCache();
      this.patient_id = this.selectedPatient._id;
      console.log('Bhjournal-Component ngOnInit selected Patient is undefined');
    }
    this.getJournalsbyPatient(this.patient_id);
  }

  private getJournalsbyPatient(patient_id: string) {
    this.bhjournalService.getJournalsbyPatient_id(patient_id).subscribe(
      journal => this.getJournals(journal),
      error => console.log(error),
      () => this.isLoading = false
    );
  };

  private getJournals(journals: Array<BhJournal>) {
    this.journalsUTC = journals;
    if (0 !== journals.length) {
      this.selectedBhJournal = this.journalsUTC[0];
      // select item schreibt auch den cache, daher erst ab hier transformation auf lokale Zeit möglich.
      this.therapieStartDatum = moment.utc(this.selectedBhJournal.startdatum);
      this.therapieEndeDatum = moment.utc(this.selectedBhJournal.enddatum);
      this.messageServiceBhJournal.selectItem(this.selectedBhJournal);
    }
  };

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this. subscriptionPatient.unsubscribe();
  }
}

