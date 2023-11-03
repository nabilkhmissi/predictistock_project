import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionTypesRemoveComponent } from './subscription-types-remove.component';

describe('SubscriptionTypesRemoveComponent', () => {
  let component: SubscriptionTypesRemoveComponent;
  let fixture: ComponentFixture<SubscriptionTypesRemoveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubscriptionTypesRemoveComponent]
    });
    fixture = TestBed.createComponent(SubscriptionTypesRemoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
