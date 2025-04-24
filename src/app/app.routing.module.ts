import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home-component";

const routes: Route[] = [
    {
        path: '',
        component: HomeComponent,
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