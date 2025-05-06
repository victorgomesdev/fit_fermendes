import { Component, inject } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  templateUrl: './client-registration.component.html',
  selector: 'client-registration',
  standalone: false
})
export class ClientRegistrationComponent {
  
  router = inject(Router)

  cancelRegistration(): void {
    this.router.navigate(['/alunos'])
  }
}