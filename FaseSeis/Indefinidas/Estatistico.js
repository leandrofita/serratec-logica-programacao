// O programa “Estatístico” irá somar todos os números divisíveis por três entre 3 e 300, e além de exibir o resultado, irá dizer se o resultado também é divisível por três!

var resultado = 0;

for (let index = 3; index <= 300; index++) {
   
    if (index % 3 == 0) {
        resultado += index;
    }
}

if (resultado % 3 == 0){
    console.log(`O resultado da soma é: ${resultado}. O que também é divisível por três.`);
    console.log(`${resultado} também é divisivel por três!`);
} else{
    console.log(`O resultado da soma é: ${resultado}. Mas o valor não é divisível por três.`);
}
