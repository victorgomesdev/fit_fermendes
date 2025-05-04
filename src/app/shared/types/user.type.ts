import { BaseResponse } from "@models/response"

export type User = {
  id: string,
  email: string,
  name: string,
  password?: string
}

export type UserLoginRequest = {
  email: string,
  password: string
}

export interface UserLoginResponse extends BaseResponse <string>{

}