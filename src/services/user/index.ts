import { Injectable } from "@angular/core";
import { UserLoginRequest } from "@models/user";
import { BaseService } from "@services/base-service.service";

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService {

  protected readonly PATH = this.API_URL + '/usuario'

  loginWithEmail({ email, password }: UserLoginRequest) {
    return this.post<string>(this.PATH + '/loginEmail', { email, password })
  }

  authenticateWith2F(token: string) {
    return this.post(this.PATH + '/2fa', {})
  }

  listRegisteredUsers() {
    return this.get(this.PATH + '/lista')
  }

  getUserById(id: number) {
    return this.get(this.PATH + `/${id}`)
  }

  updateUserData(id: number) {
    return this.put(this.PATH + `${id}`, {})
  }
}