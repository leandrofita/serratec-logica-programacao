// Dois amigos vão utilizar o programa “Maioral”. Sem olhar pra tela (pra um não ver o valor do outro), cada um irá digitar um número inteiro no teclado. Vamos saber quem digitou o número maior, pelos resultados na tela.

// == Maioral ==
//   Player 1: 7
//   Player 2: 8
// : Resultados :
//   Player 1 venceu? False
//   Player 2 venceu? True
//   Houve empate? False

const PROMPT = require("prompt-sync")();

function somenteNumero(numero){
    return (numero === "" || isNaN(numero) || numero == undefined) ? true : false;
}

var primeiro = PROMPT("Olá, você é o Primeiro a escolher. Digite seu nome: ");
var numeroUm;
while (somenteNumero(numeroUm)) {
    numeroUm = parseInt(PROMPT("Agora digite seu número: "));
}

var segundo = PROMPT("Olá, você é o Segundo a escolher. Digite seu nome: ");
var numeroDois;
while (somenteNumero(numeroDois)) {
    numeroDois = parseInt(PROMPT("Agora digite seu número: "));
}

console.clear();

console.log(`Player${primeiro}: ${numeroUm}`);
console.log(`Player${segundo}: ${numeroDois}`);

if (numeroUm == numeroDois) {
    console.log(`Vocês estão em sintonia! ${primeiro} e ${segundo} escolheram ${numeroUm}`);
}
else{
    if (numeroUm > numeroDois) {
        console.log(`Parabéns, ${primeiro}! Seu número ${numeroUm} é maior que o número do ${segundo}`);
    }
    else{
        console.log(`Parabéns, ${segundo}! Seu número ${numeroDois} é maior que o número do ${primeiro}`);
    }
}

