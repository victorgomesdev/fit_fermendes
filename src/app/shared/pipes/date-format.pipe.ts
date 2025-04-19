import { Pipe, PipeTransform } from "@angular/core";
import { DateFormat, Months } from "@shared/enums/date.enum";
import { subHours } from 'date-fns'

@Pipe({
    name: 'date_input',
    standalone: false
})
export class DateFormatPipe implements PipeTransform {
    transform(value: Date, format: DateFormat) {
        let date!: string
        switch (format) {
            case 'INPUT': {
                date = subHours(value, 3).toISOString().split('T')[0]
                break
            }
            case 'SMLL_TITLE': {
                date = Months[value.getMonth()] + ' de ' + value.getFullYear()
            }
        }
        return date
    }
}