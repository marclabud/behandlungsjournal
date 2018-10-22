import {Component, OnInit, OnDestroy} from '@angular/core';
import {BhJournalService} from '../../bhjournal/service/bhjournal.service';
import {MessageService} from '../../shared/service/message/message.service';
import {BhJournal} from '../../bhjournal/model/bhjournal';
import {Subscription} from 'rxjs';
import {Indikator} from '../model/indikator';
import {IndikatorService} from '../service/indikator.service';

@Component({
  selector: 'app-indikator-list',
  templateUrl: './indikator-list.component.html',
  styleUrls: ['./indikator-list.component.scss']
})
export class IndikatorListComponent implements OnInit, OnDestroy {
  private messageService: MessageService<BhJournal>;
  private messageServiceIndikator: MessageService<Indikator>;
  private subscription: Subscription;
  private behandlungsjournal: BhJournal;
  private indikatoren: Array<Indikator> = [];
  private indikator: Indikator = new Indikator();
  isEditing = false;
  isAdding = false;
  isLoading = true;
  private infoMsg = {body: '', type: 'info'};

  constructor(private bhjournalService: BhJournalService, private indikatorService: IndikatorService) {
    this.messageService = bhjournalService.messageService;
    this.messageServiceIndikator = indikatorService.messageService;
    this.subscription = this.messageService.Itemselected$.subscribe(
      behandlungsjournal => {
        this.behandlungsjournal = behandlungsjournal;
        this.getIndikatorenByJournalId(this.behandlungsjournal._id);
      });
  }

  ngOnInit() {
    if (typeof(this.behandlungsjournal) !== 'undefined') {
    } else {
      this.behandlungsjournal = this.bhjournalService.readCache();
      this.getIndikatorenByJournalId(this.behandlungsjournal._id);
      this.isLoading = false;
    }
  }

  private getIndikatorenByJournalId(bhJournal_id: string) {
    this.indikatorService.getIndikatorenByJournalId(bhJournal_id).subscribe(
      data => {
        this.indikatoren = data;
        this.messageServiceIndikator.writeCacheList(this.indikatoren);
      },
      error => console.log(error),
      () => this.isLoading = false
    );
  }

  deleteIndikator(indikator: Indikator) {
    if (window.confirm('Wollen Sie sicher diese Medikation löschen?')) {
      this.indikatorService.deleteIndikator(indikator).subscribe(
        res => {
          const pos = this.indikatoren.map(obj => {
            return obj._id;
          }).indexOf(indikator._id);
          this.indikatoren.splice(pos, 1);
          this.actualizeCache();
          this.sendInfoMsg('Medikation erfolgreich gelöscht.', 'success');
        },
        error => console.log(error)
      );
    }
  }

  enableEditing(indikator: Indikator) {
    this.isEditing = true;
    this.isAdding = false;
    this.indikator = indikator;
    this.messageServiceIndikator.selectItem(this.indikator);
  }

  enableAdding() {
    this.isAdding = true;
    this.isEditing = false;
    this.messageServiceIndikator.selectItem(this.indikator);
  }

  sendInfoMsg(body, type, time = 3000) {
    this.infoMsg.body = body;
    this.infoMsg.type = type;
    window.setTimeout(() => this.infoMsg.body = '', time);
  }

  private actualizeCache() {
    this.indikatorService.writeCacheList(this.indikatoren);
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }

}


