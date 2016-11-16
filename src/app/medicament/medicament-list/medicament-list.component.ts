import { Component, OnInit, OnDestroy } from '@angular/core';
import {Http} from '@angular/http';
import {BhJournalService} from '../../bhjournal/service/bhjournal.service';
import {MessageService} from '../../shared/service/message/message.service';
import {BhJournal} from '../../bhjournal/model/bhjournal';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-medicament-list',
  templateUrl: './medicament-list.component.html',
  styleUrls: ['./medicament-list.component.css']
})
export class MedicamentListComponent implements OnInit, OnDestroy {
  private messageService: MessageService<BhJournal>;
  private subscription: Subscription;
  private behandlungsjournal: BhJournal;


  constructor(http: Http, private bhjournalService: BhJournalService) {
    this.messageService = bhjournalService.messageService;
    this.subscription = this.messageService.Itemselected$.subscribe(
      behandlungsjournal => {
        this.behandlungsjournal = behandlungsjournal;
      });
  }
  ngOnInit() {
  }
  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }

}
