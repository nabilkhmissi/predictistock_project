import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesRemoveComponent } from './categories-remove.component';

describe('CategoriesRemoveComponent', () => {
  let component: CategoriesRemoveComponent;
  let fixture: ComponentFixture<CategoriesRemoveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoriesRemoveComponent]
    });
    fixture = TestBed.createComponent(CategoriesRemoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
