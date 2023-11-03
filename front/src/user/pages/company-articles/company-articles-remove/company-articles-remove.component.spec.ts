import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyArticlesRemoveComponent } from './company-articles-remove.component';

describe('CompanyArticlesRemoveComponent', () => {
  let component: CompanyArticlesRemoveComponent;
  let fixture: ComponentFixture<CompanyArticlesRemoveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompanyArticlesRemoveComponent]
    });
    fixture = TestBed.createComponent(CompanyArticlesRemoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
