import { Category } from "@shared/types/category.type";
import { Client } from "@shared/types/client.type";
import { Session } from "@shared/types/session.type";
import { CalendarEvent } from "angular-calendar";

export function calendarEventFactoryUtil(session: Session, categories: Category[]): CalendarEvent<Session> {

    const alunos = session.alunos as Client[]
    const cor = categories.find(c => c.id === session.modalidadeId)

    return {
        start: new Date(session.data),
        title: session.data.split('T')[1].substring(0, 5) + ' - ' + alunos.map(a => a.nome).join(', '),
        meta: { ...session, modalidadeCor: cor?.cor },
        color: {
            primary: <string>cor?.cor,
            secondary: ''
        }
    }
}