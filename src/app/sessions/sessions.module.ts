import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SessionsRoutingModule } from "./sessions.routing.module";
import { SessionCardComponet } from "./session-card/session-card.component";
import { SummaryComponent } from "./summary/summary.component";
import { ScheduleComponent } from "./schedule/schedule.component";
import { CalendarModule, DateAdapter } from 'angular-calendar'
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { PatientModal } from "./schedule/patient-modal/patient-modal";
import { SessionsHistoricComponent } from "./historic/historic.component";
import { SharedModule } from "@shared/shared.module";

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        SessionsRoutingModule,
        CalendarModule.forRoot({
            provide: DateAdapter,
            useFactory: adapterFactory
        })
    ],
    declarations: [
        SessionCardComponet,
        SummaryComponent,
        ScheduleComponent,
        PatientModal,
        SessionsHistoricComponent,
    ]
})
export class SessionsModule { }