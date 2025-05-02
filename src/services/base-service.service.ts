import { HttpClient } from "@angular/common/http"
import { inject } from "@angular/core"
import { Observable } from "rxjs"

export abstract class BaseService {

  protected readonly API_URL: string = 'http://localhost:3000'
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
}