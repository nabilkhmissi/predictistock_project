import { Component } from '@angular/core';
import { AlertService } from 'src/shared/services/alert.service';
import { CompanyService } from 'src/user/services/company.service';
import { SupplierService } from 'src/user/services/suppliers.service';

@Component({
  selector: 'app-company-suppliers-add',
  templateUrl: './company-suppliers-add.component.html',
  styleUrls: ['./company-suppliers-add.component.css']
})
export class CompanySuppliersAddComponent {


  constructor(private _company: CompanyService,
    private _supplier: SupplierService,
    private _alert: AlertService) {
    this.companyId = _company.loadSelectedCompanyFromLS() ?? null;
  }

  name: string = "";
  email: string = "";
  companyId: string | null = "";

  create() {
    if (!this.name) {
      this._alert.showAlert("Invalid name");
      return;
    }
    if (!this.email) {
      this._alert.showAlert("Invalid email");
      return;
    }
    if (!this.companyId) {
      this._alert.showAlert("Invalid company");
      return;
    }
    const request = { email: this.email, name: this.name, companyId: this.companyId }
    this._supplier.createSupplier(request).subscribe();
  }
}
