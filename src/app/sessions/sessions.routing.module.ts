import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { SummaryComponent } from "./summary/summary.component";

const routes: Route[] = [
    {
        path: '',
        component: SummaryComponent,
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SessionsRoutingModule {}