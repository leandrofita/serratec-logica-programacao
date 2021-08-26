// No blog “Incentivo ao consumo de frutas”, o aluno digita o nome de sua fruta favorita, e receberá alguma informação singular sobre ela. Para se tornar interessante, a lista deve conter pelo menos 6 curiosidades, e uma sobre frutas de modo geral.


const PROMPT = require("prompt-sync")();

console.log(`Escolha uma das frutas: 
Abacate
Banana
Jabuticaba
Limão
Maça
Pera`);

var fruta = (PROMPT("> "))[0].toUpperCase();

switch (fruta) {
    case 'A'.toUpperCase():
        console.log("");
        break;
        case 'B'.toUpperCase():
        console.log("O abacate é uma fruta que aumenta a sensação de saciedade.");
        break;
        case 'J'.toUpperCase():
        console.log("A jabuticaba é o fruto da jaboticabeira.");
        break;
        case 'L'.toUpperCase():
        console.log("O limão é uma fruta cítrica.");
        break;
        case 'M'.toUpperCase():
        console.log("A maçã é uma fruta de origem asiática.");
        break;
        case 'P'.toUpperCase():
        console.log("As peras são frutas que se destacam pelo sabor doce e suave. ");
        break;
}

console.log("Comer frutas faz bem!");