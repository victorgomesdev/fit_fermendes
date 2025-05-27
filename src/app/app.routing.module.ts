import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { AuthGuard } from "@shared/guard/auth.guard";

const routes: Route[] = [
    {
        path: '',
        loadChildren: () => import('@public/public.module').then(p => p.PublicModule)
    },
    {
        path: 'aulas',
        canActivate: [AuthGuard],
        loadChildren: () => import('@sessions/sessions.module').then(s => s.SessionsModule)
    },
    {
        path: 'alunos',
        canActivate: [AuthGuard],
        loadChildren: () => import("@client/client.module").then(c => c.ClientModule)
    },
    {
        path: 'gestao',
        canActivate: [AuthGuard],
        loadChildren: () => import("@management/management.module").then(m => m.ManagementModule)
    },
    {
        path: '**',
        loadComponent: () => import("@shared/not-found/not-found.component").then(nf => nf.NotFoundComponent)
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }