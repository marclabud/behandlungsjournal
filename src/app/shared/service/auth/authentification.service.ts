import {Injectable} from '@angular/core';
import {UserService} from '../../../user/service/user.service';
import {User} from '../../../user/model/user';
import {Observable} from 'rxjs';

const JWT_STORAGE_KEY = 'token';

@Injectable()
export class AuthentificationService {
  private validToken: string;


  redirectUrl: string;

  constructor(private userService: UserService) {
  }

  login(user: User): Observable<boolean> {
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

  logout(): void {
    sessionStorage.removeItem(JWT_STORAGE_KEY);
  }

  checklogin(): boolean {
    let requestedToken = '';
    requestedToken = this.getToken();
    return '' !== requestedToken;
  }

  private setToken(jwtToken: string): void {
    sessionStorage.setItem(JWT_STORAGE_KEY, jwtToken);
    return;
  }

  private getToken(): string {
    let token = '';
    token = sessionStorage.getItem(JWT_STORAGE_KEY);
    return token;
  }
}
