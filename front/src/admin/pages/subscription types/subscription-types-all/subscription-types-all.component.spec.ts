import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionTypesAllComponent } from './subscription-types-all.component';

describe('SubscriptionTypesAllComponent', () => {
  let component: SubscriptionTypesAllComponent;
  let fixture: ComponentFixture<SubscriptionTypesAllComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubscriptionTypesAllComponent]
    });
    fixture = TestBed.createComponent(SubscriptionTypesAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
