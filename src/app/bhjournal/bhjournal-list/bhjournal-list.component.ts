import {Component, OnInit, Output, Input, EventEmitter} from '@angular/core';
import {BhJournal} from '../model/bhjournal';
import {BhJournalService} from '../service/bhjournal.service';

@Component({
  selector: 'app-bhjournal-list',
  templateUrl: 'bhjournal-list.component.html',
  styleUrls: ['bhjournal-list.component.scss']
})
export class BhjournalListComponent implements OnInit {
  private isLoading = true;
  private selectedJournal: BhJournal;


  /* tslint:disable-next-line:no-unused-variable */
  private labelTherapieStart = 'Beginn:';
  /* tslint:disable-next-line:no-unused-variable */
  private labelTherapieEnde = 'Ende:';

  private infoMsg = {body: '', type: 'info'};

  @Input() journals: Array<BhJournal> = [];
  @Output() bhJournalChange: EventEmitter<BhJournal> = new EventEmitter<BhJournal>();
  @Output() bhJournalCountChange: EventEmitter<number> = new EventEmitter<number>();

  constructor(private bhjournalService: BhJournalService) {
  }

  ngOnInit() {
    this.getJournals(this.journals);
  }

  private getJournals(journals: Array<BhJournal>) {
    console.log('getJournals Parameter journals: ', journals);
    this.journals = journals;
    if (1 === this.journals.length) {   // Genau 1 Journal vorhanden
      this.selectedJournal = this.journals[0];
      this.bhJournalChange.emit(this.selectedJournal);
    }
    if (0 === this.journals.length) {   // Kein Journal vorhanden: Neues Anlegen
      this.onCreateJournal();
    }
    this.isLoading = false;
  }

  onSelect(journal: BhJournal) {
    this.selectedJournal = journal;
    this.bhJournalChange.emit(journal);
  }

  /* tslint:disable-next-line:no-unused-variable */
  onCreateJournal() {
    let newBhJournal = new BhJournal();
    newBhJournal.name = 'Neues Journal';
    newBhJournal.patient_id = 'INIT';    // Parameter für die Textänderung eines neuen Journals
    this.bhJournalChange.emit(newBhJournal);
  }

  /* tslint:disable-next-line:no-unused-variable */
  onDeleteJournal(bhJournal: BhJournal) {
    if (bhJournal) {
      this.bhjournalService.deleteJournal(bhJournal).subscribe(
        res => {
          let pos = this.journals.map(obj => {
            return obj._id;
          }).indexOf(bhJournal._id);
          this.journals.splice(pos, 1);
          this.actualizeCache();
          this.sendInfoMsg('Journal erfolgreich gelöscht.', 'success');
        },
        error => console.log(error)
      );
    } else {
      this.sendInfoMsg('Kein gültiges Journal vorhanden.', 'danger');
    }
  }

  sendInfoMsg(body, type, time = 3000) {
    this.infoMsg.body = body;
    this.infoMsg.type = type;
    window.setTimeout(() => this.infoMsg.body = '', time);
  }

  private actualizeCache() {
    this.bhjournalService.writeCacheList(this.journals);
  }

}
