import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanySuppliersRemoveComponent } from './company-suppliers-remove.component';

describe('CompanySuppliersRemoveComponent', () => {
  let component: CompanySuppliersRemoveComponent;
  let fixture: ComponentFixture<CompanySuppliersRemoveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompanySuppliersRemoveComponent]
    });
    fixture = TestBed.createComponent(CompanySuppliersRemoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
