// Para ajudar o operador do Caixa, precisamos emitir a contagem das notas a entregar ao fornecedor, nos pagamentos até mil Reais.
// Valor do pagamento: 336.12
// Relação de cédulas:
// 3 de R$ 100.00
// 1 de R$ 20.00
// 1 de R$ 10.00
// 1 de R$ 5.00
// 1.12 em moedas.

const PROMPT = require("prompt-sync")();

var valor = parseFloat(PROMPT("Informe o valor da cobrança: "));

var contNota100 = 0;
var contNota20 = 0;
var contNota10 = 0;
var contNota5 = 0;
var moedas = 0;
var resto = valor;

if (resto >= 100) {
    contNota100 = parseInt(resto / 100);
    resto = resto - (contNota100 * 100)
} 
if (resto >= 20){
    contNota20 = parseInt(resto / 20);
    resto = resto - (contNota20 * 20);
}
if (resto >= 10){
    contNota10 = parseInt(resto / 10);
    resto = resto - (contNota10 * 10);
}
if (resto >= 5){
    contNota5 = parseInt(resto / 5);
    resto = resto - (contNota5 * 5);
}

console.log(`Valor do pagamento: ${valor}`);
console.log(`${contNota100} de 100`);
console.log(`${contNota20} de 20`);
console.log(`${contNota10} de 10`);
console.log(`${contNota5} de 5`);
console.log(`${resto.toFixed(2)} de moedas`);