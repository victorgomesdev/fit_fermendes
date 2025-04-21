import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { ManagementHomeComponent } from "./management-home/management-home.component";

const routes: Route[] = [
    {
        path: '',
        component: ManagementHomeComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ManagementRoutingModule { }