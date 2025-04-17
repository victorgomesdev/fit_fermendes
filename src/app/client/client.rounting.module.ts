import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { ClienteHomeComponent } from "./home/client-home.component";
import { ClientRegistrationComponent } from "./registration/client-registration.component";

const routes: Route[] = [
  {
    path: '',
    component: ClienteHomeComponent
  },
  {
    path: 'cadastrar',
    component: ClientRegistrationComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule {}