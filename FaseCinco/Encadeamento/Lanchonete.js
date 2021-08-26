// No tablet da lanchonete, o cliente pode escolher dois complementos para o seu lanche. Apenas se marcar algum item de salada, pode também escolher se quer adicionar molho. Ao finalizar, o pedido é enviado para a cozinha.

// :Lanchonete:
// Complementos: Q= queijo, B= bacon, A= alface, T= tomate, P= picles
// Item 1: B
// Item 2: T
// Adicionar molho: Não
// [Cozinha]
// Lanche com Bacon e Tomate, sem molho.

const PROMPT = require("prompt-sync")();

console.log(":Lanchonete:\n");
console.log("Complementos: Q= queijo, B= bacon, A= alface, T= tomate, P= picles\n");
var complementoUm = (PROMPT("Escolha um dos itens acima como primeiro complemento:")).toUpperCase();

//console.log("Complementos: Q= queijo, B= bacon, A= alface, T= tomate, P= picles\n");
var complementoDois = (PROMPT("Agora escolha o segundo complemento:")).toUpperCase();

var molho = "";

function escolherComplemento(complemento, index){
    switch (complemento) {
        case "Q":
        complemento = "Queijo".toUpperCase();
        console.log(`Item ${index}: Queijo`);
        molho = "sem molho";
        return "Queijo";
    
        case "B":
        complemento = "Bacon".toUpperCase();
        console.log(`Item ${index}: Bacon`);
        molho = "sem molho";
        return "Bacon";
    
        case "A":
        complemento = "Alface".toUpperCase();
        console.log(`Item ${index}: Alface`);
        molho = (PROMPT("Adicionar molho? 'S' ou 'N'.")).toUpperCase() == "S" ? "com molho" : "sem molho";
        return "Alface";
    
        case "T":
        complemento = "Tomate".toUpperCase();
        console.log(`Item ${index}: Tomate`);
        molho = (PROMPT("Adicionar molho? 'S' ou 'N'.")).toUpperCase() == "S" ? "com molho" : "sem molho";
        return "Tomate";
        
        case "P":
        complemento = "Picles".toUpperCase();
        console.log(`Item ${index}: Picles`);
        molho = (PROMPT("Adicionar molho? 'S' ou 'N'.")).toUpperCase() == "S" ? "com molho" : "sem molho";
        return "Picles";
    }
}

complementoUm = escolherComplemento(complementoUm, 1);
complementoDois = escolherComplemento(complementoDois, 2);

console.log(`Lanche com ${complementoUm} e ${complementoDois}, ${molho}`);
