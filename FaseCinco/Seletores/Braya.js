// Braya sempre tem a mesma rotina nos fins de semana. Pela manhã, tendo sol, vai à praia. Do contrário, aproveita pra estudar. À tarde é ainda mais regrado: para o almoço na praia, leva um lanche; em casa, feijoada. Após almoçar, assiste televisão e tira um cochilo. Agora ele quer imprimir seus hábitos em papel na sexta, após a previsão do tempo, e colar na porta da geladeira.


const PROMPT = require("prompt-sync")();

var fazSol = true;
var almoco = undefined;

console.clear();
console.log("== Hábitos == \nDigite “Sim” ou “Não”:\n");

fazSol = PROMPT("Faz sol? ").toUpperCase() == "SIM" ? true : false;

console.log("\n== Agenda de Sexta-feira ==\n");

if (fazSol) {
    almoco = "lanche";
    console.log("Manhã: ir à praia.");
}
else{
    almoco = "feijoada";
    console.log("Manhã: estudar.");
}

console.log(`Almoço: " ${almoco}.`);
console.log("À tarde: assiste televisão e tira um cochilo.");



