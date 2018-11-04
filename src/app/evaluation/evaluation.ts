import {EvaluationPoint} from './evaluationPoint';

export class Evaluation {
  evaluationPoints: Array<EvaluationPoint>;

  constructor() {
    this.evaluationPoints = [];
  }

  addEvaluationPoint(point: EvaluationPoint) {
    this.evaluationPoints.push(point);
  }
}
