import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category.model';
import { AlertService } from 'src/shared/services/alert.service';
import { ArticleService } from 'src/user/services/articles.service';
import { CategoryService } from 'src/user/services/category.service';
import { CompanyService } from 'src/user/services/company.service';

@Component({
  selector: 'app-company-articles-add',
  templateUrl: './company-articles-add.component.html',
  styleUrls: ['./company-articles-add.component.css']
})
export class CompanyArticlesAddComponent implements OnInit {
  constructor(private _company: CompanyService,
    private _article: ArticleService,
    private _alert: AlertService,
    private _category: CategoryService) {
    this.companyId = _company.loadSelectedCompanyFromLS() ?? null;
  }
  ngOnInit(): void {
    this._category.findAllByCompanyId().subscribe(
      data => this.categories = data
    )
  }
  categories: Category[] = [];
  companyId: string | null = "";
  name: string = "";
  description: string = "";
  quantity: number = 1;
  price: number = 0;
  category: Category | null = null;


  selectCategory(event: any) {
    this.category = event.target.value
    console.log(this.category)
  }



  create() {
    if (!this.name) {
      this._alert.showAlert("Name requried");
      return;
    }
    if (!this.description) {
      this._alert.showAlert("Description required");
      return;
    }
    if (!this.companyId) {
      this._alert.showAlert("Company id required");
      return;
    }
    if (!this.category) {
      this._alert.showAlert("Category required");
      return;
    }
    if (!this.quantity) {
      this._alert.showAlert("Quantity required");
      return;
    }
    if (!this.price) {
      this._alert.showAlert("Price required");
      return;
    }
    const request = {
      name: this.name,
      description: this.description,
      companyId: this.companyId,
      quantity: this.quantity,
      price: this.price,
      category: this.category,
    }
    this._article.createArticle(request).subscribe();
  }
}
