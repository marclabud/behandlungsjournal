import {Injectable} from '@angular/core';
import {ServiceBase} from '../../shared/service.base';
import {BhJournal} from '../model/bhjournal';
import {paths} from '../../server.conf';
import {MessageService} from '../../shared/service/message/message.service';
import {AuthHttp} from 'angular2-jwt';

@Injectable()
export class BhJournalService extends ServiceBase<BhJournal> {

  public messageService;

  constructor(authHttp: AuthHttp) {
    super(authHttp, 'BhJournalService:BhJournal');
    this.serviceUrl = '/journal';
    this.messageService = new MessageService<BhJournal>(this.authHttp, this);
  }

  getJournals() {
    console.log(this.authHttp.get(paths.base_path + '/journals').map(res => res.json()));
    return this.authHttp.get(paths.base_path + '/journals').map(res => res.json());
  }


  getJournalsbyPatient_id(patient_id: string) {
    console.log(this.authHttp.get(`${paths.base_path}/journals/${patient_id}`).map(res => res.json()));
    return this.authHttp.get(`${paths.base_path}/journals/${patient_id}`).map(res => res.json());
  }

  addJournal(journal: BhJournal) {
    return this.authHttp.post(paths.base_path + '/journal', JSON.stringify(journal), this.options);
  }

  editJournal(journal: BhJournal) {
    return this.authHttp.put(`${paths.base_path}/journal/${journal._id}`, JSON.stringify(journal), this.options);
  }

  deleteJournal(journal: BhJournal) {
    return this.authHttp.delete(`${paths.base_path}/journal/${journal._id}`, this.options);
  }

  getServiceUrl(isList: boolean): string {
    return paths.base_path + (isList ? this.serviceUrl + 's' : this.serviceUrl);
  }

  getCacheKey(): string {
    return 'BhJournalService:BhJournal';
  }
}
