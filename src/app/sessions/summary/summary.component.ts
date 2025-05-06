import { Component, inject, OnInit, ViewChild } from "@angular/core";
import { SessionDetailsComponent } from "@sessions/session-details/session-details.component";
import { AlertService } from "@shared/services/alert.service";

@Component({
    templateUrl: './summary.component.html',
    selector: 'session-summary',
    standalone: false
})
export class SummaryComponent implements OnInit {

    @ViewChild(SessionDetailsComponent) details!: SessionDetailsComponent
    showDropdown = false 

    alert = inject(AlertService)

    openModal(): void {
        this.details.toogleModal()
    }

    toogleDropdown(): void {
        this.showDropdown = !this.showDropdown
    }

    ngOnInit(): void {
        
    }
}