import { Session } from "@shared/types/session.type";
import { BaseService } from "@services/base-service.service";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { subYears, addYears } from 'date-fns'

@Injectable({
  providedIn: 'root'
})
export class SessionService extends BaseService {

  protected readonly PATH = this.API_URL + '/aula'
  savedSessionPartial!: Session | undefined

  scheduleSession(session: Session): Observable<Session> {
    return this.post<Session>(this.PATH, session)
  }

  updateSession(sessionId: number, session: Session): Observable<Session> {
    return this.put(this.PATH + `/${sessionId}`, session)
  }

  getSessionById(sessionId: number): Observable<any> {
    return this.get(this.PATH + `/${sessionId}`)
  }

  getSessionsByPeriod(dateStart: string, dateEnd: string): Observable<any> {
    return this.get(this.PATH + `/lista?dataInicio=${dateStart}&dataFim=${dateEnd}`)
  }

  getAllSessions() {
    return this.get(this.PATH + `/lista?dataInicio=${subYears(new Date(), 10)}&dataFim=${addYears(new Date(), 10)}`)
  }

  terminateSession(sessionId: number): Observable<any> {
    return this.patch(this.PATH + `/concluir/${sessionId}`)
  }

  cancelSession(sessionId: number): Observable<any> {
    return this.patch(this.PATH + `/cancelar/${sessionId}`)
  }

  saveSessionDueRegistration(session: Session): void {
    this.savedSessionPartial = session
    return
  }

  getSessionPartial(): Session {
    return this.savedSessionPartial as Session;
  }

  resetSessionPartial(): void {
    this.savedSessionPartial = undefined
  }

}