import { HttpClient } from "@angular/common/http"
import { inject } from "@angular/core"
import { Observable } from "rxjs"
import { env } from "./environment.prod"

export abstract class BaseService {

  protected readonly API_URL: string =  env.isProduction ? env.apiUrl : '/api'
  protected client = inject(HttpClient)

  protected get<T>(url: string): Observable<T> {
    return this.client.get<T>(url)
  }

  protected post<T>(url: string, body: any): Observable<T> {
    return this.client.post<T>(url, body)
  }

  protected put<T>(url: string, body: any): Observable<T> {
    return this.client.put<T>(url, body)
  }

  protected delete<T>(url: string): Observable<T> {
    return this.client.delete<T>(url)
  }

  protected patch<T>(url: string, body?: any): Observable<T> {
    return this.client.patch<T>(url, body)
  }
}