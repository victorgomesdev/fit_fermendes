import { Component, inject } from "@angular/core";
import { Validators } from "@angular/forms";
import { BaseComponent } from "@components/base/base.component";
import { ClientService } from "@services/client";
import { SessionService } from "@services/sessions";
import { Client } from "@shared/types/client.type";
import { cpfFormatterUtil } from "@shared/utils/cpf-formatter";
import { imageToBase64Util } from "@shared/utils/image-to-base64";
import { phoneFormatterUtil } from "@shared/utils/phone-formatter";
import { emailValidator } from "@shared/validators/email.validator";
import { nonNegativeValidator } from "@shared/validators/negative-value.validator";
import { phoneValidator } from "@shared/validators/phone.validator";
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

  override isLoading = false

  clientService = inject(ClientService)
  sessionService = inject(SessionService)

  override ngOnInit(): void {
    this.createForm()
    this.activeRoute.queryParamMap
      .pipe(
        filter((params) => params.has('edit') || params.has('name'))
      ).subscribe((param) => {
        if (param.get('edit')) {
          this.loadingService.show()
          this.clientService.getClientById(Number(param.get('edit')))
            .subscribe({
              next: (res: any) => {
                this.client = this.filterClientUnusedData(res.data)
                this.clientImageName = <string>this.client.nomeImagem
                this.clientImageUrl = <string>this.client.base64Imagem
                this.initializeFormOnEditing()
              },
              complete: () => {
                this.loadingService.hide()
              }
            })
          return
        }
        this.formGroup.get('nome')?.setValue(param.get('name'))
      })
  }

  override createForm(): void {
    this.formGroup = this.formBuilder.group({
      nome: ['', Validators.required],
      cpf: ['', Validators.required],
      email: this.formBuilder.control('', [Validators.required, emailValidator()]),
      telefone: this.formBuilder.control('', [Validators.required, phoneValidator()]),
      peso: this.formBuilder.control(0, [Validators.required, nonNegativeValidator()]),
      altura: this.formBuilder.control(0, [Validators.required, nonNegativeValidator()]),
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
    if (this.formGroup.valid) {
      if (!this.client) {
        this.saveFormRegistering()
        return
      }
      this.saveFormEditing()
      return
    }
    this.alertService.warn('Campos inválidos ou não preenchidos!')
  }

  override saveFormRegistering(): void {

    let newClient!: Client

    this.loadingService.show()
    this.clientService.registerNewClient(this.formGroup.value as Client)
      .subscribe({
        next: (res: any) => {
          newClient = res.data // Mudar para o nome do usuário
          this.alertService.success('Aluno cadastrado com sucesso!')
        },
        complete: () => {
          this.loadingService.hide()
          if (this.sessionService.savedSessionPartial) {
            this.router.navigate(['/aulas/agendar'], {
              queryParams: {
                newClientId: newClient.id,
                newClientName: newClient.nome
              }
            })
            return
          }
          this.router.navigate(['/alunos'])
        }
      })
    return
  }

  override saveFormEditing(): void {

    this.clientService.updateClientById(this.clientId, this.formGroup.value)
      .subscribe({
        next: () => {
          this.alertService.info('Aluno atualizado com sucesso!')
        },
        complete: () => this.router.navigate(['alunos']),
        error: () => this.alertService.error('Ocorreu um erro no servidor!')
      })
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
      if (err === -1) {
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