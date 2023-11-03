import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyArticlesAllComponent } from './company-articles-all.component';

describe('CompanyArticlesAllComponent', () => {
  let component: CompanyArticlesAllComponent;
  let fixture: ComponentFixture<CompanyArticlesAllComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompanyArticlesAllComponent]
    });
    fixture = TestBed.createComponent(CompanyArticlesAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
