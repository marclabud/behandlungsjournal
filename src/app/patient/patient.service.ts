import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';

import 'rxjs/add/operator/map';
import {ServiceBase} from './../shared/service.base';
import { Patient} from './model/patient';

@Injectable()
export class PatientService extends ServiceBase<Patient> {

  private headers = new Headers({'Content-Type': 'application/json', 'charset': 'UTF-8'});
  private options = new RequestOptions({headers: this.headers});

  constructor(http: Http) {
    super(http, 'PatientService:Patient');
  }

  protected getServiceUrl(): string {
    return '/patient';
  }

}
