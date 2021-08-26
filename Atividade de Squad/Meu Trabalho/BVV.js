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

const mensagens = {
    boasVindas: "=== Seja bem-vindo a BVV - Bolsa de Valores Virtual ===",
    escolher : "Escolha uma das opções abaixo:",
    cadUsuario: "Olá! Por favor, insira seu nome completo.",
    gerenciamentoCarteira: "=== Visualização de carteira. ===",
    neociacaoAcao: "=== Negociação de Ações. ===",
    comprarAcao: "=== Comprar Ações. ===",
    comprarEfetivada: "=== Compra efetivada com Sucesso! ===",
    vendaEfetivada: "=== Venda efetivada com Sucesso! ===",
    venderAcao: "=== Vender Ações. ===",
};

const opcoesMsg = {
    cadastrar: "Cadastrar-se.",
    carteira: "Visualizar carteira de ações.",
    retornarInicio: "Retornar ao menu principal.",
    negociacao: "Negociar ações.",
    comprar : "Comprar ações",
    vender : "Vender ações",
};

const codAcoes = {
    VALE3: "VALE3",
    PETR4: "PETR4",
    ITUB4: "ITUB4",
    ABEV3: "ABEV3",
    MGLU3: "MGLU3",
}

var acoesDisponiveis = [new Acao(codAcoes.VALE3, randomico(100, false), randomico(100, true)),
                        new Acao(codAcoes.PETR4, randomico(100, false), randomico(100, true)),
                        new Acao(codAcoes.ITUB4, randomico(100, false), randomico(100, true)),
                        new Acao(codAcoes.ABEV3, randomico(100, false), randomico(100, true)),
                        new Acao(codAcoes.MGLU3, randomico(100, false), randomico(100, true))]


var usuario = new Usuario();


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
    var nome = lerEntrada(mensagens.cadUsuario, true, false);
    
    if (nome == "") {
        cadastrarUsuario();
    }
    
    usuario.nome = nome;
}

function randomico(max, decimal){

    if (decimal) {
        return (Math.random() * max + 1).toFixed(2);
    }

    return (Math.floor(Math.random() * max + 1));
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

    exibirMensagem(mensagens.gerenciamentoCarteira, true, true);
    exibirMensagem(`Olá, ${usuario.nome}!`, true, false);

    // Apresentar Carteira
    listarAcoes(usuario.acoes);

    var op = lerEntrada(`${usuario.acoes.length + 1} - ${opcoesMsg.retornarInicio}`, true, false);

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
    
    exibirMensagem(mensagens.neociacaoAcao, true, true);

    exibirMensagem(mensagens.escolher, true, false);

    exibirMensagem(`1 - ${opcoesMsg.comprar}`, false, false);
    exibirMensagem(`2 - ${opcoesMsg.vender}`, false, false);
    //exibirMensagem(`3 - ${opcoesMsg.retornarInicio}`, false, false);


    var op = lerEntrada(`3 - ${opcoesMsg.retornarInicio}`, true, false);

    switch (op) {

        // Comprar Ação
        case '1':
            console.log("COMPRANDO");
            comprarAcao();
            break;
        
        // Vender Ação
        case '2':
            console.log("VENDENDO");
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
        exibirMensagem("=== Quantidade superior ao limite! ===", true, true);
        lerEntrada("Pressione qualquer tecla para retornar!", true, false);
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
    exibirMensagem(mensagens.comprarEfetivada, true, false);
    
    exibirMensagem("Carteira de Ações: ", true, false);
    listarAcoes(usuario.acoes);

    lerEntrada("Pressione qualquer tecla para continuar!", true, false);
    comprarAcao();
}

function comprarAcao(){
    
    console.clear();
    exibirMensagem(mensagens.comprarAcao, true, true);
    exibirMensagem(mensagens.escolher, true, false);

    // Listar ações disponíveis
    listarAcoes(acoesDisponiveis);
    
    var op = lerEntrada(`${acoesDisponiveis.length + 1} - ${opcoesMsg.retornarInicio}`, true, false);

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
    exibirMensagem(mensagens.venderAcao, true, true);
    exibirMensagem(mensagens.escolher, true, false);

    // Listar ações disponíveis
    listarAcoes(usuario.acoes);

    var op = lerEntrada(`${usuario.acoes.length + 1} - ${opcoesMsg.retornarInicio}`, true, false);

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
        exibirMensagem("=== Quantidade superior ao limite! ===", true, true);
        lerEntrada("Pressione qualquer tecla para retornar!", true, false);
        venderAcao();
    }

    if (pos != -1){
        usuario.acoes[index - 1].qtd -= qtd;
        acoesDisponiveis[pos].qtd += qtd;
    }
    else
    {
        acoesDisponiveis.push(new Acao(usuario.acoes[index - 1].cod, qtd, usuario.acoes[index - 1].cotacao))
        usuario.acoes[index - 1].qtd -= qtd;
        //acoesDisponiveis[acoesDisponiveis.length-1].qtd = qtd;
    }

    console.clear();
    exibirMensagem(mensagens.vendaEfetivada, true, false);
    
    exibirMensagem("Carteira de Ações: ", true, false);
    listarAcoes(usuario.acoes);

    lerEntrada("Pressione qualquer tecla para continuar!", true, false);
    venderAcao();
}

function inicio(){

    console.clear();

    exibirMensagem(mensagens.boasVindas, true);

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

        exibirMensagem(mensagens.escolher, true, false);
        exibirMensagem(`1 - ${opcoesMsg.carteira}`, false, false);
        exibirMensagem(`2 - ${opcoesMsg.negociacao}`, false, false);

        selecaoDeOpcoes();
    }
}

inicio();