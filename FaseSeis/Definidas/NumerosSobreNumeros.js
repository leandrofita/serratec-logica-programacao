// Em “números sobre números”, o programa solicita uma entrada inteira, mostra a sequência decrescente entre número até 1, e a soma de todos os valores da sequência.

const PROMPT = require("prompt-sync")();

var numeros = [];
var numero  = parseInt(PROMPT("Informe um número inteiro: "));

var soma = 0;

for (let index = numero; index > 0; index--) {
    numeros.push(index);    
    soma += index;
}

console.log(numeros);
console.log(`A soma dos números de 1 até ${numero} é: ${soma}`);