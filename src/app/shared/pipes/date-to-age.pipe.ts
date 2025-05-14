import { Pipe, PipeTransform } from "@angular/core";
import { differenceInYears } from "date-fns";

@Pipe({
  name: 'age',
  standalone: false
})
export class DateToAgePipe implements PipeTransform {
  transform(date: string): number {
    const today = new Date()
    
      return differenceInYears(today, date)
  }
}