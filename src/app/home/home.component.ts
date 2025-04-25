import { Component, inject } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  templateUrl: './home.component.html',
  selector: 'home',
})
export class HomeComponent {

  router = inject(Router)

  navigateToLogin(): void {
    this.router.navigate(['/auth'])
  }
}