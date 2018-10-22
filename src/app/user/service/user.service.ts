import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {ServiceBase} from '../../shared/service.base';
import {LoginInterface, User} from '../model/user';
import {paths} from '../../server.conf';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class UserService extends ServiceBase<User> {
  // secured routes use http
  // unsecured routes use HTTP (Login, Sign-Up)
  constructor(http: HttpClient) {
    super(http, 'UserService:User');
    this.serviceUrl = '/user';
  }

  getUsers() {
    console.log(this.http.get(paths.base_path + '/users').map((res: Response) => res.json()));
    return this.http.get(paths.base_path + '/users').map((res: Response) => res.json());
  }

  addUser(user) {
    return this.http.post<User>(paths.base_path + '/user', JSON.stringify(user), this.httpOptions);
  }

  editUser(user) {
    return this.http.put(`${paths.base_path}/user/${user._id}`, JSON.stringify(user), {
        headers: new HttpHeaders({'Content-Type': 'application/json'}),
        responseType: 'text'});
  }

    deleteUser(user) {
        return this.http.delete(`${paths.base_path}/user/${user._id}`, this.httpOptions);
    }

    loginUser(user): Observable<HttpResponse<LoginInterface>> {
        const creds = JSON.stringify({email: user.email, password: user.password});
        // Todo: Options
        return this.http.post<LoginInterface>(`${paths.base_path}/user/login`, creds, {
            headers: new HttpHeaders({'Content-Type': 'application/json'}),
            observe: 'response'
        });
/*      .map(res => {
          if (res) {
            if (201 === res.status) {
              return [{status: res.status, body: res.body()}];
            } else if (200 === res.status) {
              return [{status: res.status, body: res.body()}];
            }
          }
        }
      );,*/
  }

  getServiceUrl(isList: boolean): string {
    return paths.base_path + (isList ? this.serviceUrl + 's' : this.serviceUrl);
  }

  getCacheKey(isList: boolean): string {
    return isList ? this.cacheKey + 's' : this.cacheKey;
  }
}
