import {Injectable} from '@angular/core';
import {UserService} from '../../../user/service/user.service';
import {User} from '../../../user/model/user';
import {Observable} from 'rxjs';
import {JwtHelper} from 'angular2-jwt';

const JWT_STORAGE_KEY = 'token';

@Injectable()
export class AuthentificationService {
  private validToken: string;
  redirectUrl: string;
  jwthelper: JwtHelper = new JwtHelper();

  constructor(private userService: UserService) {
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
  }
  public isLoggedIn(): boolean {
    return this.checkTokenOK();
  }
  private setToken(jwtToken: string): void {
    sessionStorage.setItem(JWT_STORAGE_KEY, jwtToken);
    return;
  }
  private getToken(): string {
    let token: string = sessionStorage.getItem(JWT_STORAGE_KEY);
    if (this.isEmpty(token)) {token = ''; }
    return token;
  }
  private deleteToken(): void {
    sessionStorage.removeItem(JWT_STORAGE_KEY);
  }
  private checkTokenOK() {
    let token = this.getToken();
    if ('' !== token) {
      if (this.jwthelper.isTokenExpired(token)) {
        return false;
      } else {
        return true;
      }
    } else {
      return false;
    }
  }

  private isEmpty(str: string) {
  return (!str || 0 === str.length);
}
}
