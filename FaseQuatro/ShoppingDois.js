const prompt = require('prompt-sync')();

console.log("===Shopping - Sanitários ===");

var cor = prompt("Qual a cor do indicador? (verde, vermelho)");

var liberado = (cor != "vermelho");

var saida = "Aguarde antes de entrar.";

if(liberado)
    console.log("Pode entrar no sanitário.");
else
    console.log(saida);

