import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/models/category.model';
import { CategoryService } from 'src/user/services/category.service';

@Component({
  selector: 'app-categories-remove',
  templateUrl: './categories-remove.component.html',
  styleUrls: ['./categories-remove.component.css']
})
export class CategoriesRemoveComponent {
  constructor(private _category: CategoryService) {
  }

  categories$: Observable<Category[]> = this._category.findAllByCompanyId();

  delete(id: string) {
    this._category.delete(id).subscribe(
      () => this.categories$ = this._category.findAllByCompanyId()
    );
  }
}
