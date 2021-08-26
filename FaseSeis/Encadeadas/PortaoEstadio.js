// No sistema “Portão do estádio” a entrada dos torcedores é controlada de forma organizada e pacífica. O sistema solicita o número do bilhete e direciona o torcedor para a arquibancada. Contudo, se algum mal intencionado furar a fila (indicado por um bilhete com número negativo), a entrada por aquele portão é fechada em definitivo, e todos precisarão ser encaminhados para outro portão.


const PROMPT = require("prompt-sync")();
const ENTRADAS = [
    {nome: "A", aberta: true},
    {nome: "B", aberta: true},
]

var permitirEntrada = -1;

while (ENTRADAS[0].aberta || ENTRADAS[1].aberta) {
    
    numBilhete = parseInt(PROMPT("Informe o número do seu bilhete: "));
    permitirEntrada = parseInt(numBilhete) < 0 ? false : true ;

    if (!permitirEntrada) {
        if (ENTRADAS[0].aberta) {
            ENTRADAS[0].aberta = false;
            console.log(`Bilhere (-1) não existe!!! Fechando portão da entrada ${ENTRADAS[0].nome}.`);
            continue;
        } else {
            ENTRADAS[1].aberta = false;
            console.log(`Bilhere (-1) não existe!!! Fechando portão da entrada ${ENTRADAS[1].nome}.`);
            continue; 
        }
    }

    // A
    if (ENTRADAS[0].aberta) {
        entradas(numBilhete, ENTRADAS[0].nome);
        continue;
    }

    // B
    if (ENTRADAS[1].aberta) {
        entradas(numBilhete, ENTRADAS[1].nome);
        continue;
    }
}

console.log("Todos portões fechados!");

function entradas(numBilhete, entrada){
    console.log(`Entrada ${entrada}: Entrada liberada! Bilhete: ${numBilhete}.`);
}