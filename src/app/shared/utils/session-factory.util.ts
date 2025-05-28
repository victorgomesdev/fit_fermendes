import { Colors } from "@shared/enums/colors.enum";
import { Client } from "@shared/types/client.type";
import { Session } from "@shared/types/session.type";
import { CalendarEvent } from "angular-calendar";

export function calendarEventFactoryUtil(session: Session): CalendarEvent<Session> {

    const alunos = session.alunos as Client[]

    return {
        start: new Date(session.data),
        title: session.data.split('T')[1].substring(0, 5) + ' - ' + alunos.map(a => a.nome).join(', '),
        meta: session,
        color: {
            primary: Colors[session.statusAulaNome as keyof typeof Colors],
            secondary: ''
        }
    }
}