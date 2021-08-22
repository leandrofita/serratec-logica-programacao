// Um programa "Total de produtos" irá solicitar que o cliente digite quantos produtos irá comprar. Depois, exibe a mensagem: "Parabéns por comprar x produtos!", substituindo x pela quantidade.


const PROMPT = require("prompt-sync")();

var quantidade;

function somenteNumero(numero){
    return (numero === "" || isNaN(numero) || numero == undefined) ? true : false;
}

while (somenteNumero(quantidade)) {
    quantidade = parseInt(PROMPT("Por favor, digite a quantidade de produtos que deseja comprar: "));
}

console.log(`Parabéns por comprar ${quantidade} produtos!`);