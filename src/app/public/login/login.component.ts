import { HttpErrorResponse } from "@angular/common/http";
import { Component, inject } from "@angular/core";
import { Validators } from "@angular/forms";
import { BaseComponent } from "@components/base/base.component";
import { UserService } from "@services/user";
import { AuthService } from "@shared/services/auth.service";
import { emailValidator } from "@shared/validators/email.validator";
import { filter } from "rxjs";

@Component({
  templateUrl: './login.component.html',
  selector: 'login',
  standalone: false,
})
export class LoginComponent extends BaseComponent {

  validator!: string

  userService = inject(UserService)
  auth = inject(AuthService)

  override ngOnInit(): void {
    this.activeRoute.queryParamMap
      .pipe(
        filter(params => params.has('loginExpired'))
      ).subscribe(() => this.alertService.error('Você não fez login!'))

    if (this.auth.getToken()) {
      this.auth.endSession()
    }

    this.formGroup = this.formBuilder.group({
      email: this.formBuilder.control('', [Validators.required, emailValidator()]),
      senha: this.formBuilder.control('', [Validators.required, Validators.minLength(8)]),
      code: ''
    })
  }

  loginWithEmail(): void {
    if (this.formGroup.valid) {
      this.isLoading = !this.isLoading
      this.userService.loginWithEmail({
        email: this.formGroup.get('email')?.value,
        password: this.formGroup.get('senha')?.value
      }).subscribe({
        next: (res: any) => {
          this.validator = res.data
          this.isLoading = !this.isLoading
        },
        error: (err: HttpErrorResponse) => {
          this.alertService.error(err.error.message)
          this.isLoading = !this.isLoading
        }
      })
      return
    }
    this.alertService.warn('Campos inválidos ou não preenchidos!')
  }

  validateTwoFactors(): void {
    this.isLoading = !this.isLoading
    this.userService.authenticateWith2F(this.formGroup.get('code')?.value, this.validator)
      .subscribe({
        next: (res: any) => {
          this.auth.setToken(res.data.token)
          this.router.navigate(['/aulas'])
        },
        error: (err: HttpErrorResponse) => {
          this.alertService.error(err.error.message)
          this.isLoading = !this.isLoading
        }
      })
  }

  onRecoveryRequested(): void {
    if (this.formGroup.get('email')?.valid) {
      this.alertService.info('Recuperação de senha solicitada!')
      this.userService.requestPasswordRecovery(this.formGroup.value.email)
        .subscribe({
          next: (res: any) => {
            this.router.navigate(['/recuperarSenha/', res.data.validador])
          }
        })
      return
    }
    this.alertService.warn('Email não informado!')
  }
}