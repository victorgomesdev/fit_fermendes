import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { SummaryComponent } from "./summary/summary.component";
import { ScheduleComponent } from "./schedule/schedule.component";
import { SessionsHistoricComponent } from "./historic/historic.component";

const routes: Route[] = [
    {
        path: '',
        component: SummaryComponent,
    },
    {
        path: 'agendar',
        component: ScheduleComponent
    },
    {
        path: 'historico',
        component: SessionsHistoricComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SessionsRoutingModule {}