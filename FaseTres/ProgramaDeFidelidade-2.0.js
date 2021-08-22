// O “Programa de fidelidade” aumentou o sistema, criando o “Multiplique seus pontos”. O cliente irá digitar quantos cupons tem, e o sistema irá triplicar o valor.


const PROMPT = require("prompt-sync")();

function somenteNumero(numero){
    return (numero === "" || isNaN(numero) || numero == undefined) ? true : false;
}

var cupons;

while (somenteNumero(cupons)) {
    cupons = parseInt(PROMPT("Por favor, digite a quantidade de cupons: "));
}

console.log(`Seus cupons agora valem ${cupons * 3} pontos!`);
