import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs";
import { ApiResponse } from "src/app/models/api-response.model";
import { environment } from "src/environments/environment";
import { AlertService } from "src/shared/services/alert.service";
import { LoadingService } from "src/shared/services/loading.service";
import { CompanyService } from "./company.service";

@Injectable()
export class SupplierService {
    constructor(private _http: HttpClient,
        private _loading: LoadingService,
        private _alert: AlertService,
        private _companyService: CompanyService) { }

    readonly baseUrl = environment.baseUrl + "/supplier";

    findAllByCompanyId() {
        this._loading.showLoading();
        const companyId = this._companyService.loadSelectedCompanyFromLS();
        if (!companyId) {
            return null;
        }
        return this._http.get<ApiResponse>(`${this.baseUrl}/company/${companyId}`).pipe(
            map(response => {
                this._loading.hideLoading();
                return response.data
            })
        )
    }

    findSuppliersNumberByCompanyId() {
        this._loading.showLoading();
        const companyId = this._companyService.loadSelectedCompanyFromLS();
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

    createSupplier(request: any) {
        this._loading.showLoading();
        return this._http.post<ApiResponse>(`${this.baseUrl}`, request).pipe(
            map(response => {
                this._alert.showAlert(response.message)
                this._loading.hideLoading();
                return response.data
            })
        )
    }

    delete(id: string) {
        this._loading.showLoading();
        return this._http.delete<ApiResponse>(`${this.baseUrl}/${id}`).pipe(
            map(response => {
                this._alert.showAlert(response.message)
                this._loading.hideLoading();
                return response.data
            })
        )
    }
}