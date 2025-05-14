import { Component, inject } from "@angular/core";
import { Validators } from "@angular/forms";
import { BaseComponent } from "@components/base/base.component";
import { ClientService } from "@services/client";
import { Client } from "@shared/types/client.type";
import { cpfFormatterUtil } from "@shared/utils/cpf-formatter";
import { imageToBase64Util } from "@shared/utils/image-to-base64";
import { phoneFormatterUtil } from "@shared/utils/phone-formatter";
import { filter } from "rxjs";

@Component({
  templateUrl: './client-registration.component.html',
  selector: 'client-registration',
  standalone: false
})
export class ClientRegistrationComponent extends BaseComponent {

  client!: Client
  clientId!: number
  clientImageUrl!: string
  clientImageName!: string

  clientService = inject(ClientService)

  override ngOnInit(): void {
    this.createForm()
    this.activeRoute.queryParamMap
      .pipe(
        filter((params) => params.has('edit'))
      ).subscribe((param) => {
        this.clientService.getClientById(Number(param.get('edit')))
          .subscribe({
            next: (res: any) => {
              this.client = this.filterClientUnusedData(res.data)
              this.clientImageName = <string>this.client.nomeImagem
              this.clientImageUrl = <string>this.client.base64Imagem
              this.initializeFormOnEditing()
            }
          })
      })
  }

  override createForm(): void {
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

  private filterClientUnusedData(client: Client): Client {
    const { id, ativo, ...properties } = client
    this.clientId = <number>id
    properties.dataNascimento = properties.dataNascimento.split('T')[0]
    return properties
  }

  private initializeFormOnEditing(): void {
    this.formGroup.setValue(this.client)
  }

  saveForm(): void {
    if (!this.client) {
      this.saveFormRestering()
      return
    }
    this.saveFormEditing()
    return
  }

  override saveFormRestering(): void {
    if (this.formGroup.valid) {
      this.clientService.registerNewClient(this.formGroup.value as Client)
        .subscribe({
          next: () => {
            this.alertService.success('Aluno cadastrado com sucesso!')
          },
          complete: () => this.router.navigate(['/alunos'])
        })
      return
    }
    this.alertService.warn('Campos inválidos ou não preenchidos!')
    return
  }

  override saveFormEditing(): void {
    if (this.formGroup.valid) {
      this.clientService.updateClientById(this.clientId, this.formGroup.value)
      .subscribe({
        next: ()=> {
          this.alertService.info('Aluno atualizado com sucesso!')
        },
        complete: ()=> this.router.navigate(['alunos']),
        error: ()=> this.alertService.error('Ocorreu um erro no servidor!')
      })
      return
    }
    this.alertService.warn('Campos inválidos ou não preenchidos!')
    return
  }

  onCpfChanges(event: Event): void {
    this.formGroup.get('cpf')?.setValue(cpfFormatterUtil((<HTMLInputElement>event.target).value))
  }

  onPhoneChanges(event: Event): void {
    this.formGroup.get('telefone')?.setValue(phoneFormatterUtil((<HTMLInputElement>event.target).value))
  }

  async onImageSelection(event: Event) {
    try {
      const { base64, imageName } = await imageToBase64Util(event)
      this.formGroup.get('base64Imagem')?.setValue(base64)
      this.formGroup.get('nomeImagem')?.setValue(imageName)
      this.clientImageUrl = base64
      this.clientImageName = imageName
    } catch (err) {
      if(err === -1){
        this.alertService.warn('Imagem muito grande!')
      }
    }
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