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

  constructor(private bhjournalService: BhJournalService, private medikationService: MedikationService) {
    this.messageServiceBhJournal = bhjournalService.messageService;
    this.messageServiceMedication = medikationService.messageService;
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
      data => this.medications = data,
      error => console.log(error),
      () => this.isLoading = false
    );
    // if (this.medications.length !== 0) {
    //   this.messageServiceMedication.selectItem(this.medications);
    // }
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }

}
