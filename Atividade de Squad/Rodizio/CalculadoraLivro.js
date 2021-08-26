/*Serratec
Lógica de programação - Professor Zepa
Atividade: Elicitação de Requisitos
Squad: DevAneios
Autor: Guilherme Gusman (GG) https://github.com/GGDadnis
Data: 20/08/2021
Calculadora de Páginas de leitura vs. Deadline (prazo final)
O algoritmo proposto deve funcionar da seguinte maneira:
Deve cumprimentar de forma simples o usuário, sem a necessidade de saber quem está sendo saudado.
Perguntar ao usuário que livro ele está lendo, quantas páginas esse livro tem, e em quantos dias ele precisa ler o livro. Com as condições que a quantidade de páginas e dias devem ser 1 ou maior.
Entregar ao usuário o resultado da conta de (páginas / dias) de forma elegante, sem casas decimais e arredondando para cima (ex: 2.4 = 3).
Recomendar ao usuário uma nova leitura para ser realizada após o termino da que ele está iniciando, em caso de:
o livro ter menos de 100 páginas ou igual: A Revolucao dos Bichos e O Alienista.
o livro ter entre 101 e 499 páginas: O Homem Invisivel e Eu, Robo.
o livro ter mais de 500 páginas ou igual: Moby Dick e Duna.
Com as condições que apenas uma recomendação deve ser feita, e o livro respondido pelo usuário não pode ser o mesmo da recomendação.
*/

const prompt = require("prompt-sync")();

console.log("Bem vindo!");

//Entrada
var livro = prompt(
  "Qual o nome do livro que você lerá? (ex: O Senhor do Anéis) "
);

do {
  var numeroPaginas = prompt("Qual o número de páginas o livro possui? (ex: 450) ");
} while (numeroPaginas <= 0);

do {
  var deadline = prompt(
    "Quantos dias faltam para o prazo de leitura? (ex: 5) "
  );
} while (deadline <= 0);

//Processamento
var conta = numeroPaginas / deadline;
var contafinal = Math.ceil(conta); // Próximo inteiro do número. 
console.log(`Você deverá ler ao menos ${contafinal} páginas por dia!`);

//Saída
const mensagem = `Quando você acabar a leitura do ${livro}, recomendo a leitura do `;

//Recomendação abaixo de 100 páginas

if (numeroPaginas <= 100 && livro != "1984")
  console.log(mensagem, "1984 - Owell!");


  if ((numeroPaginas <= 100) && (livro != "O Alienista") && (livro == "1984"))
    console.log(mensagem, "O Alienista - Assis!");

//Recomendação entre 101 e 499 páginas
if (numeroPaginas < 500 && numeroPaginas > 100 && livro != "O Homem Invisivel")
  console.log(mensagem, "O Homem Invisivel - Wells");

  if (
  (numeroPaginas < 500) &&
  (numeroPaginas > 100) &&
  (livro != "Eu, Robo") &&
  (livro == "O Homem Invisivel")
)
  console.log(mensagem, "Eu, Robo - Asimov");

//Recomendação acima de 500 páginas
if (numeroPaginas >= 500 && livro != "Moby Dick")
  console.log(mensagem, "Moby Dick - Melville!");

if (numeroPaginas >= 500 && livro != "Duna" && livro == "Moby Dick")
  console.log(mensagem, "Duna - Herbert");
