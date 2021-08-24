// # Serratec - Parque Tecnológico Região Serrana
// ● Lógica de Programação - Prof. Moises do Amaral Baddini
// ● Atividade: Elicitação de Requisitos
// ● Autor (Descrição): Daniel Cesar
// ● Squad de Origem (Requisito): GPS - Group of Programming Students (Squad 1)
// ● Arquivo: signo.js
// ● Data: 22/08/2021
// ## Descrição:
// Solicite o nome e a data de nascimento do usuário. Com essas informações, será gerado o
// signo e uma descrição genérica e aleatória de sua personalidade.

const PROMPT = require("prompt-sync")();

const frases = [
    "Você tem prazer em conquistar as coisas isso é um fato. Porém, é muito comum que depois de cumprir uma missão ela perca completamente a graça.",
    "Você é mais prático do que intelectual, adora uma rotina e aproveita muito bem a vida. Quando precisa mudar algo, essa mudança demora um bom tempo para acontecer.",
    "Você costuma ser carinhoso e generoso. Você se sentem seguro quando encontra pessoas que tem as mesmas ideias.",
    "Você costuma ser emotivo, tem espírito protetor e é simpáticos, mas pode mudar de humor de uma hora para outra.",
    "Generosidade e lealdade são características de pessoas desse signo. Além disso, eles são grandes líderes e não tem medo de enfrentar obstáculos.",
    "Sempre perfeccionista e muito preciso. Geralmente você é muito inteligente e modesto ao mesmo tempo.",
    "Você costuma ser pacífico e sociável, às vezes prefere escolher a imparcialidade, e por isso costuma ser indeciso.",
    "Você quer estar sempre presente nas horas das decisões. Adora se envolver em causas e influenciar os demais.",
    "Você costuma ser muito positivo, sempre busca novos desafios e novas ideias. O único problema é que costuma ser exagerado.",
    "Disciplinado, ambicioso, bom senso de humor e reservado. Costuma ser perfeccionista com suas tarefas.",
    "Para pessoas de seu signo, às vezes é difícil perceber o lado emotivo das coisas, por isso podem parecer indiferentes em momentos de emoção.",
    "Muito sensível e com uma imaginação fértil. Costuma ser amável e adora compaixão, mas odeia ser criticado.",
]

const signos = [
    "Áries",
    "Touro",
    "Gêmeos",
    "Câncer",
    "Leão",
    "Virgem",
    "Libra",
    "Escorpião",
    "Sagitário",
    "Capricórnio",
    "Aquário",
    "Peixes",
]

const signoSorteado = randomico(0, (frases.length - 1) , false);

var dia = "";
var mes = "";

// Sorteia um número 
// Parâmetros: min (int) = valor mínimo
//             max (int) = valor máximo
//             decimal (int) = valor decimal
function randomico(min, max, decimal){
    if (decimal) {
        return ((Math.random() * (max - min + 1)) + min).toFixed(2);
    }

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Permitir entrada apenas de números.
function somenteNumero(numero){
    return (numero === "" || isNaN(numero) || numero == undefined) ? true : false;
}

function testarDia(dia){
    return (dia >= 1 || dia <= 31) ? true : false;
}

function testarMes(mes){
    return (mes >= 1 || mes <= 12) ? true : false;
}

console.clear();
console.log("=== Bem-vindo ao Zodíaco ===\n");

while (somenteNumero(dia) && testarDia(dia)) {
    dia = parseInt(PROMPT("Por favor, digite o dia do seu nascimento: "));
}

console.clear();
console.log("=== Bem-vindo ao Zodíaco ===\n");

while (testarMes(mes) && testarDia(mes)) {
    mes = parseInt(PROMPT("Por favor, digite o mês do seu nascimento: "));
}

console.clear();
console.log("=== Bem-vindo ao Zodíaco ===\n");

// Áries    21 de Março – 20 de Abril
if ((dia >= 21 && mes == 3) || (dia <= 20 && mes == 4))
    console.log(`${signos[0]}: ${frases[signoSorteado]}`);
else
// Touro	21 de Abril - 20 de Maio
if ((dia >= 21 && mes == 4) || (dia <= 20 && mes == 5))
    console.log(`${signos[1]}: ${frases[signoSorteado]}`);
else
// Gêmeos	21 de Maio - 20 de Junho
if ((dia >= 21 && mes == 5) || (dia <= 20 && mes == 6))
    console.log(`${signos[2]}: ${frases[signoSorteado]}`);
else
// Câncer	21 de Junho - 22 de Julho
if ((dia >= 21 && mes == 6) || (dia <= 22 && mes == 7))
    console.log(`${signos[3]}: ${frases[signoSorteado]}`);
else
// Leão	23 de Julho - 22 de Agosto	
if ((dia >= 23 && mes == 7) || (dia <= 22 && mes == 8))
    console.log(`${signos[4]}: ${frases[signoSorteado]}`);
else
// Virgem	23 de Agosto - 22 de Setembro
if ((dia >= 23 && mes == 8) || (dia <= 22 && mes == 9))
    console.log(`${signos[5]}: ${frases[signoSorteado]}`);
else
// Libra	23 de Setembro - 22 de Outubro
if ((dia >= 23 && mes == 9) || (dia <= 22 && mes == 10))
    console.log(`${signos[6]}: ${frases[signoSorteado]}`);
else
// Escorpião	23 de Outubro - 21 Novembro
if ((dia >= 23 && mes == 10) || (dia <= 21 && mes == 11))
    console.log(`${signos[7]}: ${frases[signoSorteado]}`);
else
// Sagitário	22 de Novembro - 21 de Dezembro
if ((dia >= 22 && mes == 11) || (dia <= 21 && mes == 12))
    console.log(`${signos[8]}: ${frases[signoSorteado]}`);
else
// Capricórnio	22 de Dezembro - 19 de Janeiro
if ((dia >= 22 && mes == 12) || (dia <= 19 && mes == 1))
    console.log(`${signos[9]}: ${frases[signoSorteado]}`);
else
// Aquário	20 de Janeiro - 18 de Fevereiro
if ((dia >= 20 && mes == 1) || (dia <= 18 && mes == 2))
    console.log(`${signos[10]}: ${frases[signoSorteado]}`);
else
// Peixes	19 de Fevereiro - 20 de Março
if ((dia >= 19 && mes == 2) || (dia <= 20 && mes == 3))
    console.log(`${signos[11]}: ${frases[signoSorteado]}`);