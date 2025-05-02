import { Session } from "@models/sessions";
import { BaseService } from "@services/base-service.service";
import { Observable } from "rxjs";

export class SessionService extends BaseService {

  protected readonly PATH = this.API_URL + '/aulas'

  scheduleSession(session: Session): Observable<Session> {
    return this.post<Session>(this.PATH, session)
  }

  updateSession(sessionId: number): Observable<Session> {
    return this.put(this.PATH + `${sessionId}`, {})
  }

  getSessionById(sessionId: number): Observable<unknown> {
    return this.get(this.PATH + `${sessionId}`)
  }

  getSessionsByPeriod(dateStart: string, dateEnd: string): Observable<any[]> {
    return this.get(this.PATH + `/lista?dataInicio=${dateStart}&dataFim=${dateEnd}`)
  }

}