import { Component } from "@angular/core";
import { Validators } from "@angular/forms";
import { BaseComponent } from "@components/base/base.component";

@Component({
  templateUrl: './new-user.component.html',
  selector: 'new-user',
  standalone: false
})
export class NewUserComponent extends BaseComponent {

  show = false

  override ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      name: ['', Validators.required],
      email: this.formBuilder.control('', [Validators.required]),
      senha: ['', Validators.required],
      cargo: ['', Validators.required]
    })
  }

  toogleModal(): void {
    this.show = !this.show
  }
}