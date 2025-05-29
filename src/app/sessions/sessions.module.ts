import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { CalendarModule, DateAdapter } from 'angular-calendar'
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { SharedModule } from "@shared/shared.module";
import { SessionsRoutingModule } from "./sessions.routing.module";
import { SummaryComponent } from "./summary/summary.component";
import { ScheduleComponent } from "./schedule/schedule.component";
import { SessionsHistoricComponent } from "./historic/historic.component";
import { SessionDetailsComponent } from "./session-details/session-details.component";
import { SessionsComponent } from "./sessions.component";

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        SessionsRoutingModule,
        CalendarModule.forRoot({
            provide: DateAdapter,
            useFactory: adapterFactory
        }),
        ReactiveFormsModule
    ],
    declarations: [
        SessionsComponent,
        SummaryComponent,
        ScheduleComponent,
        SessionsHistoricComponent,
        SessionDetailsComponent
    ]
})
export class SessionsModule { }