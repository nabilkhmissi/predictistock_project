import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionTypesComponent } from './subscription-types.component';

describe('SubscriptionTypesComponent', () => {
  let component: SubscriptionTypesComponent;
  let fixture: ComponentFixture<SubscriptionTypesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubscriptionTypesComponent]
    });
    fixture = TestBed.createComponent(SubscriptionTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
