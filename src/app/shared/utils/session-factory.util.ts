import { Session } from "@shared/types/session.type";
import { CalendarEvent } from "angular-calendar";

/**
 * 
 * @param session A aula retornada pela API
 * @returns Um objeto do tipo CalendarEvent
 */
export function sessionFactoryUtil(session: Session): CalendarEvent<Session> {
    return {
        start: session.date,
        title: 'Aula',
        meta: session
    }
}