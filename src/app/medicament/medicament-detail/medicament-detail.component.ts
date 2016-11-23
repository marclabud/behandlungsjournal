import {Component, OnInit, Input} from '@angular/core';
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
export class MedicamentDetailComponent implements OnInit {

  private messageServiceMedication: MessageService<Medikation>;
  private subscription: Subscription;
  public haeufigkeit = Haeufigkeit;

  @Input()
  medikation: Medikation = new Medikation();

  // TODO: form controls, validation
  private medications: Array<Medikation> = [];
  private infoMsg = {body: '', type: 'info'};
  private isEditMode = false;

  constructor(private medikationService: MedikationService, private bhjournalService: BhJournalService) {
    this.messageServiceMedication = medikationService.messageService;
    this.subscribeMedication();
  }

  private subscribeMedication() {
    this.subscription = this.messageServiceMedication.Itemselected$.subscribe(
      medication => {
        this.medikation = medication;
      });
  }

  ngOnInit() {
    this.getMedication();
    this.setJournalId();
  }

  private setJournalId() {
    // set journal_id for adding new medication
    if (null === this.medikation || typeof(this.medikation._id) === 'undefined' || this.medikation._id === '') {
      let journal: BhJournal = this.bhjournalService.readCache();
      this.medikation.journal_id = journal._id;
    }
  }

  private getMedication() {
    let medikation: Medikation = this.medikationService.readCache();
    if (null !== medikation) {
      this.medikation = medikation;
      this.isEditMode = true;
    }
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

  switchHaeufigkeit(type: Haeufigkeit) {
    switch (type) {
      case Haeufigkeit.MORGENS:
        this.medikation.haeufigkeit.morgens = !this.medikation.haeufigkeit.morgens;
        break;
      case Haeufigkeit.MITTAGS:
        this.medikation.haeufigkeit.mittags = !this.medikation.haeufigkeit.mittags;
        break;
      case Haeufigkeit.ABENDS:
        this.medikation.haeufigkeit.abends = !this.medikation.haeufigkeit.abends;
        break;
      default:
        break;
    }
 }


  private actualizeCache() {
    this.medikationService.writeCache(this.medikation);
    this.medikationService.writeCacheList(this.medications);
  }
}
