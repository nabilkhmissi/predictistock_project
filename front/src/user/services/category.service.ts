import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AlertService } from "src/shared/services/alert.service";
import { AuthService } from "src/shared/services/auth.service";
import { LoadingService } from "src/shared/services/loading.service";
import { CompanyService } from "./company.service";
import { environment } from "src/environments/environment";
import { map } from "rxjs";
import { ApiResponse } from "src/app/models/api-response.model";

@Injectable()
export class CategoryService {
    constructor(private _http: HttpClient,
        private _auth: AuthService,
        private _alert: AlertService,
        private _loading: LoadingService,
        private _company: CompanyService) { }


    readonly baseUrl = environment.baseUrl + "/category";

    findAllByCompanyId() {
        this._loading.showLoading();
        const id = this._company.loadSelectedCompanyFromLS();
        return this._http.get<ApiResponse>(`${this.baseUrl}/company/${id}`).pipe(
            map(response => {
                this._loading.hideLoading();
                return response.data;
            })
        )
    }

    create(request: { companyId: string, name: string }) {
        this._loading.showLoading();
        return this._http.post<ApiResponse>(`${this.baseUrl}`, request).pipe(
            map(response => {
                this._loading.hideLoading();
                this._alert.showAlert(response.message)
                return response.data
            })
        )
    }

    delete(categoryId: string) {
        this._loading.showLoading();
        return this._http.delete<ApiResponse>(`${this.baseUrl}/${categoryId}`).pipe(
            map(response => {
                this._loading.hideLoading();
                this._alert.showAlert(response.message)
                return response.data
            })
        )
    }

    numbersOfArticlesByCompanyId() {
        this._loading.showLoading();
        const companyId = this._company.loadSelectedCompanyFromLS();
        if (!companyId) {
            return null;
        }
        return this._http.get<ApiResponse>(`${this.baseUrl}/number/company/${companyId}`).pipe(
            map(response => {
                this._loading.hideLoading();
                return response.data
            })
        )
    }
}