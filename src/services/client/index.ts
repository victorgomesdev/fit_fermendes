import { HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BaseService } from "@services/base-service.service";
import { Client } from "@shared/types/client.type";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ClientService extends BaseService {

  protected readonly PATH = this.API_URL + '/aluno'

  listAllCLients() {
    return this.get(this.PATH + '/lista')
  }

  getClientById(id: number) {
    return this.get(this.PATH + `/${id}`)
  }

  updateClientById(id: number) {
    return this.put(this.PATH + `/${id}`, {})
  }

  registerNewClient(newClient: Client): Observable<HttpResponse<Client>> {
    return this.post(this.PATH, newClient)
  }
}