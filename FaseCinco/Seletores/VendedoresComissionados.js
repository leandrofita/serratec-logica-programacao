// Os "vendedores comissionados" recebem 5% do valor de cada produto vendido. Aqueles que batem a meta de 5 mil em vendas, recebem um adicional de 9% sobre o excedente. Seu programa irá receber o valor total de vendas e emitir o recibo de comissão.
// Vendas totais: 5230.66
// Sua comissão: 261.53
// Valor adicional: 20.76

const PROMPT = require("prompt-sync")();

const COMISSAO = 0.05;
const META = 5000.00;
const ADICIONAL = 0.09;

var totalVendas = 0.00;
var valorExcedente = 0.00;
var suaComissao = 0.00;

console.clear();
console.log("== Vendedores Comissionados == \n");

totalVendas = parseFloat(PROMPT("Digite o valor total das vendas: "));

suaComissao = totalVendas * COMISSAO;

if (totalVendas >= META) {
    valorExcedente = (totalVendas - META) * ADICIONAL;
}

console.log("== Recibo de Comissão == \n");
console.log("Vendas totais:", totalVendas.toFixed(2));
console.log("Sua comissão:", suaComissao.toFixed(2));
console.log("Valor adicional:", valorExcedente.toFixed(2));
