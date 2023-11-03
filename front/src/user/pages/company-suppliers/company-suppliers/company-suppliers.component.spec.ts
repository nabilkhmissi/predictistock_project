import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanySuppliersComponent } from './company-suppliers.component';

describe('CompanySuppliersComponent', () => {
  let component: CompanySuppliersComponent;
  let fixture: ComponentFixture<CompanySuppliersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompanySuppliersComponent]
    });
    fixture = TestBed.createComponent(CompanySuppliersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
