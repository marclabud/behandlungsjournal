import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';

import { DataService } from '../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  private users = [];
  private isLoading = true;

  private user = {};
  private isEditing = false;

  private addUserForm: FormGroup;
  private name = new FormControl("", Validators.required);
  private email = new FormControl("", Validators.required);
  private password = new FormControl("", Validators.required);

  private infoMsg = { body: "", type: "info"};

  constructor(private http: Http,
              private dataService: DataService,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getUsers();

    this.addUserForm = this.formBuilder.group({
      name: this.name,
      email: this.email,
      password: this.password
    });
  }

  getUsers() {
    this.dataService.getUsers().subscribe(
      data => this.users = data,
      error => console.log(error),
      () => this.isLoading = false
    );
  }

  addUser() {
    this.dataService.addUser(this.addUserForm.value).subscribe(
      res => {
        var newUser = res.json();
        this.users.push(newUser);
        this.addUserForm.reset();
        this.sendInfoMsg("Benutzer erfolgreich hinzugefügt.", "success");
      },
      error => console.log(error)
    );
  }

  enableEditing(user) {
    this.isEditing = true;
    this.user = user;
  }

  cancelEditing() {
    this.isEditing = false;
    this.user = {};
    this.sendInfoMsg("Benutzer-Bearbeitung abgebrochen.", "warning");
    // reload the users to reset the editing
    this.getUsers();
  }

  editUser(user) {
    this.dataService.editUser(user).subscribe(
      res => {
        this.isEditing = false;
        this.user = user;
        this.sendInfoMsg("Benutzer erfolgreich bearbeitet.", "success");
      },
      error => console.log(error)
    );
  }

  deleteUser(user) {
    if(window.confirm("Wollen Sie sicher diesen Benutzer permanent löschen?")) {
      this.dataService.deleteUser(user).subscribe(
        res => {
          var pos = this.users.map(user => { return user._id }).indexOf(user._id);
          this.users.splice(pos, 1);
          this.sendInfoMsg("Benutzer erfolgreich gelöscht.", "success");
        },
        error => console.log(error)
      );
    }
  }

  sendInfoMsg(body, type, time = 3000) {
    this.infoMsg.body = body;
    this.infoMsg.type = type;
    window.setTimeout(() => this.infoMsg.body = "", time);
  }

}
