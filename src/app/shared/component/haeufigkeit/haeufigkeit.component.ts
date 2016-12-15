import {Component, Input, Output, EventEmitter, OnInit, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs';
import {MessageService} from '../../service/message/message.service';
import {Haeufigkeit} from '../../model/haeufigkeit';
import {HaeufigkeitService} from './service/haeufigkeit.service';

enum HAEUFIGKEIT {MORGENS, MITTAGS, ABENDS}

@Component({
  selector: 'app-haeufigkeit',
  templateUrl: './haeufigkeit.component.html',
  styleUrls: ['./haeufigkeit.component.scss']
})
export class HaeufigkeitComponent implements OnInit, OnDestroy {

  private messageService: MessageService<Haeufigkeit>;
  private subscription: Subscription;
  /* tslint:disable-next-line:no-unused-variable */
  private isLoading = true;

  @Input() private isEditing;
  @Input() private haeufigkeit: Haeufigkeit = null;
  @Output() private notifyHaufigkeitChanged: EventEmitter<Haeufigkeit> = new EventEmitter<Haeufigkeit>();

  constructor(private haeufigkeitService: HaeufigkeitService) {
    this.messageService = this.haeufigkeitService.messageService;
    this.subscribeHaeufigkeit();
  }

  private subscribeHaeufigkeit() {
    this.subscription = this.messageService.Itemselected$.subscribe(
      obj => {
        this.haeufigkeit = obj;
      });
  }

  ngOnInit() {
    if (null === this.haeufigkeit) {
      if (this.isEditing) {
        this.haeufigkeit = this.haeufigkeitService.readCache();
      } else { // Adding Mode
        this.haeufigkeit = new Haeufigkeit();
      }
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
    this.notifyHaufigkeitChanged.emit(this.haeufigkeit);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
