// Em tempos de pandemia, só é permitido entrar em templos religiosos pessoas de máscara. Na portaria deve ser medida a temperatura à distância, e o valor não deve ultrapassar 37,5º.



const PROMPT = require("prompt-sync")();


function somenteNumero(numero){
    return (numero === "" || isNaN(numero) || numero == undefined) ? true : false;
}

var mascara;
while (somenteNumero(mascara)) {
    console.clear();
    console.log("Meu sistema de detecção de máscara falhou! :(");
    console.log("Escolha uma das opções abaixo:\n");
    console.log("1 - Estou de máscara");
    console.log("2 - Estou sem máscara");

    mascara = parseFloat(PROMPT("> "));
}

console.clear();
switch (mascara) {

    case 1:
        var temperatura;
        while (somenteNumero(temperatura)) {
            temperatura = parseFloat(PROMPT("Por favor, digite sua temperatura em Celsius: "));
        }

        if (temperatura <= 37.5) {
            console.log(`Seja muito bem-vindo!`);
        }
        else{
            console.clear();
            console.log(`Temperatura acima do permitido! Procure um médico e melhoras!`);
        }
        break;
    
    case 2:
        console.clear();
        console.log(`Não é permitida a entrada de pessoas sem máscara!`);
        break;
}
