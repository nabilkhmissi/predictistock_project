import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/shared/services/alert.service';
import { AuthService } from 'src/shared/services/auth.service';
import { SubscriptionTypeService } from 'src/shared/services/subscription-type.service';
import { CompanyService } from 'src/user/services/company.service';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent implements OnInit {

  constructor(private _auth: AuthService,
    private _subscriptionType: SubscriptionTypeService,
    private _alert: AlertService,
    private _company: CompanyService) { }

  selected: string | null = null;
  types$ = this._subscriptionType.findAll();
  companyName = "";
  ownerEmail = "";
  ownerName = "";

  ngOnInit(): void {
    this._auth.authUser$.subscribe(
      user => {
        this.ownerName = user!.name;
        this.ownerEmail = user!.email;
      }
    )
  }

  createCompany() {
    if (this.companyName.length === 0) {
      this._alert.showAlert("Invalid company name")
      return;
    }
    if (!this.selected) {
      this._alert.showAlert("Please select a subscription type")
      return;
    }
    const request = { name: this.companyName, subscriptionTypeId: this.selected! };
    this._company.createCompany(request).subscribe();
  }

  selectType(id: string) {
    this.selected = this.selected === id ? null : id
  }
}
