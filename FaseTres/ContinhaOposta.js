// A “continha oposta” lê um número e mostra seu valor negativo.

const PROMPT = require("prompt-sync")();

var numero;
var numeroNegativo;


var test = isNaN(numero);

while (somenteNumero(numero)) {
    numero = parseFloat(PROMPT("Por favor, digite um número: "));
}

// CHAME A FUNÇÃO ABAIXO SE DESEJA RETORNAR SEMPRE UM NÚMERO NEGATIVO, MESMO QUE O USUÁRIO TENHA DIGITADO UM NÚMERO NEGATIVO.
//numeroNegativo = sempreNegativo(numero);

numeroNegativo = -numero;

console.log(`O valor negativo (oposto) de ${numero} é: ${numeroNegativo}`);

function somenteNumero(numero){
    return (numero === "" || isNaN(numero) || numero == undefined) ? true : false;
}

function sempreNegativo(numero){
    var numeroNegativo;
    if (numero > 0) {
        numeroNegativo = -numero;
    }
    else{
        numeroNegativo = numero;
    }
    return numeroNegativo;
}
