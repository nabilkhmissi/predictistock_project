import { Component } from '@angular/core';
import { SubscriptionTypeService } from 'src/shared/services/subscription-type.service';

@Component({
  selector: 'app-subscription-types-add',
  templateUrl: './subscription-types-add.component.html',
  styleUrls: ['./subscription-types-add.component.css']
})
export class SubscriptionTypesAddComponent {
  constructor(private _subsType: SubscriptionTypeService) { }

  amount: number = 10;
  duration: number = 1;
  allowedCompanyNumbers: number = 3;
  allowedArticleNumbers: number = 10;

  createType() {
    let request = {
      amount: this.amount,
      duration: this.duration,
      allowedArticleNumbers: this.allowedArticleNumbers,
      allowedCompanyNumbers: this.allowedCompanyNumbers
    }
    this._subsType.create(request).subscribe();
  }
}
