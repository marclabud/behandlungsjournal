import {Component, Input, OnInit, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs';
import {MedikationService} from '../service/medikation.service';
import {MessageService} from '../../shared/service/message/message.service';
import {Medikation} from '../model/medikation';
import {BhJournal} from '../../bhjournal/model/bhjournal';
import {BhJournalService} from '../../bhjournal/service/bhjournal.service';


enum Haeufigkeit {MORGENS, MITTAGS, ABENDS}

@Component({
  selector: 'app-medicament-detail',
  templateUrl: './medicament-detail.component.html',
  styleUrls: ['./medicament-detail.component.css']
})
export class MedicamentDetailComponent implements OnInit, OnDestroy {

  private messageServiceMedication: MessageService<Medikation>;
  private subscription: Subscription;
  protected haeufigkeit = Haeufigkeit;

  // TODO: form controls, validation
  private medications: Array<Medikation> = [];
  private infoMsg = {body: '', type: 'info'};
  private isEditMode = false;
  private goBack = false;

  @Input()
  medikation: Medikation;

  constructor(private medikationService: MedikationService, private bhjournalService: BhJournalService) {
    this.messageServiceMedication = medikationService.messageService;
    this.subscribeMedication();
  }

  private subscribeMedication() {
    this.subscription = this.messageServiceMedication.Itemselected$.subscribe(
      obj => {
        this.medikation = obj;
      });
  }

  ngOnInit() {
    this.getMedication();
    this.setJournalId();
  }

  private getMedication() {
    this.medikation = this.medikationService.readCache();
    if ('undefined' !== typeof(this.medikation._id)) {
      this.isEditMode = true;
    }
  }

  private setJournalId() {
    let journal: BhJournal = this.bhjournalService.readCache();
    this.medikation.journal_id = journal._id;
  }

  addMedication(medikation) {
    console.log('Medikation wird hinzugefügt', JSON.stringify(medikation));
    if (typeof(medikation._id) === 'undefined' || medikation._id === '') {
      this.medikationService.addMedikation(medikation).subscribe(
        res => {
          let newMedication = res.json();
          this.medications.push(newMedication);
          this.actualizeCache();
          // this.addMedicationForm.reset();
          this.sendInfoMsg('Medikation erfolgreich hinzugefügt.', 'success');
        },
        error => console.log(error)
      );
    }
  }

  editMedication(medikation) {
    console.log('Medikation wird geändert', JSON.stringify(medikation));
    this.medikationService.editMedikation(medikation).subscribe(
      res => {
        this.medikation = medikation;
        this.medications.push(this.medikation);
        this.actualizeCache();
        this.sendInfoMsg('Medikation erfolgreich geändert.', 'success');
      },
      error => console.log(error)
    );
  }

  sendInfoMsg(body, type, time = 3000) {
    this.infoMsg.body = body;
    this.infoMsg.type = type;
    window.setTimeout(() => this.infoMsg.body = '', time);
  }

  publish() {
    this.messageServiceMedication.selectItem(this.medikation);
  }

  // receive change from HaeufigkeitComponent
  onHaeufigkeitChange(medikation: Medikation) {
    this.medikation = medikation;
  }

  back() {
    this.goBack = true;
  }

  private actualizeCache() {
    this.medikationService.writeCache(this.medikation);
    this.medikationService.writeCacheList(this.medications);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
