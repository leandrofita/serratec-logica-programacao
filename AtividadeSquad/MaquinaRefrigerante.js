const PROMPT = require("prompt-sync")();

const cedulas = [
    {valor : 2.00.toFixed(2)},
    {valor : 5.00.toFixed(2)},
    {valor : 10.00.toFixed(2)},
    {valor : 20.00.toFixed(2)},
]

const refrigerantes = [
    {nome : "Pepsi", preco : 3.99},
    {nome : "Coca", preco : 6.99},
    {nome : "Guaraná Jesus", preco : 1.99},
    {nome : "Mineirinho", preco : 3.50},
]

var refriIndexSelecionado = 0;
var cedulaIndexSelecionada = 0;
var cedulaValida = false;

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
function somenteNumero(numero, zeroIncluso, lista){
    if (zeroIncluso)
        return (numero === "" || isNaN(numero) || numero == undefined) ? false : true;
    else
        return (numero === "" || numero <= 0 || numero > lista.length || isNaN(numero) || numero == undefined) ? false : true;
}

// Listar refrigerantes
function listarRefrigerantes(){
    for (let index = 0; index < refrigerantes.length; index++) {
        const element = refrigerantes[index];
        console.log(`${index + 1} - ${element.nome} • R$${element.preco}`);
    }
    console.log();
}

// Escolher refrigerante
function escolherRefrigerante(mensagem){
    while (!somenteNumero(refriIndexSelecionado, false, refrigerantes)) {
        exibirMensagem("=== Seja muito bem-vindo à máquina de refrigerantes ===", true, true);
        exibirMensagem(mensagem, true, false);

        listarRefrigerantes();
        refriIndexSelecionado = lerEntrada("", false, false);
    }
    escolherCedula("Escolha uma das cédulas abaixo: ");
}

// Listar cedulas
function listarCedulas(){
    for (let index = 0; index < cedulas.length; index++) {
        const element = cedulas[index];
        console.log(`${index + 1} - R$${element.valor}`);
    }
    console.log();
}

// Verificar validade da cédula
function cedulaSuperior(indexCedula){
    return (cedulas[indexCedula].valor >= refrigerantes[refriIndexSelecionado-1].preco) ? true : false;
}

// Escolher cédula
function escolherCedula(mensagem){
    while (!somenteNumero(cedulaIndexSelecionada, false, cedulas)) {
        
        exibirMensagem("=== Seja muito bem-vindo à máquina de refrigerantes ===", true, true);
        //exibirMensagem("Escolha uma das cédulas abaixo:  ", true, false);    
        exibirMensagem(mensagem, true, false);    
        
        // Exibe refrigerante selecionado
        exibirMensagem(`> Refrigerante: ${refrigerantes[refriIndexSelecionado-1].nome} • R$${refrigerantes[refriIndexSelecionado-1].preco}`, true, false);
        
        listarCedulas();
        cedulaIndexSelecionada = lerEntrada("", false, false);
    }

    // Validar cédula
    validarCedula();
}

// Validar cédula
function validarCedula(){
    
    while(!cedulaValida){
        cedulaValida = cedulaSuperior(cedulaIndexSelecionada-1);

        if (!cedulaValida){
            cedulaIndexSelecionada = 0;
            escolherCedula("Cédula inválida! Escolha uma cédula superior ao valor do refrigerante!");
        }
    }

    var troco = (cedulas[cedulaIndexSelecionada-1].valor - refrigerantes[refriIndexSelecionado-1].preco).toFixed(2);  
    enviarTroco(troco);
}

// Dar troco ao cliente
function enviarTroco(troco){
    exibirMensagem("=== Seja muito bem-vindo à máquina de refrigerantes ===", true, true);
    exibirMensagem(`> Refrigerante: ${refrigerantes[refriIndexSelecionado-1].nome} • R$${refrigerantes[refriIndexSelecionado-1].preco}`, false, false);
    exibirMensagem(`> Cédula: R$${cedulas[cedulaIndexSelecionada-1].valor}`, false, false);
    exibirMensagem(`> Seu troco é: R$${troco}`, true, false);
    exibirMensagem(`Obrigado por comprar conosco!`, true, false);
}

escolherRefrigerante("Escolha um dos refrigerantes abaixo:  ");
