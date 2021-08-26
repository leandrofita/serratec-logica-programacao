// “No abecedário da Xuxa, vamos aprender!” Lembra da música? Então, crie um programa que recebe uma letra maiúscula e canta sua “definição musical”.
// Letra: C
// C de coração!

// Pimentinha:
// Aceitar tanto letras maiúsculas como minúsculas.

const PROMPT = require("prompt-sync")();

console.clear();
console.log("=== Abecedário da Xuxa ===\n");

var letra = PROMPT("Digite uma letra de A a Z: ")[0].toUpperCase();

switch (letra) {
  case "A".toUpperCase():
    console.log("A de amor!");
    break;
  case "B".toUpperCase():
    console.log("B de baixinho!");
    break;
  case "C".toUpperCase():
    console.log("C de coração!");
    break;
  case "D".toUpperCase():
    console.log("D de docinho!");
    break;
  case "E".toUpperCase():
    console.log("E de escola!");
    break;
  case "F".toUpperCase():
    console.log("F de feijão!");
    break;
  case "G".toUpperCase():
    console.log("G de gente!");
    break;
  case "H".toUpperCase():
    console.log("H de humano!");
    break;
  case "I".toUpperCase():
    console.log("I de igualdade!");
    break;
  case "J".toUpperCase():
    console.log("J de juventude!");
    break;
  case "K".toUpperCase():
    console.log("K de Kylo Ren!");
    break;
  case "L".toUpperCase():
    console.log("L de liberdae!");
    break;
  case "M".toUpperCase():
    console.log("M de molecagem!");
    break;
  case "N".toUpperCase():
    console.log("N de natureza!");
    break;
  case "O".toUpperCase():
    console.log("O de obrigado!");
    break;
  case "P".toUpperCase():
    console.log("P de proteção!");
    break;
  case "Q".toUpperCase():
    console.log("Q de quero-quero!");
    break;
  case "R".toUpperCase():
    console.log("R de riacho!");
    break;
  case "S".toUpperCase():
    console.log("S de saudade!");
    break;
  case "T".toUpperCase():
    console.log("T de terra!");
    break;
  case "U".toUpperCase():
    console.log("W de universo!");
    break;
  case "V".toUpperCase():
    console.log("A de vitória!");
    break;
    case "W".toUpperCase():
    console.log("W de Wikipedia!");
    break;
  case "X".toUpperCase():
    console.log("X de Xuxa!");
    break;
  case "Y".toUpperCase():
    console.log("Y de Yes!");
    break;
  case "Z".toUpperCase():
    console.log("Z de Zumba!");
    break;
  default:
    console.log("Não foi possível ler sua letra!");
    break;
}
