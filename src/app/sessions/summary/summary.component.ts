import { Component, inject, OnInit, ViewChild } from "@angular/core";
import { BaseComponent } from "@components/base/base.component";
import { SessionService } from "@services/sessions";
import { SessionDetailsComponent } from "@sessions/session-details/session-details.component";
import { Session } from "@shared/types/session.type";

@Component({
    templateUrl: './summary.component.html',
    selector: 'session-summary',
    standalone: false
})
export class SummaryComponent extends BaseComponent {

    @ViewChild(SessionDetailsComponent) details!: SessionDetailsComponent

    todaySessions!: Session[]
    otherSessions!: Session[]
    today = new Date().toISOString().split('T')[0]

    showDropdown = false

    sessionService = inject(SessionService)

    override ngOnInit(): void {
        this.loadingService.show()
        this.sessionService.getAllSessions()
            .subscribe({
                next: (res: any) => {
                    this.otherSessions = (<Session[]>res.data).filter(s => s.data.split('T')[0] != this.today)
                    this.todaySessions = (<Session[]>res.data).filter(s => s.data.split('T')[0] == this.today)
                    this.loadingService.hide()
                },
                error: () => {
                    this.loadingService.hide()
                }
            })
    }

    openModal(session: Session): void {
        this.details.toogleModal(session)
    }

    toogleDropdown(): void {
        this.showDropdown = !this.showDropdown
    }

}