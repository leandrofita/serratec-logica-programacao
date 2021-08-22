// O astrólogo que escreveu o sistema “Zodíaco” acredita que os nascidos sob o signo de Aquário são mais inteligentes que os demais.

// 21 de janeiro a 19 de fevereiro

// Mês do seu nascimento: 01
// Dia do aniversário: 25
// Você é inteligente? True!


const mes = 01;
const dia = 25;
const inteligente = (dia >= 21 && ( mes == "01" || mes == "02")) || (dia <= 19 && ( mes == "01" || mes == "02"));

console.log(`Mês do seu nascimento: ${mes}`);
console.log(`Dia do aniversário: ${dia}`);
console.log(`Você é inteligente? ${inteligente}`);

