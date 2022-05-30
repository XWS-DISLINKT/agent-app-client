import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyRegistrationRequestsComponent } from './company-registration-requests.component';

describe('CompanyRegistrationRequestsComponent', () => {
  let component: CompanyRegistrationRequestsComponent;
  let fixture: ComponentFixture<CompanyRegistrationRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyRegistrationRequestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyRegistrationRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
