const PROMPT = require("prompt-sync")();

var uf = PROMPT("Qual a sigla da UF de onde você mora?");

switch(uf)
{
    case "RJ", "rj":
    {
        console.log(`Perdeu, PlayBoy! Passe a carteira!`);
    }
    break;

    case "MG", "mg":
    {
        console.log(`Uai! Vai um paozin de queij com um cafezin?`);
    }
    break;

    default : 
    {
        console.log(`Tmj!`);
    }
}