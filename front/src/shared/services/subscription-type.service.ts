import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { AlertService } from "./alert.service";
import { ApiResponse } from "src/app/models/api-response.model";
import { map, tap } from "rxjs";
import { SubscriptionType } from "src/app/models/subscription-type.model";
import { LoadingService } from "./loading.service";

@Injectable()
export class SubscriptionTypeService {
    constructor(private _http: HttpClient,
        private _loading: LoadingService,
        private _alert: AlertService) { }

    readonly baseUrl = environment.baseUrl + "/subscription-type";

    subscriptionTypes$ = this.findAll();

    findAll() {
        this._loading.showLoading();
        return this._http.get<ApiResponse>(this.baseUrl).pipe(
            map(response => response.data),
            tap(() => this._loading.hideLoading())
        )
    }

    create(request: SubscriptionType) {
        this._loading.showLoading();
        return this._http.post<ApiResponse>(this.baseUrl, request).pipe(
            map(response => {
                this._loading.hideLoading()
                this._alert.showAlert(response.message)
                return response.data
            })
        )
    }

    deleteById(id: string) {
        this._loading.showLoading();
        return this._http.delete<ApiResponse>(`${this.baseUrl}/${id}`).pipe(
            map(response => {
                () => this._loading.hideLoading()
                this._alert.showAlert(response.message);
                return response.data
            })
        )
    }

}