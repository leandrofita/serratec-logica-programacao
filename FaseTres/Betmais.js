// O sistema “Betmais” organiza as apostas de seus amigos. Você irá solicitar no grupo do Discord, ou whatsapp, que cada amigo lhe fale um número entre 1 e 10. Quando você receber todos os números, então irá criar uma variável e atribuir nela os valores, digitando na seguinte ordem: Os pares são somados, os ímpares subtraídos. O programa irá imprimir o resultado, para você repassar aos amigos.


var numeros = [2,7,8,6,9];

var resultado = 0;

numeros.forEach(element => {
    resultado = element % 2 == 0 ? resultado + element : resultado - element;
});

console.log(`O resultado do sistema Betmais é: ${resultado}`);

