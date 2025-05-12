import { HttpHandlerFn, HttpRequest } from "@angular/common/http";

export function apiAuthenticationInterceptor(req: HttpRequest<unknown>, nextFn: HttpHandlerFn) {

  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Miwibm9tZSI6IkFkbWluaXN0cmFkb3IiLCJlbWFpbCI6ImZpdGZlcm1lbmRlc0BvdXRsb29rLmNvbSIsImlhdCI6MTc0NzA2MzY0OCwiZXhwIjoxNzQ3NjY4NDQ4fQ.9fbiSss8hatvkkXyqQJlibGf4ADdv1Q-pcjOIOdEjM4'

  const authenticatedReq = req.clone({
    headers: req.headers
      .set('Authorization', `Bearer ${token}`)
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
  })

  return nextFn(authenticatedReq)
}