// Doar sangue é muito importante. Porém, nem todos podem fazê-lo, existem alguns impedimentos (que podem ser temporários). Ajude o “Banco de sangue” a fazer a triagem dos voluntários que responderam “Sim” para as restrições.

// == Banco de Sangue ==
// [Digite “Sim” ou “Não” nas restrições a seguir]
// Idade abaixo de 16 ou acima de 69 anos: Não
// Pesa menos de 50kg: Não
// Portador de Hepatite: Não
// Já teve Malária: Não
// Fez doação recente: Sim

// [Resultado da triagem]
// Pode doar sangue? False


const PROMPT = require("prompt-sync")();

const PERGUNTAS = [
    "Idade abaixo de 16 ou acima de 69 anos: ",
    "Pesa menos de 50kg: ",
    "Portador de Hepatite: ",
    "Já teve Malária: ",
    "Fez doação recente: ",
]

var podeDoar = true;
var respostas = [];

console.clear();
console.log("== Banco de Sangue 2.0 == \nDigite “Sim” ou “Não” nas restrições a seguir\n");

for (let index = 0; index < PERGUNTAS.length; index++) {
    const pergunta = PERGUNTAS[index];
    
    respostas[index] = PROMPT(pergunta);
    
    if (respostas[index] == "Sim") {
        podeDoar = false;
        break;
    }
}

console.log(`\n== Resultado da triagem ==\n`);

for (let index = 0; index < respostas.length; index++) {
    const resposta = respostas[index];

    console.log(PERGUNTAS[index], resposta);    
}


if (podeDoar)
    console.log(`Parabéns! Você pode doar sangue. :)`);
else
    console.log(`Pode doar sangue? ${podeDoar}`);
