// Na "Maratona de programação", as duas equipes locais com mais pontos serão classificadas para a etapa nacional. O sistema da competição irá ler o nome e a pontuação de cada time, e depois de todas as entradas, imprimir o “Pódio”. Após a última equipe, vem um nome vazio.

const PROMPT = require("prompt-sync")();

var EQUIPES = [
    {nome: "", pontuacao : 0},
]

do {

    console.clear();
    console.log("Digite o nome da equipe ou deixe vazio e pressione enter para proseguir\n");
    var nome = (PROMPT(`Nome da equipe: `)).toString();
    
    if (nome == "") break;

    var pontuacao = parseInt(PROMPT(`Equipe ${nome}, digite sua pontuação: `));

    EQUIPES.splice(0, 0, {nome, pontuacao});
} while (true);

console.clear();
console.log("=== PÓDIO ===\n");
EQUIPES.sort((first, second) => (first.pontuacao > second.pontuacao) ? -1 : 1);
console.log(EQUIPES);