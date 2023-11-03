import { Component } from '@angular/core';
import { SupplierService } from 'src/user/services/suppliers.service';

@Component({
  selector: 'app-company-suppliers-all',
  templateUrl: './company-suppliers-all.component.html',
  styleUrls: ['./company-suppliers-all.component.css']
})
export class CompanySuppliersAllComponent {

  constructor(private _suppliers: SupplierService) { }

  suppliers$ = this._suppliers.findAllByCompanyId();
}
