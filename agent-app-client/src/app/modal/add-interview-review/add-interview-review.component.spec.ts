import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInterviewReviewComponent } from './add-interview-review.component';

describe('AddInterviewReviewComponent', () => {
  let component: AddInterviewReviewComponent;
  let fixture: ComponentFixture<AddInterviewReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddInterviewReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddInterviewReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
