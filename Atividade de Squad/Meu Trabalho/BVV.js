// # Serratec
//  * Lógica de Programação - Prof. Moises do Amaral Baddini
//  * Atividade: Elicitação de Requisitos
//  * Squad: Rock n' Beer
//  * Autor (Descrição): Nathan Guimarães
//  * Título: BVV - Bolsa de Valores Virtual 📈
//  * Arquivo: BVV.js
//  * Elaboração do Requsito: 20/08/2021

// ## Descrição:
// A BVV (Bolsa de Valores Virtual) é um sistema de negociação (compra e venda) de ações e controle de carteira do usuário.
// Na entrevista com o cliente, ficou decidido que a primeira versão do sistema deverá conter as seguintes opções e funcionalidades:

// • Informações do Usuário: 
//     Nome do usuário;
//     Carteira de ações do usuário (código, preço e quantidade de cada ação);
    
// • Balcão de Negócios:
//     Comprar ação;
//     Vender ação;
//     Lista das ações disponíveis para negociação (código, preço e quantidade de cada ação disponível para negociação);

// ## Orientações:
// Os códigos de cada ação são representados por três letras maiúsculas seguidas de um número (VALE3, PETR4, ITUB4, ABEV3, MGLU3 etc.);

class Usuario {

    constructor(nome, acoes){
        this.nome = nome;

        this.acoes = [];
        if (acoes != undefined) {
            this.acao.push(acoes);
        }
    }
}

class Acao {

    constructor(cod, qtd, cotacao){
        this.cod = cod;
        this.qtd = qtd;
        this.cotacao = cotacao;
    }
}

const PROMPT = require("prompt-sync")();

const MENSAGENS = {
    boasVindas: "=== Seja bem-vindo a BVV - Bolsa de Valores Virtual ===",
    escolher : "Escolha uma das opções abaixo:",
    cadUsuario: "Olá! Por favor, insira seu nome completo.",
    gerenciamentoCarteira: "=== Visualização de carteira. ===",
    neociacaoAcao: "=== Negociação de Ações. ===",
    comprarAcao: "=== Comprar Ações. ===",
    comprarEfetivada: "=== Compra efetivada com Sucesso! ===",
    vendaEfetivada: "=== Venda efetivada com Sucesso! ===",
    venderAcao: "=== Vender Ações. ===",
    limiteSuperior = "=== Quantidade superior ao limite! ===",
};

const OPCOESMSG = {
    cadastrar: "Cadastrar-se.",
    carteira: "Visualizar carteira de ações.",
    retornarInicio: "Retornar ao menu principal.",
    qualquerTecla: "Pressione qualquer tecla para continuar!",
    negociacao: "Negociar ações.",
    comprar : "Comprar ações",
    vender : "Vender ações",
};

const CODACOES = {
    VALE3: "VALE3",
    PETR4: "PETR4",
    ITUB4: "ITUB4",
    ABEV3: "ABEV3",
    MGLU3: "MGLU3",
}

var acoesDisponiveis = [new Acao(CODACOES.VALE3, randomico(1, 100, false), randomico(1, 100, true)),
                        new Acao(CODACOES.PETR4, randomico(1, 100, false), randomico(1, 100, true)),
                        new Acao(CODACOES.ITUB4, randomico(1, 100, false), randomico(1, 100, true)),
                        new Acao(CODACOES.ABEV3, randomico(1, 100, false), randomico(1, 100, true)),
                        new Acao(CODACOES.MGLU3, randomico(1, 100, false), randomico(1, 100, true))]



function lerEntrada(msg, breakLine, clear){
    exibirMensagem(msg, breakLine, clear);
    return PROMPT("> ");
}

function exibirMensagem(mensagem, space, clear){

    if (clear) {
        console.clear();
    }

    console.log(mensagem);

    if (space) {
        console.log();
    }
}

// Permitir entrada apenas de números.
function somenteNumero(numero, zeroIncluso, limiteOpcoes){
    if (zeroIncluso)
        return (numero === "" || isNaN(numero) || numero == undefined) ? false : true;
    else
        return (numero === "" || numero <= 0 || numero > limiteOpcoes || isNaN(numero) || numero == undefined) ? false : true;
}

