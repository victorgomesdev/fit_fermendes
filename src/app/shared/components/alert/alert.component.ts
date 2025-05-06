import { ChangeDetectorRef, Component, ComponentRef, inject, OnInit, ViewChild, ViewContainerRef } from "@angular/core";
import { AlertEnum } from "@shared/enums/alert.enum";
import { AlertService } from "@shared/services/alert.service";
import { AlertMessageComponent } from "./alert-message/alert.message.component";

@Component({
  templateUrl: './alert.component.html',
  selector: 'alert',
  standalone: false
})
export class AlertComponent implements OnInit {

  @ViewChild('vcr', { read: ViewContainerRef, static: true }) container!: ViewContainerRef

  show: boolean = false

  messages: ComponentRef<AlertMessageComponent>[] = []
  alertService = inject(AlertService)
  cd = inject(ChangeDetectorRef)

  ngOnInit(): void {
    this.alertService.observable
      .subscribe({
        next: (event) => {
          const ref = this.container.createComponent(AlertMessageComponent)
          ref.setInput('type', event.type)
          ref.setInput('message', event.message)
          ref.setInput('index', this.messages.length == 0 ? this.messages.length : this.messages.length + 1)
        }
      })
  }

}

/*
event => {
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
      }
*/