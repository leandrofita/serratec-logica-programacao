// Na "Maratona de programação", as duas equipes locais com mais pontos serão classificadas para a etapa nacional. O sistema da competição irá ler o nome e a pontuação de cada time, e depois de todas as entradas, imprimir o “Pódio”. Após a última equipe, vem um nome vazio.


const PROMPT = require("prompt-sync")();

var EQUIPES = [
    {nome: "", pontuacao : 0},
    {nome: "", pontuacao : 0},
]

EQUIPES[0].nome = (PROMPT(`Digite o nome da Primeira Equipe: `)).toString();
EQUIPES[0].pontuacao = parseInt(PROMPT(`Equipe ${EQUIPES[0].nome}, digite sua pontuação: `));

EQUIPES[1].nome = (PROMPT(`Digite o nome da Segunda Equipe: `)).toString();
EQUIPES[1].pontuacao = parseInt(PROMPT(`Equipe ${EQUIPES[1].nome}, digite sua pontuação: `));

EQUIPES.sort((first, second) => (first.pontuacao > second.pontuacao) ? -1 : 1);

for (let index = 0; index < EQUIPES.length; index++) {
    const element = EQUIPES[index];
    
    console.log(`${index+1}º lugar: Equipe ${EQUIPES[index].nome} com ${EQUIPES[index].pontuacao} pontos.`);
}