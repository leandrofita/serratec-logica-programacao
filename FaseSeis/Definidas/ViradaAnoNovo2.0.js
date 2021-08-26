// Na “virada de ano novo”, um mostrador gigante no centro da cidade vai fazer a contagem junto com a galera. A regressiva de 10 segundos termina com o “Feliz ano novo!”.


for (let index = -10; index < 0; index++) {
    
    console.log(`Contagem regressiva: ${Math.abs(index)}...`);    
}

console.log("Feliz Ano Novo!!!");



const NUMEROS = [
    'DEZ',
    'NOVE',
    "OITO",
    "SETE",
    "SEIS",
    "CINCO",
    "QUATRO",
    "TRÊS",
    "DOIS",
    "UM",
]

// for (let index = 10; index > 0; index--) {
    
//     console.log(`Contagem regressiva: ${index}...`);    
// }

NUMEROS.forEach(numero => {
    console.log(`Contagem regressiva: ${numero}`);    
});

console.log("Feliz Ano Novo!!!");