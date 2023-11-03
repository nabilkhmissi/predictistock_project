import { Component } from '@angular/core';
import { map, tap } from 'rxjs';
import { CompanyService } from 'src/user/services/company.service';
import { SubscriptionService } from 'src/user/services/subscription.service';

@Component({
  selector: 'app-company-dashboard',
  templateUrl: './company-dashboard.component.html',
  styleUrls: ['./company-dashboard.component.css']
})
export class CompanyDashboardComponent {

  constructor(private _company: CompanyService,
    private _subscrption: SubscriptionService) { }

  selectedCompany$ = this._company.findCompanyById(this._company.loadSelectedCompanyFromLS()!).pipe(
    map(company => company.name)
  )

  activeSubscription$ = this._subscrption.findActiveSubscriptionByCompanyId();
}
