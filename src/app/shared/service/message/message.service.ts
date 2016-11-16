import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Subject} from 'rxjs/Subject';
import {ServiceBase} from '../../service.base';

@Injectable()
export class MessageService<TItem> extends ServiceBase<TItem> {
  // Observable string sources
  private selectedItemSource = new Subject<TItem>();
  // Observable string streams
  Itemselected$ = this.selectedItemSource.asObservable();

  constructor(http: Http, protected service: ServiceBase<TItem>) {
    super(http, service.getCacheKey(false));
  }

// Service message commands
  selectItem(item: TItem) {
    this.writeCache(item);
    console.log(this.getCacheKey(), JSON.stringify(item));
    this.selectedItemSource.next(item);
  }

  getServiceUrl(): string {
    return this.service.getServiceUrl(false);
  }

  getCacheKey(): string {
    return this.service.getCacheKey(false);
  }
}
