import { Component } from '@angular/core';
import { CustomersService } from 'src/user/services/customers.service';

@Component({
  selector: 'app-company-customers-all',
  templateUrl: './company-customers-all.component.html',
  styleUrls: ['./company-customers-all.component.css']
})
export class CompanyCustomersAllComponent {

  constructor(private _customers: CustomersService) { }
  customers$ = this._customers.findAllByCompanyId();
}
