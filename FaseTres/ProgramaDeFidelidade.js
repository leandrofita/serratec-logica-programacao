// O “Programa de fidelidade” solicitou a criação do sistema “Ver os seus pontos”, onde o cliente poderá consultar seu saldo de pontos. O cliente irá digitar um número inteiro correspondente aos seus cupons. Cada cupom corresponde a 1 ponto.


const PROMPT = require("prompt-sync")();

function somenteNumero(numero){
    return (numero === "" || isNaN(numero) || numero == undefined) ? true : false;
}

var cupons;

while (somenteNumero(cupons)) {
    cupons = parseInt(PROMPT("Por favor, digite a quantidade de cupons: "));
}

console.log(`De acordo com seus cupons, você tem ${cupons} pontos no programa de fidelidade!`);
