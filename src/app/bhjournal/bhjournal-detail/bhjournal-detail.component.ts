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

  // benötigt einen gültigen @Input bhjournal
  // kein standalone-Aufruf möglich
  // Neues bhjournal benötigt korrekte PatientenID für den das Journal erstellt wird.

  @Input() bhjournal: BhJournal = new BhJournal();

  constructor(private patientService: PatientService, private bhjournalService: BhJournalService) {
  this.messageServicePatient = this.patientService.messageService;
  this.subscriptionPatient = this.messageServicePatient.Itemselected$.subscribe(
  patient => {
    this.patient = patient;
  });
  }
  ngOnInit() {
    // Prüfen auf neues BhJournal
    if (typeof (this.bhjournal._id) === 'undefined') {
      // Falls neu Patienten ermitteln
      if (this.patient === null) {
        this.patient = this.patientService.readCache();
      }
      this.bhjournal = this.initBhJournal(this.patient);
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
    this.bhjournal.dauer.startDatum = startDatum;
  }

  onEndeDatumChanged(endeDatum: moment.Moment) {
    this.bhjournal.dauer.endeDatum = endeDatum;
  }

  private actualizeCache() {
    this.bhjournalService.writeCache(this.bhjournal);
  }

  sendInfoMsg(body, type, time = 3000) {
    this.infoMsg.body = body;
    this.infoMsg.type = type;
    window.setTimeout(() => this.infoMsg.body = '', time);
  }

}



