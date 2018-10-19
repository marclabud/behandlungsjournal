import {Component, Input, OnInit, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {MedikationService} from '../service/medikation.service';
import {MessageService} from '../../shared/service/message/message.service';
import {Medikation} from '../model/medikation';
import {BhJournal} from '../../bhjournal/model/bhjournal';
import {BhJournalService} from '../../bhjournal/service/bhjournal.service';
import {HaeufigkeitService} from '../../shared/component/haeufigkeit/service/haeufigkeit.service';
import {Haeufigkeit} from '../../shared/model/haeufigkeit';
import * as moment from 'moment';

@Component({
  selector: 'app-medicament-detail',
  templateUrl: './medicament-detail.component.html',
  styleUrls: ['./medicament-detail.component.scss']
})
export class MedicamentDetailComponent implements OnInit, OnDestroy {

  private messageServiceMedication: MessageService<Medikation>;
  private messageHaeufigkeitService: MessageService<Haeufigkeit>;
  private subscriptionMedication: Subscription;
  private medications: Array<Medikation> = [];
  isLoading = true;
  private infoMsg = {body: '', type: 'info'};
  private goBack = false;

  @Input() private isEditing;
  @Input() private medikation: Medikation;

  /* tslint:disable-next-line:no-unused-variable */
  private labelStart = 'Beginn:';
  /* tslint:disable-next-line:no-unused-variable */
  private labelEnde = 'Ende:';

  constructor(private haeufigkeitService: HaeufigkeitService,
              private medikationService: MedikationService,
              private bhjournalService: BhJournalService) {
    this.messageServiceMedication = this.medikationService.messageService;
    this.messageHaeufigkeitService = this.haeufigkeitService.messageService;
    this.subscribeMedication();
  }

  private subscribeMedication() {
    this.subscriptionMedication = this.messageServiceMedication.Itemselected$.subscribe(
      obj => {
        this.medikation = obj;
      });
  }

  ngOnInit() {
    this.getMedication();
    this.setJournalId();
    this.isLoading = false;
  }

  private getMedication() {
    if (this.isEditing) {
      this.medikation = this.medikationService.readCache();
      this.messageHaeufigkeitService.selectItem(this.medikation.haeufigkeit);
    } else {
      this.medikation = new Medikation();
    }
  }

  private setJournalId() {
    const journal: BhJournal = this.bhjournalService.readCache();
    this.medikation.journal_id = journal._id;
  }

  addMedication(medikation) {
    console.log('Medikation wird hinzugefügt', JSON.stringify(medikation));
    if (typeof(medikation._id) === 'undefined' || medikation._id === '') {
      this.medikationService.addMedikation(medikation).subscribe(
        res => {
          const newMedication = this.medications.push(res);
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

  // receive change from HaeufigkeitComponent
  onHaeufigkeitChange(haeufigkeit: Haeufigkeit) {
    this.medikation.haeufigkeit = haeufigkeit;
  }

  onStartDatumChanged(startDatum: moment.Moment) {
    this.medikation.dauer.startDatum = startDatum;
  }

  onEndeDatumChanged(endeDatum: moment.Moment) {
    this.medikation.dauer.endeDatum = endeDatum;
  }

  isDauerValid(): boolean {
    return moment(this.medikation.dauer.startDatum).isValid()
      && moment(this.medikation.dauer.endeDatum).isValid();
  }

  back() {
    this.messageHaeufigkeitService.removeFromCache();
    this.goBack = true;
  }

  private actualizeCache() {
    this.medikationService.writeCache(this.medikation);
    this.medikationService.writeCacheList(this.medications);
  }

  ngOnDestroy() {
    this.subscriptionMedication.unsubscribe();
  }
}
