// O programa “termômetro” lê uma temperatura em graus Celsius, e devolve sua equivalência na escala Fahrenheit.

const PROMPT = require("prompt-sync")();

var tempCelsius;

while (somenteNumero(tempCelsius)) {
    tempCelsius = parseFloat(PROMPT("Por favor, digite a temperatura em Celsius: "));
}

var tempFahrenheit = (tempCelsius * 1.8) + 32; // (30°C x 1.8) + 32 = 86°F

console.log(`${tempCelsius} graus Celsius corresponde a ${tempFahrenheit} graus Fahrenheit`);

function somenteNumero(numero){
    return (numero === "" || isNaN(numero) || numero == undefined) ? true : false;
}