import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import {UserService} from './service/user.service';
import {User} from './model/user';

// let rbac = require('mongoose-rbac');

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  private users: Array<User> = [];
  private isLoading = true;

  private user: User = null;
  private isEditing = false;

  private addUserForm: FormGroup;
  private name = new FormControl('', Validators.required);
  private email = new FormControl('', Validators.required);
  private password = new FormControl('', Validators.required);

  private infoMsg = {body: '', type: 'info'};

  constructor(private userService: UserService,
              private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.getUsers();
    this.addUserForm = this.formBuilder.group({
      name: this.name,
      email: this.email,
      password: this.password
    });
  }

  getUsers(forceReload = false) {
    this.userService.getAllItems(forceReload).subscribe(
      data => this.users = data,
      error => console.log(error),
      () => this.isLoading = false
    );
  }

  addUser() {
    this.userService.addUser(this.addUserForm.value).subscribe(
      res => {
        let newUser = res.json();
        this.users.push(newUser);
        this.actualizeCache();
        this.addUserForm.reset();
        this.sendInfoMsg('Benutzer erfolgreich hinzugefügt.', 'success');
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
    this.user = null;
    this.sendInfoMsg('Benutzer-Bearbeitung abgebrochen.', 'warning');
    // reload the users to reset the editing
    this.getUsers();
  }

  editUser(user) {
    this.userService.editUser(user).subscribe(
      res => {
        this.isEditing = false;
        this.user = user;
        this.actualizeCache();
        this.sendInfoMsg('Benutzer erfolgreich bearbeitet.', 'success');
      },
      error => console.log(error)
    );
  }

  deleteUser(user) {
    if (window.confirm('Wollen Sie sicher diesen Benutzer permanent löschen?')) {
      this.userService.deleteUser(user).subscribe(
        res => {
          let pos = this.users.map(obj => {
            return obj._id;
          }).indexOf(user._id);
          this.users.splice(pos, 1);
          this.actualizeCache();
          this.sendInfoMsg('Benutzer erfolgreich gelöscht.', 'success');
        },
        error => console.log(error)
      );
    }
  }

  sendInfoMsg(body, type, time = 3000) {
    this.infoMsg.body = body;
    this.infoMsg.type = type;
    window.setTimeout(() => this.infoMsg.body = '', time);
  }

  private actualizeCache() {
    this.userService.writeCacheList(this.users);
  }

}
