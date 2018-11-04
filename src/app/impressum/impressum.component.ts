import { Component, OnInit } from '@angular/core';
import {Path} from '../path';
import {PathService} from '../path.service';

@Component({
  selector: 'app-impressum',
  templateUrl: './impressum.component.html',
  styleUrls: ['./impressum.component.css']
})
export class ImpressumComponent implements OnInit {

  path: string;
  paths: Path[];

  constructor(private pathService: PathService) { }

  ngOnInit() {
    this.path = 'overview';
    this.paths = this.pathService.getPaths();
  }

}
