import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";

const routes: Route[] = [
    {
        path: '',
        redirectTo: 'aulas',
        pathMatch: 'full'
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
        loadChildren: () => import("@auth/auth.module").then(a => a.AuthModule)
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }