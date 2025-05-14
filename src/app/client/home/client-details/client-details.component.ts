import { Component } from "@angular/core";
import { BaseComponent } from "@components/base/base.component";
import { Client } from "@shared/types/client.type";

@Component({
  templateUrl: './client-details.component.html',
  selector: 'client-details',
  standalone: false
})
export class ClientDetails extends BaseComponent {

  client!: Client
  show = false

  openModal(client: Client) {
    this.client = client
    this.show = true
  }

  closeModal(): void {
    this.show = false
  }

  redirectToEdit(clientId: number | undefined): void {
    if (clientId) {
      this.router.navigate(['cadastrar'], {
        queryParams: {
          edit: clientId
        },
        relativeTo: this.activeRoute
      })
    }
    return
  }
}