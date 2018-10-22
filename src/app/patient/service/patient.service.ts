import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {paths} from '../../server.conf';
import {ServiceBase} from '../../shared/service.base';
import {MessageService} from '../../shared/service/message/message.service';
import {Patient} from '../model/patient';

@Injectable()
export class PatientService extends ServiceBase<Patient> {

  public messageService;

  constructor(http: HttpClient) {
    super(http, 'PatientService:Patient');
    this.serviceUrl = '/patient';
    this.messageService = new MessageService<Patient>(http, this);
  }

  getPatients() {
    return this.http.get<Patient[]>(paths.base_path + '/patients');
  }

  addPatient(patient: Patient) {
    return this.http.post<Patient>(paths.base_path + '/patient', JSON.stringify(patient), this.httpOptions);
  }

  // ToDo: options to parameter with responseType: 'text' for put options
  editPatient(patient: Patient) {
    return this.http.put(`${paths.base_path}/patient/${patient._id}`, JSON.stringify(patient), {
        headers: new HttpHeaders({'Content-Type': 'application/json'}),
        responseType: 'text'});
  }

  deletePatient(patient: Patient) {
    return this.http.delete(`${paths.base_path}/patient/${patient._id}`, this.httpOptions);
  }

  getServiceUrl(isList: boolean): string {
    return paths.base_path + (isList ? this.serviceUrl + 's' : this.serviceUrl);
  }

  getCacheKey(isList: boolean): string {
    return isList ? this.cacheKey + 's' : this.cacheKey;
  }
}
