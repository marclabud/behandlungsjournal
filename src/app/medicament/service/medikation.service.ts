import {Injectable} from '@angular/core';
import {Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import {ServiceBase} from '../../shared/service.base';
import {Medikation} from '../model/medikation';
import {paths} from '../../../../server/src/server.conf';
import {MessageService} from '../../shared/service/message/message.service';
import {AuthHttp} from 'angular2-jwt';

@Injectable()
export class MedikationService extends ServiceBase<Medikation> {

  private headers = new Headers({'Content-Type': 'application/json', 'charset': 'UTF-8'});
  private options = new RequestOptions({headers: this.headers});
  private serviceUrl: string;
  public messageService;

  constructor(authHTTP: AuthHttp) {
    super(authHTTP, 'MedikationService:Medikation');
    this.serviceUrl = '/medication';
    this.messageService = new MessageService<Medikation>(this.authHttp, this);
  }

  getMedikations() {
    console.log(this.authHttp.get(paths.base_path + '/medications').map(res => res.json()));
    return this.authHttp.get(paths.base_path + '/medications').map(res => res.json());
  }

  getMedicationsByJournalId(journal_id: string) {
    console.log(this.authHttp.get(`${paths.base_path}/medications/${journal_id}`).map(res => res.json()));
    return this.authHttp.get(`${paths.base_path}/medications/${journal_id}`).map(res => res.json());
  }

  addMedikation(medikation: Medikation) {
    return this.authHttp.post(paths.base_path + '/medication', JSON.stringify(medikation), this.options);
  }

  editMedikation(medikation: Medikation) {
    return this.authHttp.put(`${paths.base_path}/medication/${medikation._id}`, JSON.stringify(medikation), this.options);
  }

  deleteMedikation(medikation: Medikation) {
    return this.authHttp.delete(`${paths.base_path}/medication/${medikation._id}`, this.options);
  }

  getServiceUrl(isList: boolean): string {
    return paths.base_path + (isList ? this.serviceUrl + 's' : this.serviceUrl);
  }

  getCacheKey(isList: boolean): string {
    return isList ? this.cacheKey + 's' : this.cacheKey;
  }
}
