import {Component, OnInit, Output, Input, EventEmitter} from '@angular/core';
import {BhJournal} from '../model/bhjournal';

@Component({
  selector: 'app-bhjournal-list',
  templateUrl: 'bhjournal-list.component.html',
  styleUrls: ['bhjournal-list.component.css']
})
export class BhjournalListComponent implements OnInit {
  private isLoading = true;
  private selectedJournal: BhJournal;

  /* tslint:disable-next-line:no-unused-variable */
  private labelTherapieStart = 'Beginn der Therapie';
  /* tslint:disable-next-line:no-unused-variable */
  private labelTherapieEnde = 'Ende der Therapie';

  @Input() journals: Array<BhJournal> = [];
  @Output() bhJournalChange: EventEmitter<BhJournal> = new EventEmitter<BhJournal>();
  @Output() bhJournalCountChange: EventEmitter<number> = new EventEmitter<number>();

  ngOnInit() {
     this.getJournals(this.journals);
  }

  private getJournals(journals: Array<BhJournal>) {
    console.log('getJournals Parameter journals: ', journals);
    // this.bhJournalChange.emit(journals.length);
    this.journals = journals;
    console.log(this.journals.length);
    this.isLoading = false;
    // this.bhJournalChange.emit(this.journals.length);
  }

  onSelect(journal: BhJournal) {
    console.log('selectedJournal', journal);
    this.selectedJournal = journal;
    this.bhJournalChange.emit(journal);
  }

}
