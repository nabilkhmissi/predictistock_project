import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyOrdersComponent } from './company-orders.component';

describe('CompanyOrdersComponent', () => {
  let component: CompanyOrdersComponent;
  let fixture: ComponentFixture<CompanyOrdersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompanyOrdersComponent]
    });
    fixture = TestBed.createComponent(CompanyOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
