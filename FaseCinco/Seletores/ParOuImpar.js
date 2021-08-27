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
    jogadorDois[0] = (jogadorUm[0] == 'par') ? 'impar' : 'par';
}
else{
    jogadorDois.push((PROMPT(`Jogador Dois, digite 'par' ou 'impar': `)).toLowerCase()) 
    jogadorUm[0] = (jogadorDois[0] == 'par') ? 'impar' : 'par';
}    

jogadorUm[1] = (parseInt(PROMPT(`Jogador Um, digite seu número: `)));
console.log(`Jogador Um digitou: ${jogadorUm[1]}`);

jogadorDois[1] = (parseInt(PROMPT(`Jogador Dois, digite seu número: `)));
console.log(`Jogador Dois digitou: ${jogadorDois[1]}`);

var resultado = ((jogadorUm[1] + jogadorDois[1]) % 2) == 0 ? "par" : "impar";
var vencedor = (resultado == jogadorUm[0]) ? "Um" : "Dois";

console.log(`A soma é: ${jogadorUm[1] + jogadorDois[1]}, ou seja, ${resultado}. Portanto, o jogador ${vencedor} venceu!`);