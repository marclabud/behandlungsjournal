import {Component, OnInit, OnDestroy} from '@angular/core';
import {BhJournalService} from '../../bhjournal/service/bhjournal.service';
import {MessageService} from '../../shared/service/message/message.service';
import {BhJournal} from '../../bhjournal/model/bhjournal';
import {Subscription} from 'rxjs';
import {MedikationService} from '../service/medikation.service';
import {Medikation} from '../model/medikation';

@Component({
  selector: 'app-medicament-list',
  templateUrl: './medicament-list.component.html',
  styleUrls: ['./medicament-list.component.css']
})
export class MedicamentListComponent implements OnInit, OnDestroy {
  private messageServiceBhJournal: MessageService<BhJournal>;
  private messageServiceMedication: MessageService<Medikation>;
  private subscription: Subscription;
  private bhJournal: BhJournal;
  private medications: Array<Medikation> = [];
  private isLoading = true;

  private medication: Medikation = null;
  private isEditing = false;
  private isAdding = false;

  private infoMsg = {body: '', type: 'info'};


  constructor(private bhjournalService: BhJournalService, private medikationService: MedikationService) {
    this.messageServiceBhJournal = bhjournalService.messageService;
    this.messageServiceMedication = medikationService.messageService;
    this.subscribeBhJournal();
  }

  private subscribeBhJournal() {
    this.subscription = this.messageServiceBhJournal.Itemselected$.subscribe(
      behandlungsjournal => {
        this.bhJournal = behandlungsjournal;
        this.getMedicationsByJournalId(this.bhJournal._id);
        this.isLoading = true;
      });
  }

  ngOnInit() {
    if (typeof(this.bhJournal) !== 'undefined') {
    } else {
      this.bhJournal = this.bhjournalService.readCache();
      this.isLoading = false;
    }
    this.getMedicationsByJournalId(this.bhJournal._id);
  }

  getMedicationsByJournalId(bhJournal_id: string) {
    this.medikationService.getMedicationsByJournalId(bhJournal_id).subscribe(
      data => {
        this.medications = data;
        this.messageServiceMedication.writeCacheList(this.medications);
      },
      error => console.log(error),
      () => this.isLoading = false
    );
  }

  deleteMedication(medication: Medikation) {
    if (window.confirm('Wollen Sie sicher diese Medikation löschen?')) {
      this.medikationService.deleteMedikation(medication).subscribe(
        res => {
          let pos = this.medications.map(obj => {
            return obj._id;
          }).indexOf(medication._id);
          this.medications.splice(pos, 1);
          this.actualizeCache();
          this.sendInfoMsg('Medikation erfolgreich gelöscht.', 'success');
        },
        error => console.log(error)
      );
    }
  }

  enableEditing(medication: Medikation) {
    this.isEditing = true;
    this.isAdding = false;
    this.medication = medication;
    this.messageServiceMedication.selectItem(this.medication);
  }

  enableAdding() {
    this.isAdding = true;
    this.isEditing = false;
    this.messageServiceMedication.selectItem(null);
  }

  sendInfoMsg(body, type, time = 3000) {
    this.infoMsg.body = body;
    this.infoMsg.type = type;
    window.setTimeout(() => this.infoMsg.body = '', time);
  }

  private actualizeCache() {
    this.medikationService.writeCacheList(this.medications);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
