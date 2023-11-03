import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SharedModule } from "src/shared/shared.module";
import { MyCompaniesComponent } from './pages/my-companies/my-companies.component';
import { HomeComponent } from './pages/home/home.component';
import { AddCompanyComponent } from './pages/add-company/add-company.component';
import { FormsModule } from "@angular/forms";
import { CompanyService } from "./services/company.service";
import { CompanyDashboardComponent } from './pages/company-dashboard/company-dashboard.component';
import { CompanyDashboardMainComponent } from './pages/company-dashboard-main/company-dashboard-main.component';
import { CategoriesComponent } from './pages/category/categories/categories.component';
import { CategoriesAddComponent } from './pages/category/categories-add/categories-add.component';
import { CategoriesRemoveComponent } from './pages/category/categories-remove/categories-remove.component';
import { CategoriesAllComponent } from './pages/category/categories-all/categories-all.component';
import { CategoryService } from "./services/category.service";
import { CompanyCustomersAllComponent } from './pages/company-customers/company-customers-all/company-customers-all.component';
import { CustomersService } from "./services/customers.service";
import { CompanyArticlesComponent } from './pages/company-articles/company-articles/company-articles.component';
import { ArticleService } from "./services/articles.service";
import { CompanySuppliersComponent } from './pages/company-suppliers/company-suppliers/company-suppliers.component';
import { SupplierService } from "./services/suppliers.service";
import { SubscriptionService } from "./services/subscription.service";
import { CompanyOrdersComponent } from './pages/company-orders/company-orders.component';
import { OrdersService } from "./services/orders.service";
import { CompanySubscriptionsComponent } from './pages/company-subscriptions/company-subscriptions.component';
import { CompanySuppliersAddComponent } from './pages/company-suppliers/company-suppliers-add/company-suppliers-add.component';
import { CompanySuppliersRemoveComponent } from './pages/company-suppliers/company-suppliers-remove/company-suppliers-remove.component';
import { CompanySuppliersAllComponent } from './pages/company-suppliers/company-suppliers-all/company-suppliers-all.component';
import { CompanyArticlesAllComponent } from './pages/company-articles/company-articles-all/company-articles-all.component';
import { CompanyArticlesAddComponent } from './pages/company-articles/company-articles-add/company-articles-add.component';
import { CompanyArticlesRemoveComponent } from './pages/company-articles/company-articles-remove/company-articles-remove.component';

@NgModule({
    declarations: [
        DashboardComponent,
        MyCompaniesComponent,
        HomeComponent,
        AddCompanyComponent,
        CompanyDashboardComponent,
        CompanyDashboardMainComponent,
        CategoriesComponent,
        CategoriesAddComponent,
        CategoriesRemoveComponent,
        CategoriesAllComponent,
        CompanyCustomersAllComponent,
        CompanyArticlesComponent,
        CompanySuppliersComponent,
        CompanyOrdersComponent,
        CompanySubscriptionsComponent,
        CompanySuppliersAddComponent,
        CompanySuppliersRemoveComponent,
        CompanySuppliersAllComponent,
        CompanyArticlesAllComponent,
        CompanyArticlesAddComponent,
        CompanyArticlesRemoveComponent,
    ],
    imports: [
        RouterModule.forChild([
            {
                path: "", component: DashboardComponent, children: [
                    { path: "", redirectTo: "home", pathMatch: "full" },
                    { path: "home", component: HomeComponent },
                    { path: "my-companies", component: MyCompaniesComponent },
                    { path: "add-company", component: AddCompanyComponent },
                    {
                        path: "company/:id", component: CompanyDashboardComponent, children: [
                            { path: "", redirectTo: "overview", pathMatch: "full" },
                            { path: "overview", component: CompanyDashboardMainComponent },
                            {
                                path: "categories", component: CategoriesComponent, children: [
                                    { path: "", redirectTo: "all", pathMatch: "full" },
                                    { path: "all", component: CategoriesAllComponent },
                                    { path: "add", component: CategoriesAddComponent },
                                    { path: "remove", component: CategoriesRemoveComponent },
                                ]
                            },
                            {
                                path: "customers", component: CompanyCustomersAllComponent
                            },
                            {
                                path: "articles", component: CompanyArticlesComponent, children: [
                                    { path: "", redirectTo: "all", pathMatch: 'full' },
                                    { path: 'all', component: CompanyArticlesAllComponent },
                                    { path: 'add', component: CompanyArticlesAddComponent },
                                    { path: 'remove', component: CompanyArticlesRemoveComponent },
                                ]
                            },
                            {
                                path: "suppliers", component: CompanySuppliersComponent, children: [
                                    { path: "", redirectTo: "all", pathMatch: 'full' },
                                    { path: 'all', component: CompanySuppliersAllComponent },
                                    { path: 'add', component: CompanySuppliersAddComponent },
                                    { path: 'remove', component: CompanySuppliersRemoveComponent },
                                ]
                            },
                            {
                                path: "orders", component: CompanyOrdersComponent
                            },
                            {
                                path: "subscriptions", component: CompanySubscriptionsComponent
                            },
                        ]
                    }
                ]
            }
        ]),
        CommonModule,
        SharedModule,
        FormsModule
    ],
    exports: [],
    providers: [
        CompanyService,
        CategoryService,
        CustomersService,
        ArticleService,
        SupplierService,
        SubscriptionService,
        OrdersService
    ]
})
export class UserModule { }