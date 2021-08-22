// Crie o programa “mini calculadora”, que após ler dois números inteiros apresenta as operações de soma, subtração, multiplicação e divisão com eles.
const PROMPT = require("prompt-sync")();

function somenteNumero(numero){
    return (numero === "" || isNaN(numero) || numero == undefined) ? true : false;
}

var numeroUm;
var numeroDois;

while (somenteNumero(numeroUm)) {
    numeroUm = parseFloat(PROMPT("Por favor, digite o primeiro número: "));
}

while (somenteNumero(numeroDois)) {
    numeroDois = parseFloat(PROMPT("Por favor, digite o segundo número: "));
}

var soma = numeroUm + numeroDois;
var subtracao = numeroUm - numeroDois;
var multiplicacao = numeroUm * numeroDois;
var divisao;

if (numeroDois == 0) {
    divisao = "Não é possível dividir um número por Zero!";
}
else{
    divisao = numeroUm / numeroDois;
}

console.clear();

console.log(`A soma de ${numeroUm} + ${numeroDois} é: ${soma}`);
console.log(`A subtracao de ${numeroUm} - ${numeroDois} é: ${subtracao}`);
console.log(`A multiplicacao de ${numeroUm} * ${numeroDois} é: ${multiplicacao}`);

if (isNaN(divisao)) {
    console.log(divisao);
}
else{
    console.log(`A divisão de ${numeroUm} / ${numeroDois} é: ${divisao}`);
}
