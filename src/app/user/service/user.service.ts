import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions, Response} from '@angular/http';
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
    super(http, 'UserService:UserCollection');
    this.serviceUrl = '/user';
  }

  getUsers() {
    console.log(this.http.get(paths.base_path + '/users').map((res: Response) => res.json()));
    return this.http.get(paths.base_path + '/users').map((res: Response) => res.json());
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
        (error: any ) => console.log('Error: ', error ));
    // ).catch( (error: any) => {
    //   if (error.status < 400 || error.status === 500) {
    //     return Observable.throw(new Error(error.status));
    //   }
    // });
  }

  getServiceUrl(isList: boolean): string {
    return paths.base_path + (isList ? this.serviceUrl + 's' : this.serviceUrl);
  }

  getCacheKey(isList: boolean): string {
    return isList ? this.cacheKey + 's' : this.cacheKey;
  }
}
