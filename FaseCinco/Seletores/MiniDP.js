// O “mini DP” aumentou seus cálculos. Agora, considere a jornada de trabalho semanal de um funcionário, que é de 40 horas. O funcionário que trabalhar mais de 40 horas receberá hora extra, cujo cálculo é o valor da hora regular com um acréscimo de 50%. Considerando que o mês possui 4 semanas exatas, e que a entrada de horas será um valor maior que a jornada normal.

// Salário base (valor da hora * horas normais)
// Valor de horas extras
// Valor do desconto para o INSS
// Salário líquido (Salário base + horas extras – desconto INSS)
// Imprimir na tela o contracheque do funcionário.


const PROMPT = require("prompt-sync")();
const JORNADASEMANAL = 40;
const JORNADAMENSAL = JORNADASEMANAL * 4;
const VALORHORA = 25;
const INSS = 0.08;
const HORAEXTRA = 1.5;

console.log("== Mini DP == \n");

var horasTrabalhadas = parseFloat(PROMPT("Informe a quantidade de horas trabalhadas: "));

var salarioBase = horasTrabalhadas * VALORHORA;
console.log("\nSalário base: ", salarioBase);

var valorDescontoInss = salarioBase * INSS;
console.log("Valor do desconto para o INSS: ", valorDescontoInss);

var quantidadeHoraExtra = (horasTrabalhadas - JORNADAMENSAL);
console.log("Quantidade de horas extras: ", quantidadeHoraExtra);

var valorHorasExtras = (quantidadeHoraExtra * VALORHORA) * HORAEXTRA;
console.log("Valor de horas extras: ", valorHorasExtras);

var salarioLiquido = salarioBase + valorHorasExtras - valorDescontoInss;
console.log("Salário líquido: ", salarioLiquido);
