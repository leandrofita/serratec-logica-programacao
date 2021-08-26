const prompt = require("prompt-sync")();

const ANIMAIS = [
  "1 - Cachorro",
  "2 - Gato",
  "3 - Vaca",
  "4 - Galo",
  "5 - Porco",
];

console.log(`Olá. Você já sonhou com animais? Como sou uma IA, eu vivo com a cabeça na nuvem e com usso passam vários animaos na minha cabeça.
 Será que o animal que você sonhou é o mesmo que o meu?
Abaixo teremos uma lista numerada de animais.Escolha um número e vamos brincar!`);

console.log(ANIMAIS);

var numeroUsuario = "";
var animalSorteado = -1;

do {
  
  numeroUsuario = parseInt(prompt("Digite o número do seu animal:  "));
  
  animalSorteado = Math.floor(Math.random() * (ANIMAIS.length));
  
  animalUsuario = ANIMAIS[numeroUsuario];

  console.log("Você escolheu ", animalUsuario, "o sorteado foi", ANIMAIS[animalSorteado]);
  
  var teste = animalSorteado != numeroUsuario;

  if (teste) {
    console.log("Infelizmente nossos sonhos não foram o mesmo... Que pena!");
  } else {
    console.log("Nossa! Nós sonhamos a mesma coisa!");
  }

} while (teste);