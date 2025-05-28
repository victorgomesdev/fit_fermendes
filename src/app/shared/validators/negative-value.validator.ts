import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function nonNegativeValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    return control.value <= 0 ? { negativeValue: control.value } : null
  }
}