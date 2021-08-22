// A prefeitura de Teresópolis estabeleceu o “Rodízio de CPF”, onde o dígito final do documento será utilizado para permitir a entrada nas lojas. CPF final “par” somente pode sair nos dias pares, e de igual modo, o dia ímpar é destinado aos documentos ímpares.

// Dia (hoje): 16
// CPF (após o hífen): 41
// Autorizado a entrar na loja? False


const PROMPT = require("prompt-sync")();
const dia = parseInt(String(new Date().getDate()).padStart(2, '0'));


function somenteNumero(numero){
    return (numero === "" || isNaN(numero) || numero == undefined) ? true : false;
}

var cpf;
while (somenteNumero(cpf)) {
    cpf = parseInt(PROMPT("Digite o número final do seu CPF (após o hífen): "));
}


if ((cpf % 2) == (dia % 2)) {
    console.log("Hoje é o seu dia! Você está autorizado a entrar.");
}
else{
    console.log("Hoje não é o seu dia! Você não está autorizado a entrar.");
}