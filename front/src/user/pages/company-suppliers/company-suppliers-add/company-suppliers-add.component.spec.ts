import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanySuppliersAddComponent } from './company-suppliers-add.component';

describe('CompanySuppliersAddComponent', () => {
  let component: CompanySuppliersAddComponent;
  let fixture: ComponentFixture<CompanySuppliersAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompanySuppliersAddComponent]
    });
    fixture = TestBed.createComponent(CompanySuppliersAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
