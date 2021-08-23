const PROMPT = require("prompt-sync")();
const resposta = "42";
var respostaUsuarios = [];

// Usuários
for (let i = 0; i < 3; i++) {
    // Chances
    var chances = 0;
    for (let j = 0; j < 2; j++) {
        chances++;
        respostaUsuarios[i] = PROMPT(`Olá, ${i+1}º ouvinte! Qual sua resposta?`);
        if (respostaUsuarios[i] == resposta) {
            console.log("Parabéns! Você ganhou!");
            break;}
        else{
            if (chances < 2) {
                console.log("Vamos tentar outra vez!");
            }
            else{
                console.log(`${i+1}º ouvinte, não foi dessa vez! PRÓÓÓÓÓÓÓXIMO`);
            }
        }
    }
}