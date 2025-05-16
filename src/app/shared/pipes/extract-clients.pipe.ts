import { Pipe, PipeTransform } from "@angular/core";
import { Client } from "@shared/types/client.type";

@Pipe({
  name: 'clients',
  standalone: false
})
export class ClientsPipe implements PipeTransform {
  transform(value: any): string {
    return value.map((c: Client)=> c.nome).join(', ')
  }
}