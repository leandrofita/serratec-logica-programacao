// Como o restaurante não faz “Reembolso” de valores inteiros entre 20 e 100 Reais, a recepcionista irá digitar o valor e o sistema preencherá um cupom desconto.
// Reembolso: R$ 33

// :: Restaurante Braya ::
// Cupom desconto para sua próxima visita:
// ** Trinta e Três Reais


const PROMPT = require("prompt-sync")();

var refeicao = parseInt(PROMPT("Informe o valor da refeição: "));

if (refeicao >= 20 && refeicao <= 100) {
    console.log(`Cuporem desconto para a sua próxima visita: R$${refeicao.toFixed(2)}`);
}