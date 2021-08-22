// Na gincana de arrecadação de alimentos, as equipes A e B têm uma semana para formar uma pilha com as doações. Sendo que a empresa irá dobrar a quantidade de quilos de feijão arrecadados. Ganha um ponto extra a equipe cuja quantidade de pacotes permitir a montagem de kits com 3 alimentos. O programa “Gincana” irá apurar as quantidades recolhidas e exibir o nome da equipe vencedora.

// : Equipe A
// Pacotes: 37
// Feijão: 7

// : Equipe B
// Pacotes: 21
// Feijão: 15

// [Apuração]
// Equipe A: 51
// Equipe B: 52
// E a vencedora é: Equipe B!

const PROMPT = require("prompt-sync")();
const kit = 3;
console.clear();

function somenteNumero(numero){
    return (numero === "" || isNaN(numero) || numero == undefined) ? true : false;
}

console.log("== [Equipe A] ==\n");
var totalPacotesEquipeA;
while (somenteNumero(totalPacotesEquipeA)) {
    totalPacotesEquipeA = parseInt(PROMPT("Informe o total de pacotes doados: "));
}
var pacotesFeijaoEquipeA;
while (somenteNumero(pacotesFeijaoEquipeA)) {
    pacotesFeijaoEquipeA = parseInt(PROMPT("Agora informe a quantidade de pacotes de feijão doados: "));
}

console.clear();

console.log("== [Equipe B] ==\n");
var totalPacotesEquipeB;
while (somenteNumero(totalPacotesEquipeB)) {
    totalPacotesEquipeB = parseInt(PROMPT("Informe o total de pacotes doados: "));
}
var pacotesFeijaoEquipeB;
while (somenteNumero(pacotesFeijaoEquipeB)) {
    pacotesFeijaoEquipeB = parseInt(PROMPT("Agora informe a quantidade de pacotes de feijão doados: "));
}

console.clear();

console.log("== [Apuração] ==\n");

var totalEquipeA = (totalPacotesEquipeA + pacotesFeijaoEquipeA) % kit == 0 ? totalPacotesEquipeA + pacotesFeijaoEquipeA + 1 : totalPacotesEquipeA + pacotesFeijaoEquipeA;

var totalEquipeB = (totalPacotesEquipeB + pacotesFeijaoEquipeB) % kit == 0 ? totalPacotesEquipeB + pacotesFeijaoEquipeB + 1 : totalPacotesEquipeB + pacotesFeijaoEquipeB;

console.log(`Equipe A: ${totalEquipeA}`);
console.log(`Equipe B: ${totalEquipeB}`);

if (totalEquipeA == totalEquipeB) {

    console.log(`E a vencedora é: Empate!`);
}
else{
    if (totalEquipeA > totalEquipeB) {
        console.log(`A vencedora é: Equipe A`);
    }
    else{
        console.log(`A vencedora é: Equipe B`);
    }
}





