import { Component, output } from "@angular/core";

@Component({
  templateUrl: './patient-modal.html',
  selector: 'patient-modal',
  standalone: false
})
export class PatientModal {

  close = output()

  cloeseModal() {
    this.close.emit()
  }
}