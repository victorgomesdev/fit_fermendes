import { Component, input, output } from "@angular/core";
import { Client } from "@shared/types/client.type";

@Component({
  templateUrl: './client-card.component.html',
  selector: 'client-card',
  standalone: false
})
export class ClientCardComponent {

  client = input<Client>()
  selected = output<Client>()

  clientSelected(): void {
    this.selected.emit(this.client() as Client)
  }
}