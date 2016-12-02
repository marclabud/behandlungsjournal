import {Component, Input} from '@angular/core';
import {BhJournalService} from '../service/bhjournal.service';
import {BhJournal} from '../model/bhjournal';

@Component({
  selector: 'app-bhjournal-detail',
  templateUrl: 'bhjournal-detail.component.html',
  styleUrls: ['bhjournal-detail.component.css']
})
export class BhjournalDetailComponent {
  /* tslint:disable-next-line:no-unused-variable */
  private labelStart = 'Beginn der Therapie';
  /* tslint:disable-next-line:no-unused-variable */
  private labelEnde = 'Ende der Therapie';

  private infoMsg = {body: '', type: 'info'};

  @Input() bhjournal: BhJournal = new BhJournal();

  constructor(private bhjournalService: BhJournalService) {
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
  onCancel() {
    console.log('Dialog Abbrechen');
    this.bhjournal = undefined;
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



