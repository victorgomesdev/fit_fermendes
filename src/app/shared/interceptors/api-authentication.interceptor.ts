import { HttpHandlerFn, HttpRequest } from "@angular/common/http";

export function apiAuthenticationInterceptor(req: HttpRequest<unknown>, nextFn: HttpHandlerFn) {

  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Miwibm9tZSI6IkFkbWluaXN0cmFkb3IiLCJlbWFpbCI6ImZpdGZlcm1lbmRlc0BvdXRsb29rLmNvbSIsImlhdCI6MTc0Nzc3MjAyMywiZXhwIjoxNzQ4Mzc2ODIzfQ.z7IexSMvxU2j48Fqcq8tuUm6afoggMtdk2RSyty8iYs'

  if (req.url.split('/')[3] !== 'loginEmail' && req.url.split('/')[3] !== '2fa') {

    const authenticatedReq = req.clone({
      headers: req.headers
        .set('Authorization', `Bearer ${token}`)
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
    })

    return nextFn(authenticatedReq)
  }
  return nextFn(req)
}