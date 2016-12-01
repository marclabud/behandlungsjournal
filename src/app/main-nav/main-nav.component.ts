import {Component, OnInit} from '@angular/core';
import {AuthentificationService} from '../shared/service/auth/authentification.service';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit {
  private brandName = 'Behandlungsjournal';

  constructor(private auth: AuthentificationService) {
  }

  ngOnInit() {
    this.userIsLoggedIn();
  }
  private userIsLoggedIn() {
    return this.auth.isLoggedIn();
  }
}
