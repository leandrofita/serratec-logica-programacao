// Escrever um programa que solicita um número, calcula o dobro do valor, e devolve a mensagem: "O dobro de x foi y.", substituindo x e y pelos valores.
// Dica: Utilize uma variável nova para armazenar o resultado.


const PROMPT = require("prompt-sync")();

function somenteNumero(numero){
    return (numero === "" || isNaN(numero) || numero == undefined) ? true : false;
}

var numeroUm;
var resultado;

while (somenteNumero(numeroUm)) {
    numeroUm = parseFloat(PROMPT("Por favor, digite um número: "));
}

resultado = numeroUm * 2;

console.log(`O dobro de ${numeroUm} foi ${resultado}.`);

// Solução com apenas uma variável.
//console.log(`O dobro de ${numeroUm} foi ${numeroUm *= 2}.`);