import {Injectable} from '@angular/core';
import {ServiceBase} from '../../shared/service.base';
import {BhJournal} from '../model/bhjournal';
import {paths} from '../../server.conf';
import {MessageService} from '../../shared/service/message/message.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class BhJournalService extends ServiceBase<BhJournal> {

  public messageService;

  constructor(http: HttpClient) {
    super(http, 'BhJournalService:BhJournal');
    this.serviceUrl = '/journal';
    this.messageService = new MessageService<BhJournal>(this.http, this);
  }

  getJournals() {
    console.log(this.http.get<BhJournal[]>(paths.base_path + '/journals'));
    return this.http.get<BhJournal[]>(paths.base_path + '/journals');
  }


  getJournalsbyPatient_id(patient_id: string) {
    console.log(this.http.get<BhJournal[]>(`${paths.base_path}/journals/${patient_id}`));
    return this.http.get<BhJournal[]>(`${paths.base_path}/journals/${patient_id}`);
  }

  addJournal(journal: BhJournal) {
    return this.http.post(paths.base_path + '/journal', JSON.stringify(journal), this.httpOptions);
  }

  editJournal(journal: BhJournal) {
    return this.http.put(`${paths.base_path}/journal/${journal._id}`, JSON.stringify(journal), this.httpResponseTypeOptions);
  }

  deleteJournal(journal: BhJournal) {
    return this.http.delete(`${paths.base_path}/journal/${journal._id}`, this.httpResponseTypeOptions);
  }

  getServiceUrl(isList: boolean): string {
    return paths.base_path + (isList ? this.serviceUrl + 's' : this.serviceUrl);
  }

  getCacheKey(): string {
    return 'BhJournalService:BhJournal';
  }
}
