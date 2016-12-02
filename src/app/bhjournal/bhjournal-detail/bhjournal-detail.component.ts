import {Component, OnInit, Input} from '@angular/core';
import {BhJournalService} from '../service/bhjournal.service';
import {BhJournal} from '../model/bhjournal';

@Component({
  selector: 'app-bhjournal-detail',
  templateUrl: 'bhjournal-detail.component.html',
  styleUrls: ['bhjournal-detail.component.css']
})
export class BhjournalDetailComponent implements OnInit {
  private infoMsg = {body: '', type: 'info'};
  private isLoading = true;

  @Input() bhjournal: BhJournal;

  constructor(private bhjournalService: BhJournalService) {
  }

  ngOnInit() {
  }

  private actualizeCache() {
    this.bhjournalService.writeCache(this.bhjournal);
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
  sendInfoMsg(body, type, time = 3000) {
    this.infoMsg.body = body;
    this.infoMsg.type = type;
    window.setTimeout(() => this.infoMsg.body = '', time);
  }

}



