import { Component, OnInit } from '@angular/core';
import {Path} from '../path';
import {PathService} from '../path.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  path: string;
  paths: Path[];

  constructor(private pathService: PathService) { }

  ngOnInit() {
    this.path = 'account';
    this.paths = this.pathService.getPaths();
  }

}
