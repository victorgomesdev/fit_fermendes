import { Injectable } from "@angular/core";
import { UserLoginRequest } from "@models/user";
import { BaseService } from "@services/base-service.service";

@Injectable()
export class UserService extends BaseService {

  protected readonly PATH = '/usuario'

  loginWithEmail({ email, password }: UserLoginRequest) {
    return this.post<string>(this.PATH + '/loginEmail', { email, password })
  }

  authenticateWith2F() {
    
  }
}