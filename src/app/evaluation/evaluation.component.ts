import {Component, Inject, Input, LOCALE_ID, OnInit} from '@angular/core';
import {Evaluation} from './evaluation';
import {EvaluationPoint} from './evaluationPoint';
import {Path} from '../path';
import {PathService} from '../path.service';
import {EvaluationPointService} from '../evaluation-point.service';

@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.css']
})
export class EvaluationComponent implements OnInit {

  @Input() evaluation: Evaluation;
  path: string;
  paths: Path[];

  constructor(private pathService: PathService, private evaluationPointService: EvaluationPointService) {
  }

  ngOnInit() {
    this.evaluation = new Evaluation();
    this.evaluation.evaluationPoints = this.evaluationPointService.getEvaluationPoints();
    this.path = 'evaluation';
    this.paths = this.pathService.getPaths();
  }

  sendEvaluation(evaluation: Evaluation) {
    console.log(evaluation);
  }
}
