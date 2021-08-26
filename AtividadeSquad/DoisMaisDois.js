const prompt = require("prompt-sync")();

var num = Math.floor(Math.random() * 11);
console.log("Quanto é a metade de 2 + 2? ");

var ganhou = num == 2;

while (!ganhou){
    var tentar = prompt("Deseja tentar novamente? ");
    num = Math.floor(Math.random() * 11);
    ganhou = num == 2;
}

if (ganhou){
    console.log("PARABÉNS, VOCÊ GANHOU 1 MILHÃO DE REAIS!!!!!!!!")
}