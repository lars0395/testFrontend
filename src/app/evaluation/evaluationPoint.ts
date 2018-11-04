export class EvaluationPoint {
  id: number;
  name: string;
  description: string;
  value: boolean;

  constructor(i: number, n: string, d: string, v: boolean) {
    this.id = i;
    this.name = n;
    this.description = d;
    this.value = v;
  }
}
