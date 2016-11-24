import {Injectable} from '@angular/core';
import {UserService} from '../../../user/service/user.service';
import {User} from '../../../user/model/user';

const JWT_STORAGE_KEY = 'token';

@Injectable()
export class AuthentificationService {
  private validToken: string;


  redirectUrl: string;

  constructor(private userService: UserService) {
  }

  login(user: User): boolean {
    return this.checkCredentials(user);
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

  checkCredentials(user: User): boolean {
    let UserConfirmed = false;
    this.userService.loginUser(user).subscribe(
      response => UserConfirmed = this.processResponse(response),
      error => console.log(error)
    );
    return UserConfirmed;
  }

  private processResponse(response): boolean {
    console.log ('checkResponse', response);
    let status: number = response[0].status;
    if (201 === status) {
      this.validToken = response[0].body.id_token;
      this.setToken(this.validToken);
      return true;
    } else {
      return false;
    }


  }

}
