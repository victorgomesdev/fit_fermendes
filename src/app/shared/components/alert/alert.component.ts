import { Component, inject, OnInit, } from "@angular/core";
import { AlertService } from "@shared/services/alert.service";
import { ToastrService } from "ngx-toastr";

@Component({
  templateUrl: './alert.component.html',
  selector: 'alert',
  standalone: false
})
export class AlertComponent implements OnInit {

  alertService = inject(AlertService)
  toatsrService = inject(ToastrService)

  ngOnInit(): void {
    this.alertService.observable
      .subscribe({
        next: (event) => {
          switch (event.type) {
            case 'ERROR': this.toatsrService.error(event.message, 'ERRO!'); break;
            case 'WARN': this.toatsrService.warning(event.message, 'ALERTA!'); break;
            case 'SUCCESS': this.toatsrService.success(event.message, 'SUCESSO!'); break;
            case 'INFO': this.toatsrService.info(event.message, 'INFO!'); break;
          }
        }
      })
  }

}