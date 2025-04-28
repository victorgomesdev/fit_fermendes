export type Client = {
  id: string,
  email: string,
  name: string,
  healthInformation: HealthInformation,
  CPF: string,
  phone: string,
  goal: string,
  imageURL: string | undefined
}

type HealthInformation = {
  height: number,
  weight: number,
  injury?: string,
  medicalIndication: string
}