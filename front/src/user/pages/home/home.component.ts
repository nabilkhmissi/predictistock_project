import { Component } from '@angular/core';
import { AuthService } from 'src/shared/services/auth.service';
import { CompanyService } from 'src/user/services/company.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private _auth: AuthService) { }


  user$ = this._auth.authUser$;

}
