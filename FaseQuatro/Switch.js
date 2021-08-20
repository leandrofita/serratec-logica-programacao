const PROMPT = require("prompt-sync")();

var frutas = ["pitanga","manga","banana","melão","tomate","melancia"];

console.log(`Qual sua fruta predileta?`);

for (let index = 0; index < frutas.length; index++) {
    const element = frutas[index];
    
    //console.log(`${index+1} - ${element}`);
    console.log(element);
}

var favorita = PROMPT("");

switch(favorita)
{
    case "pitanga":
    {
        console.log(`${favorita} também é minha fruta predileta! :)`);
    }
    break;

    case "tomate":
    {
        console.log(`${favorita}? Não viaja! Tomate é aquele primo chato: pertence à família, mas ninguém gosta! :)`);
    }
    break;

    default : 
    {
        console.log(`${favorita} é bom mesmo! :)`);
    }
}