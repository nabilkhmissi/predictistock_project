import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyArticlesAddComponent } from './company-articles-add.component';

describe('CompanyArticlesAddComponent', () => {
  let component: CompanyArticlesAddComponent;
  let fixture: ComponentFixture<CompanyArticlesAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompanyArticlesAddComponent]
    });
    fixture = TestBed.createComponent(CompanyArticlesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