function cadastrarUsuario(){
    
    console.clear();
    var nome = lerEntrada(MENSAGENS.cadUsuario, true, false);
    
    if (nome == "") {
        cadastrarUsuario();
    }
    
    usuario.nome = nome;
}

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

function selecaoDeOpcoes(){
    
    var op = lerEntrada("", false, false);

    console.clear();
    switch (op)
    {
        // Gerenciar carteira
        case "1" :
            {
                gerenciarCarteira();
            }
            break;
        
        // Negociar Ações
        case "2" :
            {
                negociarAcao();
            }

        // Início
        default : 
            inicio();
    }
}

function gerenciarCarteira(){

    exibirMensagem(MENSAGENS.gerenciamentoCarteira, true, true);
    exibirMensagem(`Olá, ${usuario.nome}!`, true, false);

    // Apresentar Carteira
    listarAcoes(usuario.acoes);

    var op = lerEntrada(`${usuario.acoes.length + 1} - ${OPCOESMSG.retornarInicio}`, true, false);

    switch (op) {

        // Retornar ao início
        case (usuario.acoes.length + 1).toString():
            inicio();
            break;
    
        default:
            gerenciarCarteira();
            break;
    }
}

function listarAcoes(lista){

    var pos = lista.findIndex(acao => acao.qtd === 0);

    // Deletar quantidades 0
    if (pos != -1) {
        lista.splice(pos, 1);
    }

    for (let i = 0; i < lista.length; i++) {
        const element = lista[i];

        console.log(`${i + 1} - Código: ${element.cod} | Preço: ${element.cotacao} | Quantidade disponível: ${element.qtd}`);        
    }

    console.log("\n");
}

function listarMinhasAcoes(lista){

    var pos = lista.findIndex(acao => acao.qtd === 0);

    // Deletar quantidades 0
    if (pos != -1) {
        lista.splice(pos, 1);
    }

    for (let index = 0; index < lista.length; index++) {
        const element = lista[index];
        
        console.log(`${index + 1} - Código: ${element.cod} | Preço: ${element.cotacao} | Quantidade disponível: ${element.qtd}`);
    }

    console.log("\n");
}

function negociarAcao(){
    
    exibirMensagem(MENSAGENS.neociacaoAcao, true, true);

    exibirMensagem(MENSAGENS.escolher, true, false);

    exibirMensagem(`1 - ${OPCOESMSG.comprar}`, false, false);
    exibirMensagem(`2 - ${OPCOESMSG.vender}`, false, false);
    //exibirMensagem(`3 - ${opcoesMsg.retornarInicio}`, false, false);


    var op = lerEntrada(`3 - ${OPCOESMSG.retornarInicio}`, true, false);

    switch (op) {

        // Comprar Ação
        case '1':
            comprarAcao();
            break;
        
        // Vender Ação
        case '2':
            venderAcao();
            break;
        
        // Retornar ao início
        case '3':
            inicio();
            break;
    
        default:
            negociarAcao();
            break;
    }
}

function efetivaCompra(index, qtd){

    const pos = usuario.acoes.findIndex( acao => acao.cod === acoesDisponiveis[index - 1].cod );

    if (qtd > acoesDisponiveis[index - 1].qtd) {
        console.clear();
        exibirMensagem(MENSAGENS.limiteSuperior, true, true);
        lerEntrada(OPCOESMSG.qualquerTecla, true, false);
        comprarAcao();
    }

    if (pos != -1){
        acoesDisponiveis[index - 1].qtd -= qtd;
        usuario.acoes[pos].qtd += qtd;
    }
    else
    {
        usuario.acoes.push(new Acao(acoesDisponiveis[index - 1].cod, qtd, acoesDisponiveis[index - 1].cotacao))

        acoesDisponiveis[index - 1].qtd -= qtd;
        //usuario.acoes[usuario.acoes.length - 1].qtd = qtd;
    }

    console.clear();
    exibirMensagem(MENSAGENS.comprarEfetivada, true, false);
    
    exibirMensagem("Carteira de Ações: ", true, false);
    listarAcoes(usuario.acoes);

    lerEntrada(OPCOESMSG.qualquerTecla, true, false);
    comprarAcao();
}

