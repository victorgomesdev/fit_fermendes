import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { PublicComponet } from "./public.component";
import { RecoveryPasswordComponent } from "./recovery-password/recovery-password.component";

const routes: Route[] = [
  {
    path: '',
    component: PublicComponet,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'auth',
        component: LoginComponent
      },
      {
        path: 'recuperarSenha/:codigo',
        component: RecoveryPasswordComponent
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }