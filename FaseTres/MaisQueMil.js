// O sistema “Mais que mil” apresenta o resultado da soma dos 4 primeiros múltiplos de 4 acima de mil, subtraindo dos 4 primeiros números primos a partir de zero.

const primos = 2 + 3 + 5 + 7;
var start = 1000;
var resultado = 0;
var control = 4
var cont = 0;

while (cont < control) {
    
    start++;

    if ((start % control) == 0) {
        resultado += start;
        cont++;
    }
}

resultado -= primos;
console.log(`A soma dos 4 primeiros números primos é: ${primos}`);
console.log(`A subtração dos ${control} primeiros múltiplos de 4 acima de 1000 é: ${resultado}`);