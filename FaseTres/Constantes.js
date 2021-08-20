var variavel = "Darth Vader";
variavel = "Luke Skywalker";  // Variaveis são mutaveis, ou seja, é possível alterar o valor da variavel.

// Constante de substituição

const ICMS = 0.18; //  18% (18 / 100)
//ICMS = 0.16; Constantes são imutáveis, ou seja, não é possível atribuir um novo valor a uma constante.
console.log(ICMS);

//--------------------------------------------------------------------------

// Constante com atribuição única
const PROMPT = require("prompt-sync")();
const UNICO = PROMPT("Digite o código único");
console.log(UNICO);

//--------------------------------------------------------------------------
// Cite outras constantes

const PI = 3.1415;
