// O setor de cobrança irá acertar os pagamentos com os "fornecedores" na próxima sexta-feira. Para valores maiores que mil Reais, o pagamento será em cheque. Os valores baixos serão pagos em dinheiro. Ao receber o valor do pagamento, o sistema irá emitir um relatório.
// Valor: 1202.00
// Pagamento em cheque.
// Valor: 336.00
// Pagamento em dinheiro.

const PROMPT = require("prompt-sync")();

console.log("== Acerto de Contas == \n");

var valor = parseFloat(PROMPT("Informe o valor da cobraça: "));

if (valor > 1000) {
    console.log("Valor: ", valor);
    console.log("Pagamento em cheque.");
} else{
    console.log("Valor: ", valor);
    console.log("Pagamento em dinheiro.");
}

