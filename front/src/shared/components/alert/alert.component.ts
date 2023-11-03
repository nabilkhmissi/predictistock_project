import { Component, Input } from '@angular/core';
import { AlertService } from 'src/shared/services/alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent {

  constructor(private _alert: AlertService) { }
  @Input() message: string | null = null

  hide() {
    this._alert.hiseAlert()
  }
}