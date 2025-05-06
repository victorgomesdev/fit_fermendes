import { Injectable } from "@angular/core";
import { AlertEnum } from "@shared/enums/alert.enum";
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  observable = new Subject<{ message: string, type: AlertEnum }>()

  error(message: string): void {
    this.observable.next({ message: message, type: AlertEnum.ERROR })
  }

  info(message: string): void {
    this.observable.next({ message: message, type: AlertEnum.INFO })
  }

  warn(message: string): void {
    this.observable.next({ message: message, type: AlertEnum.WARN })
  }

  success(message: string): void {
    this.observable.next({ message: message, type: AlertEnum.SUCCESS })
  }
}