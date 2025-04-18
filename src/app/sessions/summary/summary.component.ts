import { Component, ViewChild } from "@angular/core";
import { SessionDetailsComponent } from "@sessions/session-details/session-details.component";

@Component({
    templateUrl: './summary.component.html',
    selector: 'session-summary',
    standalone: false
})
export class SummaryComponent {

    @ViewChild(SessionDetailsComponent) details!: SessionDetailsComponent

    openModal(): void {
        this.details.toogleModal()
    }
}