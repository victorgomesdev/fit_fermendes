import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { SummaryComponent } from "./summary/summary.component";
import { ScheduleComponent } from "./schedule/schedule.component";

const routes: Route[] = [
    {
        path: '',
        component: SummaryComponent,
    },
    {
        path: 'agendar',
        component: ScheduleComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SessionsRoutingModule {}