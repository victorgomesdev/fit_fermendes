import { inject, Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router } from "@angular/router";
import { AlertService } from "@shared/services/alert.service";
import { AuthService } from "@shared/services/auth.service";

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    protectedRoutes = [
        'aulas',
        'alunos',
        'gestao'
    ]

    router = inject(Router)
    auth = inject(AuthService)
    alertService = inject(AlertService)

    canActivate(route: ActivatedRouteSnapshot): MaybeAsync<GuardResult> {
        if (this.protectedRoutes.includes(<string>route.routeConfig?.path)) {
            if (!this.auth.getToken()) {
                this.router.navigate(['/auth'], {
                    queryParams: {
                        loginExpired: true
                    }
                })
                return false
            }
            return true
        }
        return true
    }
}