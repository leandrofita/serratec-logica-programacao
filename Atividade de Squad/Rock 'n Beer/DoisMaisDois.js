// # Serratec
//  * Lógica de Programação - Prof. Moises do Amaral Baddini
//  * Atividade: Elicitação de Requisitos
//  * Squad: Rock n' Beer
//  * Autor (Descrição): Matheus R. Andrade
//  * Título: Dois Mais Dois
//  * Arquivo: 
//  * Elaboração do Requisito: 21/08/2021

// ## Descrição:
// O programa "DoisMaisDois" gera números aleatórios até 10 para responder a seguinte questão: "Quanto é a metade de dois mais dois?". Se o programa acertar a resposta, o programador ganha um milhão de reais. Se ele errar, o programador pode tentar novamente.

// ## Dicas:
// • Crie uma função para gerar os números aleatórios.
// • Rode o programa até você se tornar o mais novo milionário do país.

const prompt = require("prompt-sync")();

var random = randomico(1, 10, false);
console.log("Quanto é a metade de 2 + 2? ");

var ganhou;

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

var tentar = true;

while (tentar){
    
    ganhou = randomico(1, 10, false) == 2 ? true : false;

    console.log(ganhou);

    if (ganhou) {
        break;
    }else 
        tentar = prompt("Deseja tentar novamente? 'S' ou 'N' ") == 'S' ? true :  false;
}

if (ganhou){
    console.log("PARABÉNS, VOCÊ GANHOU 1 MILHÃO DE REAIS!!!!!!!!")
}