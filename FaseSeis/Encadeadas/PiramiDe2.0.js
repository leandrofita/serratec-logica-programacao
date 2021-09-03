// O jogo da pirâmide melhorou, e agora a escultura será alinhada conforme o seu tamanho. O jogador também irá selecionar o caractere do desenho.
// Pirâmide: 4
// Marcador: *
// *
// * *
// * * *
// * * * *

const PROMPT = require("prompt-sync")();

var altura = parseInt(PROMPT("Digite o número da altura da pirâmide: "));
var caractere = prompt("Qual caractere deseja utilizar? -> ");
var texto = "";


//Linhas
for (let i = 0; i <= altura; i++) {
    
     // Space
     for (let x = altura-i; x > 0; x--) {
        texto += " "; 
    }

    for (let y = 0; y < i; y++) {
        texto += caractere + " ";  // para alinhar a pirâmide de acordo com o enunciado.
    }
    console.log(texto);             
    texto = "";
}
