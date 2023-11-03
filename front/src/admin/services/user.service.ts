import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs";
import { ApiResponse } from "src/app/models/api-response.model";
import { environment } from "src/environments/environment";
import { LoadingService } from "src/shared/services/loading.service";

@Injectable()
export class userService {
    constructor(private _http: HttpClient,
        private _loading: LoadingService) { }

    readonly baseUrl = environment.baseUrl + "/clients";


    findAllUsers() {
        this._loading.showLoading();
        return this._http.get<ApiResponse>(this.baseUrl).pipe(
            map(response => {
                this._loading.hideLoading();
                return response.data
            })
        )
    }

    searchByName(name: string) {
        this._loading.showLoading();
        return this._http.get<ApiResponse>(this.baseUrl + `?search=${name}`).pipe(
            map(response => {
                this._loading.hideLoading();
                return response.data
            })
        )
    }

}