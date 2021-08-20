var aluno = "";
var presente = aluno != "";

console.log("Aluno está presente?");
console.log(presente);

// Lógicos

// Boolean
var maria = true;
var carol = true;

// Quero saber se AMBOS alunos estão presentes (&&)
var estaoPresentes = maria && carol;
console.log(`Estão presentes? ${estaoPresentes}`);

/*-------------------------------------------------------------*/

// Boolean
var maria = true;
var carol = false;

// Quero saber se QUALQUER aluno está presente (||)
var estaoPresentes = maria || carol;
console.log(`Estão presentes? ${estaoPresentes}`);

/*-------------------------------------------------------------*/

// Boolean
var prof = true;
var serverGalera = !prof;
// Negação da variável boleana (!)
console.log(`Posso entrar no server de geral? ${serverGalera}`);

/*-------------------------------------------------------------*/
