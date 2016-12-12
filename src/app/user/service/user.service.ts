import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {ServiceBase} from '../../shared/service.base';
import {User} from '../model/user';
import {paths} from '../../../../server/src/server.conf';
import {AuthHttp} from 'angular2-jwt';

@Injectable()
export class UserService extends ServiceBase<User> {
  // secured routes use authHttp
  // unsecured routes use HTTP (Login, Sign-Up)
  constructor(authHttp: AuthHttp, private http: Http) {
    super(authHttp, 'UserService:User');
    this.serviceUrl = '/user';
  }

  getUsers() {
    console.log(this.authHttp.get(paths.base_path + '/users').map((res: Response) => res.json()));
    return this.authHttp.get(paths.base_path + '/users').map((res: Response) => res.json());
  }

  addUser(user) {
    return this.authHttp.post(paths.base_path + '/user', JSON.stringify(user), this.options);
  }

  editUser(user) {
    return this.authHttp.put(`${paths.base_path}/user/${user._id}`, JSON.stringify(user), this.options);
  }

  deleteUser(user) {
    return this.authHttp.delete(`${paths.base_path}/user/${user._id}`, this.options);
  }

  loginUser(user) {
    let creds = JSON.stringify({email: user.email, password: user.password});
    return this.http.post(`${paths.base_path}/user/login`, creds, this.options)
      .map((res: Response) => {
          if (res) {
            if (201 === res.status) {
              return [{status: res.status, body: res.json()}];
            } else if (200 === res.status) {
              return [{status: res.status, body: res.json()}];
            }
          }
        },
      );
  }

  getServiceUrl(isList: boolean): string {
    return paths.base_path + (isList ? this.serviceUrl + 's' : this.serviceUrl);
  }

  getCacheKey(isList: boolean): string {
    return isList ? this.cacheKey + 's' : this.cacheKey;
  }
}
