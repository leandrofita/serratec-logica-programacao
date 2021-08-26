// No sistema “Todas as tabuadas”, o aluno de matemática não precisa escolher o número: As tabuadas entre 2 e 10 serão impressas de uma vez.

const LIMITEINFERIOR = 2
const LIMITESUPERIOR = 10

for (let i = LIMITEINFERIOR; i <= LIMITESUPERIOR; i++) {
    for (let j = 1; j <= LIMITESUPERIOR; j++) {
        console.log(`${i} * ${j} = ${i * j}`);           
    }
    console.log("---");
}