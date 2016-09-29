import { Injectable } from '@angular/core';
import { DataService } from '../../services/data.service';
import {User} from "./user";

@Injectable()
export class AuthService {
  private validToken:string='123';
  private isLoggedIn: boolean = false;
  private users = [];
  redirectUrl: string;

  constructor (private dataService: DataService,){}

  login(user:User):boolean{
   let isOK:boolean=false;
    //check User
    isOK=this.checkCredentials(user);
    if (isOK) {
      //Write Token
      this.setToken();
      this.isLoggedIn = true;
    }
    else {
      console.log('isOK',isOK)
    }
    return this.isLoggedIn;
  }
  logout(): void {
    this.isLoggedIn = false;
  }
  checklogin():boolean {
    let requestedToken:string="";
    requestedToken=this.getToken();
    if (requestedToken=== this.validToken){
      this.isLoggedIn=true;
    }
    else {
      this.isLoggedIn=false;
    }
    return this.isLoggedIn
  }
  setToken():void {
    sessionStorage.setItem('token',this.validToken);
    return
  }
  getToken():string {
    let token:string="";
    token=sessionStorage.getItem('token');
    return token
  }

  checkCredentials(user:User):boolean {
    let UserConfirmed:boolean=false;
     this.dataService.loginUser(user).subscribe(
       data => this.users = data,
       error => console.log(error)
     );
    // ToDo: No Replay from getUserbyEmail; bugfixing needed
    UserConfirmed=true;
    console.log ('checkCred', this.users);
    return UserConfirmed
  }
}
