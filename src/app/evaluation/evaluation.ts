import {EvaluationPoint} from './evaluationPoint';

export class Evaluation {
  firstName: string;
  lastName: string;
  city: string;
  birthDay: string;
  evaluationPoints: Array<EvaluationPoint>;

  constructor() {
    this.evaluationPoints = [];
  }

  addEvaluationPoint(point: EvaluationPoint) {
    this.evaluationPoints.push(point);
  }
}
