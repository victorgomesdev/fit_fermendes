import { Component, output } from "@angular/core";

@Component({
  templateUrl: './client-details.component.html',
  selector: 'client-details',
  standalone: false
})
export class ClientDetails { 

  show = false

  openModal() {
    this.show = true
  }

  closeModal(): void {
    this.show = false
  }
}