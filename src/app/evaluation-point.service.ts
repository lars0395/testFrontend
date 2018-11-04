import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {EvaluationPoint} from './evaluation/evaluationPoint';
import {User} from './login/user';

@Injectable({
  providedIn: 'root'
})
export class EvaluationPointService {

  evaluationPoints: Array<EvaluationPoint>;
  constructor(private http: HttpClient) { }

  getEvaluationPoints(): Array<EvaluationPoint> {
    this.evaluationPoints = [];
    this.http.get('http://localhost:8080/evaluationPoints').subscribe(
      (data: Array<EvaluationPoint>) => {
        data.forEach(point => this.evaluationPoints.push(point));
        return this.evaluationPoints;
      },
      err => {
        console.log(err);
        return this.evaluationPoints;
      }
    );
    return this.evaluationPoints;
  }
}
