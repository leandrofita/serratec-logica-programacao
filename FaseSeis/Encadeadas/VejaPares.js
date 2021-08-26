// No programa “Veja os números pares”, o console apresentará uma frase com os números pares entre 2 e 10, separados por vírgula e na mesma linha. A frase termina com ponto, não com vírgula. Após escrever a frase, o sistema pede para continuar, e a cada confirmação, exibe a nova mensagem na sequência (entre 12 e 20 etc).

const PROMPT = require("prompt-sync")();

var limiteMin = 2;
var limiteMax = 10;
var texto = "";

while (true) {

    texto = ""

    for (let index = limiteMin; index <= limiteMax; index++) {
        //Par
        if (index % 2 == 0) {
            texto = (index != limiteMax) ? texto + index + "," : texto + index;
        }
    }

    console.log(texto + ".");
    limiteMin = limiteMax + 2;
    limiteMax += 10;
    PROMPT("");
}