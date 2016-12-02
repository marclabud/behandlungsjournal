import {Component, OnInit, OnDestroy, Output, EventEmitter} from '@angular/core';
import {Subscription} from 'rxjs';
import {BhJournal} from '../model/bhjournal';
import {Patient} from '../../patient/model/patient';
import {BhJournalService} from '../service/bhjournal.service';
import {PatientService} from '../../patient/service/patient.service';
import {MessageService} from '../../shared/service/message/message.service';


@Component({
  selector: 'app-bhjournal-list',
  templateUrl: 'bhjournal-list.component.html',
  styleUrls: ['bhjournal-list.component.css']
})
export class BhjournalListComponent implements OnInit, OnDestroy {
  private isLoading = true;
  private subscriptionPatient: Subscription;
  private messageServicePatient: MessageService<Patient>;
  private selectedPatient: Patient;
  private selectedJournal: BhJournal;
  private patient_id: string;
  private journals: Array<BhJournal> = [];

  /* tslint:disable-next-line:no-unused-variable */
  private labelTherapieStart = 'Beginn der Therapie';
  /* tslint:disable-next-line:no-unused-variable */
  private labelTherapieEnde = 'Ende der Therapie';

  @Output() bhJournalChange: EventEmitter<BhJournal> = new EventEmitter<BhJournal>();

  constructor(private bhjournalService: BhJournalService, private patientService: PatientService ) {
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
    this.journals = journals;
  }

  onSelect(journal: BhJournal) {
    console.log ('selectedJournal', journal);
    this.selectedJournal = journal;
    this.bhJournalChange.emit(journal);
  }
    ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscriptionPatient.unsubscribe();
  }
}
