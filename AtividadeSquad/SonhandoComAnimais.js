const prompt = require("prompt-sync")();
var animais = [
  "1 Cachorro",
  "2 Gato",
  "3 Rato",
  "4 Tartaruga",
  "5 Papagaio",
  "6 Borboleta",
  "7 Panda",
  "8 Jaguatirica",
  "9 Porco",
  "10 Vaca",
  "11 Galo",
];
console.log(`Olá. Você já sonhou com animais? Como sou uma IA, eu vivo com a cabeça na nuvem e com usso passam vários animaos na minha cabeça.
 Será que o animal que você sonhou é o mesmo que o meu?
Abaixo teremos uma lista numerada de animais.Escolha um número e vamos brincar!`);

console.log(animais);

do {
  var numeroUsuario = prompt("Escolha o seu numero:  ");
  numeroUsuario = numeroUsuario -1;
  var animalSorteado = Math.random() * 10 + 1;
  animalSorteado = Math.floor(animalSorteado);
  var nomesorteado = animais[animalSorteado];
  var animalUsuario = animais[numeroUsuario];
  console.log("Você escolheu ", animalUsuario, "o sorteado foi", nomesorteado);
  var teste = animalSorteado != numeroUsuario;

  if (teste) {
    console.log("Infelizmente nossos sonhos não foram o mesmo... Que pena!");
  } else {
    console.log("Nossa! Nós sonhamos a mesma coisa!");
  }
} while (teste);