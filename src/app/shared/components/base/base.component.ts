import { inject } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";

export abstract class BaseComponent {

  formGroup!: FormGroup
  formBuilder = inject(FormBuilder)
  router!: Router

  constructor() {
    this.router = inject(Router)
  }
}