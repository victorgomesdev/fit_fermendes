import { Component } from "@angular/core";

@Component({
  templateUrl: './client-home.component.html',
  selector: 'client-home',
  standalone: false
})
export class ClienteHomeComponent { 

  showModal = false

  toggleModal() {
    this.showModal = !this.showModal
  }
}