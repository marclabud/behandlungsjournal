import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // ToDo Logout Prozedur
    sessionStorage.removeItem('token');
    // Ausgewählten Patienten löschen
    // Cache löschen ???
  }

}
