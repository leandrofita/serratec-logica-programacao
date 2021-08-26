// No antigo programa “topa tudo por dinheiro”, o Silvio Santos chamava uma moça do auditório para contar os números de 1 a 40, substituindo por “pim” os números com final quatro ou múltiplos de quatro.
// Um, dois, três, pim, cinco, seis..
// Dica: Não é necessário exibir os números por extenso.

const LIMITE = 40;

for (let index = 1; index <= LIMITE; index++) {

    if ((index % 10 == 4) || (index % 4 == 0)) {
        console.log("PIM");   
    }
    else
        console.log(index);
}