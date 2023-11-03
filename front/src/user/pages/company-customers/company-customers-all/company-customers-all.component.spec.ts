import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyCustomersAllComponent } from './company-customers-all.component';

describe('CompanyCustomersAllComponent', () => {
  let component: CompanyCustomersAllComponent;
  let fixture: ComponentFixture<CompanyCustomersAllComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompanyCustomersAllComponent]
    });
    fixture = TestBed.createComponent(CompanyCustomersAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
