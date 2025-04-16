import { Component, input } from "@angular/core";

@Component({
  selector: 'no-client-card',
  standalone: false,
  template: `
  <div class="flex flex-col  justify-center items-center w-full h-full">
    <p class="text-paragraph font-semibold"><i class="pi pi-exclamation-circle"></i> Nenhum aluno encontrado para ""</p>
    <p class="text-paragraph font-semibold"><i class="pi pi-exclamation-circle"></i> Sem alunos cadastrados</p>
  </div>
  `
})
export class NoClientCardComponent {

  type = input()
}