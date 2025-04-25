import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { ManagementHomeComponent } from "./management-home/management-home.component";
import { ConfigurationsComponent } from "./configurations/configurations.component";
import { ManagementComponent } from "./management.component";

const routes: Route[] = [
    {
        path: '',
        component: ManagementComponent,
        children: [
            {
                path: '',
                component: ManagementHomeComponent
            },
            {
                path: 'configuracoes',
                component: ConfigurationsComponent
            }
        ]
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ManagementRoutingModule { }