import { Component, inject } from "@angular/core";
import { Validators } from "@angular/forms";
import { BaseComponent } from "@components/base/base.component";
import { ClientService } from "@services/client";
import { Client } from "@shared/types/client.type";
import { cpfFormatterUtil } from "@shared/utils/cpf-formatter";
import { imageToBase64Util } from "@shared/utils/image-to-base64";
import { phoneFormatterUtil } from "@shared/utils/phone-formatter";

@Component({
  templateUrl: './client-registration.component.html',
  selector: 'client-registration',
  standalone: false
})
export class ClientRegistrationComponent extends BaseComponent {

  client!: Client
  clientImageUrl!: string
  clientImageName!: string

  clientService = inject(ClientService)

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
      this.clientService.registerNewClient(this.formGroup.value as Client)
        .subscribe({
          next: (res) => {
            this.alertService.success('Aluno cadastrado com sucesso.')
          },
          error: (err)=> this.alertService.error(err.message),
          complete: ()=> this.router.navigate(['/alunos'])
        })

      return
    }
    this.alertService.warn('Verifique novamente os dados!')
    return
  }

  onCpfChanges(event: Event): void {
    this.formGroup.get('cpf')?.setValue(cpfFormatterUtil((<HTMLInputElement>event.target).value))
  }

  onPhoneChanges(event: Event): void {
    this.formGroup.get('telefone')?.setValue(phoneFormatterUtil((<HTMLInputElement>event.target).value))
  }

  async onImageSelection(event: Event) {
    try{
      const { base64, imageName } = await imageToBase64Util(event)
      this.formGroup.get('base64Imagem')?.setValue(base64)
      this.formGroup.get('nomeImagem')?.setValue(imageName)
      this.clientImageUrl = base64
      this.clientImageName = imageName
    }catch(err){ }
  }

  cancelImage() {
    this.formGroup.get('nomeImagem')?.setValue('')
    this.formGroup.get('base64Imagem')?.setValue('')
    this.clientImageUrl = ''
    this.clientImageName = ''
  }

  cancelRegistration(): void {
    this.router.navigate(['/alunos'])
  }
}