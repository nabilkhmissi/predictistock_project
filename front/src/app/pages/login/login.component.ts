import { Component } from '@angular/core';
import { AuthService } from 'src/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private _auth: AuthService) { }

  email = "";
  password = ""

  login() {
    this._auth.login(this.email, this.password).subscribe()
  }
}