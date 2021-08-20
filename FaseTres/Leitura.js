const PROMPT = require("prompt-sync")();
var nome = PROMPT("Qual é o seu nome?");
var idade = PROMPT("Qual é a sua idade?");
console.log(`Olá, ${nome}! Sua idade é: ${idade} anos.`);

