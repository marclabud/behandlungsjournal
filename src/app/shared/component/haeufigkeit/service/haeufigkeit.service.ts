import {Injectable} from '@angular/core';
import {paths} from '../../../../server.conf';
import {Haeufigkeit} from '../../../model/haeufigkeit';
import {ServiceBase} from '../../../service.base';
import {MessageService} from '../../../service/message/message.service';
import {AuthHttp} from 'angular2-jwt';

@Injectable()
export class HaeufigkeitService extends ServiceBase<Haeufigkeit> {

  public messageService;

  constructor(authHttp: AuthHttp) {
    super(authHttp, HaeufigkeitService.name + ':' + Haeufigkeit.name);
    this.serviceUrl = '/haeufigkeit';
    this.messageService = new MessageService<Haeufigkeit>(authHttp, this);
  }

  getServiceUrl(isList: boolean): string {
    return paths.base_path + (isList ? this.serviceUrl + 's' : this.serviceUrl);
  }

  getCacheKey(isList: boolean): string {
    return isList ? this.cacheKey + 's' : this.cacheKey;
  }
}
