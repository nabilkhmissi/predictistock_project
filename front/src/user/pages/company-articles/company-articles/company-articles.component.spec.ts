import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyArticlesComponent } from './company-articles.component';

describe('CompanyArticlesComponent', () => {
  let component: CompanyArticlesComponent;
  let fixture: ComponentFixture<CompanyArticlesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompanyArticlesComponent]
    });
    fixture = TestBed.createComponent(CompanyArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
