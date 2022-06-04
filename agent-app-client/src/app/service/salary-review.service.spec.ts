import { TestBed } from '@angular/core/testing';

import { SalaryReviewService } from './salary-review.service';

describe('SalaryReviewService', () => {
  let service: SalaryReviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalaryReviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
