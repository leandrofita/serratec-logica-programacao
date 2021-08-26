// O “cara ou coroa estatístico” vai jogar a moeda mil vezes, e depois demonstrar percentualmente as aparições de caras ou coroas.
// Pesquise sobre a função de números aleatórios, para sortear um número e usá-lo como sendo a resposta da moeda.



const LIMITE = 1000000;

// Sorteia um número 
// Parâmetros: min (int) = valor mínimo
//             max (int) = valor máximo
//             decimal (int) = valor decimal
function randomico(min, max, decimal){
    if (decimal) {
        return ((Math.random() * (max - min + 1)) + min).toFixed(2);
    }

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var somaCara = 0;
var somaCoroa = 0;

for (let index = 0; index < LIMITE; index++) {
    
     if (randomico(0,1,false) == 0)
         somaCara++;
     else
        somaCoroa++;
}

console.log(`Em ${LIMITE} jogadas, caíram ${somaCara} Caras, ou seja ${(somaCara*100)/LIMITE}%`);
console.log(`Em ${LIMITE} jogadas, caíram ${somaCoroa} Coroa, ou seja ${(somaCoroa*100)/LIMITE}%`);