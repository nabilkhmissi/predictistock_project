import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, EMPTY, catchError, map, tap } from "rxjs";
import { LoadingService } from "./loading.service";
import { Router } from "@angular/router";
import { AlertService } from "src/shared/services/alert.service";
import { environment } from "src/environments/environment";
import { User } from "src/app/models/user.model";
import { ApiResponse } from "src/app/models/api-response.model";
import { SignupRequest } from "src/app/models/signup-request.model";

@Injectable()
export class AuthService {
  constructor(private _http: HttpClient,
    private _alert: AlertService,
    private _loading: LoadingService,
    private _router: Router) { }


  private authUserSubject = new BehaviorSubject<User | null>(null)
  authUser$ = this.authUserSubject.asObservable();

  setAuthUser(user: User | null) {
    this.authUserSubject.next(user)
  }

  baseUrl = `${environment.baseUrl}/auth`;

  login(email: string, password: string) {
    this._loading.showLoading();
    return this._http.post<ApiResponse>(`${this.baseUrl}/login`, { email: email, password: password }).pipe(
      map(response => {
        return { ...response.data, id: response.data._id }
      }),
      tap(response => {
        this._loading.hideLoading();
        this.loginSuccess(response.data)
      }),
      catchError(error => {
        this._loading.hideLoading();
        this._alert.showAlert(error.error.message)
        return EMPTY
      })
    )
  }

  signup(request: SignupRequest) {
    this._loading.showLoading();
    return this._http.post<ApiResponse>(`${this.baseUrl}/signup`, request).pipe(
      tap(response => {
        this._loading.hideLoading();
        this._alert.showAlert(response.data)
      }),
      catchError(error => {
        this._loading.hideLoading();
        this._alert.showAlert(error.error.message)
        return EMPTY
      })
    )
  }

  loginSuccess(response: User) {
    this.setAuthUser(response)
    localStorage.setItem("predictiStock_user", JSON.stringify(response));
    if (response.role !== "ADMIN") {
      this._router.navigateByUrl("user")
    } else {
      this._router.navigateByUrl("admin")
    }
  }

  loadUserFromLS() {
    const user = localStorage.getItem("predictiStock_user");
    if (user) {
      const u = JSON.parse(user) as User
      this.setAuthUser(u)
      if (u.role === "ADMIN") {
        this._router.navigateByUrl("admin")
      } else {
        this._router.navigateByUrl("user")
      }
    }
  }

  logout() {
    localStorage.removeItem("predictiStock_user")
    this.setAuthUser(null);
    this._router.navigateByUrl("login");
  }
}