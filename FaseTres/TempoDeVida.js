// O programa “Tempo de vida” irá imprimir a soma das idades de todos os colegas do seu squad. Pergunte a cada um a idade e não esqueça a sua! Depois faça a atribuição da expressão que você montou em uma variável inteira.

const anoAtual = new Date().getFullYear();
var idadeNathan = anoAtual - new Date(1992);
const idadeGustavo = anoAtual - new Date(1992);
const idadeLuciana = anoAtual - new Date(1988);
const idadeAndre = anoAtual - new Date(1978);
const idadeMatheus = anoAtual - new Date(1997);
const idadeMarcos = anoAtual - new Date(2001);

var somaDasIdades = idadeNathan + idadeGustavo + idadeLuciana + idadeAndre + idadeMatheus + idadeMarcos;

console.log(`A soma das idades de todos os colegas do squad é: ${somaDasIdades}`);


