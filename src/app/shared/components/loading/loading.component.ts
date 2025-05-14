import { Component } from "@angular/core";

@Component({
  template: `
  <div class="w-full h-full flex items-center justify-center">
  <h2 class="text-xl animate-slideUp text-paragraph"><i class="pi pi-sync"></i> Carregando...</h2>
  </div>
`,
  selector: 'loading',
  standalone: false
})
export class LoadingComponent {}