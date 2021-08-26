// Os boletos da "Universidade" são emitidos com vencimento no dia 15 do mês. Para os pagamentos recebidos entre os dias 10 a 13, será concedido um desconto na próxima mensalidade. O programa irá receber o número do boleto e o dia do pagamento, e emitir o extrato.

// Dia hoje: 10
// Número do Boleto: 1234
// Dia de pagamento: 11
// Desconto na próxima mensalidade? true

const PROMPT = require("prompt-sync")();
const DATAATUAL = new Date().getDate();

console.log("=== Universidade ===");

var numeroBoleto = PROMPT("Informe o número do boleto: ");
var diaPagamento = PROMPT("Informe o dia do pagamento: ");
var desconto = (diaPagamento >= 10 && diaPagamento <= 13) ? true : false

console.log("\nDia hoje: ", DATAATUAL);
console.log("Número do Boleto: ", numeroBoleto);
console.log("Dia do pagamento: ", diaPagamento);
console.log("Desconto na próxima mensalidade? ", desconto);