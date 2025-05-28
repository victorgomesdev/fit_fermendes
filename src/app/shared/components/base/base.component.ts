import { inject, Injectable, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { AlertService } from "@shared/services/alert.service";
import { NgxSpinnerService } from "ngx-spinner";

@Injectable()
export abstract class BaseComponent implements OnInit {

  formGroup!: FormGroup
  formBuilder = inject(FormBuilder)
  router = inject(Router)
  activeRoute = inject(ActivatedRoute)
  alertService = inject(AlertService)
  loadingService = inject(NgxSpinnerService)

  isLoading = false

  ngOnInit(): void { }
  createForm(): void { }
  saveFormEditing(): void { }
  saveFormRegistering(): void { }

  isFieldValid(formControl: string) {
    const control = this.formGroup.get(formControl);
    const invalid = control && control.invalid && (control.dirty || control.touched)
    return {
      'border-error': invalid
    };
  }

}