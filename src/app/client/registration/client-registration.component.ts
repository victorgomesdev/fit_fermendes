import { Component } from "@angular/core";
import { Validators } from "@angular/forms";
import { BaseComponent } from "@components/base/base.component";
import { Client } from "@shared/types/client.type";
import { cpfValidator } from "@shared/utils/cpf-formatter";
import { imageToBase64 } from "@shared/utils/image-to-base64";
import { phoneValidator } from "@shared/utils/phone-formatter";

@Component({
  templateUrl: './client-registration.component.html',
  selector: 'client-registration',
  standalone: false
})
export class ClientRegistrationComponent extends BaseComponent {

  client!: Client
  clientImageUrl!: string
  clientImageName!: string

  override ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      nome: ['', Validators.required],
      cpf: ['', Validators.required],
      email: ['', Validators.required],
      telefone: ['', Validators.required],
      peso: [0, Validators.required],
      altura: [0, Validators.required],
      lesao: '',
      indicacaoMedica: '',
      dataNascimento: ['', Validators.required],
      objetivo: ['', Validators.required],
      nomeImagem: '',
      base64Imagem: ''
    })
  }

  saveForm(): void {
    if (this.formGroup.valid) {
      return
    }
    this.alertService.warn('Preencha todos os campos obrigatórios!')
  }

  onCpfChanges(event: Event): void {
    this.formGroup.get('cpf')?.setValue(cpfValidator((<HTMLInputElement>event.target).value))
  }

  onPhoneChanges(event: Event): void {
    this.formGroup.get('telefone')?.setValue(phoneValidator((<HTMLInputElement>event.target).value))
  }

  async onImageSelection(event: Event) {

    const { base64, imageName, file } = await imageToBase64(event)

    this.formGroup.get('base64Imagem')?.setValue(base64)
    this.formGroup.get('nomeImagem')?.setValue(imageName)
    this.clientImageUrl = URL.createObjectURL(file)
    this.clientImageName = imageName
  }

  cancelImage() {
    this.formGroup.get('nomeImagem')?.setValue('')
    this.formGroup.get('base64Imagem')?.setValue('')
    URL.revokeObjectURL(this.clientImageUrl)
    this.clientImageUrl = ''
    this.clientImageName = ''
  }

  cancelRegistration(): void {
    this.router.navigate(['/alunos'])
  }
}