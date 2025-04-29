import { Component, inject } from "@angular/core";
import { Router } from "@angular/router";
import { SharedModule } from "@shared/shared.module";

@Component({
  templateUrl: './login.component.html',
  selector: 'login',
  imports: [SharedModule]
})
export class LoginComponent {

  private router = inject(Router)

  redirectToHome(): void {
    this.router.navigate(['/aulas'])
  }
}