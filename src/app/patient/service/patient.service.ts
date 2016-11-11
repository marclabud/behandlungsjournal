import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';

import 'rxjs/add/operator/map';
import {ServiceBase} from '../../shared/service.base';
import {Patient} from '../model/patient';
import {paths} from '../../../../server/src/server.conf';

@Injectable()
export class PatientService extends ServiceBase<Patient> {

  private headers = new Headers({'Content-Type': 'application/json', 'charset': 'UTF-8'});
  private options = new RequestOptions({headers: this.headers});
  private serviceUrl: string;

  constructor(http: Http) {
    super(http, 'PatientService:Patient');
    this.serviceUrl = '/patient';
  }

  getPatients() {
    console.log(this.http.get(paths.base_path + '/patients').map(res => res.json()));
    return this.http.get(paths.base_path + '/patients').map(res => res.json());
  }

  addPatient(patient: Patient) {
    return this.http.post(paths.base_path + '/patient', JSON.stringify(patient), this.options);
  }

  editPatient(patient: Patient) {
    return this.http.put(`${paths.base_path}/patient/${patient._id}`, JSON.stringify(patient), this.options);
  }

  deletePatient(patient: Patient) {
    return this.http.delete(`${paths.base_path}/patient/${patient._id}`, this.options);
  }

  getServiceUrl(isList: boolean): string {
    return paths.base_path + (isList ? this.serviceUrl + 's' : this.serviceUrl);
  }

  getCacheKey(isList: boolean): string {
    return isList ? this.cacheKey + 's' : this.cacheKey;
  }
}
