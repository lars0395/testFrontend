import { Injectable } from '@angular/core';
import {UserService} from './user.service';
import {Path} from './path';

@Injectable({
  providedIn: 'root'
})
export class PathService {

  constructor(private user: UserService) { }

  getPaths(): Path[] {
    const userTemp = this.user.getUser();
    const paths: Path[] = [];
    paths.push(new Path('overview', 'Übersicht'));
    if (userTemp.getUsername() !== '') {
      paths.push(new Path('evaluation', 'Bewertung abgeben'));
      paths.push(new Path('account', 'Account'));
    } else {
      paths.push(new Path('login', 'Login'));
    }

    if (userTemp.getRole() === 'Admin') {
      paths.push(new Path('userRequests', 'Benutzeranfragen'));
    }
    return paths;
  }
}
