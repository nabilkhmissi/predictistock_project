import { NgModule } from "@angular/core";
import { AuthService } from "./services/auth.service";
import { AlertService } from "./services/alert.service";
import { LoadingService } from "./services/loading.service";
import { LoadingComponent } from './components/loading/loading.component';
import { AlertComponent } from './components/alert/alert.component';
import { HttpClientModule } from "@angular/common/http";
import { HeaderComponent } from './components/header/header.component';
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { SubscriptionTypeService } from "./services/subscription-type.service";
import { EmptyListComponent } from './components/empty-list/empty-list.component';

@NgModule({
  declarations: [
    LoadingComponent,
    AlertComponent,
    HeaderComponent,
    EmptyListComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    RouterModule
  ],
  exports: [
    LoadingComponent,
    AlertComponent,
    HeaderComponent,
    EmptyListComponent
  ],
  providers: [
    AuthService,
    AlertService,
    LoadingService,
    SubscriptionTypeService
  ]
})
export class SharedModule { }