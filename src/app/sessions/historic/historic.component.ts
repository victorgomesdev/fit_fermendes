import { Component, ViewChild } from "@angular/core";
import { SessionDetailsComponent } from "@sessions/session-details/session-details.component";

@Component({
    templateUrl: './historic.component.html',
    selector: 'sessions-historic',
    standalone: false
})
export class SessionsHistoricComponent { 

    @ViewChild(SessionDetailsComponent) details!: SessionDetailsComponent

    openModal(): void {
        this.details.toogleModal()
    }
}