// O programa “Quadrado” terá um código adaptado do item anterior, para calcular o quadrado do número digitado.


const PROMPT = require("prompt-sync")();

function somenteNumero(numero){
    return (numero === "" || isNaN(numero) || numero == undefined) ? true : false;
}

var numeroUm;
var resultado;

while (somenteNumero(numeroUm)) {
    numeroUm = parseFloat(PROMPT("Por favor, digite um número: "));
}

resultado = numeroUm ** 2;

console.log(`O dobro de ${numeroUm} foi ${resultado}.`);

//Solução com apenas uma variável.
// console.log(`O dobro de ${numeroUm} foi ${numeroUm **= 2}.`);