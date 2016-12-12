import {Injectable} from '@angular/core';
import {JwtHelper, AuthHttp} from 'angular2-jwt';
import {Observable} from 'rxjs';
import {paths} from '../../../../../server/src/server.conf';
import {User} from '../../../user/model/user';
import {ServiceBase} from '../../service.base';
import {UserService} from '../../../user/service/user.service';

const JWT_STORAGE_KEY = 'token';

@Injectable()
export class AuthentificationService extends ServiceBase<User> {
  private validToken: string;
  redirectUrl: string;
  jwthelper: JwtHelper = new JwtHelper();

  constructor(authHTTP: AuthHttp, private userService: UserService) {
    super(authHTTP, 'AuthentificationService:User');
    this.serviceUrl = '/user';
  }

  public login(user: User): Observable<boolean> {
    this.deleteToken();
    return this.userService.loginUser(user)
      .map(result => {
        let status: number = result[0].status;
        if (201 === status) {
          // status 201: Token wurde erstellt.
          this.validToken = result[0].body.id_token;
          this.setToken(this.validToken);
        }
        return (201 === status);
      });
  }

  public logout(): void {
    sessionStorage.removeItem(JWT_STORAGE_KEY);
    this.clearCache(); // only localstorage
  }

  public isLoggedIn(): boolean {
    return this.isTokenValid();
  }

  private setToken(jwtToken: string): void {
    sessionStorage.setItem(JWT_STORAGE_KEY, jwtToken);
    return;
  }

  private getToken(): string {
    let token: string = sessionStorage.getItem(JWT_STORAGE_KEY);
    if (this.isEmpty(token)) {
      token = '';
    }
    return token;
  }

  private deleteToken(): void {
    sessionStorage.removeItem(JWT_STORAGE_KEY);
  }

  private isTokenValid() {
    let token = this.getToken();
    return ('' !== token && !this.jwthelper.isTokenExpired(token));
  }

  whoIsLoggedIn(): User {
    let user: User = new User();
    let token: string = this.getToken();
    if ('' !== token) {
      console.log(this.jwthelper.decodeToken(token));
      user.name = this.jwthelper.decodeToken(token)._doc.name;
      user.email = this.jwthelper.decodeToken(token)._doc.email;
      return user;
    } else {
      return null;
    }

  }

  private isEmpty(str: string) {
    return (!str || 0 === str.length);
  }

  getServiceUrl(isList: boolean): string {
    return paths.base_path + (isList ? this.serviceUrl + 's' : this.serviceUrl);
  }

  getCacheKey(isList: boolean): string {
    return isList ? this.cacheKey + 's' : this.cacheKey;
  }
}
