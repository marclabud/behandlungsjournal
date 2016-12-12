import {Component, OnInit} from '@angular/core';
import {AuthentificationService} from '../../service/auth/authentification.service';
import {User} from '../../../user/model/user';

@Component({
  selector: 'app-auth-button',
  templateUrl: './auth-button.component.html',
  styleUrls: ['./auth-button.component.css']
})
export class AuthButtonComponent implements OnInit {
  private buttonTxt: string = 'Login';

  constructor(private auth: AuthentificationService) {
  }

  ngOnInit() {
    if (this.auth.isLoggedIn()) {
      let user: User = new User();
      user = this.auth.whoIsLoggedIn();
      this.buttonTxt = user.name;
    }
  }

  logout() {
    this.auth.logout();
  }


}
