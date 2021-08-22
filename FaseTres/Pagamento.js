// Alice foi até uma loja de eletrônicos e comprou alguns jogos e um videogame novo, pagando R$ 345,00 por todos os jogos e R$ 1.545,00 pelo videogame. Para o pagamento, o sistema irá apresentar 3 opções de parcelamento e o valor de cada parcela: 3 vezes sem juros, 5 vezes sem juros e em 10 vezes com 1,5% de juros sobre o total da compra.


const jogos = 345.00;
const videogame = 1545.00;
const totalCompra = jogos + videogame;
const juros = 1.5;

var parcela3xSemJuros = totalCompra / 3;
var parcela5xSemJuros = totalCompra / 5;
var parcela10xComJuros = (((totalCompra * (juros / 10)) + totalCompra) / 10);

console.clear();
console.log(`Total: R$${jogos + videogame} | Valor da parcela: R$${parcela3xSemJuros} | (3x sem juros)`);
console.log(`Total: R$${jogos + videogame} | Valor da parcela: R$${parcela5xSemJuros} | (5x sem juros)`);
console.log(`Total dos Juros: R$${parcela10xComJuros * 10} | Valor da parcela: R$${parcela10xComJuros} | (10x com juros de ${juros}%)`);