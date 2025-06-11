import { Component, inject } from "@angular/core";
import { Validators } from "@angular/forms";
import { BaseComponent } from "@components/base/base.component";
import { UserService } from "@services/user";

@Component({
  templateUrl: './new-user.component.html',
  selector: 'new-user',
  standalone: false
})
export class NewUserComponent extends BaseComponent {

  show = false
  user!: any
  loading = false

  userService = inject(UserService)

  override ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      name: ['', Validators.required],
      email: this.formBuilder.control('', [Validators.required]),
      senha: ['', Validators.required],
      cargo: ['', Validators.required]
    })
  }

  saveForm(): void {
    if (this.formGroup.valid) {
      this.loading = true
      if (this.user) {
        this.saveFormEditing()
        return
      }
      this.saveFormRegistering()
      return
    }
    this.alertService.warn('Campos inválidos ou não preenchidos!')
  }

  override saveFormEditing(): void {
    this.userService.updateUserData(this.user.id, {
      nome: this.formGroup.value.name,
      email: this.formGroup.value.email,
      senha: this.formGroup.value.senha
    }).subscribe({
      next: (res: any) => {
        this.alertService.info('Usuário editado com sucesso!')
        this.loading = false
      },
      error: () => {
        this.loading = false
      },
      complete: () => location.reload()
    })
  }

  override saveFormRegistering(): void {
    this.userService.registerNewUser({
      nome: this.formGroup.value.name,
      email: this.formGroup.value.email,
      senha: this.formGroup.value.senha
    }).subscribe({
      next: () => {
        this.alertService.success('Usuário adicionado com sucesso!')
        this.loading = false
      },
      error: () => {
        this.loading = false
      },
      complete: () => location.reload()
    })
  }

  toogleModal(user?: any): void {
    this.show = !this.show
    if (user) {
      this.user = user
      this.formGroup.setValue({
        name: user.nome,
        email: user.email,
        senha: '',
        cargo: ''
      })
      return
    }
    this.user = undefined
    this.formGroup.reset()
  }
}