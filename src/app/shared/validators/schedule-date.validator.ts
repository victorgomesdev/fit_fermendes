import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms"
import { differenceInYears, differenceInDays } from 'date-fns'

export function scheduleDateValidator(): ValidatorFn {

  const today = new Date()

  return (control: AbstractControl): ValidationErrors | null => {
    if (differenceInDays(today, control.value) > 0 || differenceInYears(control.value, today) > 5) {
      return {
        invalidDate: control.value
      }
    }
    return null
  }
}