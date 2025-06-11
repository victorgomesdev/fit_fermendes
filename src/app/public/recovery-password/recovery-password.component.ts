import { Component, inject } from "@angular/core";
import { Validators } from "@angular/forms";
import { BaseComponent } from "@components/base/base.component";
import { UserService } from "@services/user";
import { filter } from "rxjs";

@Component({
  templateUrl: './recovery-password.component.html',
  selector: 'recovery-password',
  standalone: false
})
export class RecoveryPasswordComponent extends BaseComponent {

  recoveryCode!: string

  userService = inject(UserService)

  override ngOnInit(): void {

    this.activeRoute.paramMap
      .pipe(
        filter(params => params.has('codigo'))
      ).subscribe({
        next: (params) => {
          this.recoveryCode = <string>params.get('codigo')
        },
      })

    this.formGroup = this.formBuilder.group({
      novaSenha: ['', [Validators.required, Validators.minLength(8)]]
    })
  }

  requestPasswordRecovery(): void {
    if (this.formGroup.valid && this.recoveryCode) {
      this.userService.recoverPassword(this.formGroup.value.novaSenha, this.recoveryCode)
        .subscribe({
          next: (res: any) => {
            
          }
        })
      return
    }

    this.alertService.warn('Senha inválida!')
    return
  }
}