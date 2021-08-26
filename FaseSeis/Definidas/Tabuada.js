// Vou tomar a tabuada! O aluno de matemática escolhe o número, e o sistema lhe ensina a contar.
// Tabuada de: 7
// 7 x 1 = 7
// 7 x 2 = 14
// …



const PROMPT = require("prompt-sync")();

var numero = parseInt(PROMPT(`Digite um número: `));

for (let index = 1; index <= numero; index++) {
    console.log(`${numero} x ${index} = ${numero*index}`);    
}