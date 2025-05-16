import { Client } from "@shared/types/client.type"

export type Session = {
  id?: number,
  observacao?: string,
  data: string,
  statusAulaId?: number,
  statusAulaNome?: string,
  modalidadeId: number,
  modalidadeNome?: string,
  alunos: any
}

export enum SessionStatus {
  AGENDADA = "AGENDADA",
  CONCLUIDA = "CONCLUIDA",
  CANCELADA = "CANCELADA"
}