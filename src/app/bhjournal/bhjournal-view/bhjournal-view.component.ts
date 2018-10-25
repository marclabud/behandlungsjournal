import {Component, OnInit, OnDestroy} from '@angular/core';
import {BhJournalService} from '../service/bhjournal.service';
import {Patient} from '../../patient/model/patient';
import {Subscription} from 'rxjs';
import {MessageService} from '../../shared/service/message/message.service';
import {PatientService} from '../../patient/service/patient.service';
import {BhJournal} from '../model/bhjournal';
import * as moment from 'moment';
import {Dauer} from '../../shared/model/dauer';
import {Router} from '@angular/router';

@Component({
  selector: 'app-bhjournal',
  templateUrl: 'bhjournal-view.component.html',
  styleUrls: ['bhjournal-view.component.scss']
})
export class BhjournalComponent implements OnInit, OnDestroy {
  title = 'Behandlungsjournal';
  private journalsUTC: Array<BhJournal> = [];
  private therapiedauer: Dauer = new Dauer();
  // private removed due to angular aot rules
  isLoading = true;
  private subscriptionPatient: Subscription;
  private selectedPatient: Patient = null;
  private selectedBhJournal: BhJournal;
  private patient_id: string = null;
  private messageServicePatient: MessageService<Patient>;
  private messageServiceBhJournal: MessageService<BhJournal>;

  /* tslint:disable-next-line:no-unused-variable */
  private labelTherapieStart = 'Beginn der Therapie:';
  /* tslint:disable-next-line:no-unused-variable */
  private labelTherapieEnde = 'Ende der Therapie:';

  constructor(private bhjournalService: BhJournalService, private patientService: PatientService, private router: Router) {
    this.messageServiceBhJournal = bhjournalService.messageService;
    this.messageServicePatient = patientService.messageService;
    this.subscriptionPatient = this.messageServicePatient.Itemselected$.subscribe(
      patient => {
        this.selectedPatient = patient;
        this.getJournalsbyPatient(this.selectedPatient._id);
      });
  }

  // To Do: Refactor Logic, when Patient is selectedPatient
  ngOnInit() {
    if (this.selectedPatient !== null) {
      this.patient_id = this.selectedPatient._id;
    } else {
      // Component called by path
      this.selectedPatient = this.patientService.readCache();
      if (null == this.selectedPatient) {
        // Noch kein Patient ausgewählt und leerer Cache nach Userwechsel
        this.isLoading = true;
        console.log('Bhjournal-Component ngOnInit selected Patient is null');
        // Redirect zur Patienten auswählen
        this.router.navigate(['/patient-card']);
      } else {
        this.patient_id = this.selectedPatient._id;
      }
    }
    // Alle Journale für einen Patienten lesen
    if (this.patient_id !== null) {
      this.getJournalsbyPatient(this.patient_id);
    } else {
      this.isLoading = true;
    }
  }

  private getJournalsbyPatient(patient_id: string) {
    this.bhjournalService.getJournalsbyPatient_id(patient_id).subscribe(
      journal => this.getJournals(journal),
      error => console.log('getJournalsbyPatient', error),
      () => this.isLoading = false
    );
  };

  private getJournals(journals: Array<BhJournal>) {
    console.log('getJournals Parameter journals: ', journals);
    this.journalsUTC = journals;
    if (journals.length) {
      this.selectedBhJournal = this.journalsUTC[0];
      this.patient_id = this.selectedBhJournal._id;
      // TODO: ein Patient kann mehrere Journale haben, wenn sortiert nach Jüngstem wäre 1. element ok sonst nok !!
      this.therapiedauer.startDatum = moment.utc(this.selectedBhJournal.dauer.startDatum);
      this.therapiedauer.endeDatum = moment.utc(this.selectedBhJournal.dauer.endeDatum);
      this.messageServiceBhJournal.selectItem(this.selectedBhJournal);
    } else { // Kein BhJournal vorhanden, bhjournal anlegen
      this.router.navigate(['/bhjournal-list-detail']);
    }
  };

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscriptionPatient.unsubscribe();
  }
}

