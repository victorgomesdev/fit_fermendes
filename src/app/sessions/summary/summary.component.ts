import { Component, ViewChild } from "@angular/core";
import { SessionDetailsComponent } from "@sessions/session-details/session-details.component";

@Component({
    templateUrl: './summary.component.html',
    selector: 'session-summary',
    standalone: false
})
export class SummaryComponent {

    @ViewChild(SessionDetailsComponent) details!: SessionDetailsComponent
    showDropdown = false 

    openModal(): void {
        this.details.toogleModal()
    }

    toogleDropdown(): void {
        this.showDropdown = !this.showDropdown
    } 
}