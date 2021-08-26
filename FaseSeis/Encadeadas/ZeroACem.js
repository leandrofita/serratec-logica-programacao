// O programa “de zero a cem” mostra na tela todos os números desse intervalo, mesmo trabalhando com limites de início e fim da repetição definida de 1 a 10.

var count = 0;

for (let i = 1; i <= 10; i++) {
    for (var j = 1; j <= 10; j++) {
        console.log(count++);
    }
}

console.log(count++);