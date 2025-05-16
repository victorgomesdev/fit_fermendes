import { Session } from "@shared/types/session.type";

export function sessionScheduleFactory(session: any): Session {
  return {
    modalidadeId: Number(session.modalidadeId),
    observacao: session.observacao,
    data: session.data + 'T' + session.horario + ':00.000Z',
    statusAulaId: 1,
    alunos: session.alunos
  }
}