import {Component, Input, OnInit} from '@angular/core';
import {BhJournalService} from '../service/bhjournal.service';
import {PatientService} from '../../patient/service/patient.service';
import {MessageService} from '../../shared/service/message/message.service';
import {Subscription} from 'rxjs/Subscription';
import {BhJournal} from '../model/bhjournal';
import * as moment from 'moment';
import {Patient} from '../../patient/model/patient';




@Component({
  selector: 'app-bhjournal-detail',
  templateUrl: 'bhjournal-detail.component.html',
  styleUrls: ['bhjournal-detail.component.css']
})
export class BhjournalDetailComponent implements OnInit {
  private subscriptionPatient: Subscription;
  private messageServicePatient: MessageService<Patient>;
  private patient: Patient = null;
  /* tslint:disable-next-line:no-unused-variable */
  private labelStart = 'Beginn der Therapie';
  /* tslint:disable-next-line:no-unused-variable */
  private labelEnde = 'Ende der Therapie';

  private infoMsg = {body: '', type: 'info'};

  // benötigt einen gültigen @Input bhJournal
  // kein standalone-Aufruf möglich
  // Neues bhJournal benötigt korrekte PatientenID für den das Journal erstellt wird.

  @Input() bhJournal: BhJournal = new BhJournal();

  constructor(private patientService: PatientService, private bhjournalService: BhJournalService) {
  this.messageServicePatient = this.patientService.messageService;
  this.subscriptionPatient = this.messageServicePatient.Itemselected$.subscribe(
  patient => {
    this.patient = patient;
  });
  }
  ngOnInit() {
    // Prüfen auf neues BhJournal
    if (typeof (this.bhJournal._id) === 'undefined') {
      // Falls neu Patienten ermitteln
      if (this.patient === null) {
        this.patient = this.patientService.readCache();
      }
      this.bhJournal = this.initBhJournal(this.patient);
    }

  }
  initBhJournal(patient: Patient): BhJournal {
    let newBhJournal = new BhJournal();
    console.log ('Neues BhJournal', newBhJournal);
    return newBhJournal;
}
  saveBhJournal(bhjournal) {
    console.log('Behandlungsjournal wird gespeichert', bhjournal);
    if (typeof(bhjournal._id) === 'undefined') {
      // Neues Behandlungsjournal anlegen
      this.bhjournalService.addJournal(bhjournal).subscribe(
        res => {
          this.actualizeCache();
          this.sendInfoMsg('Behandlungsjournal erfolgreich hinzugefügt.', 'success');
        },
        error => console.log(error)
      );
    } else {
      // Behandlungsjournaldaten ändern mit bestehender _id
      this.bhjournalService.editJournal(bhjournal).subscribe(
        res => {
          this.actualizeCache();
          this.sendInfoMsg('Behandlungsjournal erfolgreich geändert.', 'success');
        },
        error => console.log(error)
      );
    }
  }
  // onCancel() {
  //   console.log('Dialog Abbrechen');
  // }

  onStartDatumChanged(startDatum: moment.Moment) {
    this.bhJournal.dauer.startDatum = startDatum;
  }

  onEndeDatumChanged(endeDatum: moment.Moment) {
    this.bhJournal.dauer.endeDatum = endeDatum;
  }

  private actualizeCache() {
    this.bhjournalService.writeCache(this.bhJournal);
  }

  sendInfoMsg(body, type, time = 3000) {
    this.infoMsg.body = body;
    this.infoMsg.type = type;
    window.setTimeout(() => this.infoMsg.body = '', time);
  }

}



