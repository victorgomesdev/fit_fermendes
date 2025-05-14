import { differenceInYears } from 'date-fns'

export function dateToAge(date: string) {
  const today = new Date()

  return differenceInYears(date, today)
}