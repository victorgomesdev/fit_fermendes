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
    selectedSessions: Session[] = []
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
                    this.selectedSessions = [...this.sessions]
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

    onFilterChange(event: any): void {
        switch(event.target.value) {
            case 'Todas': this.selectedSessions = [...this.sessions]; break;
            case 'Concluídas': this.selectedSessions = this.sessions.filter(s=> s.statusAulaNome == 'Concluido'); break;
            case 'Canceladas': this.selectedSessions = this.sessions.filter(s=> s.statusAulaNome == 'Cancelado'); break;
            case 'Agendadas': this.selectedSessions = this.sessions.filter(s=> s.statusAulaNome == 'Agendado'); break;
        }
    }

    private populateSummary() {
        this.scheduled = this.sessions.filter(s=> s.statusAulaId === 1).length
        this.canceled = this.sessions.filter(s=> s.statusAulaId === 2).length
        this.concluded = this.sessions.filter(s=> s.statusAulaId === 3).length
    }
}