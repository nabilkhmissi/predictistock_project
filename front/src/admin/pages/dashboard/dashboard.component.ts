import { Component } from '@angular/core';
import { AlertService } from 'src/shared/services/alert.service';
import { LoadingService } from 'src/shared/services/loading.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private _loading: LoadingService,
    private _alert: AlertService) { }

  loading$ = this._loading.loading$;
  alert$ = this._alert.alert$;
}
