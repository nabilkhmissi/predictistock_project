import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { CompanyService } from 'src/user/services/company.service';

@Component({
  selector: 'app-my-companies',
  templateUrl: './my-companies.component.html',
  styleUrls: ['./my-companies.component.css']
})
export class MyCompaniesComponent {
  constructor(private _company: CompanyService,
    private _router: Router) { }
  empty = false;
  my_companies$ = this._company.findByClientId().pipe(
    tap(companies => {
      if (companies.length !== 0) this.empty = true
    })
  );

  goToDashboard(companyId: string, name: string) {
    localStorage.setItem("predictiStock_selected_company", companyId);
    this._router.navigate(['user/company', companyId]);
  }

}
