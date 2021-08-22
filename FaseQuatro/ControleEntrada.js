// O aplicativo na entrada da loja possui internamente um limite de pessoas que podem estar dentro do estabelecimento ao mesmo tempo. Toda vez que um cliente quiser entrar, o segurança irá preencher a quantidade de pessoas já na loja, e o programa avisará se o cliente pode prosseguir.


const limite = 8;

const PROMPT = require("prompt-sync")();
const dia = parseInt(String(new Date().getDate()).padStart(2, '0'));


function somenteNumero(numero){
    return (numero === "" || isNaN(numero) || numero == undefined) ? true : false;
}

var quantidade;
while (somenteNumero(quantidade)) {
    quantidade = parseInt(PROMPT("Digite o número de pessoas na loja: "));
}

if (quantidade < limite) {
    console.log(`Seja muito bem-vindo!`);
}
else{
    console.log(`A loja atingiu o limite de ${quantidade} pessoas. Por favor, aguarde até que alguém saia. Obrigado!`);
}