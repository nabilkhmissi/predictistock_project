import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/models/category.model';
import { CategoryService } from 'src/user/services/category.service';

@Component({
  selector: 'app-categories-all',
  templateUrl: './categories-all.component.html',
  styleUrls: ['./categories-all.component.css']
})
export class CategoriesAllComponent {

  constructor(private _category: CategoryService) {
  }

  categories$: Observable<Category[]> = this._category.findAllByCompanyId();

}
