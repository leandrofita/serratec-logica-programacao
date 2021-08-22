// O laboratório fabricante de álcool em gel precisa saber se o produto está atingindo a concentração ideal para desinfecção, que é de 70%. Para a ajudar o laboratório, crie um programa onde será preenchida a capacidade da garrafa em mililitros, e o resultado serão os volumes de álcool e de gel que precisam ser misturados para preenchimento do vasilhame.


const PROMPT = require("prompt-sync")();
const porcentagemAlcool = 0.7;

function somenteNumero(numero){
    return (numero === "" || isNaN(numero) || numero == undefined) ? true : false;
}

var capacidade;

while (somenteNumero(capacidade)) {
    capacidade = parseInt(PROMPT("Por favor, digite a capacidade da garrafa em mililitros: "));
}

var qtdAlcool = capacidade * porcentagemAlcool;
var qtdGel = capacidade - qtdAlcool;

console.log(`Para ${capacidade} mililitros, são necessários ${qtdAlcool} ml de Álcool e ${qtdGel} ml de Gel.`);




