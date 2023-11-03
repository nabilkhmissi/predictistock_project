import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "src/shared/shared.module";
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RouterModule } from "@angular/router";
import { UsersComponent } from './pages/users/users.component';
import { SubscriptionTypesComponent } from './pages/subscription types/subscription-types/subscription-types.component';
import { DashboardHomeComponent } from './pages/dashboard-home/dashboard-home.component';
import { SubscriptionTypesAllComponent } from './pages/subscription types/subscription-types-all/subscription-types-all.component';
import { SubscriptionTypesAddComponent } from './pages/subscription types/subscription-types-add/subscription-types-add.component';
import { SubscriptionTypesRemoveComponent } from './pages/subscription types/subscription-types-remove/subscription-types-remove.component';
import { FormsModule } from "@angular/forms";
import { userService } from "./services/user.service";

@NgModule({
    declarations: [
        DashboardComponent,
        UsersComponent,
        SubscriptionTypesComponent,
        DashboardHomeComponent,
        SubscriptionTypesAllComponent,
        SubscriptionTypesAddComponent,
        SubscriptionTypesRemoveComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        SharedModule,
        RouterModule.forChild([
            {
                path: "", component: DashboardComponent, children: [
                    { path: "", redirectTo: "home", pathMatch: "full" },
                    { path: "home", component: DashboardHomeComponent },
                    { path: "users", component: UsersComponent },
                    {
                        path: "subscription-types", component: SubscriptionTypesComponent, children: [
                            { path: "", redirectTo: "all", pathMatch: "full" },
                            { path: "all", component: SubscriptionTypesAllComponent },
                            { path: "add", component: SubscriptionTypesAddComponent },
                            { path: "remove", component: SubscriptionTypesRemoveComponent },
                        ]
                    },
                ]
            },
        ])
    ],
    exports: [],
    providers: [
        userService
    ]
})
export class AdminModule { }