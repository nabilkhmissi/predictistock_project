import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/shared/services/alert.service';
import { CategoryService } from 'src/user/services/category.service';
import { CompanyService } from 'src/user/services/company.service';

@Component({
  selector: 'app-categories-add',
  templateUrl: './categories-add.component.html',
  styleUrls: ['./categories-add.component.css']
})
export class CategoriesAddComponent implements OnInit {

  constructor(private _company: CompanyService,
    private _alert: AlertService,
    private _category: CategoryService) { }
  companyName = "";
  companyId = "";
  categoryName = "";

  ngOnInit(): void {
    this._company.findCompanyById(this._company.loadSelectedCompanyFromLS()!).subscribe(
      company => {
        this.companyName = company.name
        this.companyId = company.id
      }
    )
  }
  createCategory() {
    if (!this.companyName || this.categoryName.length === 0) {
      this._alert.showAlert("Invalid category name");
      return;
    }
    const request = { companyId: this.companyId, name: this.categoryName }
    this._category.create(request).subscribe();
  }
}
