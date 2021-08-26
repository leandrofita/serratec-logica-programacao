// O jogo “pirâmiDe” solicita a altura da pirâmide, e imprime uma divertida pirâmide de letras D no console.
// PirâmiDe: 4
// D
// DD
// DDD
// DDDD

const PROMPT = require("prompt-sync")();

var altura = parseInt(PROMPT("Digite o número da altura da pirâmide: "));

var texto = "";
for (let i = 1; i <= altura; i++) {
    for (let j = 0; j < i; j++) {
        texto += "D";   
    }
    console.log(texto);             
    texto = "";
}