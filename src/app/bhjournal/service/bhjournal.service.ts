import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import {ServiceBase} from '../../shared/service.base';
import {BhJournal} from '../model/bhjournal';
import {paths} from '../../../../server/src/server.conf';

@Injectable()
export class BhJournalService extends ServiceBase<BhJournal> {

  private headers = new Headers({'Content-Type': 'application/json', 'charset': 'UTF-8'});
  private options = new RequestOptions({headers: this.headers});

  constructor(http: Http) {
    super(http, 'BhJournalService:BhJournal');
  }

  getJournals() {
    console.log(this.http.get(paths.base_path + '/journals').map(res => res.json()));
    return this.http.get(paths.base_path + '/journals').map(res => res.json());
  }


  getJournalsbyPatient_id(patient_id: string) {
    console.log(this.http.get(`${paths.base_path}/journals/${patient_id}`).map(res => res.json()));
    return this.http.get(`${paths.base_path}/journals/${patient_id}`).map(res => res.json());
  }

  addJournal(journal: BhJournal) {
    return this.http.post(paths.base_path + '/journal', JSON.stringify(journal), this.options);
  }

  editJournal(journal: BhJournal) {
    return this.http.put(`${paths.base_path}/journal/${journal._id}`, JSON.stringify(journal), this.options);
  }

  deleteJournal(journal: BhJournal) {
    return this.http.delete(`${paths.base_path}/journal/${journal._id}`, this.options);
  }

  getServiceUrl(): string {
    return paths.base_path + '/journal';
  }

  getCacheKey(): string {
    return 'BhJournalService:BhJournal';
  }
}
