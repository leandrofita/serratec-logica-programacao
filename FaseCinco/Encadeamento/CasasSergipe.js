// A loja “Casas Sergipe” vende os seguintes itens:

// 001 Cadeira simples - R$ 100,00
// 002 Cadeira luxo - R$ 200,00
// 003 Mesa simples - R$ 450,00
// 004 Mesa luxo - R$ 900,00
// 005 Cama - R$ 1500,00

// Quando o vendedor digitar o código do item, o sistema de vendas exibe o nome do produto e o valor de venda.


const PROMPT = require("prompt-sync")();

const ITENS = [
    {nome : "Cadeira simples", preco : 100.00},
    {nome : "Cadeira luxo", preco : 200.00},
    {nome : "Mesa simples", preco : 450.00},
    {nome : "Mesa luxo", preco : 900.00},
    {nome : "Cama", preco : 1500.00},
]
const DESCONTO = 0.05;
var itemIndexSelecionado = 0;

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
function somenteNumero(numero, zeroIncluso, max){
    if (zeroIncluso)
        return (numero === "" || isNaN(numero) || numero == undefined) ? false : true;
    else
        return (numero === "" || numero <= 0 || numero > max || isNaN(numero) || numero == undefined) ? false : true;
}

// Listar refrigerantes
function listarItens(){
    for (let index = 0; index < ITENS.length; index++) {
        const element = ITENS[index];
        console.log(`${index + 1} - ${element.nome} • R$${element.preco}`);
    }
    console.log();
}

// Escolher refrigerante
function escolherItem(mensagem){
    while (!somenteNumero(itemIndexSelecionado, false, ITENS.length)) {
        exibirMensagem("=== Seja muito bem-vindo a Casas Sergipe ===", true, true);
        exibirMensagem(mensagem, true, false);

        listarItens();
        itemIndexSelecionado = lerEntrada("", false, false);
    }

    exibirMensagem(`> Item selecionado: ${ITENS[itemIndexSelecionado-1].nome} • Preço: R$${ITENS[itemIndexSelecionado-1].preco}`, true, false);

    exibirDesconto();
}

function exibirDesconto(){
    
    var op = 0;
    while (!somenteNumero(op, false, 2)) {
        exibirMensagem("=== Seja muito bem-vindo a Casas Sergipe ===", true, true);
        exibirMensagem(`> Item selecionado: ${ITENS[itemIndexSelecionado-1].nome} • Preço: R$${ITENS[itemIndexSelecionado-1].preco}`, true, false);

        exibirMensagem("1 - Exibir desconto.", false, false);
        exibirMensagem("2 - Sair desconto.", true, false);

        op = lerEntrada("", false, false);
    }

    if (op == 1) {
        let descontoAplicado = parseFloat(ITENS[itemIndexSelecionado-1].preco) - (parseFloat(ITENS[itemIndexSelecionado-1].preco) * DESCONTO)
        exibirMensagem(`> Item selecionado: ${ITENS[itemIndexSelecionado-1].nome} • Preço: R$${ITENS[itemIndexSelecionado-1].preco} • Desconto de 5%: R$${descontoAplicado}.`, true, false);
    }
}

escolherItem("Escolha um dos itens abaixo:  ");