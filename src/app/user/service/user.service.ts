import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';

import 'rxjs/add/operator/map';
import {ServiceBase} from "../../shared/service.base";
import {User} from "../model/user";

@Injectable()
export class UserService extends ServiceBase<User> {

  private headers = new Headers({'Content-Type': 'application/json', 'charset': 'UTF-8'});
  private options = new RequestOptions({headers: this.headers});

  constructor(http:Http) {
    super(http, 'UserService:Users');
  }

  getUsers() {
    console.log(this.http.get('/users').map(res => res.json()));
    return this.http.get('/users').map(res => res.json());
  }

  // getUser(user) {
  //   return this.http.get(`/user/${user._id}`).map(res => res.json());
  // }


  addUser(user) {
    return this.http.post('/user', JSON.stringify(user), this.options);
  }

  editUser(user) {
    return this.http.put(`/user/${user._id}`, JSON.stringify(user), this.options);
  }

  deleteUser(user) {
    return this.http.delete(`/user/${user._id}`, this.options);
  }

  loginUser(user) {
    let creds = JSON.stringify({email: user.email, password: user.password});
    return this.http.post(`/user/login`, creds, this.options).map(res => res.json());
  }

  protected getServiceUrl():string {
    return '/users';
  }

}
