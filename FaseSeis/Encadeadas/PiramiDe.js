// O jogo “pirâmiDe” solicita a altura da pirâmide, e imprime uma divertida pirâmide de letras D no console.
// PirâmiDe: 4
// D
// DD
// DDD
// DDDD

// const PROMPT = require("prompt-sync")();

// var altura = parseInt(PROMPT("Digite o número da altura da pirâmide: "));

// var texto = "";
// for (let i = 1; i <= altura; i++) {
//     for (let j = 0; j < i; j++) {
//         texto += "D";   
//     }
//     console.log(texto);             
//     texto = "";
// }

// console.log("---");
var texto = "";
var altura = 4;

//Linhas
for (let i = 1; i <= altura; i++) {
    
    // D
    for (let j = 0; j < i; j++) {

        // Space
        for (let x = altura-i; x >= 0; x--) {
            texto += " "; 
        }

        for (let y = 0; y < i; y++) {
            texto += "D ";  
        }
    }
    console.log(texto);             
    texto = "";
}