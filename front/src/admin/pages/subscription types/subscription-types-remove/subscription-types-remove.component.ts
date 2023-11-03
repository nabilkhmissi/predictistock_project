import { Component } from '@angular/core';
import { SubscriptionTypeService } from 'src/shared/services/subscription-type.service';

@Component({
  selector: 'app-subscription-types-remove',
  templateUrl: './subscription-types-remove.component.html',
  styleUrls: ['./subscription-types-remove.component.css']
})
export class SubscriptionTypesRemoveComponent {
  constructor(private _subscriptionTypes: SubscriptionTypeService) { }

  types$ = this._subscriptionTypes.findAll();

  handleTypeDelete(id: any) {
    if (!id) {
      return;
    }
    this._subscriptionTypes.deleteById(id).subscribe(
      () => {
        this.types$ = this._subscriptionTypes.findAll();
      }
    );

  }
}

