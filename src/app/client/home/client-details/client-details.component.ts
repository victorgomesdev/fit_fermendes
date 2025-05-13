import { Component } from "@angular/core";
import { Client } from "@shared/types/client.type";

@Component({
  templateUrl: './client-details.component.html',
  selector: 'client-details',
  standalone: false
})
export class ClientDetails { 

  client!: Client
  show = false

  openModal(client: Client) {
    this.client = client
    this.show = true
  }

  closeModal(): void {
    this.show = false
  }
}