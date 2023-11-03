import { Component } from '@angular/core';
import { AlertService } from 'src/shared/services/alert.service';
import { AuthService } from 'src/shared/services/auth.service';
import { LoadingService } from 'src/shared/services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private _alert: AlertService,
    private _loading: LoadingService,
    private _auth: AuthService) {
    _auth.loadUserFromLS();
  }
  title = 'front_end';

  alert$ = this._alert.alert$;
  loading$ = this._loading.loading$;
}