// O programa “Relacionais” lê os inteiros A e B. Utilizando variáveis booleanas, escreve na tela o resultado de cada operação relacional com os números.

const PROMPT = require("prompt-sync")();

var valorUm = PROMPT("Por favor, insira o primeiro valor: ");
var valorDois = PROMPT("Por favor, insira o segundo valor: ");

var igual = valorUm == valorDois;
var diferente = valorUm != valorDois;
var maior = valorUm > valorDois;
var maiorIgual = valorUm >= valorDois;
var menor = valorUm < valorDois;
var menorIgual = valorUm >= valorDois;

console.log(`${valorUm} é igual ao ${valorDois}? ${igual}`);
console.log(`${valorUm} é diferente ao ${valorDois}? ${diferente}`);
console.log(`${valorUm} é maior que ${valorDois}? ${maior}`);
console.log(`${maiorIgual} é maior ou igual ao ${valorDois}? ${maiorIgual}`);
console.log(`${menor} é menor que ${valorDois}? ${menor}`);
console.log(`${menorIgual} é menor ou igual ao ${valorDois}? ${menorIgual}`);