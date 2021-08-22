// No programa “Vote no 20”, após solicitar a idade, o sistema apresenta se o indivíduo já pode exercer sua cidadania nas urnas. 

// == Eleições 2020 ==
//   Digite sua idade: 17
//   Você já pode votar? True


const PROMPT = require("prompt-sync")();
const porcentagemAlcool = 0.7;

function somenteNumero(numero){
    return (numero === "" || isNaN(numero) || numero == undefined) ? true : false;
}

var idade;
while (somenteNumero(idade)) {
    idade = parseInt(PROMPT("Por favor, Digite sua idade: "));
}

if (idade >= 16) {
    console.log("Parabéns! Você acaba de perder sua liberdade e passa ser obrigado a votar! :)");
}
else{
    console.log("Aproveite enquanto é tempo! Sua liberdade logo será nossa!");
}
