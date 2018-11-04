import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from './login/user';
import {Router} from '@angular/router';
import {Md5} from 'ts-md5';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User;

  constructor(private http: HttpClient, private router: Router) {
    this.user = new User('', '', '', '');
  }

  login(user: User): string {
    const tempUser: User = new User(user.username, <string>Md5.hashStr(user.password), user.role, user.email);
    this.http.post('http://localhost:8080/login', JSON.stringify(tempUser)).subscribe(
      data => {
        console.log(data);
        if (data instanceof User) {
          this.user.email = data.email;
          this.user.role = data.role;
          this.user.session = data.role;
        }
        this.router.navigateByUrl('/account');
        return 'Login erfolgreich';
       },
      err => {
        console.log(err);
        return 'Login nicht erfolgreich';
       }
    );
    return 'Login nicht erfolgreich';
  }

  register(user: User): boolean {
    user.password = <string>Md5.hashStr(user.password);
    this.http.post('http://localhost:8080/createUser', JSON.stringify(user)).subscribe(
      data => {
        console.log(data);
        this.router.navigateByUrl('/login');
        if (data.toString() === 'SUCCESS') {
          return true;
        }
      },
      err => {
        console.log(err);
        return false;
      }
    );
    return false;
  }

  getUser(): User {
    return this.user;
  }
}
