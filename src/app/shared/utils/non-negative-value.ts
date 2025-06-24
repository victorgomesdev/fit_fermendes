export function nonNegativeFormatter(event: any): number {
  const value = event.target.value as number
  if(value < 0) {
    return 0
  }
  return Number(value)
}