import { Directive, ElementRef, inject, OnInit } from "@angular/core";

@Directive({
  standalone: false,
  selector: '[inputAutofocus]'
})
export class AutofocusDirective implements OnInit {

  private input = inject(ElementRef)

  ngOnInit(): void {

    (this.input.nativeElement as HTMLInputElement).focus()
  }
}