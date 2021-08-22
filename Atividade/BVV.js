class Usuario {

    constructor(nome, acao, carteira){
        this.nome = nome;

        this.carteira = [];
        if (carteira != undefined) {
            this.carteira = carteira;
        }

        this.acao = [];
        if (acao != undefined) {
            this.acao.push(acao);
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

var VALE3 = new Acao(codAcoes.VALE3, randomico(100, false), randomico(100, true));
var PETR4 = new Acao(codAcoes.PETR4, randomico(100, false), randomico(100, true));
var ITUB4 = new Acao(codAcoes.ITUB4, randomico(100, false), randomico(100, true));
var ABEV3 = new Acao(codAcoes.ABEV3, randomico(100, false), randomico(100, true));
var MGLU3 = new Acao(codAcoes.MGLU3, randomico(100, false), randomico(100, true));

var acoesDisponiveis = [new Acao(codAcoes.VALE3, randomico(100, false), randomico(100, true)),
                        new Acao(codAcoes.PETR4, randomico(100, false), randomico(100, true)),
                        new Acao(codAcoes.ITUB4, randomico(100, false), randomico(100, true)),
                        new Acao(codAcoes.ABEV3, randomico(100, false), randomico(100, true)),
                        new Acao(codAcoes.MGLU3, randomico(100, false), randomico(100, true))]


var usuario = new Usuario();

var opcaoSelecionada = 0;


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
    
    opcaoSelecionada = lerEntrada("", false, false);

    console.clear();
    switch (opcaoSelecionada)
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
                //NegociarAcao()
                negociarAcao();
            }

        default : 
            inicio();
    }
}

function gerenciarCarteira(){

    exibirMensagem(mensagens.gerenciamentoCarteira, true, true);

    exibirMensagem(mensagens.escolher, true, false);

    // Apresentar Carteira
    
    if (usuario.acao.length > 0) {
        usuario.acao.forEach((acao) =>{

            if (acao == undefined) {
                //console.log("AQUI!!!", acao);
                //exibirMensagem("NENHUMA AÇÃO!", true, false);
            }
        });
    }

    let op = lerEntrada(`1 - ${opcoesMsg.retornarInicio}`, true, false);

    switch (op) {

        // Retornar ao início
        case '1':
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


    let op = lerEntrada(`3 - ${opcoesMsg.retornarInicio}`, true, false);

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

    const pos = usuario.acao.findIndex( acao => acao.cod === acoesDisponiveis[index - 1].cod );

    if (qtd > acoesDisponiveis[index - 1].qtd) {
        console.clear();
        exibirMensagem("=== Quantidade superior ao limite! ===", true, true);
        lerEntrada("Pressione qualquer tecla para retornar!", true, false);
        comprarAcao();
    }

    if (pos != -1){
        acoesDisponiveis[index - 1].qtd -= qtd;
        usuario.acao[pos].qtd += qtd;
    }
    else
    {
        usuario.acao.push(new Acao(acoesDisponiveis[index - 1].cod, acoesDisponiveis[index - 1].qtd, acoesDisponiveis[index - 1].cotacao))

        acoesDisponiveis[index - 1].qtd -= qtd;

        usuario.acao[usuario.acao.length-1].qtd = qtd;
    }

    console.clear();
    exibirMensagem(mensagens.comprarEfetivada, true, false);
    
    exibirMensagem("Carteira de Ações: ", true, false);
    listarMinhasAcoes(usuario.acao);

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
    let qtd = parseInt(lerEntrada("", false, false))

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

    if ((usuario.acao.length != 0) && usuario.acao[0] != undefined) {
        listarAcoes(usuario.acao);
    }

    let op = lerEntrada(`99 - ${opcoesMsg.retornarInicio}`, true, false);
    switch (op) {

        // Vender Ação
        case '1':
            console.log("VENDENDO");
            //comprarAcao();
            break;
        
        // Retornar ao início
        case '99':
            inicio();            
            break;
    
        default:
            venderAcao();
            break;
    }
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