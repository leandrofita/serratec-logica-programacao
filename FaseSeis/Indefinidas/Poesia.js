// No programa “Poesia” um trecho de uma composição conhecida é apresentado na tela. Após imprimir, o programa pergunta se o leitor quer apreciar novamente os versos.


const PROMPT = require("prompt-sync")();

var repetir = true;


while (repetir) {
    console.clear();
    console.log(`\n"De dia o sono vem,
À noite o sono vai,
Meu relógio biológico,
Seve ser do Paraguai."\n`)

    repetir = PROMPT("Gostaria de exibir novamente? 'S' ou 'N' ")[0].toString().toUpperCase();

    if (repetir != 'S') {
        repetir = false;
    }
}