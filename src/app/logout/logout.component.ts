import {Component, OnInit} from '@angular/core';
import {AuthentificationService} from '../shared/service/auth/authentification.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private authenticationService: AuthentificationService) {
  }

  ngOnInit() {
    this.authenticationService.logout();
  }

}
