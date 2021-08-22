// O sistema “Faço parte” vai te mostrar um histórico da trajetória de nossa cidade. O resultado apresentado na tela será: “Teresópolis tem x anos. Desses, foram y antes de mim. Mas nos últimos z anos ela conta comigo!”. Cada letra maiúscula do texto será uma variável, sendo que “x” e “z” são valores fixos, e “y” irá conter uma expressão.

const anoAtual = new Date().getFullYear();
const nascimentoTeresopolis = new Date(1891);
const nascimentoNathan = new Date(1992);

var idadeTeresopolis = anoAtual - nascimentoTeresopolis;
var idadeNathan = anoAtual - nascimentoNathan;
var semMim = nascimentoNathan - nascimentoTeresopolis;

console.log(`Teresópolis tem ${idadeTeresopolis} anos. Desses, foram ${semMim} antes de mim. Mas nos últimos ${idadeNathan} anos ela conta comigo!`);
