import { Component } from '@angular/core';
import { SubscriptionService } from 'src/user/services/subscription.service';

@Component({
  selector: 'app-company-subscriptions',
  templateUrl: './company-subscriptions.component.html',
  styleUrls: ['./company-subscriptions.component.css']
})
export class CompanySubscriptionsComponent {

  constructor(private _subscription: SubscriptionService) { }


  subscriptionHistory$ = this._subscription.findSubscriptionsHistoryByCompanyId();
}
