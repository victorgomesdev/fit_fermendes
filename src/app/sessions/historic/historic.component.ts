import { Component, inject, ViewChild } from "@angular/core";
import { BaseComponent } from "@components/base/base.component";
import { SessionService } from "@services/sessions";
import { SessionDetailsComponent } from "@sessions/session-details/session-details.component";
import { Session } from "@shared/types/session.type";

@Component({
    templateUrl: './historic.component.html',
    selector: 'sessions-historic',
    standalone: false
})
export class SessionsHistoricComponent extends BaseComponent {

    @ViewChild(SessionDetailsComponent) details!: SessionDetailsComponent

    sessions: Session[] = []
    scheduled!: number
    canceled!: number
    concluded!: number

    sessionService = inject(SessionService)

    override ngOnInit(): void {
        this.loadingService.show()
        this.sessionService.getAllSessions()
            .subscribe({
                next: (res: any) => {
                    this.sessions = res.data
                },
                complete: ()=> {
                    this.loadingService.hide()
                    this.populateSummary()
                }
            })

    }

    openModal(session: Session): void {
        this.details.toogleModal(session)
    }

    private populateSummary() {
        this.scheduled = this.sessions.filter(s=> s.statusAulaId === 1).length
        this.canceled = this.sessions.filter(s=> s.statusAulaId === 2).length
        this.concluded = this.sessions.filter(s=> s.statusAulaId === 3).length
    }
}