// O sistema "Calendário 2021" permite consultar em qual dia da semana caiu uma data, segundo o mês e dia digitados.
// Mês: 8
// Dia: 3

// O dia 3 de agosto é terça-feira.


// Considere que o calendário gerado é 'fictício'. Portanto, independente do mês digitado, serão utilizadas as datas de agosto. Dica: Observe o dia da semana do primeiro dia do mês.

const PROMPT = require("prompt-sync")();
const DIASSEMANA = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]

var dia;
while (dia == undefined || dia == 0 || dia > 31 || isNaN(dia)) {
    console.clear();
    dia = parseInt(PROMPT("Informe o dia: "));
}
var mes = parseInt(PROMPT("Informe o mês: "));

var calc = ((dia + parseInt((2.6 * 6) - 0.2)) - (2 * 20) + 21 + parseInt(21/4) + parseInt(20/4)) % 7;

console.log(`O dia ${dia} de agosto é ${DIASSEMANA[calc]}`);

