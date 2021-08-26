// A “SuperCalc” é a calculadora que, além dos números, lê o operador que será aplicado, e depois realiza a operação. Considere as entradas na ordem: primeiro número, sinal (+, -, * ou /) e segundo número.

const PROMPT = require("prompt-sync")();

console.log("== Bem-vindo à SuperCalc == \n");

console.log("Digite a sua expressão matemática, ex: 2+2 \n");
var expressao = PROMPT("");

//Soma
if (expressao.indexOf("+".toString()) != -1) {
    let soma = expressao.split("+");
    resultado = parseFloat(soma[0]) + parseFloat(soma[1]);
    console.log(`\nResultado da expressão: ${expressao} = ${resultado}`);
}
// Substração
else if (expressao.indexOf("-".toString()) != -1) {
    let subtracao = expressao.split("-");
    resultado = parseFloat(subtracao[0]) - parseFloat(subtracao[1]);
    console.log(`\nResultado da expressão: ${expressao} = ${resultado}`);
}
// Multiplicacao
else if (expressao.indexOf("*".toString()) != -1) {
    let multiplicacao = expressao.split("*");
    resultado = parseFloat(multiplicacao[0]) * parseFloat(multiplicacao[1]);
    console.log(`\nResultado da expressão: ${expressao} = ${resultado}`);
}
// Divisão
else if (expressao.indexOf("/".toString()) != -1) {
    var divisao = expressao.split("/");

    if (parseFloat(divisao[1]) <= 0) {
        console.log(`\nNão é possível dividir por zero!`);
    } 
    else 
    {
        resultado = parseFloat(divisao[0]) / parseFloat(divisao[1]);
        console.log(`\nResultado da expressão: ${expressao} = ${resultado}`);
    }
}