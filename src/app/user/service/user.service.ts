import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import {ServiceBase} from '../../shared/service.base';
import {User} from '../model/user';
import {paths} from './../../../../server/src/server.conf';

@Injectable()
export class UserService extends ServiceBase<User> {

  private headers = new Headers({'Content-Type': 'application/json', 'charset': 'UTF-8'});
  private options = new RequestOptions({headers: this.headers});
  private serviceUrl: string;

  constructor(http: Http) {
    super(http, 'UserService:User');
    this.serviceUrl = '/user';
  }

  getUsers() {
    console.log(this.http.get(paths.base_path + '/users').map(res => res.json()));
    return this.http.get(paths.base_path + '/users').map(res => res.json());
  }

  addUser(user: User) {
    return this.http.post(paths.base_path + '/user', JSON.stringify(user), this.options);
  }

  editUser(user: User) {
    return this.http.put(`${paths.base_path}/user/${user._id}`, JSON.stringify(user), this.options);
  }

  deleteUser(user: User) {
    return this.http.delete(`${paths.base_path}/user/${user._id}`, this.options);
  }

  loginUser(user: User) {
    let creds = JSON.stringify({email: user.email, password: user.password});
    return this.http.post(`${paths.base_path}/user/login`, creds, this.options).map(res => res.json());
  }

  getServiceUrl(isList: boolean): string {
    return paths.base_path + (isList ? this.serviceUrl + 's' : this.serviceUrl);
  }

  getCacheKey(isList: boolean): string {
    return isList ? this.cacheKey + 's' : this.cacheKey;
  }
}
