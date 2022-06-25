const frase = 'Meu nome é: Camilla';
const indice = frase.indexOf(':');

const nome1 = frase.substring(indice+2)

console.log(nome1)

let texto = 'basquete';
let novoTexto = texto.replace('bas', 'ra');

console.log(novoTexto);

let frase1 = 'A festa ocorrerá no primeiro dia do primeiro mês';

let novaFrase = frase.replaceAll('primeiro', 'segundo');

console.log(novaFrase);