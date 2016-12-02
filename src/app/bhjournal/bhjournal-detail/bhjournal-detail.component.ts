import {Component, OnInit} from '@angular/core';
import {BhJournalService} from '../service/bhjournal.service';
import {BhJournal} from '../model/bhjournal';

@Component({
  selector: 'app-bhjournal-detail',
  templateUrl: 'bhjournal-detail.component.html',
  styleUrls: ['bhjournal-detail.component.css']
})
export class BhjournalDetailComponent implements OnInit {
  private bhjournals: Array<BhJournal> = [];

  private isLoading = true;

  constructor(private bhjournalService: BhJournalService ) {}

  ngOnInit() {
  }

}
