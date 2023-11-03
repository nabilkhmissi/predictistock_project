import { Component } from '@angular/core';
import { tap } from 'rxjs';
import { AlertService } from 'src/shared/services/alert.service';
import { SupplierService } from 'src/user/services/suppliers.service';

@Component({
  selector: 'app-company-suppliers-remove',
  templateUrl: './company-suppliers-remove.component.html',
  styleUrls: ['./company-suppliers-remove.component.css']
})
export class CompanySuppliersRemoveComponent {
  constructor(private _suppliers: SupplierService, private _alert: AlertService) { }

  suppliers$ = this._suppliers.findAllByCompanyId();


  delete(id: string) {
    if (!id) {
      this._alert.showAlert("Invalid Company ID");
      return;
    }
    this._suppliers.delete(id).subscribe(
      () => {
        this.suppliers$ = this._suppliers.findAllByCompanyId();
      })
  }
}
