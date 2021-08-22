// O programa “Três ângulos” lê os valores dos ângulos de uma forma, e escreve se as medidas formam um triângulo válido.



const PROMPT = require("prompt-sync")();
const dia = parseInt(String(new Date().getDate()).padStart(2, '0'));

console.clear();

function somenteNumero(numero){
    return (numero === "" || isNaN(numero) || numero == undefined) ? true : false;
}

var anguloUm;
while (somenteNumero(anguloUm)) {
    anguloUm = parseInt(PROMPT("Digite o primeiro ângulo: "));
}

var anguloDois;
while (somenteNumero(anguloDois)) {
    anguloDois = parseInt(PROMPT("Digite o primeiro ângulo: "));
}

var anguloTres;
while (somenteNumero(anguloTres)) {
    anguloTres = parseInt(PROMPT("Digite o primeiro ângulo: "));
}

if ((anguloUm + anguloDois + anguloTres) == 180) {
    console.log(`Triângulo é válido!`);
}
else{
    console.clear();
    console.log(`Triângulo inválido!`);
}
