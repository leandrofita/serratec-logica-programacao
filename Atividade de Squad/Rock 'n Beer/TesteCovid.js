  
const prompt = require("prompt-sync")();
const pertungas = [
    "Tosse seca e persistente? ",
    "Febre acima de 38º C? ",
    "Cansaço excessivo? ",
    "Dor muscular? ",
    "Dor de cabeça? ",
];
var testeCovid = true;
var sintomas = [];

console.log("Teste de Covid 19 para retorno às aulas.");
console.log('Digite “S” ou “N” para cada um dos sintomas abaixo:');

pertungas.forEach(pergunta => {
    sintomas.push(prompt(pergunta).toUpperCase());
});

for (let i = 0; i < sintomas.length; i++) {
    const sintoma = sintomas[i];
    
    if (sintoma == 'S') {
        testeCovid = false;
        break;
    }
}

//testeCovid = tosse == "N" &&  febre == "NAO" &&  cansaco == "NAO" && dorCabeca == "NAO" && dorCorpo == "NAO";

if(testeCovid){
    console.log("Retorno autorizado")
}
else{
    console.log("Retorno não autorizado! Procure o atendimento médico mais próximo!")
}