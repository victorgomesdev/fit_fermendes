import { Component, ViewChild } from "@angular/core";
import { NewUserComponent } from "@management/new-user/new-user.component";

@Component({
  templateUrl: './configurations.component.html',
  selector: 'configurations',
  standalone: false
})
export class ConfigurationsComponent {

  @ViewChild(NewUserComponent) newUser!: NewUserComponent

  openModal(): void {
    this.newUser.toogleModal()
  }
}