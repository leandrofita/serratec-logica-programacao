// No programa “Conto nos dedos”, a criança diz até qual número quer contar, e os números aparecem na tela em sequência. Ela vai experimentar vários números, até que digite um zero para parar de contar.


const PROMPT = require("prompt-sync")();

var stop = false;

while (!stop) {
    var numero = parseInt(PROMPT("Informe até que número quer contar ou '0' para sair: "));

    for (let index = 1; index <= numero; index++) {
        console.log(index);
    }

    stop = numero == 0 ? true : false;
}