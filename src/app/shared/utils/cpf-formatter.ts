export function cpfFormatterUtil(cpf: string): string {
  const numeros = cpf.replace(/\D/g, '');

  let formatado = '';

  for (let i = 0; i < numeros.length && i < 11; i++) {
    if (i === 3 || i === 6) {
      formatado += '.';
    } else if (i === 9) {
      formatado += '-';
    }
    formatado += numeros[i];
  }

  return formatado;
}