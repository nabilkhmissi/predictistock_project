import { Component } from '@angular/core';
import { AuthService } from 'src/shared/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private _auth: AuthService) { }
  authUser$ = this._auth.authUser$;

  logout() {
    this._auth.logout();
  }
}
