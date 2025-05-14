import { Component, inject, ViewChild } from "@angular/core";
import { BaseComponent } from "@components/base/base.component";
import { ClientService } from "@services/client";
import { Client } from "@shared/types/client.type";
import { ClientDetails } from "./client-details/client-details.component";

@Component({
  templateUrl: './client-home.component.html',
  selector: 'client-home',
  standalone: false
})
export class ClienteHomeComponent extends BaseComponent {

  @ViewChild(ClientDetails) details!: ClientDetails

  clients: Client[] = []

  clientService = inject(ClientService)

  override ngOnInit(): void {
    this.isLoading = true
    this.loadingService.show()
    this.clientService.listAllCLients()
      .subscribe({
        next: (res: any) => {
          this.clients = res.data
          this.isLoading = false
        },
        complete: ()=> this.loadingService.hide()
      })
  }

  redirectToRegistration(): void {
    this.router.navigate(['/alunos/cadastrar'])
  }

  clientSelected(client: Client): void {
    this.details.openModal(client)
  }
}