import { Component } from "@angular/core";

@Component({
  templateUrl: './new-user.component.html',
  selector: 'new-user',
  standalone: false
})
export class NewUserComponent {

  show = false

  toogleModal(): void {
    this.show = !this.show
  }
}