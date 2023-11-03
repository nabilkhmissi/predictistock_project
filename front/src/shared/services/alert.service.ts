import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class AlertService {
    constructor() { }

    private alertSubject = new BehaviorSubject<string | null>(null)
    alert$ = this.alertSubject.asObservable();

    showAlert(message: string) {
        this.alertSubject.next(message)
    }

    hiseAlert() {
        this.alertSubject.next(null)
    }
}