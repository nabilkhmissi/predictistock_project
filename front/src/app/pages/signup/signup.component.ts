import { Component } from '@angular/core';
import { AuthService } from 'src/shared/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor(private _auth: AuthService) { }
  name = "";
  email = "";
  password = "";
  confirmPassword = "";

  signup() {
    const signup_request = {
      name: this.name,
      email: this.email,
      password: this.password,
      confirmPassword: this.confirmPassword,
    }
    this._auth.signup(signup_request).subscribe()
  }
}
