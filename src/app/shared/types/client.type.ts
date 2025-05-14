export type Client = {
    id?: number,
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
    nomeImagem?: string,
    ativo?: any
}