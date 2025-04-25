import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";

const routes: Route[] = [
    {
        path: '',
        loadComponent: () => import('@home/home.component').then(h => h.HomeComponent)
    },
    {
        path: 'aulas',
        loadChildren: () => import('@sessions/sessions.module').then(s => s.SessionsModule)
    },
    {
        path: 'alunos',
        loadChildren: () => import("@client/client.module").then(c => c.ClientModule)
    },
    {
        path: 'gestao',
        loadChildren: () => import("@management/management.module").then(m => m.ManagementModule)
    },
    {
        path: 'auth',
        loadComponent: () => import('@home/login/login.component').then(l => l.LoginComponent)
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