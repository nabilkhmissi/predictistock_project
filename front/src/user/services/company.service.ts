import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { EMPTY, Observable, map, switchMap, tap } from "rxjs";
import { environment } from "src/environments/environment";
import { AlertService } from "src/shared/services/alert.service";
import { AuthService } from "src/shared/services/auth.service";
import { ApiResponse } from "../../app/models/api-response.model";
import { Company } from "src/app/models/company.model";
import { LoadingService } from "src/shared/services/loading.service";

@Injectable()

export class CompanyService {
    constructor(private _http: HttpClient,
        private _auth: AuthService,
        private _alert: AlertService,
        private _loading: LoadingService) { }

    readonly baseUrl = `${environment.baseUrl}/company`

    findByClientId() {
        this._loading.showLoading();
        return this._auth.authUser$.pipe(
            switchMap(user => {
                if (!user) return EMPTY;
                return this._http.get<ApiResponse>(`${this.baseUrl}/client/${user.id}`).pipe(
                    map(response => {
                        this._loading.hideLoading();
                        return response.data.map((e: Company) => this.formatDate(e))
                    })
                )
            })
        )
    }

    createCompany(request: { name: string, subscriptionTypeId: string }) {
        this._loading.showLoading();
        return this._auth.authUser$.pipe(
            switchMap(user => {
                if (!user) return EMPTY;
                const req = { clientId: user.id, ...request };
                return this._http.post<ApiResponse>(`${this.baseUrl}`, req);
            })
        ).pipe(
            tap(response => {
                this._loading.hideLoading();
                this._alert.showAlert(response.message)
            })
        )
    }

    findCompanyById(companyId: string) {
        this._loading.showLoading();
        return this._http.get<ApiResponse>(`${this.baseUrl}/${companyId}`).pipe(
            map(response => {
                this._loading.hideLoading();
                return this.formatDate(response.data)
            })
        );
    }

    formatDate(company: Company) {
        const date = new Date(company.creationDate);
        const today = new Date();
        return {
            ...company,
            enabled: date < today
        }
    }

    loadSelectedCompanyFromLS() {
        const id = localStorage.getItem("predictiStock_selected_company");
        if (!id) return null;
        return id;
    }
}