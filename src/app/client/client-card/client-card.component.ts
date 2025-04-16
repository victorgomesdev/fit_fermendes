import { Component, output } from "@angular/core";

@Component({
  templateUrl: './client-card.component.html',
  selector: 'client-card',
  standalone: false
})
export class ClientCardComponent { 

  selected = output()

  clientSelected(): void {
    this.selected.emit()
  }
}