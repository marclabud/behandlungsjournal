import {Component, Input, Output, EventEmitter, OnInit, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs';
import {MessageService} from '../../service/message/message.service';
import {MedikationService} from '../../../medicament/service/medikation.service';
import {Medikation} from '../../../medicament/model/medikation';
import {Haeufigkeit} from '../../model/haeufigkeit';

enum HAEUFIGKEIT {MORGENS, MITTAGS, ABENDS}

@Component({
  selector: 'app-haeufigkeit',
  templateUrl: './haeufigkeit.component.html',
  styleUrls: ['./haeufigkeit.component.css']
})
export class HaeufigkeitComponent implements OnInit, OnDestroy {

  private messageServiceMedication: MessageService<Medikation>;
  private subscription: Subscription;
  /* tslint:disable-next-line:no-unused-variable */

  private medikation: Medikation = null;
  private isLoading = true;

  @Input()
  haeufigkeit: Haeufigkeit;

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
      this.haeufigkeit = this.medikation.haeufigkeit;
      this.isLoading = false;
    }
  }

  switchHaeufigkeit(type: HAEUFIGKEIT) {
    switch (type) {
      case HAEUFIGKEIT.MORGENS:
        this.haeufigkeit.morgens = !this.haeufigkeit.morgens;
        break;
      case HAEUFIGKEIT.MITTAGS:
        this.haeufigkeit.mittags = !this.haeufigkeit.mittags;
        break;
      case HAEUFIGKEIT.ABENDS:
        this.haeufigkeit.abends = !this.haeufigkeit.abends;
        break;
      default:
        break;
    }
    // notify MedicamentDetailComponent
    this.medikation.haeufigkeit = this.haeufigkeit;
    this.notifyHaufigkeitChanged.emit(this.medikation);
  }


  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
