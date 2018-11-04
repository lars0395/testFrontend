import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {User} from '../login/user';
import {MatDialogRef} from '@angular/material';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {

  user: User;
  form: FormGroup;

  constructor(private userService: UserService, public dialogRef: MatDialogRef<RegisterComponent>, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.user = this.userService.getUser();
    this.form = this.formBuilder.group({
      username: '',
      mail: '',
      password: ''
    });
  }

  submit() {
    this.userService.register(new User(this.form.value.username, this.form.value.password, 'LandLord', this.form.value.mail));
    this.dialogRef.close();
  }
}
