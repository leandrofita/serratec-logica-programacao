// É considerado “Emancipado” qualquer indivíduo a partir de 21 anos, ou a pessoa do sexo masculino a partir dos 18 anos. Crie um programa para atestar a emancipação do cidadão com base em sua idade no ano atual.

// Sexo: Feminino
// Ano de nascimento: 1999
// Cidadão emancipado? True

const atual = new Date().getFullYear();
const sexo = "feminino";
const nascimento = 1999;
const emancipadoMasc = (atual - nascimento) >= 18;
const emancipadoFem = (atual - nascimento) >= 21;

if (emancipadoFem) {

    console.log(`Sexo: Feminino`);
    console.log(`Ano do nascimento: ${nascimento}`);
    console.log(`Cidadão emancipado? ${emancipadoFem}`);
}
