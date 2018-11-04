import {Component, OnInit} from '@angular/core';
import {Path} from '../path';
import {PathService} from '../path.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  path: string;
  paths: Path[];

  constructor(private pathService: PathService) { }

  ngOnInit() {
    this.path = 'overview';
    this.paths = this.pathService.getPaths();
  }

}
