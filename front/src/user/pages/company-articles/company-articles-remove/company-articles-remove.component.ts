import { Component } from '@angular/core';
import { ArticleService } from 'src/user/services/articles.service';

@Component({
  selector: 'app-company-articles-remove',
  templateUrl: './company-articles-remove.component.html',
  styleUrls: ['./company-articles-remove.component.css']
})
export class CompanyArticlesRemoveComponent {
  constructor(private _article: ArticleService) {
  }

  articles$ = this._article.findAllByCompanyId();


  delete(id: string) {
    this._article.delete(id).subscribe(
      () => this.articles$ = this._article.findAllByCompanyId()
    )
  }
}
