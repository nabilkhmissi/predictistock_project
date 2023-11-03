import { Component } from '@angular/core';
import { ArticleService } from 'src/user/services/articles.service';
import { CategoryService } from 'src/user/services/category.service';
import { CustomersService } from 'src/user/services/customers.service';
import { OrdersService } from 'src/user/services/orders.service';
import { SupplierService } from 'src/user/services/suppliers.service';

@Component({
  selector: 'app-company-dashboard-main',
  templateUrl: './company-dashboard-main.component.html',
  styleUrls: ['./company-dashboard-main.component.css']
})
export class CompanyDashboardMainComponent {

  constructor(private _article: ArticleService,
    private _category: CategoryService,
    private _customer: CustomersService,
    private _order: OrdersService,
    private _supplier: SupplierService) { }

  articles$ = this._article.numbersOfArticlesByCompanyId();
  category$ = this._category.numbersOfArticlesByCompanyId();
  customers$ = this._customer.numbersOfCustomersByCompanyId();
  orders$ = this._order.findOrdersNumberByCompanyId();
  suppliers$ = this._supplier.findSuppliersNumberByCompanyId();
}
