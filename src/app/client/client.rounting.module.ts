import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { ClienteHomeComponent } from "./home/client-home.component";

const routes: Route[] = [
  {
    path: '',
    component: ClienteHomeComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule {}