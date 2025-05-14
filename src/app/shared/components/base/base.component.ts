import { inject, Injectable, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { AlertService } from "@shared/services/alert.service";

@Injectable()
export abstract class BaseComponent implements OnInit {

  formGroup!: FormGroup
  formBuilder = inject(FormBuilder)
  router = inject(Router)
  activeRoute = inject(ActivatedRoute)
  alertService = inject(AlertService)

  ngOnInit(): void { }
  createForm(): void { }
  saveFormEditing(): void { }
  saveFormRestering(): void { }

}