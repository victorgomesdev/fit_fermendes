import { Component } from "@angular/core";
import { BaseComponent } from "@components/base/base.component";
import { Session } from "@shared/types/session.type";

@Component({
    templateUrl: './session-details.component.html',
    selector: 'session-details',
    standalone: false
})
export class SessionDetailsComponent extends BaseComponent {

    session!: Session
    show = false

    toogleModal(session?: Session) {
        if (session) {
            this.session = session
        }
        this.show = !this.show
    }

    editSession(sessionId?: number): void {
        this.router.navigate(['/aulas/agendar'], {
            queryParams: {
                edit: sessionId
            }
        })
    }
}