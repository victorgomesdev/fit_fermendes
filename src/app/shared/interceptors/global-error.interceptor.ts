import { inject } from "@angular/core";
import { HttpEventType, HttpHandlerFn, HttpRequest } from "@angular/common/http";
import { AlertService } from "@shared/services/alert.service";
import { tap } from "rxjs";

export function globalErrorInterceptor(req: HttpRequest<any>, next: HttpHandlerFn) {

  const alertService = inject(AlertService)

  return next(req).pipe(
    tap(event => {
      if (event.type === HttpEventType.Response) {
        switch (event.status) {
          case 400: alertService.error('Requisição inválida.'); break;
          case 500: alertService.error('Oops! Ocorreu um erro no serivdor.'); break;
          case 404: alertService.warn('O recurso solicitado não existe.'); break;
          default: () => { }
        }
      }
    })
  )
}