import {Component, OnInit} from '@angular/core';
import {AuthentificationService} from '../../service/auth/authentification.service';
import {User} from '../../../user/model/user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-auth-button',
  templateUrl: './auth-button.component.html',
  styleUrls: ['./auth-button.component.scss']
})
export class AuthButtonComponent implements OnInit {
  buttonTxt = 'Login';

  constructor(private auth: AuthentificationService, private router: Router) {
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
    this.router.navigate(['/login']);
  }


}
