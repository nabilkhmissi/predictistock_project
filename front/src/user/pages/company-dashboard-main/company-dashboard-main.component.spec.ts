import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyDashboardMainComponent } from './company-dashboard-main.component';

describe('CompanyDashboardMainComponent', () => {
  let component: CompanyDashboardMainComponent;
  let fixture: ComponentFixture<CompanyDashboardMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompanyDashboardMainComponent]
    });
    fixture = TestBed.createComponent(CompanyDashboardMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
