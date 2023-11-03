import { Component } from '@angular/core';
import { OrdersService } from 'src/user/services/orders.service';

@Component({
  selector: 'app-company-orders',
  templateUrl: './company-orders.component.html',
  styleUrls: ['./company-orders.component.css']
})
export class CompanyOrdersComponent {
  constructor(private _orders: OrdersService) { }

  orders$ = this._orders.findAllByCompanyId();

}
