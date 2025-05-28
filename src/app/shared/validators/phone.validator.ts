import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function phoneValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {

    return (<string>control.value).length < 10 ? { invalidNumber: control.value } : null
  }
}