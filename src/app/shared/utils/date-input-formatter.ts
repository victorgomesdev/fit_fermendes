export function dateFormatterUtil(date: Date): string {
    return date.toISOString().split('T')[0]
}