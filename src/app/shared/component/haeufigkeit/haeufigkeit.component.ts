import {Component, Output, EventEmitter, OnInit, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs';
import {MessageService} from '../../service/message/message.service';
import {MedikationService} from '../../../medicament/service/medikation.service';
import {Medikation} from '../../../medicament/model/medikation';

enum Haeufigkeit {MORGENS, MITTAGS, ABENDS}

@Component({
  selector: 'app-haeufigkeit',
  templateUrl: './haeufigkeit.component.html',
  styleUrls: ['./haeufigkeit.component.css']
})
export class HaeufigkeitComponent implements OnInit, OnDestroy {

  private messageServiceMedication: MessageService<Medikation>;
  private subscription: Subscription;
  /* tslint:disable-next-line:no-unused-variable */
  private haeufigkeit = Haeufigkeit;

  private medikation: Medikation = null;
  private isLoading = true;

  @Output()
  notifyHaufigkeitChanged: EventEmitter<Medikation> = new EventEmitter<Medikation>();

  constructor(private medikationService: MedikationService) {
    this.messageServiceMedication = this.medikationService.messageService;
    this.subscribeMedication();
  }

  private subscribeMedication() {
    this.subscription = this.messageServiceMedication.Itemselected$.subscribe(
      obj => {
        this.medikation = obj;
      });
  }

  ngOnInit() {
    if (null === this.medikation) {
      this.medikation = this.medikationService.readCache();
      this.isLoading = false;
    }
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
    // notify MedicamentDetailComponent
    this.notifyHaufigkeitChanged.emit(this.medikation);
  }


  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
