import { Client } from "@shared/types/client.type"

export type Session = {
  id?: number,
  observacao?: string,
  data: string,
  statusAulaId: number,
  statusAulaNome: string,
  alunos: Client[] | number[]
}

export enum SessionStatus {
  AGENDADA = "AGENDADA",
  CONCLUIDA = "CONCLUIDA",
  CANCELADA = "CANCELADA"
}