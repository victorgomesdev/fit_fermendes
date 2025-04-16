import { Component, ViewChild } from "@angular/core";
import { ClientDetails } from "./client-details/client-details.component";

@Component({
  templateUrl: './client-home.component.html',
  selector: 'client-home',
  standalone: false
})
export class ClienteHomeComponent { 

  @ViewChild(ClientDetails) details!: ClientDetails
  
  clientSelected(): void {
    this.details.openModal()
  }
}