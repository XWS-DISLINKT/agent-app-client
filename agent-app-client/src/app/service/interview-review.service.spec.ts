import { TestBed } from '@angular/core/testing';

import { InterviewReviewService } from './interview-review.service';

describe('InterviewReviewService', () => {
  let service: InterviewReviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterviewReviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
