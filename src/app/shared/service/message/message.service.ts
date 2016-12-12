import {Injectable} from '@angular/core';
import {AuthHttp} from 'angular2-jwt';
import {Subject} from 'rxjs/Subject';
import {ServiceBase} from '../../service.base';

@Injectable()
export class MessageService<TItem> extends ServiceBase<TItem> {
  // Observable string sources
  private selectedItemSource = new Subject<TItem>();
  // Observable string streams
  Itemselected$ = this.selectedItemSource.asObservable();

  constructor(authHttp: AuthHttp, protected service: ServiceBase<TItem>) {
    super(authHttp, service.getCacheKey(false));
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
