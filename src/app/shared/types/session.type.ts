export type Session = {
  id?: number,
  observacao?: string,
  data: string,
  statusAulaId?: number,
  statusAulaNome?: string,
  modalidadeId: number,
  modalidadeNome?: string,
  alunos: any,
  modalidadeCor?: string
}

export enum SessionStatus {
  AGENDADA = "AGENDADA",
  CONCLUIDA = "CONCLUIDA",
  CANCELADA = "CANCELADA"
}