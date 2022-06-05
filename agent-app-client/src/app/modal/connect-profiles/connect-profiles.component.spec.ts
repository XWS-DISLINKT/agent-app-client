import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectProfilesComponent } from './connect-profiles.component';

describe('ConnectProfilesComponent', () => {
  let component: ConnectProfilesComponent;
  let fixture: ComponentFixture<ConnectProfilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnectProfilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectProfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
