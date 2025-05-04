import { Client } from "@models/client"

export type Session = {
  id: string,
  observation?: string,
  date: Date,
  clients: Client[],
  status: SessionStatus
}

export enum SessionStatus {
  AGENDADA = "AGENDADA",
  CONCLUIDA = "CONCLUIDA",
  CANCELADA = "CANCELADA"
}

export type Category = {
  id: string,
  name: string
}