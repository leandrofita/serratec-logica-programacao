// Para ajudar a criança que ainda não sabe contar “ímpar par”, o programa pergunta até qual número ela quer contar, e quais ela quer ver (pares ou ímpares).


const PROMPT = require("prompt-sync")();

var max = parseInt(PROMPT("Até que número você deseja contar: >"));

console.log(``);

var escolha = PROMPT("Escolha se deseja contar os Pares ou os Ímpares. 'P' ou 'I' >").toUpperCase() == 'P' ? "P" : "I";

if (escolha == 'P') {
    console.log(`Exibindo os números Pares de 1 a ${max}`);
    for (let index = 1; index <= max; index++) {
        if(index % 2 == 0)
            console.log(`${index} é Par.`);   
    }
} else{
    console.log(`Exibindo os números ímpares de 1 a ${max}`);
    for (let index = 1; index <= max; index++) {
        if(index % 2 != 0)
            console.log(`${index} é ímpar.`);   
    }
}


