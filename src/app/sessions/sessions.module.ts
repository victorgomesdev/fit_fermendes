import { NgModule } from "@angular/core";
import { SessionsRoutingModule } from "./sessions.routing.module";
import { SharedModule } from "@shared/shared.module";
import { SessionCardComponet } from "./session-card/session-card.component";
import { SummaryComponent } from "./summary/summary.component";
import { ScheduleComponent } from "./schedule/schedule.component";
import { CalendarModule, DateAdapter } from 'angular-calendar'
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

@NgModule({
    imports: [
        SessionsRoutingModule,
        SharedModule,
        CalendarModule.forRoot({
            provide: DateAdapter,
            useFactory: adapterFactory
        })
    ],
    declarations: [
        SessionCardComponet,
        SummaryComponent,
        ScheduleComponent
    ]
})
export class SessionsModule { }