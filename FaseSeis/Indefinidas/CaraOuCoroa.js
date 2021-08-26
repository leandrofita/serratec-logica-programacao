// O “cara ou coroa gentil” irá perguntar sua escolha e depois fica jogando a moeda até que ela caia do jeito que você queria! Cada jogada será exibida no console.

const PROMPT = require("prompt-sync")();

console.log(`Vamos jogar Cara ou Coroa:
0 - Cara
1 - Coroa\n`);

var escolha = parseInt(PROMPT("")[0]) == 0 ? 0 : 1;

console.clear();

if (escolha == 0)
        console.log("Você escolheu: Cara");
    else
        console.log("Você escolheu: Coroa");

// Sorteia um número 
// Parâmetros: min (int) = valor mínimo
//             max (int) = valor máximo
//             decimal (int) = valor decimal
function randomico(min, max, decimal){
    if (decimal) {
        return ((Math.random() * (max - min + 1)) + min).toFixed(2);
    }

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

while (randomico(0, 1, false) != escolha) {
    if (escolha == 0)
        console.log("Moeda moeda deu: Coroa.")
    else
        console.log("Moeda moeda deu: Cara."); 
}

if (escolha == 0)
        console.log("Parabéns! Moeda deu: Cara.")
    else
        console.log("Parabéns! Moeda deu: Coroa.");
