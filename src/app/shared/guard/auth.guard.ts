import { inject, Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router } from "@angular/router";
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

    canActivate(route: ActivatedRouteSnapshot): MaybeAsync<GuardResult> {
        if (!this.protectedRoutes.includes(<string>route.routeConfig?.path)) {
            return true
        }
        if (!this.auth.getToken()) {
            this.router.navigate(['/auth'], {
                queryParams: {
                    loginExpired: 1
                }
            })
            return false
        }
        return true
    }
}