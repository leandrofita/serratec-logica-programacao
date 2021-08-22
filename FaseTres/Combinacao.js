// Jennyffer está preparando as malas para passar o feriado prolongado na casa da sua avó, no interior, sem aglomeração. Colocou na mala 4 calças e 8 camisetas. Quantas combinações, ou, de quantas formas diferentes ela poderá usar essas roupas?


const PROMPT = require("prompt-sync")();

function somenteNumero(numero){
    return (numero === "" || isNaN(numero) || numero == undefined) ? true : false;
}

var calcas;

while (somenteNumero(calcas)) {
    calcas = parseInt(PROMPT("Por favor, digite um número: "));
}

var camisetas;

while (somenteNumero(camisetas)) {
    camisetas = parseInt(PROMPT("Por favor, digite outro número: "));
}

var resultado = calcas * camisetas;

console.log(`Existem ${resultado} formas diferentes de realizar a sua combinação.`);