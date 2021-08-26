// O programa “Triangular” lê as medidas do triângulo, e informa se ele é equilátero, isósceles ou escaleno.


const PROMPT = require("prompt-sync")();

console.log("== Bem-vindo ao triângulo == \n");

console.log("Digite a primeira medida do triângulo: \n");
var primeiro = PROMPT("");

console.log("Digite a segunda medida do triângulo: \n");
var segundo = PROMPT("");

console.log("Digite a terceira medida do triângulo: \n");
var terceiro = PROMPT("");

// Escaleno
if (primeiro != segundo != terceiro) {
    console.log(`O triângulo de medidas: ${primeiro}, ${segundo}, ${terceiro} é um triângulo Escaleno`);
} 
// Isósceles
else if ((primeiro == segundo) || (primeiro == terceiro) || (segundo == terceiro)) {
    console.log(`O triângulo de medidas: ${primeiro}, ${segundo}, ${terceiro} é um triângulo Isósceles`);
}
// Equilátero
else if (primeiro == segundo == terceiro) {
    console.log(`O triângulo de medidas: ${primeiro}, ${segundo}, ${terceiro} é um triângulo Isósceles`);
}