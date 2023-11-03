import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { EMPTY, Observable, catchError } from "rxjs";
import { AlertService } from "src/shared/services/alert.service";
import { LoadingService } from "src/shared/services/loading.service";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(
        private _alert: AlertService,
        private _loading: LoadingService) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            catchError(error => {
                this._loading.hideLoading();
                this._alert.showAlert(error.error.message)
                return EMPTY;
            })
        )
    }
}