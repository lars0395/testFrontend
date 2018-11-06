import {EvaluationPoint} from './evaluationPoint';

export class Evaluation {
  firstName: string;
  lastName: string;
  city: string;
  birthDay: string;
  evaluationPointList: Array<EvaluationPoint>;

  constructor() {
    this.evaluationPointList = [];
  }

  addEvaluationPoint(point: EvaluationPoint) {
    this.evaluationPointList.push(point);
  }
}
