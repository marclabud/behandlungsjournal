import {Component, OnInit} from '@angular/core';
import {AuthentificationService} from '../shared/service/auth/authentification.service';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {
  /* tslint:disable-next-line:no-unused-variable */
  private brandName = 'Behandlungsjournal';

  constructor(private auth: AuthentificationService) {
  }

  ngOnInit() {
    this.userIsLoggedIn();
    this.whoIsLoggedIn();
  }

  private userIsLoggedIn() {
    return this.auth.isLoggedIn();
  }

  private whoIsLoggedIn() {
    this.auth.whoIsLoggedIn();
  }
}
