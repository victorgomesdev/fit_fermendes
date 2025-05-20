import { HttpErrorResponse } from "@angular/common/http";
import { Component, inject } from "@angular/core";
import { Validators } from "@angular/forms";
import { BaseComponent } from "@components/base/base.component";
import { UserService } from "@services/user";

@Component({
  templateUrl: './login.component.html',
  selector: 'login',
  standalone: false,
})
export class LoginComponent extends BaseComponent {

  validator!: string

  userService = inject(UserService)

  override ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      email: ['', Validators.required],
      senha: ['', Validators.required],
      code: ''
    })
  }

  redirectToHome(): void {
    this.router.navigate(['/aulas'])
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
          this.userService.saveSessionToken(res.token)
          this.router.navigate(['/aulas'])
        },
        error: (err: HttpErrorResponse) => {
          this.alertService.error(err.error.message)
          this.isLoading = !this.isLoading
        }
    })
  }
}