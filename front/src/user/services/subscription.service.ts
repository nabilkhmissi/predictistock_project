import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CompanyService } from "./company.service";
import { ApiResponse } from "src/app/models/api-response.model";
import { environment } from "src/environments/environment";
import { map } from "rxjs";

@Injectable()
export class SubscriptionService {
    constructor(private _http: HttpClient,
        private _company: CompanyService) { }

    readonly baseUrl = environment.baseUrl + "/subscription";

    findActiveSubscriptionByCompanyId() {
        const companyId = this._company.loadSelectedCompanyFromLS();
        if (!companyId) {
            return null;
        }
        return this._http.get<ApiResponse>(`${this.baseUrl}/company/${companyId}`).pipe(
            map(response => {
                return response.data[0]
            })
        )
    }

    findSubscriptionsHistoryByCompanyId() {
        const companyId = this._company.loadSelectedCompanyFromLS();
        if (!companyId) {
            return null;
        }
        return this._http.get<ApiResponse>(`${this.baseUrl}/company/${companyId}/history`).pipe(
            map(response => {
                return response.data
            })
        )
    }
}