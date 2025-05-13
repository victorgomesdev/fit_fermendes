export function phoneFormatterUtil(numero: string): string {

    const numeros = numero.replace(/\D/g, '').slice(0, 11);
    let formatado = '';

    if (numeros.length >= 2) {
        formatado += `(${numeros.slice(0, 2)}) `;
    } else {
        formatado += `(${numeros}`;
        return formatado;
    }

    const restante = numeros.slice(2);

    if (restante.length >= 5) {
        const parte1 = restante.slice(0, restante.length - 4);
        const parte2 = restante.slice(-4);
        formatado += `${parte1}-${parte2}`;
    } else {
        formatado += restante;
    }

    return formatado;
}