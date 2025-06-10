import { Injectable } from "@angular/core";
import { BaseService } from "@services/base-service.service";

@Injectable({
  providedIn: 'root'
})
export class CategoryService extends BaseService {

  protected readonly PATH: string = this.API_URL + '/modalidade'

  listAllCategories() {
    return this.get(this.PATH + '/lista')
  }

  createNewCategory(name: string, color: string) {
    return this.post(this.PATH, { nome: name, cor: color })
  }

  editCategory(id: number, name: string, color: string) {
    return this.put(this.PATH + `/${id}`, { nome: name, cor: color })
  }
}