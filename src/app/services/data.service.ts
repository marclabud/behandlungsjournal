import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { paths} from './../../../server/src/server.conf';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
  private options = new RequestOptions({ headers: this.headers });


  constructor(private http: Http) { }

  getUsers() {
    console.log (this.http.get(paths.base_path + '/users').map(res => res.json()));
    return this.http.get(paths.base_path + '/users').map(res => res.json());
  }
  addUser(user) {
    return this.http.post(paths.base_path + '/user', JSON.stringify(user), this.options);
  }

  editUser(user) {
    return this.http.put(`${paths.base_path}/user/${user._id}`, JSON.stringify(user), this.options);
  }

  deleteUser(user) {
    return this.http.delete(`${paths.base_path}/user/${user._id}`, this.options);
  }

  loginUser(user) {
    let creds = JSON.stringify({ email: user.email, password: user.password });
    return this.http.post(`${paths.base_path}/user/login`, creds, this.options).map(res => res.json());
  }

  getPatients() {
    console.log (this.http.get(paths.base_path + '/patients').map(res => res.json()));
    return this.http.get(paths.base_path + '/patients').map(res => res.json());
  }
  addPatient(patient) {
    return this.http.post(paths.base_path + '/patient', JSON.stringify(patient), this.options);
  }

  editPatient(patient) {
    return this.http.put(`${paths.base_path}/patient/${patient._id}`, JSON.stringify(patient), this.options);
  }

  deletePatient(patient) {
    return this.http.delete(`${paths.base_path}/patient/${patient._id}`, this.options);
  }
}
