// Mesmo com aulas online, os alunos do cursinho continuam sendo avaliados com duas provas, a P1 e a P2, que valem 5 pontos inteiros cada. Pela soma dos pontos, o aluno saberá sua situação na disciplina.
// Reprovado = 0 a 4 |Recuperação = 4 a 6 |Aprovado = 6 a 8 |Destaque = 8 a 10

const PROMPT = require("prompt-sync")();

var p1 = parseInt(PROMPT("Informe sua nota na P1 (0 a 5): "));
var p2 = parseInt(PROMPT("Informe sua nota na P2 (0 a 5): "));

var somaNota = p1 + p2;

console.log(somaNota);

if (somaNota >= 0 && somaNota <= 4) {
    console.log(`Sua nota final foi: ${somaNota}. REPROVADO!`);
} else if (somaNota > 4 && somaNota <= 6) {
    console.log(`Sua nota final foi: ${somaNota}. RECUPERAÇÃO!`);
} else if (somaNota > 6 && somaNota <= 8) {
    console.log(`Sua nota final foi: ${somaNota}. APROVADO!`);
} else if (somaNota > 8 && somaNota <= 10) {
    console.log(`Sua nota final foi: ${somaNota}. DESTAQUE!`);
} else
    console.log("Não foi possível calcular sua nota. Por favor, tente novamente.");