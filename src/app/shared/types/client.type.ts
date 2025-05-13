export type Client = {
    id?: string,
    email: string,
    nome: string,
    cpf: string,
    telefone: string,
    dataNascimento: string,
    objetivo: string,
    peso: number,
    altura: number,
    lesao?: string,
    indicacaoMedica: string
    base64Imagem?: string,
    nomeImagem?: string
}