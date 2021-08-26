// O posto de Saúde irá vacinar hoje contra a Covid os cidadãos com 67 anos. Ao entrar, deve ser solicitada a idade, para então exibir as mensagens de direcionamento:
// acima de 67 anos = Por quê não vacinou ainda?
// Abaixo de 67 anos = Volte na próxima semana
// 67 anos completos = Vacinação hoje.


const PROMPT = require("prompt-sync")();
const VACINA = 67;

var idade = parseFloat(PROMPT("Informe o valor da cobrança: "));

if (idade > VACINA) {
    console.log("Por quê não vacinou ainda?");
}else if (idade == VACINA) {
    console.log("Vacinação hoje.");
}else if (idade < VACINA) {
    console.log("Volte na próxima semana.");
}
