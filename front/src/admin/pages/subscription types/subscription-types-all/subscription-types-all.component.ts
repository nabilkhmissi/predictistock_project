import { Component } from '@angular/core';
import { SubscriptionTypeService } from 'src/shared/services/subscription-type.service';

@Component({
  selector: 'app-subscription-types-all',
  templateUrl: './subscription-types-all.component.html',
  styleUrls: ['./subscription-types-all.component.css']
})
export class SubscriptionTypesAllComponent {

  constructor(private _subscriptionTypes: SubscriptionTypeService) { }

  types$ = this._subscriptionTypes.findAll();
}
