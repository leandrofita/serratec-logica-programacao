// Pessoal, a minha atividade ficou assim : # Serratec
//  * Lógica de Programação - Prof. Moises do Amaral Baddini
//  * Atividade: Elicitação de Requisitos
//  * Squad: Rock n' Beer
//  * Autor (Descrição): Luciana Santos
//  * Título: Banho Business
//  * Arquivo: 
//  * Elaboração do Requisito: 21/08/2021

// ## Descrição: O administrador da Rodoviaria Interestadual Encontro das Águas decidiu cobrar pelo tempo de banho no seu estabelecimento. Crie um simples sistema de vendas e programe o chuveiro para desligar aos 10 minutos de banho;

// ## Dicas:
// • Venda a promoção ao cliente.
// • Use as funções: prompt, switch e if. 
// • Informe o tempo do banho para o cliente. 
// • E desligue o chuveiro.
// O arquivo compartilharemos entre noixx? Se for o caso como faço isso por aqui?

const PROMPT = require("prompt-sync")();
const tempoLimite = 10;
const precoPorMinuto = 1.50.toFixed(2);
const timerFaked = 3;

const mensagens = {
    boasVindas : "=== Rodoviaria Interestadual Encontro das Águas ===",
    boaViagem : "Boa viagem! Não se esqueça de chegar os freios e dirigir com cuidado. :)",
    escolherOpcoes : "Escolha uma das opcoes abaixo: ",
    precoBanho : `> O banho custa R$${precoPorMinuto} por minuto. Máximo de minutos permitido: ${tempoLimite}.`,
    entradaMinutos : "Digite quantos minutos gostaria de comprar?",
    compraEfetivada : "Compra efetivada:",
    ligarChuveiro : "Pressione qualquer tecla para ligar o chuveiro.",
    banhando : "Chuveiro acionado. Apoveite!",
    desativado : "Chuveiro desativado! Obrigado pela preferência e volte sempre! :)",
}

// Exibir mensagens na tela
function exibirMensagem(mensagem, space, clear){
    if (clear) {
        console.clear();
    }

    console.log(mensagem);

    if (space) {
        console.log();
    }
}

// Ler entradas do usuário
function lerEntrada(msg, breakLine, clear){
    exibirMensagem(msg, breakLine, clear);
    return parseInt(PROMPT("> "));
}

// Permitir entrada apenas de números.
function somenteNumero(numero, zeroIncluso, limiteOpcoes){
    if (zeroIncluso)
        return (numero === "" || isNaN(numero) || numero == undefined) ? false : true;
    else
        return (numero === "" || numero <= 0 || numero > limiteOpcoes || isNaN(numero) || numero == undefined) ? false : true;
}

function temporizarBanho(minutosComprados){
    exibirMensagem(mensagens.boasVindas, true, true);
    exibirMensagem(mensagens.banhando, true, false);

    for (let index = minutosComprados; index > 0; index-=timerFaked) {    
        exibirMensagem(`Você tem: ${index} minutos de banho...`);
    } 
    console.log();
    // Fim
    exibirMensagem(mensagens.desativado, true, false);
}

function comprarBanho(minutosComprados){
    exibirMensagem(mensagens.boasVindas, true, true);
    exibirMensagem(mensagens.compraEfetivada, true, false);
    exibirMensagem(`> Banho de ${minutosComprados} minutos - R$${(precoPorMinuto * minutosComprados).toFixed(2)}`, true, false);

    lerEntrada(mensagens.ligarChuveiro,true,false);

    temporizarBanho(minutosComprados);
}

function escolherBanho(){
    var minutosComprados = undefined;

    while (!somenteNumero(minutosComprados, false, tempoLimite)) {
        exibirMensagem(mensagens.boasVindas, true, true);
        exibirMensagem(mensagens.escolherOpcoes, true, false);
        exibirMensagem(mensagens.precoBanho, true, false);
        exibirMensagem(mensagens.entradaMinutos, true, false);

        minutosComprados = lerEntrada("", true, false);
    }

    comprarBanho(minutosComprados);
}

function seguirViagem(){
    exibirMensagem(mensagens.boasVindas, true, true);
    exibirMensagem(mensagens.boaViagem, true, false);
}

function inicio(){
    exibirMensagem(mensagens.boasVindas, true, true);
    exibirMensagem(mensagens.escolherOpcoes, true, false);
    
    exibirMensagem("1 - Comprar banho.", false, false);
    exibirMensagem("2 - Seguir viagem.", true, false);

    var op = lerEntrada("", true, false);

    switch (op) {
        
        // Escolher banho
        case 1:
            escolherBanho();
            break;

        // Seguir Viagem
        case 2:
            seguirViagem();
            break;
            
        // Nenhuma das opções
        default:
            inicio();
            break;
    }
}

// Início
inicio();

