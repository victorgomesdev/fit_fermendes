import { Injectable } from "@angular/core";
import { UserLoginRequest } from "@shared/types/user.type";
import { BaseService } from "@services/base-service.service";

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService {

  protected readonly PATH = this.API_URL + '/usuario'

  loginWithEmail({ email, password }: UserLoginRequest) {
    return this.post(this.PATH + '/loginEmail', { email, senha: password })
  }

  authenticateWith2F(codigo: string, verificador: string) {
    return this.post(this.PATH + '/2fa', { codigo, verificador })
  }

  listRegisteredUsers() {
    return this.get(this.PATH + '/lista')
  }

  getUserById(id: number) {
    return this.get(this.PATH + `/${id}`)
  }

  updateUserData(id: number, data: any) {
    return this.put(this.PATH + `/${id}`, data)
  }

  registerNewUser(user: any) {
    return this.post(this.PATH, user)
  }

}