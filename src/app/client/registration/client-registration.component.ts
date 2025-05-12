import { Component, OnInit } from "@angular/core";
import { Validators } from "@angular/forms";
import { BaseComponent } from "@components/base/base.component";

@Component({
  templateUrl: './client-registration.component.html',
  selector: 'client-registration',
  standalone: false
})
export class ClientRegistrationComponent extends BaseComponent implements OnInit {
  
  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      personalData: this.formBuilder.group({
        name: ['', Validators.required],
        cpf: ['', Validators.required],
        email: ['', Validators.required],
        phone: ['', Validators.required]
      }),
      healthInformation: {
        height: [0, Validators.required],
        weight: [0, Validators.required],
        injury: '',
        medicalIndication: ['', Validators.required]
      }
    })
  }

  cancelRegistration(): void {
    this.router.navigate(['/alunos'])
  }
}