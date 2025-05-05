import { Injectable } from "@angular/core";
import { AlertEnum } from "@shared/enums/alert.enum";
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  observable = new Subject<{ message: string, type: AlertEnum }>()

  display(message: string, type: AlertEnum) {
    this.observable.next({ message, type })
  }
}