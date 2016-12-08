import {Component, OnInit, OnDestroy} from '@angular/core';
import {BhJournal} from '../model/bhjournal';
import {Patient} from '../../patient/model/patient';
import {BhJournalService} from '../service/bhjournal.service';
import {PatientService} from '../../patient/service/patient.service';
import {MessageService} from '../../shared/service/message/message.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-bhjournal-list-detail',
  templateUrl: './bhjournal-list-detail.component.html',
  styleUrls: ['./bhjournal-list-detail.component.css']
})

// kombiniertes ListDetail-Control für die Bearbeitung der Behandlungsjournale

export class BhjournalListDetailComponent implements OnInit, OnDestroy {
  private isLoading = true;
  private subscriptionPatient: Subscription;
  private messageServicePatient: MessageService<Patient>;
  private patient_id: string;
  private selectedPatient: Patient;
  private selectedBhJournal: BhJournal;
  private bhJournals: Array<BhJournal>;


  constructor(private bhjournalService: BhJournalService, private patientService: PatientService) {
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
    // Abfrage aller Journale eines Patiente, da das subscribe nur wirkt, wenn die Komponente initialisiert ist
    // wenn der Patient ausgewählt wird.
    this.getJournalsbyPatient(this.patient_id);

  }

  private getJournalsbyPatient(patient_id: string) {
    this.bhjournalService.getJournalsbyPatient_id(patient_id).subscribe(
      journal => this.getJournals(journal),
      error => console.log('getJournalsbyPatient', error),
      () => this.isLoading = false
    );
  }

  private getJournals(journals: Array<BhJournal>) {
    console.log('getJournals Parameter journals: ', journals);
    // this.bhJournalChange.emit(journals.length);
    this.bhJournals = journals;
    console.log(this.bhJournals.length);
  }

  /* tslint:disable-next-line:no-unused-variable */
  private onJournalselected(journal: BhJournal) {
    this.selectedBhJournal = journal;
  }
  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscriptionPatient.unsubscribe();
  }

}
