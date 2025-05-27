import { HttpHandlerFn, HttpRequest } from "@angular/common/http";
import { inject } from "@angular/core";
import { AuthService } from "@shared/services/auth.service";

export function apiAuthenticationInterceptor(req: HttpRequest<unknown>, nextFn: HttpHandlerFn) {

  const auth = inject(AuthService)

  if (req.url.split('/')[3] !== 'loginEmail' && req.url.split('/')[3] !== '2fa') {

    const authenticatedReq = req.clone({
      headers: req.headers
        .set('Authorization', `Bearer ${auth.getToken()}`)
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
    })

    return nextFn(authenticatedReq)
  }
  return nextFn(req)
}