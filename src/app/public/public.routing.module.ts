import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { PublicComponet } from "./public.component";

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
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }