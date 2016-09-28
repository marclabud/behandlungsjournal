import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
  private options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) { }

  getUsers() {
    console.log (this.http.get('/users').map(res => res.json()));
    return this.http.get('/users').map(res => res.json());
  }
  // getUser(user) {
  //   return this.http.get(`/user/${user._id}`).map(res => res.json());
  // }


  addUser(user) {
    return this.http.post("/user", JSON.stringify(user), this.options);
  }

  editUser(user) {
    return this.http.put(`/user/${user._id}`, JSON.stringify(user), this.options);
  }

  deleteUser(user) {
    return this.http.delete(`/user/${user._id}`, this.options);
  }

  getUserbyEmail(user) {
    console.log(this.http.get(`/user/${user.email}/${user.password}`));
    console.log (this.http.get(`/user/${user.email}/${user.password}`));
    return this.http.get(`/user/${user.email}/${user.password}`).map(res => res.json());
  }

}
