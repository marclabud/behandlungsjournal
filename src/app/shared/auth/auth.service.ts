import { Injectable } from '@angular/core';
import { UserService } from '../../user/service/user.service';
import {User} from '../../user/model/user';

@Injectable()
export class AuthService {
  private validToken: string = '123';
  private isLoggedIn: boolean = false;
  private users = [];
  redirectUrl: string;

  constructor (private userService: UserService) {}

  login(user: User): boolean {
   let isOK = false;
    // check User
    isOK = this.checkCredentials(user);
    if (isOK) {
      // Write Token
      this.setToken();
      this.isLoggedIn = true;
    } else {
      console.log('isOK', isOK );
    }
    return this.isLoggedIn;
  }
  logout(): void {
    this.isLoggedIn = false;
  }
  checklogin(): boolean {
    let requestedToken = '';
    requestedToken = this.getToken();

    if ( '' === requestedToken) {
      return false;
    } else {
      return true;
    };

  }
  setToken(): void {
    sessionStorage.setItem('token', this.validToken);
    return;
  }
  getToken(): string {
    let token = '';
    token = sessionStorage.getItem('token');
    return token;
  }

  checkCredentials(user: User): boolean {
    let UserConfirmed = false;
     this.userService.loginUser(user).subscribe(
       data => this.users = data,
       error => console.log(error)
     );
    // ToDo: No Replay from getUserbyEmail; bugfixing needed
    UserConfirmed = true;
    console.log ('checkCred', this.users);
    return UserConfirmed;
  }
}
