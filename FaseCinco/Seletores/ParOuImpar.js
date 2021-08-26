// Os jogadores querem que o programa “Par ou ímpar” escreva respostas mais completas. Dessa vez, eles querem fazer sua escolha antes de digitar os números.
// = Par ou ímpar =
// Jogador 1, escolha [par] ou [impar]: impar
// Quantos dedos: 3
// Jogador 2, quantos dedos: 3

// A soma é 6, como esse número é par, o jogador 2 venceu!

const PROMPT = require("prompt-sync")();

console.clear();
console.log("== Par ou Ímpar == \n");

var jogadorUm = [];
var jogadorDois = [];


function randomico(min, max, decimal){
    if (decimal) {
        return ((Math.random() * (max - min + 1)) + min).toFixed(2);
    }

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

if (randomico(0, 1, false) == 0){
    jogadorUm.push((PROMPT(`Jogador Um, digite 'par' ou 'impar': `)).toLowerCase()) 
    jogadorDois.push("impar");
}
else{
    jogadorDois.push((PROMPT(`Jogador Dois, digite 'par' ou 'impar': `)).toLowerCase()) 
    jogadorUm.push("impar");
}    

jogadorUm.push(parseInt(PROMPT(`Jogador Um, digite seu número: `)));
console.log(`AJogador Um digitou: ${jogadorUm[1]}`);
jogadorDois.push(parseInt(PROMPT(`Jogador Dois, digite seu número: `)));
console.log(`BJogador Um digitou: ${jogadorDois[1]}`);

if (jogadorUm[0] == "impar") {
    if ((((jogadorUm[1] + jogadorDois[1])) % 2) != 0) {
        console.log(`CJogador Um é o vencedor! Resultado: ${jogadorUm[1] + jogadorDois[1]}`);
    }
    else{
        console.log(`DJogador Dois é o vencedor! Resultado: ${jogadorUm[1] + jogadorDois[1]}`);
    }
}
else if ((jogadorUm[1] + jogadorDois[1]) % 2 == 0) {
    console.log(`EJogador Um é o vencedor! Resultado: ${jogadorUm[1] + jogadorDois[1]}`);
}
else{
    console.log(`FJogador Dois é o vencedor! Resultado: ${jogadorUm[1] + jogadorDois[1]}`);
}