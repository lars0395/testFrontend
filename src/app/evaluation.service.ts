import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Evaluation} from './evaluation/evaluation';
import {User} from './login/user';

@Injectable({
  providedIn: 'root'
})
export class EvaluationService {

  constructor(private http: HttpClient) { }

  saveEvaluation(evaluation: Evaluation) {
      this.http.post('http://localhost:8080/sendEvaluation', JSON.stringify(evaluation)).subscribe(
          data => {
              console.log(data);
              return 'Bewertung erfolgreich abgegeben';
          },
          err => {
              console.log(err);
              return 'Bewertung nicht erfolgreich abgegeben';
          }
      );
  }
}