function comprarAcao(){
    
    console.clear();
    exibirMensagem(MENSAGENS.comprarAcao, true, true);
    exibirMensagem(MENSAGENS.escolher, true, false);

    // Listar ações disponíveis
    listarAcoes(acoesDisponiveis);
    
    var op = lerEntrada(`${acoesDisponiveis.length + 1} - ${OPCOESMSG.retornarInicio}`, true, false);

    if (isNaN(op) || op == "" || (parseInt(op) <= 0) || (parseInt(op) >= acoesDisponiveis.length + 2) ) {
        comprarAcao();
    }

    if (parseInt(op) == acoesDisponiveis.length + 1) {
        inicio();
    }

    console.log('\nInforme a quantiade desejada!');
    var qtd = parseInt(lerEntrada("", false, false))

    if (isNaN(qtd)) {
        console.log("Quantidade Inválida!");
        lerEntrada("Pressione qualquer tecla para voltar!", true, false);
        comprarAcao();
    }

    // Comprar
    efetivaCompra(op, qtd);
}

function venderAcao(){

    console.clear();
    exibirMensagem(MENSAGENS.venderAcao, true, true);
    exibirMensagem(MENSAGENS.escolher, true, false);

    // Listar ações disponíveis
    listarAcoes(usuario.acoes);

    var op = lerEntrada(`${usuario.acoes.length + 1} - ${OPCOESMSG.retornarInicio}`, true, false);

    if (isNaN(op) || op == "" || (parseInt(op) <= 0) || (parseInt(op) >= usuario.acoes.length + 2) ) {
        venderAcao();
    }

    if (parseInt(op) == usuario.acoes.length + 1) {
        inicio();
    }

    console.log('\nInforme a quantiade desejada!');
    var qtd = parseInt(lerEntrada("", false, false))

    if (isNaN(qtd)) {
        console.log("Quantidade Inválida!");
        lerEntrada("Pressione qualquer tecla para voltar!", true, false);
        venderAcao();
    }

    // Vender
    efetivaVenda(op, qtd);
}

function efetivaVenda(index, qtd){

    // Procura acao pelo código
    const pos = acoesDisponiveis.findIndex( acao => acao.cod === acoesDisponiveis[index - 1].cod );

    if (qtd > usuario.acoes[index - 1].qtd) {
        console.clear();
        exibirMensagem(MENSAGENS.limiteSuperior, true, true);
        lerEntrada("Pressione qualquer tecla para retornar!", true, false);
        venderAcao();
    }

    if (pos != -1){
        usuario.acoes[index - 1].qtd -= qtd;
        console.log(acoesDisponiveis[pos].qtd);
        acoesDisponiveis[pos].qtd += qtd;
        console.log(acoesDisponiveis[pos].qtd);
        PROMPT();
    }
    else
    {
        acoesDisponiveis.push(new Acao(usuario.acoes[index - 1].cod, qtd, usuario.acoes[index - 1].cotacao))
        usuario.acoes[index - 1].qtd -= qtd;
        console.log(acoesDisponiveis[acoesDisponiveis.length-1]);
        PROMPT();
        //acoesDisponiveis[acoesDisponiveis.length-1].qtd = qtd;
    }

    console.clear();
    exibirMensagem(MENSAGENS.vendaEfetivada, true, false);
    
    exibirMensagem("Carteira de Ações: ", true, false);
    listarAcoes(usuario.acoes);

    lerEntrada(OPCOESMSG.qualquerTecla, true, false);
    venderAcao();
}

function inicio(){

    console.clear();

    exibirMensagem(MENSAGENS.boasVindas, true);

    // Novo usuário
    if (usuario.nome == undefined) 
    {
        cadastrarUsuario();
        inicio();
    }
    // 
    else
    {
        exibirMensagem(`Olá, ${usuario.nome}!`, true);

        exibirMensagem(MENSAGENS.escolher, true, false);
        exibirMensagem(`1 - ${OPCOESMSG.carteira}`, false, false);
        exibirMensagem(`2 - ${OPCOESMSG.negociacao}`, false, false);

        selecaoDeOpcoes();
    }
}

var usuario = new Usuario();

inicio();