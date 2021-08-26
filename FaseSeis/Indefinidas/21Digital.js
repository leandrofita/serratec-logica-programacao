// No jogo de cartas “21 digital” o jogador é quem entrega uma carta ao programa, que armazena o valor e solicita a próxima carta. A vitória é do jogador quando a soma das cartas dá exatos vinte e um, ou ganha o carteador quando a soma ultrapassa esse valor.

const PROMPT = require("prompt-sync")();

var soma = 0;

while (soma < 21 ) {
    var carta = parseInt(PROMPT("Digite o valor da carta: "));
    soma += carta;
}

if (soma == 21) {
    console.log("21!!! Parabéns!!! Você ganhou.");
} else
    console.log(`A mesa ganhou: ${soma}`);
