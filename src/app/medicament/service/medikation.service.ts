import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {ServiceBase} from '../../shared/service.base';
import {Medikation} from '../model/medikation';
import {paths} from '../../server.conf';
import {MessageService} from '../../shared/service/message/message.service';
import {AuthHttp} from 'angular2-jwt';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class MedikationService extends ServiceBase<Medikation> {

  public messageService;

  constructor(authHTTP: HttpClient) {
    super(authHTTP, 'MedikationService:Medikation');
    this.serviceUrl = '/medication';
    this.messageService = new MessageService<Medikation>(this.http, this);
  }

  getMedikations() {
    console.log(this.http.get<Medikation[]>(paths.base_path + '/medications'));
    return this.http.get<Medikation[]>(paths.base_path + '/medications');
  }

  getMedicationsByJournalId(journal_id: string) {
    console.log(this.http.get<Medikation[]>(`${paths.base_path}/medications/${journal_id}`));
    return this.http.get<Medikation[]>(`${paths.base_path}/medications/${journal_id}`);
  }

  addMedikation(medikation: Medikation) {
    return this.http.post<Medikation>(paths.base_path + '/medication', JSON.stringify(medikation), this.httpOptions);
  }

  editMedikation(medikation: Medikation) {
    return this.http.put<Medikation>(`${paths.base_path}/medication/${medikation._id}`, JSON.stringify(medikation), this.httpOptions);
  }

  deleteMedikation(medikation: Medikation) {
    return this.http.delete(`${paths.base_path}/medication/${medikation._id}`, this.httpOptions);
  }

  getServiceUrl(isList: boolean): string {
    return paths.base_path + (isList ? this.serviceUrl + 's' : this.serviceUrl);
  }

  getCacheKey(isList: boolean): string {
    return isList ? this.cacheKey + 's' : this.cacheKey;
  }
}
