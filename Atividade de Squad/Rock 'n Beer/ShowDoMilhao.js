// # Serratec
//  * Lógica de Programação - Prof. Moises do Amaral Baddini
//  * Atividade: Elicitação de Requisitos
//  * Squad: Rock n' Beer
//  * Autor (Descrição): Marcos Vinícius
//  * Título: Jogo do Milhão
//  * Arquivo:
//  * Elaboração do Requisito: 21/08/2021

// ## Descrição:
// No jogo do milhão você deve criar 5 perguntas valendo respectivamente mil, 10 mil, 100 mil, 500 mil e 1 milhão. Cada pergunta deve ter 4 alternativas sendo apenas 1 verdadeira, se você acertar você passa para próxima fase, se errar perde a chance de continuar.

// ## Dicas:
// • Abuse das funções: prompt, switch e if.
// • Esse jogo não precisa de nenhum conhecimento além do que aprendemos.

const PROMPT = require("prompt-sync")();

const MENSAGENS = {
  boasVindas: "===$$$  SHOW DO MILHÃO  $$$===",
  escolherOpcoes: "Escolha uma das apções abaixo: ",
  obrigado: "Obrigado por jogar! :) ",
  mil: "== ACERTOU!!! Você ganhou: R$1.000,00 ==",
  dezMil: "== ACERTOU!!! Você ganhou: R$10.000,00 ==", 
  cemMil: "== ACERTOU!!! Você ganhou: R$100.000,00 ==", 
  quinhentosMil: "== ACERTOU!!! Você ganhou: R$500.000,00 ==", 
  umMilhao: "== ACERTOU!!! ==\n== PARABÉNS! VOCÊ É O MAIS NOVO MILIONÁRIO!!! ==\n== Você ganhou: R$1.000.000,00 ==\n",
};

const QUESTOES = [
  { pergunta: "Qual a capital do Brasil?", resposta: "Brasília" },
  {
    pergunta: "De quem é a famosa frase “Penso, logo existo”?",
    resposta: "Descartes",
  },
  { pergunta: "Qual o menor país do mundo?", resposta: "Vaticano" },
  {
    pergunta: "Quantas casas decimais tem o número pi?",
    resposta: "Infinitas",
  },
  {
    pergunta:
      "Atualmente, quantos elementos químicos a tabela periódica possui?",
    resposta: "118",
  },
];

const RESPOSTAS = [
  ["São Paulo", "Rio de Janeiro", "Belo Horizonte"],
  ["Sócrates", "Platão", "Galileu Galilei"],
  ["Butão", "Mônaco", "Nauru"],
  ["Centenas", "Milhares", "Duas"],
  ["113", "109", "108"],
];

const QTDOPCOES = 4;
var valorFinal = 0.0;

// Exibir mensagens na tela
function exibirMensagem(mensagem, space, clear) {
  if (clear) {
    console.clear();
  }

  console.log(mensagem);

  if (space) {
    console.log();
  }
}

// Ler entradas do usuário
function lerEntrada(msg, breakLine, clear) {
  exibirMensagem(msg, breakLine, clear);
  return parseInt(PROMPT("> "));
}

// Permitir entrada apenas de números.
function somenteNumero(numero, zeroIncluso, limiteOpcoes) {
  if (zeroIncluso)
    return numero === "" || isNaN(numero) || numero == undefined ? false : true;
  else
    return numero === "" ||
      numero <= 0 ||
      numero > limiteOpcoes ||
      isNaN(numero) ||
      numero == undefined
      ? false
      : true;
}

