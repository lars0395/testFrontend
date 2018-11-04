import { TestBed } from '@angular/core/testing';

import { EvaluationPointService } from './evaluation-point.service';

describe('EvaluationPointService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EvaluationPointService = TestBed.get(EvaluationPointService);
    expect(service).toBeTruthy();
  });
});
