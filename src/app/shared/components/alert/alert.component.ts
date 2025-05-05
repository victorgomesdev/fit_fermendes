import { Component, inject, OnInit } from "@angular/core";
import { AlertEnum } from "@shared/enums/alert.enum";
import { AlertService } from "@shared/services/alert.service";

@Component({
  templateUrl: './alert.component.html',
  selector: 'alert',
  standalone: false
})
export class AlertComponent implements OnInit {

  show: boolean = false
  title!: 'ERRO!' | 'ALERTA!' | 'SUCESSO!' | 'SALVO!'
  message!: string
  type!: AlertEnum
  alertService = inject(AlertService)

  ngOnInit(): void {
    this.alertService.observable
      .subscribe(event => {
        switch (event.type) {
          case 'ERROR': this.title = 'ERRO!'; break;
          case 'WARN': this.title = 'ALERTA!'; break;
          case 'SUCCESS': this.title = 'SUCESSO!'; break;
          case 'INFO': this.title = 'SALVO!'; break;
        }

        this.type = event.type
        this.message = event.message
        this.show = true
        setTimeout(() => this.show = false, 3000)
      })
  }

  clear() {
    this.show = false
  }
}