// Sorteia um número
// Parâmetros: min (int) = valor mínimo
//             max (int) = valor máximo
//             decimal (int) = valor decimal
function randomico(min, max, decimal) {
  if (decimal) {
    return (Math.random() * (max - min + 1) + min).toFixed(2);
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Listar opcoes
function listarOpcoes(opcoes) {
  for (let index = 0; index < opcoes.length; index++) {
    const element = opcoes[index];
    console.log(`${index + 1} - ${element}`);
  }
  console.log();
}

function embaralharRespostas(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

function sair() {
  exibirMensagem(MENSAGENS.boasVindas, true, true);
  exibirMensagem(MENSAGENS.obrigado, true, false);
}

function inicio() {
  exibirMensagem(MENSAGENS.boasVindas, true, true);
  exibirMensagem(MENSAGENS.escolherOpcoes, true, false);

  exibirMensagem("1 - Começar.", false, false);
  exibirMensagem("2 - Sair.", true, false);

  var op = lerEntrada("", true, false);

  // Comecar
  if (op == 1) {
    fluxoQuestoes();
  } else sair();
}

function fluxoQuestoes() {
  exibirMensagem(MENSAGENS.boasVindas, true, true);

  var indexQuestao;
  var questoesCopy = QUESTOES;
  var respostasCopy = RESPOSTAS;

  indexQuestao = randomico(0, questoesCopy.length - 1, false);

  // Primeira Pergunta:

  if (perguntarQuestao(indexQuestao, questoesCopy, respostasCopy)) {
    exibirMensagem(MENSAGENS.mil, true, false);

    questoesCopy.splice(indexQuestao, 1);
    respostasCopy.splice(indexQuestao, 1);
    indexQuestao = randomico(0, questoesCopy.length - 1, false);

    // SEGUNDA
    if (perguntarQuestao(indexQuestao, questoesCopy, respostasCopy)) {
      exibirMensagem(MENSAGENS.dezMil, true, false);

      questoesCopy.splice(indexQuestao, 1);
      respostasCopy.splice(indexQuestao, 1);
      indexQuestao = randomico(0, questoesCopy.length - 1, false);

      // TERCEIRA
      if (perguntarQuestao(indexQuestao, questoesCopy, respostasCopy)) {
        exibirMensagem(MENSAGENS.cemMil, true, false);

        questoesCopy.splice(indexQuestao, 1);
        respostasCopy.splice(indexQuestao, 1);
        indexQuestao = randomico(0, questoesCopy.length - 1, false);

        // QUARTA
        if (perguntarQuestao(indexQuestao, questoesCopy, respostasCopy)) {
          exibirMensagem(MENSAGENS.quinhentosMil, true, false);

          questoesCopy.splice(indexQuestao, 1);
          respostasCopy.splice(indexQuestao, 1);
          indexQuestao = randomico(0, questoesCopy.length - 1, false);

          // QUINTA
          if (perguntarQuestao(indexQuestao, questoesCopy, respostasCopy)) {
            exibirMensagem(MENSAGENS.umMilhao, true, false);

            questoesCopy.splice(indexQuestao, 1);
            respostasCopy.splice(indexQuestao, 1);
            indexQuestao = randomico(0, questoesCopy.length - 1, false);
          } else console.log("\n == ERROU!!! Você ganhou: R$500.000,00 ==\n");
        } else console.log("\n == ERROU!!! Você ganhou: R$100.000,00 ==\n");
      } else console.log("\n == ERROU!!! Você ganhou: R$10.000,00 ==\n");
    } else console.log("\n == ERROU!!! Você ganhou: R$1.000,00 ==\n");
  } else console.log("\n == ERROU!!! Tente outra vez. ==\n");
}

function perguntarQuestao(indexQuestao, listaPergunta, listaResposta) {
  var opSelecionada = undefined;

  while (!somenteNumero(opSelecionada, false, QTDOPCOES)) {
    exibirMensagem(MENSAGENS.escolherOpcoes, true, false);
    exibirMensagem(`> ${listaPergunta[indexQuestao].pergunta}`, true, false);

    var alternativas = listaResposta[indexQuestao];
    alternativas.push(listaPergunta[indexQuestao].resposta);
    embaralharRespostas(alternativas);

    listarOpcoes(alternativas);

    opSelecionada = lerEntrada("", true, false);
  }

  if (validarResposta(alternativas[opSelecionada - 1], indexQuestao)) {
    return true;
  } else return false;
}

function validarResposta(resposta, indexRespostaCerta) {
  if (resposta == QUESTOES[indexRespostaCerta].resposta) {
    return true;
  } else return false;
}

// Início
inicio();
