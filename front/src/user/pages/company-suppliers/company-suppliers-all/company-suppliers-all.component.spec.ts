import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanySuppliersAllComponent } from './company-suppliers-all.component';

describe('CompanySuppliersAllComponent', () => {
  let component: CompanySuppliersAllComponent;
  let fixture: ComponentFixture<CompanySuppliersAllComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompanySuppliersAllComponent]
    });
    fixture = TestBed.createComponent(CompanySuppliersAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
