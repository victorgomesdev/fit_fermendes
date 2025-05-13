import { inject, Injectable, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { AlertService } from "@shared/services/alert.service";

@Injectable()
export abstract class BaseComponent implements OnInit {

  formGroup!: FormGroup
  formBuilder = inject(FormBuilder)
  router = inject(Router)
  alertService = inject(AlertService)
  
  ngOnInit(): void { }

}