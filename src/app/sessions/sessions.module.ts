import { NgModule } from "@angular/core";
import { SessionsRoutingModule } from "./sessions.routing.module";
import { SharedModule } from "../shared/shared.module";
import { SessionCardComponet } from "./session-card/session-card.component";
import { SummaryComponent } from "./summary/summary.component";

@NgModule({
    imports: [SessionsRoutingModule, SharedModule],
    declarations: [
        SessionCardComponet,
        SummaryComponent
    ]
})
export class SessionsModule {}