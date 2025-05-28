import { Component, inject } from "@angular/core";
import { BaseComponent } from "@components/base/base.component";
import { SessionService } from "@services/sessions";
import { Session } from "@shared/types/session.type";

@Component({
    templateUrl: './session-details.component.html',
    selector: 'session-details',
    standalone: false
})
export class SessionDetailsComponent extends BaseComponent {

    session!: Session
    show = false
    loading1 = false
    loading2 = false

    sessionService = inject(SessionService)

    toogleModal(session?: Session) {
        if (session) {
            this.session = session
        }
        this.show = !this.show
    }

    editSession(sessionId?: number): void {
        this.show = false
        this.router.navigate(['/aulas/agendar'], {
            queryParams: {
                edit: sessionId
            }
        })
    }

    terminateSession(id: number | undefined): void {
        this.loading1 = true
        this.sessionService.terminateSession(<number>id)
            .subscribe({
                next: (res: any) => {
                    this.alertService.success('Aula concluída com sucesso!')
                    this.session.statusAulaId = res.data.statusAulaId
                    this.session.statusAulaNome = res.data.statusAulaNome
                    this.loading1 = false
                },
            })
    }

    cancelSession(id: number | undefined): void {
        this.loading2 = true
        this.sessionService.cancelSession(<number>id)
            .subscribe({
                next: (res: any) => {
                    this.alertService.success('Aula cancelada!')
                    this.session.statusAulaId = res.data.statusAulaId
                    this.session.statusAulaNome = res.data.statusAulaNome
                    this.loading2 = false
                }
            })
    }
}