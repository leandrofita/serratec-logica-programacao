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

var idade;
var peso;
var hepatite;
var malaria;
var recente;

console.clear();
console.log("== Banco de Sangue == \nDigite “Sim” ou “Não” nas restrições a seguir\n");

idade = PROMPT("Idade abaixo de 16 ou acima de 69 anos: ") == "Sim" ? true : false;
peso = PROMPT("Pesa menos de 50kg: ") == "Sim" ? true : false;
hepatite = PROMPT("Portador de Hepatite: ") == "Sim" ? true : false;
malaria = PROMPT("Já teve Malária: ") == "Sim" ? true : false;
recente = PROMPT("Fez doação recente: ") == "Sim" ? true : false;

doador = !(idade || peso || hepatite || malaria || recente);

console.clear();
console.log(`== Resultado da triagem ==\n`);

console.log(`Idade abaixo de 16 ou acima de 69 anos: ${idade}`);
console.log(`Pesa menos de 50kg: ${peso}`);
console.log(`Portador de Hepatite: ${hepatite}`);
console.log(`Já teve Malária: ${malaria}`);
console.log(`Fez doação recente: ${recente}\n`);
console.log(`Pode doar sangue? ${doador}`);
