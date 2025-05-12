export type Client = {
    id?: string,
    personalInformation: PersonalInformation,
    healthInformation: HealthInformation,
    goal: string,
    imageURL: string | undefined
}

export type HealthInformation = {
    height: number,
    weight: number,
    injury?: string,
    medicalIndication: string
}

export type PersonalInformation = {
    email: string,
    name: string,
    CPF: string,
    phone: string,
}