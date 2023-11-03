import { Component } from '@angular/core';
import { tap } from 'rxjs';
import { ArticleService } from 'src/user/services/articles.service';

@Component({
  selector: 'app-company-articles-all',
  templateUrl: './company-articles-all.component.html',
  styleUrls: ['./company-articles-all.component.css']
})
export class CompanyArticlesAllComponent {
  constructor(private _article: ArticleService) {
  }

  articles$ = this._article.findAllByCompanyId();
}
