import {Injectable} from '@angular/core';
import {JwtHelperService} from '@auth0/angular-jwt';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {paths} from '../../../server.conf';
import {User} from '../../../user/model/user';
import {ServiceBase} from '../../service.base';
import {UserService} from '../../../user/service/user.service';

const JWT_STORAGE_KEY = 'token';

@Injectable()
export class AuthentificationService extends ServiceBase<User> {
  private validToken: string;
  redirectUrl: string;
  jwthelper = new JwtHelperService();

  constructor(http: HttpClient, private userService: UserService) {
    super(http, 'AuthentificationService:User');
    this.serviceUrl = '/user';
  }

    public login(user: User): Observable<boolean> {
        let loggedin: Observable<boolean> = of(true);
        this.deleteToken();
        this.userService.loginUser(user).subscribe(resp => {
            const status: number = resp.status;
            if (201 === status) {
                // status 201: Token wurde erstellt.
                this.validToken = resp.body.id_token;
                this.setToken(this.validToken);
                loggedin = of(true);
            } else {
                loggedin = of(false)
            }
        });
        return loggedin
    };

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
        const token = this.getToken();
        return ('' !== token && !this.jwthelper.isTokenExpired(token));

    }

  whoIsLoggedIn(): User {
    const user: User = new User();
    const token: string = this.getToken();
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
