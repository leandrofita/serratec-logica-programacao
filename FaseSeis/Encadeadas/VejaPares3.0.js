// No programa “Veja os números pares”, o console apresentará uma frase com os números pares entre 2 e 10, separados por vírgula e na mesma linha. A frase termina com ponto, não com vírgula. Após escrever a frase, o sistema pede para continuar, e a cada confirmação, exibe a nova mensagem na sequência (entre 12 e 20 etc).
// Pimentinha para veja os pares:
// Vamos fazer a mesma mensagem usando apenas repetições indefinidas?
// E que tal não incluir no código expressões booleanas ou seletores?

// O programa “Veja os números pares” agora utiliza condições de fluxo e parada.

const PROMPT = require("prompt-sync")();

var limiteMin = 2;
var limiteMax = 10;
var texto = "";
var parar;

while (true) {

    texto = ""

    while (limiteMin < limiteMax) {
        texto += (limiteMin).toString() + ",";
        limiteMin += 2;
    }

    texto += limiteMin + ".";
    console.log(texto);
    limiteMin = limiteMax + 2;
    limiteMax += 10;

    parar = (PROMPT("Deseja continuar? 'S' ou 'N': ").toString().toUpperCase() == 'S') ? false : true ;

    if (parar) {
        break;
    }
}