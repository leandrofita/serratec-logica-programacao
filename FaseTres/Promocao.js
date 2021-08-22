// É muito comum vermos promoções em mercados e shoppings relacionadas ao valor das compras. Se a Alice fez suas compras em um shopping cuja promoção era que a cada R$ 190,00 em compras ela ganhava um cupom, quantos cupons ela ganhou?


const PROMPT = require("prompt-sync")();
console.clear();

function somenteNumero(numero){
    return (numero === "" || isNaN(numero) || numero == undefined) ? true : false;
}

var qtd;

while (somenteNumero(qtd)) {
    qtd = parseInt(PROMPT("Por favor, informe o valor total das suas compras: "));
}

var resultado = Math.floor(qtd / 190);

console.clear();



if (qtd < 190) {
    if (qtd == 0) {
        console.log(`Obrigado por nos visitar! Volte sempre! :)`);
    }
    else{
        console.log(`Obrigado por comprar conosco! Volte sempre! :)`);
    }
}
else{
    console.log(`Parabéns!!! Você ganhou: ${resultado} cupons.`);
    console.log(`Obrigado por comprar conosco! Volte sempre! :)`);
}