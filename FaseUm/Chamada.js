//17. O programa “Chamada da sala de aula” irá escrever o (primeiro) nome de todos os seus colegas, 
// em ordem alfabética decrescente. Para ter acesso à lista dos nomes, você pode olhar a listagem 
// da turma no Classroom.
// Dica: Para fazer a ordenação da lista na tela, utilize as teclas de atalho para "mover linhas” no VSCode.

const alunos = ["Nathan Guimarães","Adrian Menezes Da Silva","Andre Luiz Curio Cintra", 
"Andre Ponte Da Silva","Angelita Arruda Sobrinho Zimbrão","Beatriz Neves Nolasco",
"Bruno Oliveira De Paula Salerno Ribeiro","Carlos Alberto Rodrigues","Carolina Tardin", 
"Daniel Cesar da Costa","Diego Dias Faria Da Silva","Eduardo Pina Brigatti","Gilnei Lima Dos Santos",
"Guilherme Ferrreira Gusman","Gustavo Jardim De Barros", "Gustavo Ponte Barbosa", 
"Higor Henrique Dos Santos Nascimento","Karina Leal Da Silva","Leandro Fita","Luana Aquino Da Silva",
"Luciana Evangelista Dos Santos","Luciana Gasparini Moreira Wendling","Marcella Alzuguir",
"Marcos Antonio De Moraes Junior","Marcos Vinicius","Matheus Rodrigues Andrade","Núria Peçanha Barbosa",
"Pedro Henrique Pinto Ricardo", "Pedro Henrique Quaresma Coelho","Rafael Alves","Raquel Nascimento Machado",
"Rodrigo Calmon Nogueira Da Gama Marques Fontes","Rodrigo De Paula Ribeiro","Samuel Miranda Ferreira",
"Vanderson Pereira Da Silva","Victor Hugo de Oliveira Martins","Viviane Dantas Soares"];

console.log(`Existem ${alunos.length} alunos.`);

var primeiroNome = alunos;

for (let index = 0; index < primeiroNome.length; index++) 
{
    //console.log(primeiroNome[index]);

    var separado = primeiroNome[index].split(" ");
    primeiroNome[index] = separado[0];
}

console.log(primeiroNome.sort().reverse());

// var numeros = [2,5,9,6,4,6,8];

// console.log(numeros.sort().reverse());



