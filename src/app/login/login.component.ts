import { Component, OnInit } from '@angular/core';
import { User } from './user';
import {UserService} from '../user.service';
import {Path} from '../path';
import {PathService} from '../path.service';
import { MatDialog, MatDialogRef } from '@angular/material';
import {RegisterComponent} from '../register/register.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User;

  path: string;
  paths: Path[];
  fileNameDialogRef: MatDialogRef<RegisterComponent>;

  constructor(private userService: UserService, private pathService: PathService, private dialog: MatDialog) { }

  ngOnInit() {
    this.path = 'login';
    this.paths = this.pathService.getPaths();
    this.user = this.userService.getUser();
  }

  onSubmit() {
    console.log(this.user.username);
    this.userService.login(this.user);
  }

  registerNewUser() {
    this.fileNameDialogRef = this.dialog.open(RegisterComponent, {
      height: '400px',
      width: '600px',
    });
    this.fileNameDialogRef
      .afterClosed()
      .subscribe();
  }
}
