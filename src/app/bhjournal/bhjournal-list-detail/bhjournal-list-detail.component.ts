import { Component, OnInit } from '@angular/core';
import {BhJournal} from '../model/bhjournal';

@Component({
  selector: 'app-bhjournal-list-detail',
  templateUrl: './bhjournal-list-detail.component.html',
  styleUrls: ['./bhjournal-list-detail.component.css']
})

// kombiniertes ListDetail-Control für die Bearbeitung der Behandlungsjournale

export class BhjournalListDetailComponent implements OnInit {
  private selectedBhJournal: BhJournal
  constructor() { }

  ngOnInit() {
  }

}
