import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSalaryReviewComponent } from './add-salary-review.component';

describe('AddSalaryReviewComponent', () => {
  let component: AddSalaryReviewComponent;
  let fixture: ComponentFixture<AddSalaryReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSalaryReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSalaryReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
