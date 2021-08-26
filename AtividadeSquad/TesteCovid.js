  
const prompt = require("prompt-sync")();

var testeCovid = true;

console.log("Teste de Covid 19 para retorno às aulas.");
console.log('Digite “Sim” ou “Nao” para cada um dos sintomas abaixo listados');

console.log("Tosse seca e persistente? ")
var tosse = prompt("");
tosse = tosse.toUpperCase();

console.log("Febre acima de 38º C? ")
var febre = prompt("");
febre = febre.toUpperCase();


console.log("Cansaço excessivo? ")
var cansaco = prompt("");
cansaco = cansaco.toUpperCase();


console.log("Dor muscular generalizada? ")
var dorCorpo = prompt("");
dorCorpo = dorCorpo.toUpperCase();

console.log("Dor de cabeça? ")
var dorCabeca = prompt("");
dorCabeca = dorCabeca.toUpperCase();

testeCovid = tosse == "NAO" &&  febre == "NAO" &&  cansaco == "NAO" && dorCabeca == "NAO" && dorCorpo == "NAO";

if(testeCovid){
    console.log("Retorno autorizado")
}
else{
    console.log("Retorno não autorizado! Procure o atendimento médico mais próximo!")
}