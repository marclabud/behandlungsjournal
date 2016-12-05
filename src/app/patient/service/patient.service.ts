import {Injectable} from '@angular/core';
import {Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import {ServiceBase} from '../../shared/service.base';
import {Patient} from '../model/patient';
import {paths} from '../../../../server/src/server.conf';
import {MessageService} from '../../shared/service/message/message.service';
import {AuthHttp} from 'angular2-jwt';

@Injectable()
export class PatientService extends ServiceBase<Patient> {

  private headers = new Headers({'Content-Type': 'application/json', 'charset': 'UTF-8'});
  private options = new RequestOptions({headers: this.headers});
  private serviceUrl: string;
  public messageService;

  constructor(authHttp: AuthHttp) {
    super(authHttp, 'PatientService:Patient');
    this.serviceUrl = '/patient';
    this.messageService = new MessageService<Patient>(authHttp, this);
  }

  getPatients() {
    console.log(this.authHttp.get(paths.base_path + '/patients').map(res => res.json()));
    return this.authHttp.get(paths.base_path + '/patients').map(res => res.json());
  }

  addPatient(patient: Patient) {
    return this.authHttp.post(paths.base_path + '/patient', JSON.stringify(patient), this.options);
  }

  editPatient(patient: Patient) {
    return this.authHttp.put(`${paths.base_path}/patient/${patient._id}`, JSON.stringify(patient), this.options);
  }

  deletePatient(patient: Patient) {
    return this.authHttp.delete(`${paths.base_path}/patient/${patient._id}`, this.options);
  }

  getServiceUrl(isList: boolean): string {
    return paths.base_path + (isList ? this.serviceUrl + 's' : this.serviceUrl);
  }

  getCacheKey(isList: boolean): string {
    return isList ? this.cacheKey + 's' : this.cacheKey;
  }
}
