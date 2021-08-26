// Na “soma de dígitos”, o programa mostra a soma dos algarismos do número inteiro.
// Seu número: 2021
// A soma é 5


const PROMPT = require("prompt-sync")();

var numero = PROMPT("Digite um número: >").toString();

var soma = 0;

for (let index = 0; index < numero.length; index++) {
    const element = numero[index];
    
    soma += parseInt(element);
}

console.log(`A soma dos dígitos do seu número: ${numero} é: ${soma}`);