import { Component } from "@angular/core";

@Component({
  templateUrl: './edit-catyegory.component.html',
  selector: 'edit-category',
  standalone: false
})
export class EditCategoryComponent {

  show = false

  toogleModal(): void {
    this.show = !this.show
  }

}