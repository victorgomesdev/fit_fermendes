import { Component, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { ClientDetails } from "./client-details/client-details.component";

@Component({
  templateUrl: './client-home.component.html',
  selector: 'client-home',
  standalone: false
})
export class ClienteHomeComponent { 

  @ViewChild(ClientDetails) details!: ClientDetails
  
  constructor(private router: Router) {}

  redirectToRegistration(): void {
    this.router.navigate(['/alunos/cadastrar'])
  }

  clientSelected(): void {
    this.details.openModal()
  }
}