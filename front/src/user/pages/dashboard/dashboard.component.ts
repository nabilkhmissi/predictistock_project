import { Component } from '@angular/core';
import { AlertService } from 'src/shared/services/alert.service';
import { AuthService } from 'src/shared/services/auth.service';
import { LoadingService } from 'src/shared/services/loading.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(
    private _auth: AuthService,
    private _loading: LoadingService,
    private _alert: AlertService
  ) {
    _auth.loadUserFromLS();
  }

  alert$ = this._alert.alert$;
  loading$ = this._loading.loading$;
}
