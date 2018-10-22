import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ServiceBase} from '../../shared/service.base';
import {paths} from '../../server.conf';
import {MessageService} from '../../shared/service/message/message.service';
import {Indikator} from '../model/indikator';

@Injectable()
export class IndikatorService extends ServiceBase<Indikator> {
  public messageService;

  constructor(http: HttpClient) {
    super(http, 'IndikatorService:Indikator');
    this.serviceUrl = '/indicator';
    this.messageService = new MessageService<Indikator>(http, this);
  }

  getIndikatoren() {
    console.log(this.http.get<Indikator[]>(paths.base_path + '/indicators'));
    return this.http.get<Indikator[]>(paths.base_path + '/indicators');
  }

  getIndikatorenByJournalId(journal_id: string) {
    console.log(this.http.get<Indikator[]>(`${paths.base_path}/indicators/${journal_id}`));
    return this.http.get<Indikator[]>(`${paths.base_path}/indicators/${journal_id}`);
  }

  addIndikator(indikator: Indikator) {
    return this.http.post<Indikator>(paths.base_path + '/indicator', JSON.stringify(indikator), this.httpOptions);
  }

  editIndikator(indikator: Indikator) {
    return this.http.put(`${paths.base_path}/indicator/${indikator._id}`, JSON.stringify(indikator), {
        headers: new HttpHeaders({'Content-Type': 'application/json'}),
        responseType: 'text'});
  }

  deleteIndikator(indikator: Indikator) {
    return this.http.delete(`${paths.base_path}/indicator/${indikator._id}`, this.httpOptions);
  }

  getServiceUrl(isList: boolean): string {
    return paths.base_path + (isList ? this.serviceUrl + 's' : this.serviceUrl);
  }

  getCacheKey(isList: boolean): string {
    return isList ? this.cacheKey + 's' : this.cacheKey;
  }
}
