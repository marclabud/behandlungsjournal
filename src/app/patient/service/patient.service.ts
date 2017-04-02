import {Injectable} from '@angular/core';
import {AuthHttp} from 'angular2-jwt';
import 'rxjs/add/operator/map';
import {paths} from '../../server.conf';
import {ServiceBase} from '../../shared/service.base';
import {MessageService} from '../../shared/service/message/message.service';
import {Patient} from '../model/patient';

@Injectable()
export class PatientService extends ServiceBase<Patient> {

  public messageService;

  constructor(authHttp: AuthHttp) {
    super(authHttp, 'PatientService:Patient');
    this.serviceUrl = '/patient';
    this.messageService = new MessageService<Patient>(authHttp, this);
  }

  getPatients() {
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
