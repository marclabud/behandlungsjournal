import {Component, Input, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import {BhJournalService} from '../service/bhjournal.service';
import {BhJournal} from '../model/bhjournal';
import {Patient} from '../../patient/model/patient';
import * as moment from 'moment';

@Component({
  selector: 'app-bhjournal-detail',
  templateUrl: 'bhjournal-detail.component.html',
  styleUrls: ['bhjournal-detail.component.css']
})
export class BhjournalDetailComponent implements OnInit, OnChanges {
  private isLoading = true;
  /* tslint:disable-next-line:no-unused-variable */
  private labelStart = 'Beginn:';
  /* tslint:disable-next-line:no-unused-variable */
  private labelEnde = 'Ende:';

  private infoMsg = {body: '', type: 'info'};

  // benötigt einen gültigen @Input bhJournal
  // kein standalone-Aufruf möglich
  // Neues bhJournal benötigt korrekte PatientenID für den das Journal erstellt wird.

  @Input() bhJournal: BhJournal = new BhJournal();
  @Input() patient: Patient = new Patient();

  constructor(private bhjournalService: BhJournalService) {
  }
  ngOnInit() {
    this.checkBhJournal();
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    this.checkBhJournal();
  }
  private checkBhJournal() {
    // Prüfen auf neues BhJournal
    if (!this.bhJournal._id) {
      // Neues Journal anlegen
      this.bhJournal = this.initBhJournal(this.patient);
    }
    this.isLoading = false;
  }
  private initBhJournal(patient: Patient): BhJournal {
    let newBhJournal = new BhJournal();
    newBhJournal.patient_id = patient._id;
    console.log ('Neues BhJournal', newBhJournal);
    return newBhJournal;
  }
  saveBhJournal(bhjournal) {
    console.log('Behandlungsjournal wird gespeichert', bhjournal);
    if (!bhjournal._id) {
      // Neues Behandlungsjournal anlegen
      // Patch temporary ToDo remove with objectId auto
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
  onCancel() {
    // FormReset auf Initiale Bhjournalwerte
  }

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



