import {Component, OnInit, OnDestroy} from '@angular/core';
import {BhJournal} from '../model/bhjournal';
import {Patient} from '../../patient/model/patient';
import {BhJournalService} from '../service/bhjournal.service';
import {PatientService} from '../../patient/service/patient.service';
import {MessageService} from '../../shared/service/message/message.service';
import {Subscription} from 'rxjs/Subscription';
import {Router} from '@angular/router';

@Component({
  selector: 'app-bhjournal-list-detail',
  templateUrl: './bhjournal-list-detail.component.html',
  styleUrls: ['./bhjournal-list-detail.component.scss']
})
// kombiniertes ListDetail-Control für die Bearbeitung der Behandlungsjournale

export class BhjournalListDetailComponent implements OnInit, OnDestroy {
  isLoading = true;
  private subscriptionPatient: Subscription;
  private messageServicePatient: MessageService<Patient>;
  private patient_id: string;
  private selectedPatient: Patient;
  private selectedBhJournal: BhJournal;
  private bhJournals: Array<BhJournal>;

  constructor(private bhjournalService: BhJournalService, private patientService: PatientService, private router: Router) {
    this.messageServicePatient = patientService.messageService;
    this.subscriptionPatient = this.messageServicePatient.Itemselected$.subscribe(
      patient => {
        this.selectedPatient = patient;
        this.getJournalsbyPatient(this.selectedPatient._id);
      });
  }

  ngOnInit() {
    this.getPatientId(this.selectedPatient);
    this.getJournalsbyPatient(this.patient_id);
  }

  private getPatientId(patient: Patient) {
    if (!this.selectedPatient) {
      this.selectedPatient = this.patientService.readCache();
      if (!this.selectedPatient) {
        console.log('Bhjournal-Component ngOnInit selected Patient was undefined');
        // Redirect zur Patienten auswählen
        this.router.navigate(['/patient-card']);
      } else {
        this.patient_id = this.selectedPatient._id;
      }
    } else {
      this.patient_id = this.selectedPatient._id;
    }
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
    console.log('LD: onJournalselected', journal);
    this.selectedBhJournal = journal;
  }

  onbhJournalChange(bhJournal: BhJournal) {
    // Wenn geändert, dann im Array, ansonsten hinzufügen.
    if (-1 === this.bhJournals.indexOf(bhJournal)) {
      // bhjournal ist neu
      this.bhJournals.push(bhJournal);
    }
    this.router.navigate(['/bhjournal']);
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscriptionPatient.unsubscribe();
  }
}
