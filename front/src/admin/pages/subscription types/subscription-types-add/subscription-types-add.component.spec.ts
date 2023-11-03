import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionTypesAddComponent } from './subscription-types-add.component';

describe('SubscriptionTypesAddComponent', () => {
  let component: SubscriptionTypesAddComponent;
  let fixture: ComponentFixture<SubscriptionTypesAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubscriptionTypesAddComponent]
    });
    fixture = TestBed.createComponent(SubscriptionTypesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
